import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Physics } from '@react-three/rapier'
import useStore from './stores/useStore'
import Cube from './components/object/cube'
import Twister from './components/object/twister'
import Ground from './components/object/ground'
import Instance from './components/object/instance'
import Jelly from './components/spline/jelly'
import Floor from './components/object/floor'

export default function Scene() {
    const { idArray } = useStore()

    return <>
        <Perf position="top-left" />
        <OrbitControls makeDefault />
        {/* <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} /> */}
        {/* <ambientLight intensity={0.5} /> */}
        <color attach="background" args={['#171720']} />
        <fog attach="fog" args={['#171720', 60, 90]} />
        <ambientLight intensity={0.2} />
        <pointLight position={[-20, -5, -20]} color="red" />F
        <Physics gravity={[0, -9.81, 0]}>
            {/* <Ground /> */}
            <Floor position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]} />
            {idArray.map(id => 
                <Jelly key={id} uniqueId={id} />
            )}

            {/* <Cube /> */}
            {/* <Twister position={[0, -0.8, 0]} friction={0} /> */}
            {/* <Instance /> */}
        </Physics>
    </>
}