import * as THREE from "three";
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader, OrbitControls, RGBELoader } from "three/examples/jsm/Addons.js";

((d,w)=>{
    const canvas = d.querySelector("canvas.webgl")

    const scene = new THREE.Scene();
    
    //texture
    scene.background = new RGBELoader().load("src/img/urban_street_03_4k.hdr",(envMap)=>{
        envMap.mapping = THREE.EquirectangularReflectionMapping;
        scene.background = envMap;
        scene.environment = envMap;
    });
    
    //text material
    const textMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff, 
        metalness: 0.8,
        roughness: 0.2
    });
    
    //Font
    const fontLoader = new FontLoader();
    
    fontLoader.load("/src/font/Awesome_Regular.json",(font)=>{
        const name = "Alejandro Romero";
        
        const nameShape = new TextGeometry(name,{
            font: font,
            size: 2,
            depth: 0.2,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 0.1,
            bevelSize: 0.05,
            bevelOffset: 0,
            bevelSegments: 5
        });
        
        nameShape.center();
        const textMesh = new THREE.Mesh(nameShape,textMaterial);
       scene.add(textMesh); 
    },
    ()=>{},
    ()=>{}
);


    

    const sizes ={
        width: w.innerWidth,
        height: w.innerHeight
    }; 
    
    const camera = new THREE.PerspectiveCamera(75,sizes.width/sizes.height,0.1, 200);
    camera.position.z = 20;
    const controls = new OrbitControls(camera,canvas);
    
    scene.add(camera);

    const render = new THREE.WebGLRenderer({canvas, antialias: true});
    render.setSize(sizes.width,sizes.height);
    render.setPixelRatio(Math.min(w.devicePixelRatio, 2));

    const animate = ()=>{
        controls.update();
        render.render(scene,camera);
        requestAnimationFrame(animate);
    }
    animate();
})(document,window);