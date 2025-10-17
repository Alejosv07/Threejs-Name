import * as THREE from "three";
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader, OrbitControls, RGBELoader } from "three/examples/jsm/Addons.js";

((d,w)=>{
    const canvas = d.querySelector("canvas.webgl")

    const BASE_URL = import.meta.env.BASE_URL;

    const scene = new THREE.Scene();
    
    //texture
    scene.background = new RGBELoader().load(BASE_URL+"/img/urban_street_03_4k.hdr",(envMap)=>{
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
    
    fontLoader.load(BASE_URL+"/font/Awesome_Regular.json",(font)=>{
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
    render.outputColorSpace = THREE.SRGBColorSpace; 
    render.toneMapping = THREE.ACESFilmicToneMapping;
    render.toneMappingExposure = 1.0;  
    
    w.addEventListener("resize",()=>{
        sizes.width = w.innerWidth;
        sizes.height = w.innerHeight;
        camera.aspect = sizes.width/sizes.height;
        render.setSize(sizes.width,sizes.height);
        render.render(scene,camera);
    });

    const animate = ()=>{
        controls.update();
        render.render(scene,camera);
        requestAnimationFrame(animate);
    }
    animate();
})(document,window);