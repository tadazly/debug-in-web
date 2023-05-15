import { Suspense } from 'react'
import Floor from './components/physic/cannon/floor'
import RagdollScene from './components/ragdoll/ragdollScene'
import CrystallBall from './components/mesh/crystalBall'
import Jelly from './components/physic/cannon/jelly'
import useStore from './stores/useStore'
import { useControls, button } from 'leva'
import Computer from './components/physic/cannon/computer'

export default function PhysicScene() {
    const { idArray, add } = useStore()

    const { jellyScale } = useControls("Jelly", {
        jellyScale: { value: 3, min: 0.1, max: 10, step: 0.1 },
        addJelly: button(() => add(1)),
        addJelly30: button(() => add(30)),
    })

    return <>
        {/* <Bunny scale={30} position={[40, -7, 40]} /> */}
        <Floor position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]} />
        <RagdollScene />
        <Suspense
            fallback={null}
        >
            {idArray.map(id =>
                <Jelly key={id} uniqueId={id} scale={jellyScale} />
            )}
        </Suspense>
        <CrystallBall position={[8,4,0]}/>
        <Computer position={[8,2,2]}/>
    </>
}