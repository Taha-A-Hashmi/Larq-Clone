import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';



// Creating renderer for first product
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(3, 1, 4);

const renderer = new THREE.WebGLRenderer({
    antialias: true
});
renderer.gammaFactor = 2.2;  
renderer.outputEncoding = THREE.sRGBEncoding; 
renderer.setSize( 250, 250 );
document.querySelector('#banner-product').appendChild(renderer.domElement);
renderer.setClearColor(0xf4f8fa);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setAnimationLoop( animate );



//Creating scenes
const scene = new THREE.Scene();


// Lights
const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
directionalLight.position.set(15, 15, 15);
scene.add(directionalLight);
const directionalLight2 = new THREE.DirectionalLight(0xffffff, 3);
directionalLight2.position.set(-15, -15, -15);
scene.add(directionalLight2);

// const lightHelper = new THREE.DirectionalLightHelper(directionalLight, 5, 0x000000);
// scene.add(lightHelper);
// const lightHelper2 = new THREE.DirectionalLightHelper(directionalLight2, 5, 0x000000);
// scene.add(lightHelper2);



// Orbit Controls
const orbit = new OrbitControls(camera, renderer.domElement)
orbit.update();
orbit.enableDamping = true;
orbit.dampingFactor = 0.25;
orbit.enableZoom = true;
orbit.zoomSpeed = 1.0;
orbit.minDistance = 3;
orbit.maxDistance = 7;



// Loading Figure
const loader = new GLTFLoader();
let bottle;
loader.load(
    './Images/Bottle1/scene.gltf', 
    function(gltf){
        bottle = gltf.scene;
        scene.add(bottle);
        bottle.position.set(0,0,0);
        bottle.scale.set(0.004, 0.004, 0.004);
    },
    undefined,
    function (error) {
        console.log(error);
    }
)

// Rotating off when product is clicked
let isRotating = true;
document.querySelector('#banner-product').addEventListener('mousedown', function () {
    isRotating = false;
})
document.querySelector('#banner-product').addEventListener('mouseup', function () {
    isRotating = true;
})



/****** Product 1 ******/
const product1Camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
product1Camera.position.set(3, 1, 4);
const product1Renderer = new THREE.WebGLRenderer({
    antialias: true
});
product1Renderer.gammaFactor = 2.2;  
product1Renderer.outputEncoding = THREE.sRGBEncoding; 
product1Renderer.setSize( 250, 250 );
document.querySelector('.products').children[2].children[1].appendChild(product1Renderer.domElement);
product1Renderer.setClearColor(0xf4f8fa);
product1Renderer.setPixelRatio(window.devicePixelRatio);
product1Renderer.setAnimationLoop( animate );
const product1Scene = new THREE.Scene();

// Adding Lights
const product1Light1 = new THREE.DirectionalLight(0xffffff, 3);
product1Light1.position.set(15, 15, 15);
const product1Light2 = new THREE.DirectionalLight(0xffffff, 3);
product1Light2.position.set(-15, -15, -15);
product1Scene.add(product1Light1);
product1Scene.add(product1Light2);

// Adding orbit Controls
const product1Orbit = new OrbitControls(product1Camera, product1Renderer.domElement)
product1Orbit.update();
product1Orbit.enableDamping = true;
product1Orbit.dampingFactor = 0.25;
product1Orbit.enableZoom = true;
product1Orbit.zoomSpeed = 1.0;
product1Orbit.minDistance = 3;
product1Orbit.maxDistance = 7;

// Adding Product Image
const product1Loader = new GLTFLoader();
let product1;
product1Loader.load(
    './Images/Bottle1/scene.gltf', 
    function(gltf){
        product1 = gltf.scene;
        product1Scene.add(product1);
        product1.position.set(0,0,0);
        product1.scale.set(0.004, 0.004, 0.004);
    },
    undefined,
    function (error) {
        console.log(error);
    }
)

// Rotation
let isRotating1 = true;
document.querySelector('.products').children[2].children[1].addEventListener('mousedown', function () {
    isRotating1 = false;
})
document.querySelector('.products').children[2].children[1].addEventListener('mouseup', function () {
    isRotating1 = true;
})



/****** Product 2 ******/
const product2Camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
product2Camera.fov = 10;
product2Camera.position.set(0, 0, 0);
const product2Renderer = new THREE.WebGLRenderer({
    antialias: true
});
product2Renderer.gammaFactor = 2.2;  
product2Renderer.outputEncoding = THREE.sRGBEncoding; 
product2Renderer.setSize( 250, 250 );
document.querySelector('.products').children[3].children[1].appendChild(product2Renderer.domElement);
product2Renderer.setClearColor(0xf4f8fa);
product2Renderer.setPixelRatio(window.devicePixelRatio);
product2Renderer.setAnimationLoop( animate );
const product2Scene = new THREE.Scene();

