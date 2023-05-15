import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import useStore from './stores/useStore'
import { useControls } from 'leva'
import type { PointLight } from 'three'


export default function TestScene() {
    const { enableOrbitControls } = useStore()
    const pointLightRef = useRef<PointLight>(null)
    
    useFrame((state)=>{
        if (pointLightRef.current)
            pointLightRef.current.position.y = Math.sin(state.clock.elapsedTime) * 10
    })

    return <>
        <Perf position="top-left" />
        <OrbitControls makeDefault enabled={enableOrbitControls} />
        <color attach="background" args={['#171720']} />
        <pointLight
            ref={pointLightRef}
            castShadow
            position={[0, 10, 4]}
            color={0xffffff}
            intensity={1}
            distance={20}
            shadow-mapSize-width={512}
            shadow-mapSize-height={512}
            shadow-camera-near={0.5}
            shadow-camera-far={500}
        />
        <mesh receiveShadow position={[0, 0, -4]}>
            <planeGeometry args={[20, 20, 32, 32]} />
            <meshStandardMaterial color={0xffffff} />
        </mesh>
        <mesh castShadow position={[0,0,0]}>
            <torusGeometry args={[6, 1, 16, 100]} />
            <meshStandardMaterial color={0xff0000} />
        </mesh>
    </>
}