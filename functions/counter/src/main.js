import { Client } from 'node-appwrite';


export default ({ req, res }) => {
    const counter = req.query.counter || '0';
  const color = req.query.color || '#000000';
  
    const svgContent = `
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" fill="${color}"/>
  <text x="100" y="100" font-size="40" text-anchor="middle" fill="#ffffff">${counter}</text>
</svg>
`;


return res.send(svgContent, {
                    "content-type": "image/svg+xml"
            });

};
