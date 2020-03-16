import * as THREE from 'three'
import React, { useCallback, useEffect, useRef, useMemo,Component } from 'react'
import {renderScene} from './renderScene';

export function Circle(renderer, scene, camera) {
  const geometry = new THREE.CircleGeometry(6, 32);
  const material = new THREE.MeshBasicMaterial({transparent: true, opacity: 0.5, color: '#00FFFF'})
  const circleleft = new THREE.Mesh(geometry, material)
  const circleright = new THREE.Mesh(geometry, material)
  const circlethird = new THREE.Mesh(geometry, material)
  const circlefourth = new THREE.Mesh(geometry, material)
  const circlefifth = new THREE.Mesh(geometry, material)

  let frameId = -1
  let dx, dy, dz, limit
  function init() {
    scene.add(circleleft)
    scene.add(circleright)
    circleright.position.x = 50
    circleright.position.y = 1
    dx = -0.4, dy = 0, dz = 10, limit = 90
  }
  function change(x, y, z, tmplimit) {
    dx = x, dy = y, dz = z, limit = tmplimit
  }
  function move(target) {
    target.position.z += dz
    target.position.y += dy
    target.position.x += dx
  }

  function movefifthRight() {
    if(circlefifth.position.z <= limit) {
      window.cancelAnimationFrame(frameId)
    } else {
      move(circlefifth)
      frameId = window.requestAnimationFrame(movefifthRight)
      renderScene(renderer, scene, camera)
    }
  }
  function movefourthRight() {
    if(circlefourth.position.z <= limit) {
      window.cancelAnimationFrame(frameId)
      change(5.9, -0.6, -8, 20)
    } else {
      move(circlefourth)
      frameId = window.requestAnimationFrame(movefourthRight)
      renderScene(renderer, scene, camera)
    }
  }
  function movethirdRight() {
    if(circlethird.position.z <= limit) {
      window.cancelAnimationFrame(frameId)
      change(5.9, -0.6, -8, 20)
      movefourthRight()
    } else {
      move(circlethird)
      frameId = window.requestAnimationFrame(movethirdRight)
      renderScene(renderer, scene, camera)
    }
  }
  function movefourthForward() {
    if(circlefourth.position.z >= limit) {
      window.cancelAnimationFrame(frameId)
      scene.add(circlefifth)
      circlefifth.position.x = -3.6
      circlefifth.position.y = 0
      circlefifth.position.z = 90
      change(6.5, 2, -8, 20)
      movethirdRight()
    } else {
      move(circlefourth)
      frameId = window.requestAnimationFrame(movefourthForward)
      renderScene(renderer, scene, camera)
    }
  }
  function movethirdForward() {
    if(circlethird.position.z >= limit) {
      window.cancelAnimationFrame(frameId)
      console.log(circlethird.position)
      change(-5.3, 0.5, 9.9, 85)
      movefourthForward()
    } else {
      move(circlethird)
      frameId = window.requestAnimationFrame(movethirdForward)
      renderScene(renderer, scene, camera)
    }
  }
  function moverightBackward() {
    if(circleright.position.z <= limit) {
      window.cancelAnimationFrame(frameId)
      scene.add(circlethird)
      scene.add(circlefourth)
      circlefourth.position.x = 50
      circlefourth.position.y = 2
      change(-0.4, 0, 10, 90)
      movethirdForward()
    } else {
      move(circleright)
      frameId = window.requestAnimationFrame(moverightBackward)
      renderScene(renderer, scene, camera)
    }
  }
  function moveleftBackward() {
    if(circleleft.position.z <= limit) {
      window.cancelAnimationFrame(frameId)
      change(5.9, 4, -8, 20)
      moverightBackward()
    } else {
      move(circleleft)
      frameId = window.requestAnimationFrame(moveleftBackward)
      renderScene(renderer, scene, camera)
    }
  }
  function moverightForward() {
    if(circleright.position.z >= limit) {
      window.cancelAnimationFrame(frameId)
      change(6.5, 6, -8, 20)
      moveleftBackward()
    } else {
      move(circleright)
      frameId = window.requestAnimationFrame(moverightForward)
      renderScene(renderer, scene, camera)
    }
  }
  
  function moveleftForward() {
    if(circleleft.position.z >= limit) {
      window.cancelAnimationFrame(frameId)
      change(-5.3, 0, 9.9, 85)
      moverightForward()
    } else {
      move(circleleft)
      frameId = window.requestAnimationFrame(moveleftForward)
      renderScene(renderer, scene, camera)
    }
  }
  
  async function start() {
    var result = await moveleftForward()
  }
  
  init()
  start()
}
