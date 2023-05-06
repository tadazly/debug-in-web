import { RigidBody, CuboidCollider } from '@react-three/rapier'

export default function Ground() {
	return <>
        <RigidBody
            type="fixed"
            friction={0.7}
        >
            <mesh receiveShadow position-y={- 1.25}>
                <boxGeometry args={[10, 0.5, 10]} />
                <meshStandardMaterial color="black" />
            </mesh>
        </RigidBody>

        <RigidBody type="fixed">
            <CuboidCollider args={[5, 20, 0.5]} position={[0, 1, 5.5]} />
            <CuboidCollider args={[5, 20, 0.5]} position={[0, 1, -5.5]} />
            <CuboidCollider args={[0.5, 20, 5]} position={[5.5, 1, 0]} />
            <CuboidCollider args={[0.5, 20, 5]} position={[-5.5, 1, 0]} />
        </RigidBody>
	</>
}