import { Environment, OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Physics, Debug } from '@react-three/cannon'
import useStore from './stores/useStore'
import { useControls } from 'leva'
import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing'
import PhysicScene from './PhysicScene'

export default function Scene() {
    const { enableOrbitControls } = useStore()
    const { gravity, autoRotate, physicDebug, enablePerf } = useControls({
        gravity: { value: [0, -9.8], step: 1, joystick: "invertY" },
        autoRotate: { value: true },
        physicDebug: { value: false },
        enablePerf: { value: false }
    })
    const { enabled: DOFSwitch, focusDistance, focalLength, bokehScale, height } = useControls("DepthOfField", {
        enabled: { value: true },
        focusDistance: { value: 0.62, min: 0, max: 1, step: 0.001 },
        focalLength: { value: 0.2, min: 0, max: 1, step: 0.001 },
        bokehScale: { value: 3, min: 1, max: 5, step: 0.001 },
        height: { value: 600, min: 1, max: 1000, step: 1 },
    }, {collapsed: true})
    const { enabled: BloomSwitch, luminanceThreshold, intensity, levels, mipmapBlur} = useControls("Bloom", {
        enabled: {value: true},
        luminanceThreshold: { value: 0.82, min: 0, max: 2, step: 0.001 },
        intensity: { value: 1, min: 0, max: 20, step: 0.001 },
        levels: { value: 4, min: 0, max: 10, step: 0.001 },
        mipmapBlur: {value: true},
    }, {collapsed: true})

    return <>
        {enablePerf ? <Perf position="top-left" /> : <></>}
        <OrbitControls makeDefault enabled={enableOrbitControls} autoRotate={autoRotate} autoRotateSpeed={0.25} />
        <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/industrial_workshop_foundry_1k.hdr" />
        <color attach="background" args={['#171720']} />
        <fog attach="fog" args={['#171720', 60, 90]} />
        {/* <ambientLight intensity={0.2} /> */}
        {/* <pointLight position={[-20, -5, -20]} color="red" /> */}
        <Physics allowSleep={true} gravity={[...gravity, 0]}>
            {physicDebug ?
                <Debug>
                    <PhysicScene />
                </Debug> :
                <PhysicScene />
            }
        </Physics>
        <EffectComposer>
            {DOFSwitch ? <DepthOfField focusDistance={focusDistance} focalLength={focalLength} bokehScale={bokehScale} height={height} /> : <></>}
            {BloomSwitch ? <Bloom luminanceThreshold={luminanceThreshold} intensity={intensity} levels={levels} mipmapBlur={mipmapBlur} /> : <></>}
        </EffectComposer>
    </>
}