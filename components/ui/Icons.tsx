import React from 'react';

const JSIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 300 360"
    {...props}
  >
    <style>{`
      .st0{opacity:0.82;fill:#09301F;enable-background:new;}
      .st1{fill:#209765;}
    `}</style>
    <g>
      <path
        className="st0"
        d="M100,325c20.1,5.2,39.2,10.2,49.6,19.6c10.4-9.4,29.5-14.4,49.6-19.6c41.3-10.7,88.2-22.8,88.2-75.9V9H11.9v240.1C11.9,302.1,58.7,314.2,100,325z"
      />
      <path
        className="st1"
        d="M5.6,4.3v244.2c0,59.5,51.8,72.9,93.5,83.7c19,4.9,36.9,9.6,44.9,17.5l6,6l6-6c8-8,25.9-12.6,44.9-17.5   c41.7-10.8,93.5-24.2,93.5-83.7V4.3H5.6L5.6,4.3z M284.4,14.2v234.2c0,51.8-45.7,63.6-86,74.1c-19.7,5.1-38.3,9.9-48.4,19.1   c-10.2-9.2-28.8-14-48.4-19.1c-40.3-10.4-86-22.3-86-74.1V14.2C15.6,14.2,284.4,14.2,284.4,14.2z"
      />
    </g>
  </svg>
);

export default JSIcon;
