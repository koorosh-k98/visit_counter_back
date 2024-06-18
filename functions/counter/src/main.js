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

const icons = [


  `<g id="smile" fill="#000000"><path d="M12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 Z M16,13 C16,15.209139 14.209139,17 12,17 C9.790861,17 8,15.209139 8,13 L16,13 Z M12,20 C16.418278,20 20,16.418278 20,12 C20,7.581722 16.418278,4 12,4 C7.581722,4 4,7.581722 4,12 C4,16.418278 7.581722,20 12,20 Z M9.5,11 C10.3284271,11 11,10.3284271 11,9.5 C11,8.67157288 10.3284271,8 9.5,8 C8.67157288,8 8,8.67157288 8,9.5 C8,10.3284271 8.67157288,11 9.5,11 Z M14.5,11 C15.3284271,11 16,10.3284271 16,9.5 C16,8.67157288 15.3284271,8 14.5,8 C13.6715729,8 13,8.67157288 13,9.5 C13,10.3284271 13.6715729,11 14.5,11 Z" id="Shape"></path></g>`,
  `<path d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
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
${label}</span>
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
