const functions = require('firebase-functions');
const express = require('express');
const app = express();

app.get('/svg', (req, res) => {
  const counter = req.query.counter || '0';
  const color = req.query.color || '#000000';

  const svgContent = `
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" fill="${color}"/>
  <text x="100" y="100" font-size="40" text-anchor="middle" fill="#ffffff">${counter}</text>
</svg>
`;

  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(svgContent);
});

exports.svg = functions.https.onRequest(app);
