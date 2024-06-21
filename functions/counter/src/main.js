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




const backgroundColors = [
  "#E80000",
  "#12B700",
  "#0015B5",
  "#FF00C7",
  "#D68400"
];

const colors = [
  "#FECACA",
  "#BBF7D0",
  "#BFDBFE",
  "#FBCFE8",
  "#FDE68A"
];





export default async ({ req, res }) => {
  const username = req.query.username;
  if (username == null) {
    return res.send("Username is null!");
  }

  const icons = [
    `<path d="M8.4 13.8C8.4 13.8 9.75 15.6 12 15.6C14.25 15.6 15.6 13.8 15.6 13.8M14.7 9.3H14.709M9.3 9.3H9.309M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM15.15 9.3C15.15 9.54853 14.9485 9.75 14.7 9.75C14.4515 9.75 14.25 9.54853 14.25 9.3C14.25 9.05147 14.4515 8.85 14.7 8.85C14.9485 8.85 15.15 9.05147 15.15 9.3ZM9.75 9.3C9.75 9.54853 9.54853 9.75 9.3 9.75C9.05147 9.75 8.85 9.54853 8.85 9.3C8.85 9.05147 9.05147 8.85 9.3 8.85C9.54853 8.85 9.75 9.05147 9.75 9.3Z" stroke="${colors[colorIndex]}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
    `<path d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z" stroke="${colors[colorIndex]}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
    `<path d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z" stroke="${colors[colorIndex]}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
    `<path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="${colors[colorIndex]}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
    `<path d="M15 10V9.91667C15 8.85812 14.1419 8 13.0833 8H11C9.89543 8 9 8.89543 9 10C9 11.1046 9.89543 12 11 12H13C14.1046 12 15 12.8954 15 14C15 15.1046 14.1046 16 13 16H10.9583C9.87678 16 9 15.1232 9 14.0417V14M12 17.5V6.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="${colors[colorIndex]}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
    `<path d="M3 8L5.72187 10.2682C5.90158 10.418 6.12811 10.5 6.36205 10.5H17.6379C17.8719 10.5 18.0984 10.418 18.2781 10.2682L21 8M6.5 14H6.51M17.5 14H17.51M8.16065 4.5H15.8394C16.5571 4.5 17.2198 4.88457 17.5758 5.50772L20.473 10.5777C20.8183 11.1821 21 11.8661 21 12.5623V18.5C21 19.0523 20.5523 19.5 20 19.5H19C18.4477 19.5 18 19.0523 18 18.5V17.5H6V18.5C6 19.0523 5.55228 19.5 5 19.5H4C3.44772 19.5 3 19.0523 3 18.5V12.5623C3 11.8661 3.18166 11.1821 3.52703 10.5777L6.42416 5.50772C6.78024 4.88457 7.44293 4.5 8.16065 4.5ZM7 14C7 14.2761 6.77614 14.5 6.5 14.5C6.22386 14.5 6 14.2761 6 14C6 13.7239 6.22386 13.5 6.5 13.5C6.77614 13.5 7 13.7239 7 14ZM18 14C18 14.2761 17.7761 14.5 17.5 14.5C17.2239 14.5 17 14.2761 17 14C17 13.7239 17.2239 13.5 17.5 13.5C17.7761 13.5 18 13.7239 18 14Z" stroke="${colors[colorIndex]}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
    `<path d="M12 8L15.8043 10.7639M12 8L8.1958 10.7639M12 8V5M15.8043 10.7639L14.3512 15.2361M15.8043 10.7639L18.5 9.5M14.3512 15.2361H9.64889M14.3512 15.2361L16 17.5M9.64889 15.2361L8.1958 10.7639M9.64889 15.2361L8 17.5M8.1958 10.7639L5.5 9.5M5.5 9.5L2.04938 13M5.5 9.5L4.5 5.38544M18.5 9.5L21.9506 13M18.5 9.5L19.5 5.38544M12 5L8.62434 2.58409M12 5L15.3757 2.58409M8 17.5L3.33782 17M8 17.5L10.5 21.8883M16 17.5L20.6622 17M16 17.5L13.5 21.8883M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="${colors[colorIndex]}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`,
    `<path d="M21.261,2.164C15.334-.112,9.125,1,5.062,5.062s-5.174,10.271-2.9,16.2a1,1,0,0,0,.575.574c5.707,2.192,11.986,1.317,16.2-2.9,4.063-4.064,5.174-10.271,2.9-16.2A1,1,0,0,0,21.261,2.164ZM3.875,20.127a15.152,15.152,0,0,1-.843-4.143,10.4,10.4,0,0,1,2.92,2.066,10.432,10.432,0,0,1,2.065,2.918A15.171,15.171,0,0,1,3.875,20.127Zm13.651-2.6a11.949,11.949,0,0,1-7.377,3.4,12.264,12.264,0,0,0-2.784-4.293A12.264,12.264,0,0,0,3.07,13.851,11.748,11.748,0,0,1,13.851,3.071a12.273,12.273,0,0,0,2.784,4.294,12.264,12.264,0,0,0,4.295,2.786A11.956,11.956,0,0,1,17.526,17.527Zm.522-11.575a10.428,10.428,0,0,1-2.065-2.919,15.143,15.143,0,0,1,4.142.842,15.152,15.152,0,0,1,.843,4.143A10.422,10.422,0,0,1,18.048,5.952Zm-2.222,5.786a1,1,0,1,1-1.414,1.414l-1.075-1.075-1.26,1.26,1.076,1.075a1,1,0,1,1-1.414,1.414l-1.076-1.075-.629.63A1,1,0,0,1,8.62,13.967l.629-.63L8.174,12.262a1,1,0,0,1,1.414-1.414l1.075,1.075,1.26-1.26L10.847,9.588a1,1,0,0,1,1.414-1.414l1.076,1.075.63-.63a1,1,0,0,1,1.414,1.414l-.63.63Z" fill="${colors[colorIndex]}" stroke="${colors[colorIndex]}" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>`,
    `<path d="M21 7.5C21 8.88071 19.8807 10 18.5 10C17.1193 10 16 8.88071 16 7.5C16 6.11929 17.1193 5 18.5 5C19.8807 5 21 6.11929 21 7.5Z" fill="${colors[colorIndex]}"/><path d="M19.754 13.1283L12.354 6.96169C10.9095 5.75794 8.9118 5.46638 7.18351 6.20708L3.59222 7.7462C3.23294 7.90017 3 8.25344 3 8.64432C3 9.31126 3.6534 9.78221 4.28612 9.5713L7.82736 8.39089C8.54603 8.15133 9.33837 8.33838 9.87403 8.87404L11 10L5.72973 13.2939C5.87157 13.3782 6.00088 13.4783 6.11842 13.5911C6.42799 13.8883 6.65137 14.2865 6.76607 14.47C6.98521 14.8206 7.17253 15 7.60557 15C8.36469 15 9.01052 14.5286 9.61533 14.1249C10.3276 13.6493 11.2998 13 12.6056 13C13.2851 13 13.8472 13.1758 14.2876 13.5533C14.6634 13.8753 14.8675 14.2863 14.9818 14.5162C15.1485 14.8511 15.2073 15 15.6056 15C16.2877 15 16.9383 14.6595 17.769 14.1484C18.1839 13.893 18.5948 13.629 19.0329 13.4144C19.2526 13.3069 19.4942 13.2044 19.754 13.1283Z" fill="${colors[colorIndex]}"/><path d="M23.4472 18.8944C22.9536 19.1413 22.3534 18.9415 22.1061 18.4482C21.9575 18.1653 21.77 17.8986 21.5599 17.6585C21.1747 17.2183 20.8036 17 20.5 17C20.3434 17 20.128 17.0534 19.8071 17.2106C19.427 17.3967 19.0713 17.6296 18.7116 17.8517C17.9173 18.3405 16.8178 19 15.5 19C14.8205 19 14.2584 18.8242 13.818 18.4468C13.4996 18.1739 13.29 17.8176 13.1056 17.4472C12.9501 17.1363 12.8571 17 12.5 17C11.7409 17 11.0951 17.4714 10.4902 17.8751C9.77797 18.3508 8.8058 19 7.5 19C6.81825 19 6.26147 18.8244 5.81027 18.4962C5.38546 18.1873 5.12877 17.7928 4.9645 17.53C4.63557 17.0022 4.31057 16.9517 3.74611 17.2173C3.42379 17.369 3.08894 17.5809 2.77567 17.8087C2.4002 18.0818 2.03744 18.3806 1.70687 18.7073C1.31631 19.0974 0.68327 19.0975 0.292893 18.7071C-0.0976311 18.3166 -0.0976311 17.6834 0.292893 17.2929C0.696649 16.892 1.13966 16.5256 1.59933 16.1913C1.97356 15.9191 2.41996 15.631 2.89452 15.4077C3.35859 15.1893 3.91795 15 4.5 15C5.14106 15 5.63708 15.2304 6.01284 15.5911C6.28231 15.8498 6.48609 16.1843 6.61007 16.3878C6.71551 16.5609 6.81996 16.7576 6.98661 16.8788C7.05103 16.9256 7.18175 17 7.5 17C8.15438 17 8.66304 16.6895 9.4453 16.168C10.3754 15.5472 11.3467 15 12.5 15C13.1795 15 13.7416 15.1758 14.182 15.5532C14.5578 15.8753 14.762 16.2863 14.8762 16.5162C15.038 16.8411 15.1219 17 15.5 17C16.1822 17 16.8327 16.6595 17.6634 16.1483C18.0783 15.893 18.4892 15.629 18.9273 15.4144C19.372 15.1967 19.9066 15 20.5 15C21.6964 15 22.5753 15.7817 23.0651 16.3415C23.3854 16.7076 23.6681 17.1144 23.8916 17.5471C24.134 18.0276 23.9295 18.6533 23.4472 18.8944Z" fill="${colors[colorIndex]}"/>`,
    `<path d="M14 22V16.9612C14 16.3537 13.7238 15.7791 13.2494 15.3995L11.5 14M11.5 14L13 7.5M11.5 14L10 13M13 7.5L11 7M13 7.5L15.0426 10.7681C15.3345 11.2352 15.8062 11.5612 16.3463 11.6693L18 12M10 13L11 7M10 13L9.40011 16.2994C9.18673 17.473 8.00015 18.2 6.85767 17.8573L4 17M11 7L8.10557 8.44721C7.428 8.786 7 9.47852 7 10.2361V12M14.5 3.5C14.5 4.05228 14.0523 4.5 13.5 4.5C12.9477 4.5 12.5 4.05228 12.5 3.5C12.5 2.94772 12.9477 2.5 13.5 2.5C14.0523 2.5 14.5 2.94772 14.5 3.5Z" stroke="${colors[colorIndex]}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
    `<path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="${colors[colorIndex]}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
    `<path d="M19 1C19 0.447715 19.4477 0 20 0C20.5523 0 21 0.447715 21 1V1.58582L22.2709 0.314894C22.6614 -0.0756305 23.2946 -0.0756294 23.6851 0.314895C24.0757 0.705419 24.0757 1.33858 23.6851 1.72911L22.4142 3H23C23.5523 3 24 3.44772 24 4C24 4.55228 23.5523 5 23 5H20.4142L12.7017 12.7125C12.3112 13.103 11.678 13.103 11.2875 12.7125C10.897 12.322 10.897 11.6888 11.2875 11.2983L19 3.58582V1Z" fill="${colors[colorIndex]}"/><path d="M17.3924 3.78908C17.834 3.3475 17.7677 2.61075 17.2182 2.31408C15.6655 1.47581 13.8883 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 10.1154 22.5261 8.34153 21.6909 6.79102C21.3946 6.24091 20.6574 6.17424 20.2155 6.61606L20.1856 6.64598C19.8554 6.97615 19.8032 7.48834 20.016 7.90397C20.6451 9.1326 21 10.5249 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C13.4782 3 14.8732 3.35638 16.1037 3.98791C16.5195 4.20129 17.0322 4.14929 17.3627 3.81884L17.3924 3.78908Z" fill="${colors[colorIndex]}"/><path d="M14.3899 6.79159C14.8625 6.31902 14.7436 5.52327 14.1062 5.32241C13.4415 5.11295 12.7339 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 11.2702 18.8883 10.5664 18.6811 9.9049C18.4811 9.26659 17.6846 9.14697 17.2117 9.61995L17.1194 9.71224C16.8382 9.99337 16.7595 10.4124 16.8547 10.7984C16.9496 11.1833 17 11.5858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C12.4172 7 12.8225 7.0511 13.21 7.1474C13.5965 7.24347 14.0166 7.16496 14.2982 6.88331L14.3899 6.79159Z" fill="${colors[colorIndex]}"/><path d="M11.078 9.15136C11.4874 9.01484 11.6934 9.48809 11.3882 9.79329L10.5827 10.5989C9.80254 11.379 9.80254 12.6438 10.5827 13.4239C11.3628 14.204 12.6276 14.204 13.4077 13.4239L14.2031 12.6285C14.5089 12.3227 14.9822 12.5301 14.8429 12.9397C14.441 14.1209 13.3135 15 12 15C10.3431 15 9 13.6569 9 12C9 10.6796 9.88827 9.54802 11.078 9.15136Z" fill="${colors[colorIndex]}"/>`,
    `<path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="${colors[colorIndex]}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
  ];

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

  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="325px" height="35px" fill="none">
<foreignObject width="320px" height="35px">
<div xmlns="http://www.w3.org/1999/xhtml">
<style>
.pill{
    display: flex;
    background-color: transparent;
    width: max-content;
    font-family: 'Open Sans', sans-serif;
    border-radius: 20px;
}
.pillLabel{
    display: flex;
    width: max-content;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 8px;
    padding-right: 8px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    font-size: 14px;
    color: ${colors[colorIndex]};
    background-color: ${backgroundColors[colorIndex]};
    text-align: center;
    line-height: 20px;
}
.pillIcon{
  margin-right: 4px;
  width: 20px;
  height: 20px;
}
.pillCount{
    color: ${backgroundColors[colorIndex]};
    background-color: ${colors[colorIndex]};
    width: max-content;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 8px;
    padding-right: 8px;
    alignment: center;
    letter-spacing: 1px;
    font-size: 14px; 
    text-align: center;
    line-height: 20px;
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
