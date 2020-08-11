import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Ex2 = () => {
  const app = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!app.current) return;
    const width = app.current.clientWidth;
    const height = app.current.clientHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height,
      0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    app.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;

      renderer.render(scene, camera);
    };
    animate();
  }, []);
  return (
    <div ref={app} />
  );
};

export default Ex2;
