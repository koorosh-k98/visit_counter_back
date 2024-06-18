import { Client } from 'node-appwrite';


import admin from "firebase-admin";
import { initializeApp } from "firebase-admin/app";

const visitCounterCollection = 'VisitCounter';
const usernameField = "Username";



const configs = {
  type: process.env.type,
  projectId: process.env.project_id,
  privateKeyId: process.env.private_key_id,
  privateKey: process.env.private_key,
  clientEmail: process.env.client_email,
  clientId: process.env.client_id,
  authUri: process.env.auth_uri,
  tokenUri: process.env.token_uri,
  authProviderX509CertUrl: process.env.auth_provider_x509_cert_url,
  clientC509CertUrl: process.env.client_x509_cert_url,
  universe_domain: process.env.universe_domain
}


initializeApp({ credential: admin.credential.cert(configs) });

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const delay = (delayInms) => {
  return new Promise(resolve => setTimeout(resolve, delayInms));
}

const icons = [

  `<g fill="#000000"><path d="M8 12c-1.01 0-1.782-.504-2.267-.945a4.72 4.72 0 01-.564-.614 3.31 3.31 0 01-.212-.305.75.75 0 011.284-.775 3.214 3.214 0 00.5.584c.341.31.769.555 1.259.555.49 0 .918-.246 1.258-.555a3.214 3.214 0 00.5-.584.75.75 0 011.285.775l-.212.305c-.128.167-.317.39-.564.614C9.782 11.495 9.01 12 8 12zM5 6a1 1 0 011-1h.007a1 1 0 010 2H6a1 1 0 01-1-1zM10 5a1 1 0 100 2h.007a1 1 0 100-2H10z"/><path fill-rule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z" clip-rule="evenodd"/></g>`,

];

const colors = [
  "#F44336FF",
  "#4CAF50FF",
  "#2196F3FF",
  "#E91E63FF",
  "#FFC107FF"
];




export default async ({ req, res }) => {
const username = req.query.username;
  if (username == null) {
    return res.send("Username is null!");
  }


  let delayres = await delay(3000);


  const uniqueParam = new Date().getTime();

  const snapshot = await admin.firestore().collection(visitCounterCollection)
    .where(usernameField, "==", username)
    .get();



  var count = 0;
  var label = "Profile Views";
  var iconIndex = 0;
  var colorIndex = 0;
  if (snapshot != null && snapshot.docs != null && snapshot.docs.length > 0) {
    snapshot.forEach(async doc => {
      const data = doc.data()
      count = data["Count"];
      label = data["Label"];
      iconIndex = (data["IconIndex"] != null && data["IconIndex"] < icons.length) ? data["IconIndex"] : randomInteger(0, icons.length - 1);
      colorIndex = (data["ColorIndex"] != null && data["ColorIndex"] < colors.length) ? data["ColorIndex"] : randomInteger(0, colors.length - 1);

      await doc.ref
        .update({ "Count": ++count })
        .timeout(2000);
    });
  }

  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="147.6px" height="23px" fill="none">
<foreignObject width="147.6px" height="23px">
<div xmlns="http://www.w3.org/1999/xhtml">
<style>
.pill{
    display: flex;
    background-color: transparent;
    width: max-content;
    font-family: 'Open Sans', sans-serif;
    border-radius: 4px;
}
.pillLabel{
    display: flex;
    width: max-content;
    padding: 4px;
    padding-left: 8px;
    padding-right: 8px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    font-size: 12px;
    color: rgb(49 46 129);
    background-color: ${colors[colorIndex]};
}
.pillIcon{
  margin-right: 4px;
  width: 14px;
  height: 14px;
}
.pillCount{
    color: rgb(49 46 129);
    background-color: rgb(199 210 254);
    width: max-content;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    padding: 4px;
    padding-left: 8px;
    padding-right: 8px;
    letter-spacing: 1px;
    font-size: 12px;
}

@keyframes heartbeat {
  0% {
      transform: scale(1);
  }
  25% {
      transform: scale(1.1);
  }
  40% {
      transform: scale(1);
  }
  60% {
      transform: scale(1.1);
  }
  100% {
      transform: scale(1);
  }
}

.heartbeat {
  display: inline-block;
  animation: heartbeat 1.5s infinite;
  transform-origin: center;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  backface-visibility: hidden;
  will-change: transform;
}

</style>
<div class="pill">
<span class="pillLabel">
<svg xmlns="http://www.w3.org/2000/svg" class="pillIcon heartbeat" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  ${icons[iconIndex]}  
</svg>
${label} ${uniqueParam}</span>
<span class="pillCount"> ${count} </span>
</div>
</div>
</foreignObject>
</svg>
`;


  return res.send(svgContent, 200, {
    "content-type": "image/svg+xml",
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0',
  });

};
