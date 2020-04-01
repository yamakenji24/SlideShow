import * as THREE from 'three'
import React, { useCallback, useEffect, useRef, useMemo, Component } from 'react'
import {renderScene} from './renderScene'
import {Circle} from './Circle';

class Cylinder extends Component {
  componentDidMount() {    
    const count = 120;
    const geometry = new THREE.CylinderBufferGeometry(5, 5, 20, 32);
    const material = new THREE.MeshBasicMaterial({color: '#00FFFF'})
    this.cylinder = new THREE.InstancedMesh(geometry, material, count)
    this.initCylinder(count)

    this.mount.appendChild(this.props.renderer.domElement)
    console.log(this.mount)
    this.start()
  }
  initCylinder(count) {
    const dummy =  new THREE.Object3D()
    
    for (let i = 0; i < count; i++) {
      const speed = 0.01 + Math.random() / 200
      const xFactor = -50 + Math.random() * 100
      const yFactor = -50 + Math.random() * 100
      const zFactor = -900 + Math.random() * 500
      dummy.position.set(
        xFactor, yFactor, zFactor
      )
      dummy.rotation.set(Math.PI/2,0,0)
      dummy.updateMatrix()
      // And apply the matrix to the instanced item
      this.cylinder.setMatrixAt(i, dummy.matrix)
    }
    this.cylinder.instanceMatrix.needsUpdate = true
    this.props.scene.add(this.cylinder)
  }
  
  start() {
    if(!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }
  stop() {
    cancelAnimationFrame(this.frameId)
    this.props.scene.remove(this.cylinder)
    this.cylinder.material.dispose()
    this.cylinder.geometry.dispose()
    Circle(this.props.renderer, this.props.scene, this.props.camera)
  }

  animate = () => {
    if(this.cylinder.position.z >= 1100) {
      this.stop()
    } else {
      this.cylinder.position.z += 8
      //this.render(this.props.renderer, this.props.scene, this.props.camera)
      renderScene(this.props.renderer, this.props.scene, this.props.camera)
      this.frameId = window.requestAnimationFrame(this.animate)
    }
  }
    
  render() {
    return (
      <div
        style={{ width: '100%', height: '850px' }}
        ref={(mount) => {this.mount = mount}}
      />
    )
  }
  
}
export default Cylinder;
