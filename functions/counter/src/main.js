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
  

initializeApp({credential: admin.credential.cert( configs )});
console.log(configs);

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const icons = [
  '<path name="default" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />',
  '<path name="default" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />',
  '<path name="default" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0c-.1 0-.2 0-.3 0c-96.8-.2-175.2-78.9-175.2-176c0-54.8 24.9-103.7 64.1-136c1-.9 2.1-1.7 3.2-2.6c4-3.2 8.2-6.2 12.5-9c3.1-2 6.3-4 9.6-5.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.5-.1-8.2-.1c-3.3 0-6.5 .1-9.8 .2c-2.3 .1-4.6 .2-6.9 .4z" />',
  '<path name="default" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M375.7 19.7c-1.5-8-6.9-14.7-14.4-17.8s-16.1-2.2-22.8 2.4L256 61.1 173.5 4.2c-6.7-4.6-15.3-5.5-22.8-2.4s-12.9 9.8-14.4 17.8l-18.1 98.5L19.7 136.3c-8 1.5-14.7 6.9-17.8 14.4s-2.2 16.1 2.4 22.8L61.1 256 4.2 338.5c-4.6 6.7-5.5 15.3-2.4 22.8s9.8 13 17.8 14.4l98.5 18.1 18.1 98.5c1.5 8 6.9 14.7 14.4 17.8s16.1 2.2 22.8-2.4L256 450.9l82.5 56.9c6.7 4.6 15.3 5.5 22.8 2.4s12.9-9.8 14.4-17.8l18.1-98.5 98.5-18.1c8-1.5 14.7-6.9 17.8-14.4s2.2-16.1-2.4-22.8L450.9 256l56.9-82.5c4.6-6.7 5.5-15.3 2.4-22.8s-9.8-12.9-17.8-14.4l-98.5-18.1L375.7 19.7zM269.6 110l65.6-45.2 14.4 78.3c1.8 9.8 9.5 17.5 19.3 19.3l78.3 14.4L402 242.4c-5.7 8.2-5.7 19 0 27.2l45.2 65.6-78.3 14.4c-9.8 1.8-17.5 9.5-19.3 19.3l-14.4 78.3L269.6 402c-8.2-5.7-19-5.7-27.2 0l-65.6 45.2-14.4-78.3c-1.8-9.8-9.5-17.5-19.3-19.3L64.8 335.2 110 269.6c5.7-8.2 5.7-19 0-27.2L64.8 176.8l78.3-14.4c9.8-1.8 17.5-9.5 19.3-19.3l14.4-78.3L242.4 110c8.2 5.7 19 5.7 27.2 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM192 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />',
  '<path name="default" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z" />',
  '<path name="default" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />',
  '<path name="default" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M247.5 25.4c-13.5 3.3-26.4 7.2-38.6 11.7C142.9 61.6 96.7 103.6 66 153.6c-18.3 29.8-30.9 62.3-39.2 95.4L264.5 486.6c13.5-3.3 26.4-7.2 38.6-11.7c66-24.5 112.2-66.5 142.9-116.5c18.3-29.8 30.9-62.3 39.1-95.3L247.5 25.4zM495.2 205.3c6.1-56.8 1.4-112.2-7.7-156.4c-2.7-12.9-13-22.9-26.1-25.1c-58.2-9.7-109.9-12-155.6-7.9L495.2 205.3zM206.1 496L16.8 306.7c-6.1 56.8-1.4 112.2 7.7 156.4c2.7 12.9 13 22.9 26.1 25.1c58.2 9.7 109.9 12 155.6 7.9zm54.6-331.3c6.2-6.2 16.4-6.2 22.6 0l64 64c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-64-64c-6.2-6.2-6.2-16.4 0-22.6zm-48 48c6.2-6.2 16.4-6.2 22.6 0l64 64c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-64-64c-6.2-6.2-6.2-16.4 0-22.6zm-48 48c6.2-6.2 16.4-6.2 22.6 0l64 64c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-64-64c-6.2-6.2-6.2-16.4 0-22.6z" />',
  '<path name="default" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M417.3 360.1l-71.6-4.8c-5.2-.3-10.3 1.1-14.5 4.2s-7.2 7.4-8.4 12.5l-17.6 69.6C289.5 445.8 273 448 256 448s-33.5-2.2-49.2-6.4L189.2 372c-1.3-5-4.3-9.4-8.4-12.5s-9.3-4.5-14.5-4.2l-71.6 4.8c-17.6-27.2-28.5-59.2-30.4-93.6L125 228.3c4.4-2.8 7.6-7 9.2-11.9s1.4-10.2-.5-15l-26.7-66.6C128 109.2 155.3 89 186.7 76.9l55.2 46c4 3.3 9 5.1 14.1 5.1s10.2-1.8 14.1-5.1l55.2-46c31.3 12.1 58.7 32.3 79.6 57.9l-26.7 66.6c-1.9 4.8-2.1 10.1-.5 15s4.9 9.1 9.2 11.9l60.7 38.2c-1.9 34.4-12.8 66.4-30.4 93.6zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm14.1-325.7c-8.4-6.1-19.8-6.1-28.2 0L194 221c-8.4 6.1-11.9 16.9-8.7 26.8l18.3 56.3c3.2 9.9 12.4 16.6 22.8 16.6h59.2c10.4 0 19.6-6.7 22.8-16.6l18.3-56.3c3.2-9.9-.3-20.7-8.7-26.8l-47.9-34.8z" />',
  '<path name="default" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M32 160a64 64 0 1 0 128 0A64 64 0 1 0 32 160zM80 334.1C62.8 349 41 360.8 18.8 365.8C5.9 368.7-2.3 381.5 .6 394.5s15.7 21.1 28.7 18.2C58 406.2 81.6 392.2 96 382.2c28.1 19.5 61.4 33.8 96 33.8s67.9-14.3 96-33.8c28.1 19.5 61.4 33.8 96 33.8s67.9-14.3 96-33.8c14.4 10 38 24 66.7 30.4c12.9 2.9 25.8-5.2 28.7-18.2s-5.2-25.8-18.2-28.7c-22-4.9-44.3-16.7-61.3-31.8c-9.1-8.1-22.8-8.1-31.9 0c-21.6 18.6-51.2 33.9-80 33.9s-58.5-15.3-80-33.9c-9.1-8.1-22.8-8.1-31.9 0c-21.5 18.6-51.2 33.9-80 33.9s-58.5-15.3-80-33.9c-9.1-8.1-22.8-8.1-31.9 0zM256.5 193.9L403 318.1c13.8-3.2 27.9-9.6 40.2-18c2.4-1.7 4.9-3.2 7.5-4.5L295.9 164.3C319.7 151.4 347 144 376 144h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376c-119.3 0-216 96.7-216 216v2.2c10.8 4 21.9 6.2 32 6.2c5.4 0 10.7-.5 16-1.6V312c0-46.1 18.5-87.8 48.5-118.1z" />',
  '<path name="default" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M320 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM125.7 175.5c9.9-9.9 23.4-15.5 37.5-15.5c1.9 0 3.8 .1 5.6 .3L137.6 254c-9.3 28 1.7 58.8 26.8 74.5l86.2 53.9-25.4 88.8c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l28.7-100.4c5.9-20.6-2.6-42.6-20.7-53.9L238 299l30.9-82.4 5.1 12.3C289 264.7 323.9 288 362.7 288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H362.7c-12.9 0-24.6-7.8-29.5-19.7l-6.3-15c-14.6-35.1-44.1-61.9-80.5-73.1l-48.7-15c-11.1-3.4-22.7-5.2-34.4-5.2c-31 0-60.8 12.3-82.7 34.3L57.4 153.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l23.1-23.1zM91.2 352H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h69.6c19 0 36.2-11.2 43.9-28.5L157 361.6l-9.5-6c-17.5-10.9-30.5-26.8-37.9-44.9L91.2 352z" />',
  '<path name="default" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M400 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm27.2 64l-61.8-48.8c-17.3-13.6-41.7-13.8-59.1-.3l-83.1 64.2c-30.7 23.8-28.5 70.8 4.3 91.6L288 305.1V416c0 17.7 14.3 32 32 32s32-14.3 32-32V288c0-10.7-5.3-20.7-14.2-26.6L295 232.9l60.3-48.5L396 217c5.7 4.5 12.7 7 20 7h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H427.2zM56 384a72 72 0 1 1 144 0A72 72 0 1 1 56 384zm200 0A128 128 0 1 0 0 384a128 128 0 1 0 256 0zm184 0a72 72 0 1 1 144 0 72 72 0 1 1 -144 0zm200 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" />',
  '<path name="default" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M352 64A64 64 0 1 0 224 64a64 64 0 1 0 128 0zM232.7 264l22.9 31.5c6.5 8.9 16.3 14.7 27.2 16.1s21.9-1.7 30.4-8.7l88-72c17.1-14 19.6-39.2 5.6-56.3s-39.2-19.6-56.3-5.6l-55.2 45.2-26.2-36C253.6 156.7 228.6 144 202 144c-30.9 0-59.2 17.1-73.6 44.4L79.8 280.9c-20.2 38.5-9.4 85.9 25.6 111.8L158.6 432H72c-22.1 0-40 17.9-40 40s17.9 40 40 40H280c17.3 0 32.6-11.1 38-27.5s-.3-34.4-14.2-44.7L187.7 354l45-90z" />'
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

  console.log("username: "+username);

  const snapshot = await admin.firestore().collection(visitCounterCollection)
    .where(usernameField, "==", username)
    .get();

  console.log(snapshot.docs);

  var count = 1;
  var label = "Profile Views";
  var iconIndex = 1;
  var colorIndex = 1;
  if (snapshot != null && snapshot.docs != null && snapshot.docs.length > 0) {
    snapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
    });
    const data = snapshot.docs.first.data();
    count = data["Count"];
    label = data["Label"];
    iconIndex = (data["IconIndex"] != null && data["IconIndex"] < icons.length) ? data["IconIndex"] : randomInteger(0, icons.length);
    colorIndex = (data["ColorIndex"] != null && data["ColorIndex"] < colors.length) ? data["ColorIndex"] : randomInteger(0, colors.length);

    await snapshot.docs.first.reference
      .set({ "Count": ++count })
      .timeout(2000);
  }

  console.log(count);
  console.log(label);
  console.log(iconIndex);
  console.log(colorIndex);

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
    color: rgb(254 202 202);
    background-color: ${colors[colorIndex]};
}
.pillIcon{
  margin-right: 4px;
  width: 14px;
  height: 14px;
}
.pillCount{
    color: ${colors[colorIndex]};
    background-color: rgb(254 202 202);
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
    "content-type": "image/svg+xml"
  });

};