// Adding Lights
const product2Light1 = new THREE.DirectionalLight(0xffffff, 3);
product2Light1.position.set(15, 15, 15);
const product2Light2 = new THREE.DirectionalLight(0xffffff, 3);
product2Light2.position.set(-15, -15, -15);
product2Scene.add(product2Light1);
product2Scene.add(product2Light2);

// Adding orbit Controls
const product2Orbit = new OrbitControls(product2Camera, product2Renderer.domElement);
product2Orbit.update();
product2Orbit.enableDamping = true;
product2Orbit.dampingFactor = 0.25;
product2Orbit.enableZoom = true;
product2Orbit.zoomSpeed = 1.0;
product2Orbit.minDistance = 5;
product2Orbit.maxDistance = 100;

// Adding Product Image
const product2Loader = new OBJLoader();
let product2;
product2Loader.load(
    './Images/Bottle2/water bottle.obj', 
    function(object){
        product2 = object;
        product2Scene.add(object);
        product2.position.set(1,-13,-27);
    },
    undefined,
    function (error) {
        console.log(error);
    }
)

// Rotation for Product 2
let isRotating2 = true;
document.querySelector('.products').children[3].children[1].addEventListener('mousedown', function () {
    isRotating2 = false;
})
document.querySelector('.products').children[3].children[1].addEventListener('mouseup', function () {
    isRotating2 = true;
})



/****** Product 3 ******/
const product3Camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
product3Camera.position.set(3, 1, 4);
const product3Renderer = new THREE.WebGLRenderer({
    antialias: true
});
product3Renderer.gammaFactor = 2.2;  
product3Renderer.outputEncoding = THREE.sRGBEncoding; 
product3Renderer.setSize( 250, 250 );
document.querySelector('.products').children[4].children[1].appendChild(product3Renderer.domElement);
product3Renderer.setClearColor(0xf4f8fa);
product3Renderer.setPixelRatio(window.devicePixelRatio);
product3Renderer.setAnimationLoop( animate );
const product3Scene = new THREE.Scene();

// Adding Lights
const product3Light1 = new THREE.DirectionalLight(0xffffff, 3);
product3Light1.position.set(15, 15, 15);
const product3Light2 = new THREE.DirectionalLight(0xffffff, 3);
product3Light2.position.set(-15, -15, -15);
product3Scene.add(product3Light1);
product3Scene.add(product3Light2);

// Adding orbit Controls
const product3Orbit = new OrbitControls(product3Camera, product3Renderer.domElement);
product3Orbit.update();
product3Orbit.enableDamping = true;
product3Orbit.dampingFactor = 0.25;
product3Orbit.enableZoom = true;
product3Orbit.zoomSpeed = 1.0;
product3Orbit.minDistance = 3;
product3Orbit.maxDistance = 7;

// Adding Product Image
const product3Loader = new GLTFLoader();
let product3;
product3Loader.load(
    './Images/Bottle1/scene.gltf', 
    function(gltf){
        product3 = gltf.scene;
        product3Scene.add(product3);
        product3.position.set(0,0,0);
        product3.scale.set(0.004, 0.004, 0.004);
    },
    undefined,
    function (error) {
        console.log(error);
    }
)

// Rotation for Product 3
let isRotating3 = true;
document.querySelector('.products').children[4].children[1].addEventListener('mousedown', function () {
    isRotating3 = false;
})
document.querySelector('.products').children[4].children[1].addEventListener('mouseup', function () {
    isRotating3 = true;
})



/****** Product 4 ******/
const product4Camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
product4Camera.position.set(3, 1, 4);
const product4Renderer = new THREE.WebGLRenderer({
    antialias: true
});
product4Renderer.gammaFactor = 2.2;  
product4Renderer.outputEncoding = THREE.sRGBEncoding; 
product4Renderer.setSize( 250, 250 );
document.querySelector('.products').children[5].children[1].appendChild(product4Renderer.domElement);
product4Renderer.setClearColor(0xf4f8fa);
product4Renderer.setPixelRatio(window.devicePixelRatio);
product4Renderer.setAnimationLoop( animate );
const product4Scene = new THREE.Scene();

