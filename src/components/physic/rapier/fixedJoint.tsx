import { useFixedJoint, RigidBody } from '@react-three/rapier'
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react'
import type { RapierRigidBody } from '@react-three/rapier';
import CubeMesh from '../../mesh/cubeMesh'

export default function FixedJoint({...props}) {
    const bodyA = useRef<RapierRigidBody>(null)
    const bodyB = useRef<RapierRigidBody>(null)
    const joint = useFixedJoint(
        bodyA,
        bodyB,
        [
            // Position of the joint in bodyA's local space
            [1, 1, 0],
            // Orientation of the joint in bodyA's local space
            [0, 0, 0, 1],
            // Position of the joint in bodyB's local space
            [0, 0, 0],
            // Orientation of the joint in bodyB's local space
            [0, 0, 0, 1],
        ])

    useFrame(()=>{
        if (joint.current) {
            // joint.current.configureMotorVelocity(10, 2)
        }
    })

    return (
        <group {...props}>
            <RigidBody ref={bodyA}>
                <CubeMesh />
            </RigidBody>
            <RigidBody ref={bodyB}>
                <CubeMesh />
            </RigidBody>
        </group>
    )
}