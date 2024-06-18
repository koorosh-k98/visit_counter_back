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
  `<path d="M14,11H10a2,2,0,0,1,0-4h5a1,1,0,0,1,1,1,1,1,0,0,0,2,0,3,3,0,0,0-3-3H13V3a1,1,0,0,0-2,0V5H10a4,4,0,0,0,0,8h4a2,2,0,0,1,0,4H9a1,1,0,0,1-1-1,1,1,0,0,0-2,0,3,3,0,0,0,3,3h2v2a1,1,0,0,0,2,0V19h1a4,4,0,0,0,0-8Z"/>`,
  `<path d="M3 8L5.72187 10.2682C5.90158 10.418 6.12811 10.5 6.36205 10.5H17.6379C17.8719 10.5 18.0984 10.418 18.2781 10.2682L21 8M6.5 14H6.51M17.5 14H17.51M8.16065 4.5H15.8394C16.5571 4.5 17.2198 4.88457 17.5758 5.50772L20.473 10.5777C20.8183 11.1821 21 11.8661 21 12.5623V18.5C21 19.0523 20.5523 19.5 20 19.5H19C18.4477 19.5 18 19.0523 18 18.5V17.5H6V18.5C6 19.0523 5.55228 19.5 5 19.5H4C3.44772 19.5 3 19.0523 3 18.5V12.5623C3 11.8661 3.18166 11.1821 3.52703 10.5777L6.42416 5.50772C6.78024 4.88457 7.44293 4.5 8.16065 4.5ZM7 14C7 14.2761 6.77614 14.5 6.5 14.5C6.22386 14.5 6 14.2761 6 14C6 13.7239 6.22386 13.5 6.5 13.5C6.77614 13.5 7 13.7239 7 14ZM18 14C18 14.2761 17.7761 14.5 17.5 14.5C17.2239 14.5 17 14.2761 17 14C17 13.7239 17.2239 13.5 17.5 13.5C17.7761 13.5 18 13.7239 18 14Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
  `<path d="M12,23A11,11,0,1,0,1,12,11.046,11.046,0,0,0,12,23ZM8,20.05a9.029,9.029,0,0,1-2.6-1.956A2,2,0,0,1,8,20.05Zm8,0a2,2,0,0,1,2.6-1.956A8.989,8.989,0,0,1,16,20.05Zm3.369-13.2a9.236,9.236,0,0,1,1.395,3.135A2,2,0,0,1,19.37,6.851Zm-5.745-3.7a1.985,1.985,0,0,1-3.25,0A8.783,8.783,0,0,1,13.625,3.155Zm-9,3.7A2,2,0,0,1,3.235,9.986,8.73,8.73,0,0,1,4.63,6.851ZM5.964,5.344a9.008,9.008,0,0,1,2.459-1.6,3.965,3.965,0,0,0,7.154,0,9.008,9.008,0,0,1,2.459,1.6A3.987,3.987,0,0,0,21,12a8.934,8.934,0,0,1-1.19,4.454,3.976,3.976,0,0,0-5.729,4.293,8.685,8.685,0,0,1-4.162,0A3.976,3.976,0,0,0,4.19,16.454,8.934,8.934,0,0,1,3,12,3.987,3.987,0,0,0,5.964,5.344ZM12,16a4,4,0,1,0-4-4A4,4,0,0,0,12,16Zm0-6a2,2,0,1,1-2,2A2,2,0,0,1,12,10Z"/>`,
  `<path d="M21.84,5.56A4.08,4.08,0,0,0,20.7,3.31h0a4.08,4.08,0,0,0-2.25-1.14,13.65,13.65,0,0,0-5.29.24,1.17,1.17,0,0,0-.2.06,14.44,14.44,0,0,0-6.69,3.8A14.59,14.59,0,0,0,2.45,13c0,.06,0,.12-.05.19a13.7,13.7,0,0,0-.24,5.3A4.08,4.08,0,0,0,3.3,20.69h0a4.08,4.08,0,0,0,2.25,1.14A13.12,13.12,0,0,0,7.63,22a13.8,13.8,0,0,0,3.26-.41l.14,0a14.54,14.54,0,0,0,10.52-10.5c0-.06,0-.12.05-.19A13.7,13.7,0,0,0,21.84,5.56ZM16.37,4a10.44,10.44,0,0,1,1.76.14,1.68,1.68,0,0,1,.24.07L17,5.59,15.46,4.05C15.76,4,16.07,4,16.37,4ZM7.67,7.67a12.72,12.72,0,0,1,5.4-3.19L15.59,7,13.44,9.15l-.73-.73a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l.73.73L10.56,12l-.73-.73a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l.73.73L7,15.59,4.49,13.08A12.67,12.67,0,0,1,7.67,7.67ZM4.21,18.37a1.68,1.68,0,0,1-.07-.24A11.38,11.38,0,0,1,4,15.46L5.59,17Zm1.66,1.49a1.68,1.68,0,0,1-.24-.07L7,18.41,8.54,20A11.38,11.38,0,0,1,5.87,19.86Zm10.46-3.53a12.67,12.67,0,0,1-5.41,3.18L8.41,17l2.15-2.15.73.73a1,1,0,1,0,1.42-1.41L12,13.44,13.44,12l.73.73a1,1,0,0,0,.71.29,1,1,0,0,0,.7-1.71l-.73-.73L17,8.41l2.51,2.51A12.67,12.67,0,0,1,16.33,16.33ZM20,8.54,18.41,7l1.38-1.37a1.68,1.68,0,0,1,.07.24A11.38,11.38,0,0,1,20,8.54Z"/>`,
  `<path d="M21 7.5C21 8.88071 19.8807 10 18.5 10C17.1193 10 16 8.88071 16 7.5C16 6.11929 17.1193 5 18.5 5C19.8807 5 21 6.11929 21 7.5Z" fill="#0F0F0F"/><path d="M19.754 13.1283L12.354 6.96169C10.9095 5.75794 8.9118 5.46638 7.18351 6.20708L3.59222 7.7462C3.23294 7.90017 3 8.25344 3 8.64432C3 9.31126 3.6534 9.78221 4.28612 9.5713L7.82736 8.39089C8.54603 8.15133 9.33837 8.33838 9.87403 8.87404L11 10L5.72973 13.2939C5.87157 13.3782 6.00088 13.4783 6.11842 13.5911C6.42799 13.8883 6.65137 14.2865 6.76607 14.47C6.98521 14.8206 7.17253 15 7.60557 15C8.36469 15 9.01052 14.5286 9.61533 14.1249C10.3276 13.6493 11.2998 13 12.6056 13C13.2851 13 13.8472 13.1758 14.2876 13.5533C14.6634 13.8753 14.8675 14.2863 14.9818 14.5162C15.1485 14.8511 15.2073 15 15.6056 15C16.2877 15 16.9383 14.6595 17.769 14.1484C18.1839 13.893 18.5948 13.629 19.0329 13.4144C19.2526 13.3069 19.4942 13.2044 19.754 13.1283Z" fill="#0F0F0F"/><path d="M23.4472 18.8944C22.9536 19.1413 22.3534 18.9415 22.1061 18.4482C21.9575 18.1653 21.77 17.8986 21.5599 17.6585C21.1747 17.2183 20.8036 17 20.5 17C20.3434 17 20.128 17.0534 19.8071 17.2106C19.427 17.3967 19.0713 17.6296 18.7116 17.8517C17.9173 18.3405 16.8178 19 15.5 19C14.8205 19 14.2584 18.8242 13.818 18.4468C13.4996 18.1739 13.29 17.8176 13.1056 17.4472C12.9501 17.1363 12.8571 17 12.5 17C11.7409 17 11.0951 17.4714 10.4902 17.8751C9.77797 18.3508 8.8058 19 7.5 19C6.81825 19 6.26147 18.8244 5.81027 18.4962C5.38546 18.1873 5.12877 17.7928 4.9645 17.53C4.63557 17.0022 4.31057 16.9517 3.74611 17.2173C3.42379 17.369 3.08894 17.5809 2.77567 17.8087C2.4002 18.0818 2.03744 18.3806 1.70687 18.7073C1.31631 19.0974 0.68327 19.0975 0.292893 18.7071C-0.0976311 18.3166 -0.0976311 17.6834 0.292893 17.2929C0.696649 16.892 1.13966 16.5256 1.59933 16.1913C1.97356 15.9191 2.41996 15.631 2.89452 15.4077C3.35859 15.1893 3.91795 15 4.5 15C5.14106 15 5.63708 15.2304 6.01284 15.5911C6.28231 15.8498 6.48609 16.1843 6.61007 16.3878C6.71551 16.5609 6.81996 16.7576 6.98661 16.8788C7.05103 16.9256 7.18175 17 7.5 17C8.15438 17 8.66304 16.6895 9.4453 16.168C10.3754 15.5472 11.3467 15 12.5 15C13.1795 15 13.7416 15.1758 14.182 15.5532C14.5578 15.8753 14.762 16.2863 14.8762 16.5162C15.038 16.8411 15.1219 17 15.5 17C16.1822 17 16.8327 16.6595 17.6634 16.1483C18.0783 15.893 18.4892 15.629 18.9273 15.4144C19.372 15.1967 19.9066 15 20.5 15C21.6964 15 22.5753 15.7817 23.0651 16.3415C23.3854 16.7076 23.6681 17.1144 23.8916 17.5471C24.134 18.0276 23.9295 18.6533 23.4472 18.8944Z" fill="#0F0F0F"/>`,
  `<path d="M14 22V16.9612C14 16.3537 13.7238 15.7791 13.2494 15.3995L11.5 14M11.5 14L13 7.5M11.5 14L10 13M13 7.5L11 7M13 7.5L15.0426 10.7681C15.3345 11.2352 15.8062 11.5612 16.3463 11.6693L18 12M10 13L11 7M10 13L9.40011 16.2994C9.18673 17.473 8.00015 18.2 6.85767 17.8573L4 17M11 7L8.10557 8.44721C7.428 8.786 7 9.47852 7 10.2361V12M14.5 3.5C14.5 4.05228 14.0523 4.5 13.5 4.5C12.9477 4.5 12.5 4.05228 12.5 3.5C12.5 2.94772 12.9477 2.5 13.5 2.5C14.0523 2.5 14.5 2.94772 14.5 3.5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
  `<path d="M11 18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18H11ZM12 13H13C13 12.7348 12.8946 12.4804 12.7071 12.2929L12 13ZM8.5 9.5L7.8415 8.74742C7.6332 8.92968 7.50976 9.19011 7.50055 9.46672C7.49134 9.74334 7.59719 10.0114 7.79289 10.2071L8.5 9.5ZM12.5 6L13.2593 5.34921C13.0855 5.1465 12.8379 5.02169 12.5716 5.00257C12.3053 4.98345 12.0424 5.07161 11.8415 5.24742L12.5 6ZM18.5 11C19.0523 11 19.5 10.5523 19.5 10C19.5 9.44772 19.0523 9 18.5 9V11ZM8 17C8 18.6569 6.65685 20 5 20V22C7.76142 22 10 19.7614 10 17H8ZM5 20C3.34315 20 2 18.6569 2 17H0C0 19.7614 2.23858 22 5 22V20ZM2 17C2 15.3431 3.34315 14 5 14V12C2.23858 12 0 14.2386 0 17H2ZM5 14C6.65685 14 8 15.3431 8 17H10C10 14.2386 7.76142 12 5 12V14ZM13 18V13H11V18H13ZM12.7071 12.2929L9.20711 8.79289L7.79289 10.2071L11.2929 13.7071L12.7071 12.2929ZM9.1585 10.2526L13.1585 6.75258L11.8415 5.24742L7.8415 8.74742L9.1585 10.2526ZM11.7407 6.65079C12.2544 7.25009 13.2032 8.3069 14.3529 9.22044C15.4669 10.1056 16.9452 11 18.5 11V9C17.6548 9 16.6331 8.47777 15.5971 7.65456C14.5968 6.85976 13.7456 5.91657 13.2593 5.34921L11.7407 6.65079ZM22 17C22 18.6569 20.6569 20 19 20V22C21.7614 22 24 19.7614 24 17H22ZM19 20C17.3431 20 16 18.6569 16 17H14C14 19.7614 16.2386 22 19 22V20ZM16 17C16 15.3431 17.3431 14 19 14V12C16.2386 12 14 14.2386 14 17H16ZM19 14C20.6569 14 22 15.3431 22 17H24C24 14.2386 21.7614 12 19 12V14ZM16 3V5C17.1046 5 18 4.10457 18 3H16ZM16 3H14C14 4.10457 14.8954 5 16 5V3ZM16 3V1C14.8954 1 14 1.89543 14 3H16ZM16 3H18C18 1.89543 17.1046 1 16 1V3Z" fill="#000000"/>`,
  `<g><circle style="fill:#010002;" cx="30.358" cy="9.22" r="9.22"/><path style="fill:#010002;" d="M52.537,48.082l-1.191-0.832c-1.896-1.328-3.834-2.668-5.812-3.957 c-1.924,0.703-3.948,1.213-5.823,1.68c-1.91,0.478-3.713,0.924-5.146,1.496c-0.748,0.301-1.488,0.451-2.201,0.451 c-0.748,0-1.445-0.188-2.083-0.5c-0.637,0.312-1.334,0.5-2.082,0.5c-0.713,0-1.453-0.15-2.201-0.451 c-1.434-0.572-3.236-1.021-5.145-1.496c-1.945-0.481-4.055-1.014-6.041-1.76c-2.021,1.311-3.99,2.676-5.926,4.029l-1.203,0.84 c-2.361,1.648-3.35,4.906-2.402,7.926c0.816,2.598,2.924,4.213,5.498,4.213h38.667c2.574,0,4.684-1.615,5.498-4.213 C55.886,52.988,54.898,49.73,52.537,48.082z M25.273,49.893c0.551-0.354,1.074-0.733,1.584-1.125 c1.17,0.219,2.387,0.229,3.557,0.017c1.003,0.184,2.042,0.194,3.052,0.062c0.478,0.361,0.972,0.713,1.488,1.047L25.273,49.893 L25.273,49.893z"/><path style="fill:#010002;" d="M25.89,44.311c1.872,0.75,3.41,0.322,4.46-0.691c1.05,1.017,2.589,1.441,4.46,0.691 c5.758-2.305,16.621-2.518,18.443-10.059c1.553-6.431-3.328-12.835-6.121-18.285c-2.021-3.933-6.699-2.795-8.506,0.152 c-1.479,1.649-4.519,4.604-8.162,4.604c-4.071,0-7.468-3.699-8.743-5.103c-2.001-2.563-6.258-3.354-8.155,0.347 c-2.795,5.449-7.674,11.854-6.121,18.285C9.269,41.793,20.134,42.006,25.89,44.311z M19.024,27.025 c0.323-0.645,0.667-1.278,1.007-1.915c0.03,3.196,0.076,4.924,0.076,5.109c0.691,0.195,1.395,0.387,2.137,0.57 c2.178,0.541,4.703,1.201,7.152,2.182c0.32,0.129,0.602,0.288,0.881,0.45c0.279-0.162,0.559-0.321,0.881-0.45 c2.166-0.867,4.4-1.449,6.561-2.014c0.563-0.146,1.125-0.293,1.688-0.444c0.252-0.067,0.523-0.13,0.802-0.192 c0.135-0.03,0.521,0.939,0.653,0.908c0-1.1,0-2.199,0-3.295V26.93c0-0.939,0-1.488,0-1.899c1.207,2.002,2.358,4.1,2.724,6.1 c-0.133,0.077-0.312,0.178-0.562,0.312c-0.787,0.422-1.879,0.574-2.729,0.805c-2.752,0.742-5.483,1.357-8.141,2.42 c-0.729,0.291-1.322,0.693-1.802,1.169c-0.479-0.476-1.076-0.878-1.802-1.169c-2.287-0.916-4.631-1.545-7.02-2.137 c-1.08-0.271-2.146-0.559-3.211-0.881c-0.71-0.213-1.118-0.809-1.231-0.496C17.276,29.879,18.524,28.025,19.024,27.025z"/></g>`,
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