// Adding Lights
const product4Light1 = new THREE.DirectionalLight(0xffffff, 3);
product4Light1.position.set(15, 15, 15);
const product4Light2 = new THREE.DirectionalLight(0xffffff, 3);
product4Light2.position.set(-15, -15, -15);
product4Scene.add(product4Light1);
product4Scene.add(product4Light2);

// Adding orbit Controls
const product4Orbit = new OrbitControls(product4Camera, product4Renderer.domElement);
product4Orbit.update();
product4Orbit.enableDamping = true;
product4Orbit.dampingFactor = 0.25;
product4Orbit.enableZoom = true;
product4Orbit.zoomSpeed = 1.0;
product4Orbit.minDistance = 3;
product4Orbit.maxDistance = 7;

// Adding Product Image
const product4Loader = new GLTFLoader();
let product4;
product4Loader.load(
    './Images/Bottle1/scene.gltf', 
    function(gltf){
        product4 = gltf.scene;
        product4Scene.add(product4);
        product4.position.set(0,0,0);
        product4.scale.set(0.004, 0.004, 0.004);
    },
    undefined,
    function (error) {
        console.log(error);
    }
)

// Rotation for Product 4
let isRotating4 = true;
document.querySelector('.products').children[5].children[1].addEventListener('mousedown', function () {
    isRotating4 = false;
})
document.querySelector('.products').children[5].children[1].addEventListener('mouseup', function () {
    isRotating4 = true;
})



/****** Product 5 ******/
const product5Camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
product5Camera.position.set(3, 1, 4);
const product5Renderer = new THREE.WebGLRenderer({
    antialias: true
});
product5Renderer.gammaFactor = 2.2;  
product5Renderer.outputEncoding = THREE.sRGBEncoding; 
product5Renderer.setSize( 250, 250 );
document.querySelector('.products').children[6].children[1].appendChild(product5Renderer.domElement);
product5Renderer.setClearColor(0xf4f8fa);
product5Renderer.setPixelRatio(window.devicePixelRatio);
product5Renderer.setAnimationLoop( animate );
const product5Scene = new THREE.Scene();

// Adding Lights
const product5Light1 = new THREE.DirectionalLight(0xffffff, 3);
product5Light1.position.set(15, 15, 15);
const product5Light2 = new THREE.DirectionalLight(0xffffff, 3);
product5Light2.position.set(-15, -15, -15);
product5Scene.add(product5Light1);
product5Scene.add(product5Light2);

// Adding orbit Controls
const product5Orbit = new OrbitControls(product5Camera, product5Renderer.domElement);
product5Orbit.update();
product5Orbit.enableDamping = true;
product5Orbit.dampingFactor = 0.25;
product5Orbit.enableZoom = true;
product5Orbit.zoomSpeed = 1.0;
product5Orbit.minDistance = 3;
product5Orbit.maxDistance = 7;

// Adding Product Image
const product5Loader = new GLTFLoader();
let product5;
product5Loader.load(
    './Images/Bottle1/scene.gltf', 
    function(gltf){
        product5 = gltf.scene;
        product5Scene.add(product5);
        product5.position.set(0,0,0);
        product5.scale.set(0.004, 0.004, 0.004);
    },
    undefined,
    function (error) {
        console.log(error);
    }
)

// Rotation for Product 5
let isRotating5 = true;
document.querySelector('.products').children[6].children[1].addEventListener('mousedown', function () {
    isRotating5 = false;
})
document.querySelector('.products').children[6].children[1].addEventListener('mouseup', function () {
    isRotating5 = true;
})



/****** Main animate fucnction ******/
function animate() {
	//renderer.render( scene, camera );
    product1Renderer.render ( product1Scene, product1Camera );
    product2Renderer.render ( product2Scene, product2Camera );
    //product3Renderer.render ( product3Scene, product3Camera );
    // product4Renderer.render ( product4Scene, product4Camera );
    // product5Renderer.render ( product5Scene, product5Camera );
    orbit.update();
    product1Orbit.update();
    product2Orbit.update();
    product3Orbit.update();
    product4Orbit.update();
    product5Orbit.update();
    if (bottle && isRotating) {
        bottle.rotation.y += -0.01;
    }
    if (product1 && isRotating1) {
        product1.rotation.y += -0.01;
    }
    if (product2 && isRotating2) {
        product2.rotation.y += -0.01;
    }
    if (product3 && isRotating3) {
        product3.rotation.y += -0.01;
    }
    if (product4 && isRotating4) {
        product4.rotation.y += -0.01;
    }
    if (product5 && isRotating5) {
        product5.rotation.y += -0.01;
    }
}
