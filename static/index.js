// 1. Create the scene
var scene = new THREE.Scene()
// 2. Add a camera view
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
camera.position.z = 10
// 3. Add a renderer to generate the camera's picture
var renderer = new THREE.WebGLRenderer()
renderer.setSize( window.innerWidth, window.innerHeight )
// 4. Attach what we're rendering to the web page
document.body.appendChild( renderer.domElement )
// 5. Lighting + Objects
var geometry = new THREE.BoxGeometry(2, 2, 2)
var material = new THREE.MeshLambertMaterial({color: 0xfd59d7})
var cube = new THREE.Mesh(geometry, material)
scene.add(cube)

var light = new THREE.PointLight(0xFFFF00)
light.position.set(10, 0, 25)
scene.add(light)
scene.background = new THREE.Color( 0xf0f0f0 )

// 6. Run the renderer
var animate = function () {
  requestAnimationFrame( animate );

  cube.rotation.x += .05;
  cube.rotation.y += .05;
  camera.updateProjectionMatrix();

  renderer.render(scene, camera);
};

animate();

// 7. Background
var texture = new THREE.CubeTextureLoader()
.setPath( 'assets/textures/cube/Bridge2/' )
.load( [
  'posx.jpg',
  'negx.jpg',
  'posy.jpg',
  'negy.jpg',
  'posz.jpg',
  'negz.jpg'
] );
this.scene.background = texture;

const controls = new THREE.OrbitControls( camera );