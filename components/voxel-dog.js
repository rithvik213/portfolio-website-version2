import { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../lib/model'
import { DogSpinner, DogContainer } from './voxel-dog-loader'

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const VoxelDog = () => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)
  const [renderer, setRenderer] = useState()
  const [_camera, setCamera] = useState()
  const [target] = useState(new THREE.Vector3(0, -0.2, 0))  // Adjusted Y position
  const [initialCameraPosition] = useState(
    new THREE.Vector3(0, 10, 20)
  )
  const [scene] = useState(new THREE.Scene())
  const [_controls, setControls] = useState()

  const handleWindowResize = useCallback(() => {
    const { current: container } = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      renderer.setSize(scW, scH)
    }
  }, [renderer])

  useEffect(() => {
    const { current: container } = refContainer
    if (container && !renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        precision: "highp"
      })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)
      renderer.outputEncoding = THREE.sRGBEncoding
      renderer.shadowMap.enabled = false;
      container.appendChild(renderer.domElement)
      setRenderer(renderer)

      const scale = scH * 0.0018
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.1,
        3000
      )
      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)
      setCamera(camera)

      // Lighting adjustments
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
      scene.add(ambientLight)

      const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.5)
      directionalLight1.position.set(5, 10, 7.5)
      scene.add(directionalLight1)

      const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5)
      directionalLight2.position.set(-5, 10, -7.5)
      scene.add(directionalLight2)

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.enableDamping = true
      controls.dampingFactor = 0.1
      controls.target = target
      setControls(controls)

      loadGLTFModel(scene, '/genny_final_ricky_2.glb', {
        receiveShadow: false,
        castShadow: false
      }).then((gltf) => {
        if (gltf && gltf.scene) {
          scene.clear()

          const model = gltf.scene
          model.scale.set(0.001, 0.001, 0.001)
          model.position.set(0, 0, 0)

          model.traverse((node) => {
            if (node.isMesh) {
              // Dispose of existing material to avoid memory leaks
              if (node.material) {
                if (Array.isArray(node.material)) {
                  node.material.forEach(mat => mat.dispose());
                } else {
                  node.material.dispose();
                }
              }
          
              // Apply a new gray material
              node.material = new THREE.MeshLambertMaterial({
                color: 0x808080, // Gray color
                metalness: 0.0,  // Ensure no metalness to avoid reflections
                roughness: 1.0,  // Increase roughness to minimize any reflections
              });
          
              // Ensure that no textures are applied
              if (node.material.map) node.material.map = null;
              if (node.material.envMap) node.material.envMap = null;
              if (node.material.specularMap) node.material.specularMap = null;
              if (node.material.lightMap) node.material.lightMap = null;
            }
          });
               

          scene.add(model)
          controls.target.copy(target)
          controls.update()
          camera.lookAt(target)
        } else {
          console.error("GLTF model or scene not loaded correctly.")
        }
        animate()
        setLoading(false)
      }).catch(error => {
        console.error("Error loading GLTF model:", error)
        setLoading(false)
      })

      let req = null
      const animate = () => {
        req = requestAnimationFrame(animate)
        controls.update()
        renderer.render(scene, camera)
      }

      return () => {
        cancelAnimationFrame(req)
        renderer.domElement.remove()
        renderer.dispose()
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [renderer, handleWindowResize])

  return (
    <DogContainer ref={refContainer}>{loading && <DogSpinner />}</DogContainer>
  )
}

export default VoxelDog