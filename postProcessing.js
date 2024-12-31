// Add post-processing effects
const composer = new THREE.EffectComposer(renderer);
const renderPass = new THREE.RenderPass(scene, camera);
composer.addPass(renderPass);

const bloomPass = new THREE.BloomPass();
composer.addPass(bloomPass);
