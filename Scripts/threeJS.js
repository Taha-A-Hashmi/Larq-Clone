import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();

renderer.setAnimationLoop( animate );
renderer.setSize( 250, 250 );
document.querySelector('#banner-product').appendChild( renderer.domElement );
renderer.setClearColor(0xffffff);
camera.position.set(3, 1, 4);

const orbit = new OrbitControls(camera, renderer.domElement)
orbit.update();
orbit.enableDamping = true;
orbit.dampingFactor = 0.25;
orbit.enableZoom = true;
orbit.zoomSpeed = 1.0;
orbit.minDistance = 3;
orbit.maxDistance = 7;

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

const directionalLight = new THREE.DirectionalLight(0xffffff, 5); // Increase intensity
directionalLight.position.set(15, 15, 15);
scene.add(directionalLight);
const directionalLight2= new THREE.DirectionalLight(0xffffff, 5); // Increase intensity
directionalLight2.position.set(-15, -15, -15);
scene.add(directionalLight2);

/*const lightHelper = new THREE.DirectionalLightHelper(directionalLight, 5, 0x000000);
scene.add(lightHelper);
const lightHelper2 = new THREE.DirectionalLightHelper(directionalLight2, 5, 0x000000);
scene.add(lightHelper2);*/

let isRotating = true;
document.querySelector('#banner-product').addEventListener('mousedown', function () {
    isRotating = false;
})
document.querySelector('#banner-product').addEventListener('mouseup', function () {
    isRotating = true;
})


function animate() {
	renderer.render( scene, camera );
    orbit.update();
    if (bottle && isRotating) {
        bottle.rotation.y += -0.03;
    }
}