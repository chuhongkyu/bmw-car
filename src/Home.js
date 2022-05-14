import React, { Suspense, useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { ContactShadows, Environment, useGLTF, OrbitControls} from "@react-three/drei"
import { HexColorPicker } from "react-colorful"
import { proxy, useSnapshot } from "valtio"

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const state = proxy({
    current: null,
    items: {
      outbehindLight:"#ffffff",
      windowbar: "#ffffff",
      begi: "black",
      body: "#ffffff",
      mat: "#ffffff",
      insideLight: "#ffffff",
      insideLight2: "#ffffff",
      plate: "#ffffff",
      wheelnut: "#ffffff",
      seat: "#ffffff",
      behindLight: "#ffffff",
      glass: "#ffffff",
      sliver: "#ffffff",
      lightglass: "#ffffff",
      bottom: "black",
      logo: "#ffffff",
      black: "#ffffff",
    },
  })
  
  function Car() {
    const ref = useRef()
    const snap = useSnapshot(state)
    const { nodes, materials } = useGLTF(`${env.PUBLIC_URL}/assets/bmw.glb`)
   
    useFrame((state) => {
      ref.current.rotation.x = 300
      ref.current.rotation.z = 9.5
    })
  
    // Cursor showing current color
    const [hovered, set] = useState(null)
    useEffect(() => {
      const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.items[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`
      const auto = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`
      if (hovered) {
        document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(cursor)}'), auto`
        return () => (document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(auto)}'), auto`)
      }
    }, [hovered])
  
  
    return (
      <group
        ref={ref}
        dispose={null}
        onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
        onPointerOut={(e) => e.intersections.length === 0 && set(null)}
        onPointerMissed={() => (state.current = null)}
        onClick={(e) => (e.stopPropagation(), (state.current = e.object.material.name))} scale={0.05}>
          <mesh receiveShadow castShadow geometry={nodes.car_1.geometry} material-color={snap.items.begi} material={materials.begi} />
          <mesh receiveShadow castShadow geometry={nodes.car_2.geometry} material-color={snap.items.windowbar} material={materials.windowbar} />
          <mesh receiveShadow castShadow geometry={nodes.car_3.geometry} material-color={snap.items.insideLight} material={materials.insideLight} />
          <mesh receiveShadow castShadow geometry={nodes.car_4.geometry} material-color={snap.items.mat} material={materials.mat} />
          <mesh receiveShadow castShadow geometry={nodes.car_5.geometry} material-color={snap.items.insideLight2} material={materials.insideLight2} />
          <mesh receiveShadow castShadow geometry={nodes.car_6.geometry} material-color={snap.items.seat} material={materials.seat} />
          <mesh receiveShadow castShadow geometry={nodes.car_7.geometry} material-color={snap.items.window} material={materials.window} />
          <mesh receiveShadow castShadow geometry={nodes.car_8.geometry} material-color={snap.items.plate} material={materials.plate} />
          <mesh receiveShadow castShadow geometry={nodes.car_9.geometry} material-color={snap.items.behindLight} material={materials.behindLight} />
          <mesh receiveShadow castShadow geometry={nodes.car_10.geometry} material-color={snap.items.mirror} material={materials.mirror} />
          <mesh receiveShadow castShadow geometry={nodes.car_11.geometry} material-color={snap.items.lightglass} material={materials.lightglass} />
          <mesh receiveShadow castShadow geometry={nodes.car_12.geometry} material-color={snap.items.logo} material={materials.logo} />
          <mesh receiveShadow castShadow geometry={nodes.car_13.geometry} material-color={snap.items.outbehindLight} material={materials.outbehindLight} />
          <mesh receiveShadow castShadow geometry={nodes.car_14.geometry} material-color={snap.items.wheelnut} material={materials.wheelnut} />
          <mesh receiveShadow castShadow geometry={nodes.car_15.geometry} material-color={snap.items.bottom} material={materials.bottom} />
          <mesh receiveShadow castShadow geometry={nodes.car_16.geometry} material-color={snap.items.wheel} material={materials.wheel} />
          <mesh receiveShadow castShadow geometry={nodes.car_17.geometry} material-color={snap.items.body} material={materials.body} />
          <mesh receiveShadow castShadow geometry={nodes.car_18.geometry} material-color={snap.items.silver} material={materials.silver} />
          <mesh receiveShadow castShadow geometry={nodes.car_19.geometry} material-color={snap.items.black} material={materials.black} />
     </group>
    )
  }
  
  
  function Picker() {
    const snap = useSnapshot(state)
    return (
      <div style={{ display: snap.current ? "block" : "none" }}>
        <HexColorPicker className="picker" color={snap.items[snap.current]} onChange={(color) => (state.items[snap.current] = color)} />
        <h5>{snap.current}</h5>
      </div>
    )
  }

const Home =() =>{

    return(
        <div className="Home">
            <div className="main_grid">
              <div style={{backgroundImage:`url(${env.PUBLIC_URL}/assets/01.jpg)`}} className="content_1"></div>
              <div style={{backgroundImage:`url(${env.PUBLIC_URL}/assets/back.png)`}} className="content_2"></div>
              <div className="content_3">
                <img className="small_img" src={env.PUBLIC_URL + "/assets/01.jpg"}alt="car_1"/>
              </div>
              <div style={{backgroundImage:`url(${env.PUBLIC_URL}/assets/BMWLOGO.png)`}} className="content_4"></div>
              
              <div className="main_content">
                  <h1>Make your first Bmw Car</h1>
                  <Canvas camera={{ fov: 55, position: [0, 300, 600]}}>
                    <ambientLight intensity={0.7} />
                    <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                    <Suspense fallback={null}>
                      <Car/>
                      <Environment preset="city" />
                      <ContactShadows />
                    </Suspense>
                    <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false} enablePan={false}  />
                  </Canvas>
                  <Picker />
              </div>
              <div style={{backgroundImage:`url(${env.PUBLIC_URL}/assets/06.png)`}} className="content_5"></div>
              <div style={{backgroundImage:`url(${env.PUBLIC_URL}/assets/02.png)`}} className="content_6"></div>

              <div className="content_7">
                  <div className="content_img">
                    <span>{"<"}</span>
                    <span>Who We are?</span>
                  </div>
                  <img src={env.PUBLIC_URL + "/assets/04.png"} alt="car_2"/>
              </div>

                <div className="content_8">
                    <div className="content_img">
                        <span>{"<"}</span>
                        <span>Nice</span>
                    </div>
                    <img src={env.PUBLIC_URL + "/assets/04.png"} alt="car_2"/>
                </div>
            </div>
      </div>
    )

}

export default Home;