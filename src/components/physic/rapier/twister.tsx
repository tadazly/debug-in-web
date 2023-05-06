import { RigidBody } from '@react-three/rapier'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'
import type { RapierRigidBody, RigidBodyProps } from '@react-three/rapier'

export default function Twister(props: RigidBodyProps) {

	const twister = useRef<RapierRigidBody>(null)

    useFrame((state) => {
        const time = state.clock.getElapsedTime()
        const eulerRotation = new THREE.Euler(0, time * 10, 0);
        const quaternionRotation = new THREE.Quaternion()
        quaternionRotation.setFromEuler(eulerRotation);
        twister?.current?.setNextKinematicRotation(quaternionRotation)

        const angle = time * 1
        const x = Math.cos(angle) * 2
        const z = Math.sin(angle) * 2
        twister?.current?.setNextKinematicTranslation({ x: x, y: -0.8, z: z })
    })

    return <>
        <RigidBody
            ref={twister}
            friction={0}
            type="kinematicPosition"
            {...props}
        >
            <mesh castShadow scale={[0.4, 0.4, 3]}>
                <boxGeometry />
                <meshStandardMaterial color="red" />
            </mesh>
        </RigidBody>
    </>
}