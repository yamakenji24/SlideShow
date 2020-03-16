import React, { useCallback, useEffect, useRef, useMemo, Component } from 'react'
import * as THREE from 'three'
import Cylinder from '../animations/Cylinder';
import Circle from '../animations/Circle';

class LinkStart extends Component {
  constructor(props) {
    super(props);
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    this.camera.position.z = 100;
    
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setClearColor('#FFFFFF')
    this.renderer.setSize(1500, 900);
  }
      
  render() {
    return (
      <div>
        <Cylinder
          camera={this.camera}
          scene={this.scene}
          renderer={this.renderer}
        />
      </div>
      
    )
  }
}

export default LinkStart;
