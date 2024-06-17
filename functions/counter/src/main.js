import { Client } from 'node-appwrite';


export default ({ req, res }) => {
    const counter = req.query.counter || '0';
  const color = req.query.color || '#000000';
  
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
    background-color: rgb(127 29 29);
}
.pillIcon{
  margin-right: 4px;
  width: 14px;
  height: 14px;
}
.pillCount{
    color: rgb(127 29 29);
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
  <path name="default" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
</svg>
Profile Views</span>
<span class="pillCount"> 579 </span>
</div>
</div>
</foreignObject>
</svg>
`;


return res.send(svgContent, 200, {
                    "content-type": "image/svg+xml"
            });

};
