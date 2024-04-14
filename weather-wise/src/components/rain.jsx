import React from 'react';
import './rain.css';

const droplets = 150;

const Rain = () => {
  const rainDrops = [];

  for (let r = 0; r < droplets; r++) {
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    const opacity = Math.random();
    const amplitude = Math.random() + 0.5;
    const displacement = (Math.random() * 2) - 1;
    const scale = Math.random();

    rainDrops.push(
      <svg
        key={r}
        className="rain__drop"
        preserveAspectRatio="xMinYMin"
        viewBox="0 0 5 50"
        style={{
          '--x': x,
          '--y': y,
          '--o': opacity,
          '--a': amplitude,
          '--d': displacement,
          '--s': scale,
        }}
      >
        <path
          stroke="none"
          d="M 2.5,0 C 2.6949458,3.5392017 3.344765,20.524571 4.4494577,30.9559 5.7551357,42.666753 4.5915685,50 2.5,50 0.40843152,50 -0.75513565,42.666753 0.55054234,30.9559 1.655235,20.524571 2.3050542,3.5392017 2.5,0 Z"
        />
      </svg>
    );
  }

  return (
    <div className="rain">
      {rainDrops}
    </div>
  );
};

export default Rain;
