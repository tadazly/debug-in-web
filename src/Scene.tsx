import { Suspense } from 'react'
import { Environment, OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Physics, Debug } from '@react-three/cannon'
import useStore from './stores/useStore'
import Floor from './components/physic/cannon/floor'
import Jelly from './components/physic/cannon/jelly'
import RagdollScene from './components/ragdoll/ragdollScene'
import { useControls, button } from 'leva'
import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing'
import CrystallBall from './components/mesh/crystalBall'
import Bunny from './components/mesh/bunny'

export default function Scene() {
    const { idArray, enableOrbitControls, add } = useStore()
    const { gravity, autoRotate } = useControls({
        gravity: { value: [0, -9.8], step: 1, joystick: "invertY" },
        autoRotate: {value: true}
    })
    const { jellyScale } = useControls("Jelly", {
        jellyScale: { value: 2, min: 0.1, max: 10, step: 0.1 },
        addJelly: button(() => add(1)),
        addJelly30: button(() => add(30)),
    })
    const { enabled: DOFswitch, focusDistance, focalLength, bokehScale, height } = useControls("DepthOfField", {
        enabled: {value: true},
        focusDistance: {value: 0.62, min: 0, max: 1, step: 0.001},
        focalLength: {value: 0.2, min: 0, max: 1, step: 0.001},
        bokehScale: {value: 3, min: 1, max: 5, step: 0.001},
        height: {value: 600, min: 1, max: 1000, step: 1},
    })

    return <>
        {/* <Perf position="top-left" /> */}
        <OrbitControls makeDefault enabled={enableOrbitControls} autoRotate={autoRotate} autoRotateSpeed={0.25} />
        {/* <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} /> */}
        <color attach="background" args={['#171720']} />
        <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/industrial_workshop_foundry_1k.hdr" />
        <fog attach="fog" args={['#171720', 60, 90]} />
        <ambientLight intensity={0.2} />
        <pointLight position={[-20, -5, -20]} color="red" />
        <Physics allowSleep={true} gravity={[...gravity, 0]}>
            {/* <Bunny scale={30} position={[40, -7, 40]} /> */}
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
            <CrystallBall position={[8,4,0]}/>
        </Physics>
        <EffectComposer>
            {DOFswitch ? <DepthOfField focusDistance={focusDistance} focalLength={focalLength} bokehScale={bokehScale} height={height} /> : <></>}
            {/* <Bloom luminanceThreshold={1} intensity={10} levels={9} mipmapBlur /> */}
        </EffectComposer>
    </>
}