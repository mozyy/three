import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Ex3 = () => {
  const app = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!app.current) return;
    const width = app.current.clientWidth;
    const height = app.current.clientHeight;
    const scene = new THREE.Scene();
    const k = width / height; // 窗口宽高比
    const s = 200; // 三维场景显示范围控制系数，系数越大，显示的范围越大
    // 创建相机对象
    const camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
    camera.position.set(200, 0, 0); // 设置相机位置
    camera.lookAt(scene.position); // 设置相机方向(指向的场景对象)
    // const camera = new THREE.PerspectiveCamera();

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    renderer.setClearColor(0xb9d3ff, 1); // 设置背景颜色
    app.current.appendChild(renderer.domElement);

    const loader = new GLTFLoader();

    loader.load('/models/matilda/scene.gltf', (gltf) => {
      scene.add(gltf.scene);
      renderer.render(scene, camera);
      const controls = new OrbitControls(camera, renderer.domElement);// 创建控件对象
      controls.addEventListener('change', () => {
        renderer.render(scene, camera);
      });// 监听鼠标、键盘事件
    }, undefined, (error) => {
      console.error(error);
    });

    camera.position.z = 5;

    // const animate = () => {
    //   // requestAnimationFrame(animate);

    //   // mesh.rotation.x += 0.01;
    //   // mesh.rotation.y += 0.01;

    //   renderer.render(scene, camera);
    // };
    // animate();
  }, []);

  return (
    <div ref={app} />
  );
};

export default Ex3;
