import { RigidBody } from '@react-three/rapier'
import type { RigidBodyProps } from '@react-three/rapier'

export default function Ball(props: RigidBodyProps) {

	return <>
        <RigidBody 
            colliders="ball" 
            restitution={1}
            {...props}
        >
            <mesh castShadow position={[-1.5, 2, 0]}>
                <sphereGeometry />
                <meshStandardMaterial color="orange" />
            </mesh>
        </RigidBody>
	</>
}