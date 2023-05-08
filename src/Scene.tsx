import { Suspense, useState } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Physics, Debug } from '@react-three/cannon'
import useStore from './stores/useStore'
import Floor from './components/physic/cannon/floor'
import Jelly from './components/physic/cannon/jelly'
import RagdollScene from './ragdoll/ragdollScene'
import { useControls, button } from 'leva'

export default function Scene() {
    const { idArray, enableOrbitControls, add } = useStore()
    const { gravity } = useControls({
        gravity: {value: [0, -9.8], step: 1}
    })
    const { jellyScale } = useControls("Jelly",{
        jellyScale: {value: 2, min: 0.1, max: 10, step: 0.1},
        addJelly: button(() => add(1)),
        addJelly50: button(() => add(50)),
    })

    return <>
        <Perf position="top-left" />
        <OrbitControls makeDefault enabled={enableOrbitControls} />
        {/* <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} /> */}
        <color attach="background" args={['#171720']} />
        <fog attach="fog" args={['#171720', 60, 90]} />
        <ambientLight intensity={0.2} />
        <pointLight position={[-20, -5, -20]} color="red" />
        <Physics allowSleep={true} gravity={[...gravity, 0]}>
            <Floor position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]} />
            {/* <Debug> */}
            <RagdollScene />
            <Suspense
               fallback={null}
            >
                {idArray.map(id =>
                    <Jelly key={id} uniqueId={id} scale={jellyScale} />
                )}
            </Suspense>
            {/* </Debug> */}
        </Physics>
    </>
}