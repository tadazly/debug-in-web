import { usePrismaticJoint, RigidBody } from '@react-three/rapier'
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react'
import type { RapierRigidBody } from '@react-three/rapier';
import CubeMesh from '../../mesh/cubeMesh'

export default function PrismaticJoint({...props}) {
    const bodyA = useRef<RapierRigidBody>(null)
    const bodyB = useRef<RapierRigidBody>(null)
    const joint = usePrismaticJoint(
        bodyA,
        bodyB,
        [
          // Position of the joint in bodyA's local space    
          [1, 1, 0], 
          [0, 0, 0], 
          // Position of the joint in bodyB's local space
          [0, 1, 0], 
          // Axis of the joint, expressed in the local-space of 
          // the rigid-bodies it is attached to. Cannot be [0,0,0].
          [0, 1, 0], 
        ]);

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