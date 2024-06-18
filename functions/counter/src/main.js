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
  `<path d="M19.9001 2.30719C19.7392 1.8976 19.1616 1.8976 19.0007 2.30719L18.5703 3.40247C18.5212 3.52752 18.4226 3.62651 18.298 3.67583L17.2067 4.1078C16.7986 4.26934 16.7986 4.849 17.2067 5.01054L18.298 5.44252C18.4226 5.49184 18.5212 5.59082 18.5703 5.71587L19.0007 6.81115C19.1616 7.22074 19.7392 7.22074 19.9001 6.81116L20.3305 5.71587C20.3796 5.59082 20.4782 5.49184 20.6028 5.44252L21.6941 5.01054C22.1022 4.849 22.1022 4.26934 21.6941 4.1078L20.6028 3.67583C20.4782 3.62651 20.3796 3.52752 20.3305 3.40247L19.9001 2.30719Z" fill="#1C274C"/><path d="M16.0328 8.12967C15.8718 7.72009 15.2943 7.72009 15.1333 8.12967L14.9764 8.52902C14.9273 8.65407 14.8287 8.75305 14.7041 8.80237L14.3062 8.95987C13.8981 9.12141 13.8981 9.70107 14.3062 9.86261L14.7041 10.0201C14.8287 10.0694 14.9273 10.1684 14.9764 10.2935L15.1333 10.6928C15.2943 11.1024 15.8718 11.1024 16.0328 10.6928L16.1897 10.2935C16.2388 10.1684 16.3374 10.0694 16.462 10.0201L16.8599 9.86261C17.268 9.70107 17.268 9.12141 16.8599 8.95987L16.462 8.80237C16.3374 8.75305 16.2388 8.65407 16.1897 8.52902L16.0328 8.12967Z" fill="#1C274C"/><path d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#1C274C"/>`,
  `<path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
  `<path d="M24.26,20.34c0,3.42-2.423,6.342-6.845,7.111v3.92h-3.768v-3.648c-2.578-0.117-5.076-0.811-6.537-1.654l1.154-4.5 c1.615,0.886,3.883,1.693,6.383,1.693c2.191,0,3.691-0.848,3.691-2.385c0-1.461-1.23-2.389-4.077-3.348 c-4.112-1.385-6.921-3.306-6.921-7.033c0-3.386,2.385-6.035,6.499-6.845V0h3.767v3.383c2.576,0.115,4.309,0.652,5.576,1.268 l-1.115,4.348C21.07,8.575,19.3,7.688,16.531,7.688c-2.5,0-3.307,1.076-3.307,2.154c0,1.268,1.346,2.074,4.613,3.307 C22.416,14.762,24.26,16.877,24.26,20.34z"/>`,
  `<path d="M3 8L5.72187 10.2682C5.90158 10.418 6.12811 10.5 6.36205 10.5H17.6379C17.8719 10.5 18.0984 10.418 18.2781 10.2682L21 8M6.5 14H6.51M17.5 14H17.51M8.16065 4.5H15.8394C16.5571 4.5 17.2198 4.88457 17.5758 5.50772L20.473 10.5777C20.8183 11.1821 21 11.8661 21 12.5623V18.5C21 19.0523 20.5523 19.5 20 19.5H19C18.4477 19.5 18 19.0523 18 18.5V17.5H6V18.5C6 19.0523 5.55228 19.5 5 19.5H4C3.44772 19.5 3 19.0523 3 18.5V12.5623C3 11.8661 3.18166 11.1821 3.52703 10.5777L6.42416 5.50772C6.78024 4.88457 7.44293 4.5 8.16065 4.5ZM7 14C7 14.2761 6.77614 14.5 6.5 14.5C6.22386 14.5 6 14.2761 6 14C6 13.7239 6.22386 13.5 6.5 13.5C6.77614 13.5 7 13.7239 7 14ZM18 14C18 14.2761 17.7761 14.5 17.5 14.5C17.2239 14.5 17 14.2761 17 14C17 13.7239 17.2239 13.5 17.5 13.5C17.7761 13.5 18 13.7239 18 14Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
  `<path d="M27.5,24c1.6-2.3,2.5-5,2.5-8c0-2.7-0.8-5.2-2.1-7.3c0-0.1-0.1-0.1-0.1-0.2C25.3,4.6,21,2,16,2C11,2,6.6,4.6,4.2,8.6 c0,0.1-0.1,0.1-0.1,0.2c-1.3,2.1-2,4.6-2,7.3c0,3,0.9,5.7,2.5,8c0,0,0.1,0.1,0.1,0.1C7.1,27.7,11.3,30,16,30c4.7,0,8.8-2.3,11.4-5.8 C27.4,24.1,27.4,24.1,27.5,24z M26,22.5L22.4,23l-1.4-1.4l2-5.8l3.1-1.5l2,1.2c0,0.2,0,0.4,0,0.7C28,18.4,27.3,20.7,26,22.5z  M25.9,9.3l-0.8,3l-3.2,1.6L17,10.5V6.6l3.4-1.7c0,0,0,0,0,0C22.7,5.8,24.6,7.3,25.9,9.3z M11.5,4.9C11.5,4.9,11.5,4.9,11.5,4.9 L15,6.6v3.9l-4.9,3.5l-3.3-1.6L6,9.3C7.4,7.3,9.3,5.8,11.5,4.9z M4,15.3l2-1.2l3.1,1.6l2,5.8l-1.4,1.4l-3.7-0.4 C4.7,20.6,4,18.4,4,16C4,15.8,4,15.5,4,15.3z M12.9,27.6C12.9,27.6,12.9,27.6,12.9,27.6l-1.7-3.4l1.2-1.2h7.2l1.2,1.2l-1.7,3.4 c0,0,0,0,0,0c-1,0.3-2,0.4-3.1,0.4S13.9,27.8,12.9,27.6z"/>`,
  `<path d="M21.84,5.56A4.08,4.08,0,0,0,20.7,3.31h0a4.08,4.08,0,0,0-2.25-1.14,13.65,13.65,0,0,0-5.29.24,1.17,1.17,0,0,0-.2.06,14.44,14.44,0,0,0-6.69,3.8A14.59,14.59,0,0,0,2.45,13c0,.06,0,.12-.05.19a13.7,13.7,0,0,0-.24,5.3A4.08,4.08,0,0,0,3.3,20.69h0a4.08,4.08,0,0,0,2.25,1.14A13.12,13.12,0,0,0,7.63,22a13.8,13.8,0,0,0,3.26-.41l.14,0a14.54,14.54,0,0,0,10.52-10.5c0-.06,0-.12.05-.19A13.7,13.7,0,0,0,21.84,5.56ZM16.37,4a10.44,10.44,0,0,1,1.76.14,1.68,1.68,0,0,1,.24.07L17,5.59,15.46,4.05C15.76,4,16.07,4,16.37,4ZM7.67,7.67a12.72,12.72,0,0,1,5.4-3.19L15.59,7,13.44,9.15l-.73-.73a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l.73.73L10.56,12l-.73-.73a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l.73.73L7,15.59,4.49,13.08A12.67,12.67,0,0,1,7.67,7.67ZM4.21,18.37a1.68,1.68,0,0,1-.07-.24A11.38,11.38,0,0,1,4,15.46L5.59,17Zm1.66,1.49a1.68,1.68,0,0,1-.24-.07L7,18.41,8.54,20A11.38,11.38,0,0,1,5.87,19.86Zm10.46-3.53a12.67,12.67,0,0,1-5.41,3.18L8.41,17l2.15-2.15.73.73a1,1,0,1,0,1.42-1.41L12,13.44,13.44,12l.73.73a1,1,0,0,0,.71.29,1,1,0,0,0,.7-1.71l-.73-.73L17,8.41l2.51,2.51A12.67,12.67,0,0,1,16.33,16.33ZM20,8.54,18.41,7l1.38-1.37a1.68,1.68,0,0,1,.07.24A11.38,11.38,0,0,1,20,8.54Z"/>`,
  `<path d="M 8.28125,1.90625 C 8.1873095,1.9137211 8.0966058,1.9442246 8,2 L 4.96875,3.625 C 4.58422,3.807 4.4339,4.37715 4.6875,4.71875 L 5.25,5.75 2,7.75 2,8.5 C 2,8.5 2.4991574,8 3,8 3.4737861,8 4.4232286,9 5,9 5.5033641,9 6.4961991,8 7,8 7.5243377,8 8.4756623,9 9,9 L 9.34375,9 6.5,4.5 8.59375,3.40625 C 9.041742,3.1476017 9.186529,2.6980781 9,2.375 8.8279386,2.0769809 8.5630716,1.8838367 8.28125,1.90625 z M 10,4.5 C 9.17157,4.5 8.5,5.1716 8.5,6 8.5,6.8284 9.17157,7.5 10,7.5 10.82843,7.5 11.5,6.8284 11.5,6 11.5,5.1716 10.82843,4.5 10,4.5 z m -7,5 c -0.533898,0 -1.492285,1 -2,1 L 1,12 c 0.537184,0 1.525424,-1 2,-1 0.504237,0 1.466102,1 2,1 0.475502,0 1.492285,-1 2,-1 0.504237,0 1.52173,1 2,1 0.504237,0 1.525424,-1 2,-1 0.474576,0 1.495763,1 2,1 l 0,-1.5 c -0.415254,0 -1.466102,-1.0296611 -2,-1 -0.47827,0 -1.465278,1 -2,1 -0.444915,0 -1.495763,-1 -2,-1 -0.504237,0 -1.554097,1 -2,1 -0.475502,0 -1.466102,-1 -2,-1 z" id="swimming" style="fill:#000000;fill-opacity:1;stroke:none" />`,
  `<path d="M14 22V16.9612C14 16.3537 13.7238 15.7791 13.2494 15.3995L11.5 14M11.5 14L13 7.5M11.5 14L10 13M13 7.5L11 7M13 7.5L15.0426 10.7681C15.3345 11.2352 15.8062 11.5612 16.3463 11.6693L18 12M10 13L11 7M10 13L9.40011 16.2994C9.18673 17.473 8.00015 18.2 6.85767 17.8573L4 17M11 7L8.10557 8.44721C7.428 8.786 7 9.47852 7 10.2361V12M14.5 3.5C14.5 4.05228 14.0523 4.5 13.5 4.5C12.9477 4.5 12.5 4.05228 12.5 3.5C12.5 2.94772 12.9477 2.5 13.5 2.5C14.0523 2.5 14.5 2.94772 14.5 3.5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
  `<g><path class="st0" d="M99.407,262.803C44.587,262.803,0,307.408,0,362.228c0,54.802,44.587,99.389,99.407,99.389 c54.811,0,99.398-44.587,99.398-99.389C198.805,307.408,154.218,262.803,99.407,262.803z M99.407,434.385 c-39.802,0-72.166-32.374-72.166-72.158c0-39.81,32.365-72.175,72.166-72.175c39.792,0,72.166,32.366,72.166,72.175 C171.572,402.011,139.199,434.385,99.407,434.385z"/> <path class="st0" d="M412.593,262.803c-54.811,0-99.398,44.605-99.398,99.425c0,54.802,44.587,99.389,99.398,99.389 c54.82,0,99.407-44.587,99.407-99.389C512,307.408,467.413,262.803,412.593,262.803z M412.593,434.385 c-39.792,0-72.166-32.374-72.166-72.158c0-39.81,32.374-72.175,72.166-72.175c39.801,0,72.175,32.366,72.175,72.175 C484.768,402.011,452.394,434.385,412.593,434.385z"/> <path class="st0" d="M259.974,87.313L119.95,109.099c-25.642,5.837-24.357,16.565-21.134,33.46l15.566,56.47l-54.472,0.461 l0.009,0.13c-6.958,0.869-12.352,6.793-12.352,13.976c0,7.801,6.324,14.107,14.107,14.107l74.199,7.461 c13.994,0.608,18.676-12.178,18.388-22.732l-3.075-35.745l51.996-14.628c0,0-25.242,29.959-27.336,32.574 c-10.458,13.073-14.246,37.038,2.615,49.686l72.991,52.996l4.152,63.55c0,10.519,8.53,19.049,19.049,19.049 c10.51,0,19.04-8.53,19.04-19.049c0-0.417,16.765-203.574,16.765-203.574C315.306,114.935,290.941,82.44,259.974,87.313z  M221.511,228.328c-3.631-2.719-2.736-6.35,0-9.981c2.71-3.64,24.496-21.794,24.496-21.794l4.551,57.191L221.511,228.328z"/> <path class="st0" d="M24.947,98.718h37.221v44.152h5.612V98.718h18.71c0,0,19.64-9.92,28.274-19.831 c2.415-2.78,3.84-9.347-4.274-7.653c0,0,4.483-10.476,5.933-14.524c1.451-4.065,0.295-7.783-7.8-5.758 c-4.152,1.042-25.686,5.159-56.132,11.83C24.738,68.872,17.46,90.605,17.46,94.209C17.46,97.815,18.806,98.718,24.947,98.718z"/> <polygon class="st0" points="21.003,115.839 29.108,123.265 52.804,116.517 52.804,105.033 21.003,105.033"/></g>`,
  `<path style="fill:#010002;" d="M58.496,48.961c-4.383-10.289-19.918-26.166-20.22-26.362c-1.563-1.687-3.848-2.515-6.156-2.549 v-0.007c-0.001,0-0.434,0-0.435,0v0.007c-2.308,0.035-4.594,0.863-6.156,2.549C25.227,22.795,9.691,38.672,5.308,48.961 c-1.071,2.516-0.068,4.885,1.611,6.282c-0.416,1.38-0.426,2.921,0.041,4.408c0.803,2.562,2.881,4.154,5.418,4.154 c4.854,0,34.166,0,39.047,0c2.537,0,4.614-1.593,5.417-4.154c0.468-1.487,0.458-3.028,0.041-4.408 C58.565,53.846,59.568,51.477,58.496,48.961z M17.23,47.34c1.864-3.046,3.989-5.831,6.299-8.511c0,2.764,0.08,9.679,0.219,10.307 C23.279,49.015,18.925,47.918,17.23,47.34z M40.058,49.136c0.138-0.628,0.218-7.543,0.218-10.307 c2.312,2.68,4.437,5.465,6.3,8.511C44.882,47.918,40.528,49.015,40.058,49.136z"/>`,
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
      iconIndex = (data["IconsIndex"] != null && data["IconsIndex"] < icons.length) ? data["IconsIndex"] : randomInteger(0, icons.length - 1);
      colorIndex = (data["ColorsIndex"] != null && data["ColorsIndex"] < colors.length) ? data["ColorsIndex"] : randomInteger(0, colors.length - 1);

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
