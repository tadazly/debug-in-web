import { CuboidCollider, RigidBody } from '@react-three/rapier'
import { useRef } from 'react'
import type { RapierRigidBody,RigidBodyProps } from '@react-three/rapier'

export default function Cube(props: RigidBodyProps) {

	const cube = useRef<RapierRigidBody>(null)

	const cubeJump = () => {
		const mass = cube?.current?.mass() || 1;
		cube?.current?.applyImpulse({ x: -5 * mass, y: 5 * mass, z: 0 }, false);
		cube?.current?.applyTorqueImpulse({
			x: Math.random() - 0.5,
			y: Math.random() - 0.5,
			z: Math.random() - 0.5
		}, false)
	}

	const collisionEnter = () => {
		// console.log('collision')
	}

    const collisionExit = () => {
		// console.log('exit')
    }

	return <>
        <RigidBody
            ref={cube}
            position={[1.5, 2, 0]}
            gravityScale={1}
            restitution={0}
            friction={0.7}
            colliders={false}
            onCollisionEnter={collisionEnter}
            onCollisionExit={collisionExit}
            {...props}
        >
            <mesh
                castShadow
                onClick={cubeJump}
                onPointerEnter={() => { document.body.style.cursor = 'pointer' }}
                onPointerLeave={() => { document.body.style.cursor = 'default' }}
            >
                <boxGeometry />
                <meshStandardMaterial color="mediumpurple" />
            </mesh>
            <CuboidCollider mass={20} args={[0.5, 0.5, 0.5]} />
        </RigidBody>
	</>
}