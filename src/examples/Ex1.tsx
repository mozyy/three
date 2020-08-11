import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Ex1 = () => {
  const app = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!app.current) return;
    /**
     * 创建场景对象Scene
     */
    const scene = new THREE.Scene();
    /**
     * 创建网格模型
     */
    const geometry1 = new THREE.SphereGeometry(60, 40, 40); // 创建一个球体几何对象
    const geometry2 = new THREE.BoxGeometry(50, 100, 100); // 创建一个立方体几何对象Geometry
    const material = new THREE.MeshLambertMaterial({
      color: 0x0000ff,
    }); // 材质对象Material
    const mesh1 = new THREE.Mesh(geometry1, material); // 网格模型对象Mesh
    const mesh2 = new THREE.Mesh(geometry2, new THREE.MeshLambertMaterial({
      color: 0x00ffff,
    })); // 网格模型对象Mesh
    const axisHelper = new THREE.AxesHelper(250);
    scene.add(mesh1, mesh2, axisHelper); // 网格模型添加到场景中
    /**
     * 光源设置
     */
    // 点光源
    const point = new THREE.PointLight(0x222222);
    point.position.set(400, 200, 300); // 点光源位置
    scene.add(point); // 点光源添加到场景中
    // 环境光
    const ambient = new THREE.AmbientLight(0xffffff);
    scene.add(ambient);
    // console.log(scene)
    // console.log(scene.children)
    /**
     * 相机设置
     */
    const width = app.current.clientWidth; // 窗口宽度
    const height = app.current.clientHeight; // 窗口高度
    const k = width / height; // 窗口宽高比
    const s = 200; // 三维场景显示范围控制系数，系数越大，显示的范围越大
    // 创建相机对象
    const camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
    camera.position.set(200, 300, 200); // 设置相机位置
    camera.lookAt(scene.position); // 设置相机方向(指向的场景对象)
    /**
     * 创建渲染器对象
     */
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);// 设置渲染区域尺寸
    renderer.setClearColor(0xb9d3ff, 1); // 设置背景颜色
    app.current.appendChild(renderer.domElement); // body元素中插入canvas对象
    let start = Date.now();
    const render = () => {
      const end = Date.now();
      const distence = end - start;
      start = end;
      // 执行渲染操作   指定场景、相机作为参数
      renderer.render(scene, camera);
      // mesh.rotateY(0.001 * distence);
      // mesh.rotateX(0.001 * distence);
      // requestAnimationFrame(render);
    };
    render();
    render();
    const controls = new OrbitControls(camera, renderer.domElement);// 创建控件对象
    controls.addEventListener('change', render);// 监听鼠标、键盘事件
  }, []);

  return (
    <div ref={app} />
  );
};

export default Ex1;
