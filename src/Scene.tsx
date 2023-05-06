import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
// import { Perf } from 'r3f-perf'
import { Physics } from '@react-three/cannon'
import useStore from './stores/useStore'
import Floor from './components/physic/cannon/floor'
import Jelly from './components/physic/cannon/jelly'
import RagdollScene from './ragdoll/ragdollScene'

export default function Scene() {
    const { idArray } = useStore()

    return <>
        {/* <Perf position="top-left" /> */}
        <OrbitControls makeDefault={false} />
        {/* <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} /> */}
        <color attach="background" args={['#171720']} />
        <fog attach="fog" args={['#171720', 60, 90]} />
        <ambientLight intensity={0.2} />
        <pointLight position={[-20, -5, -20]} color="red" />
        <Physics>
            {/* <Ground /> */}
            <Floor position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]} />

            <RagdollScene />
            <Suspense
                fallback={null}
            >
                {idArray.map(id =>
                    <Jelly key={id} uniqueId={id} />
                )}
            </Suspense>
        </Physics>
    </>
}