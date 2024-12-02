import * as THREE from 'three';
import ringSpace from './ringspace.js';
import sunCamera from './camera.js';

function main() {
    const canvas = document.querySelector('#sol');
    const renderer = new THREE.WebGLRenderer({antialias: true, canvas});
    renderer.setSize( window.innerWidth, window.innerHeight );

    const camera = sunCamera()

    const scene = new THREE.Scene();

    const space = ringSpace(100, 30);

    space.forEach((ring) => {
        ring.forEach((piece) => {
            scene.add(piece)
        })
    })



    // const lightSphereMaterial = new THREE.MeshStandardMaterial({ 
    //     color: 0xff0040, 
    //     emissive: 0xff0040,
    //     emissiveIntensity: 100,
    //     wireframe: true
    // });
    // const sphere = new THREE.SphereGeometry(25);
    // const light = new THREE.PointLight(0xffffff, 10, 5000);
    // light.add(new THREE.Mesh(sphere, lightSphereMaterial));
    // light.position.set( 0, 0, 0 );
    // scene.add( light );
    // const helper = new THREE.PointLightHelper(light, 30);
    // scene.add(helper);


    renderer.render(scene, camera);

    let lastTime = Date.now();
    let counter = 0
    const delay = 10;
    let toggler = true
    function animate() {
        const now = Date.now();
        const waveSpeed = 0.05; 
        const waveOffset = 0.3;
        const waveAmplitude = 0.1;
    
        space.forEach((ring, i) => {
            const rand = Math.random()
            const minus = i % 2 == 0 ? 1 : -1
            const wavePhase = Math.sin(counter * waveSpeed - i * waveOffset) * waveAmplitude;
            ring.forEach((piece, j) => {
                piece.position.z += wavePhase * i * 0.1
                if (minus === 1) {
                    piece.rotation.z += 0.0001
                } else {
                    piece.rotation.z -= 0.0001
                }
            });
        });
    
        if (now - lastTime >= delay) {
            counter++;
            lastTime = now;
        }

        // light.rotation.y += 0.01
    
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }
    animate();
}

main();
