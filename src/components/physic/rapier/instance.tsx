import { InstancedRigidBodies } from '@react-three/rapier'
import { useRef, useMemo } from 'react'
import type { InstancedRigidBodyProps } from '@react-three/rapier'

export default function Instance() {
	const cubesCount = 200
	const cubes = useRef<THREE.InstancedMesh>(null)
	const instances = useMemo(() => {
		const instances: InstancedRigidBodyProps[] = [];
		for (let i = 0; i < cubesCount; i++) {
			const scale = 0.2 + Math.random() * 0.8
			instances.push({
				key: 'instance_' + Math.random(),
				position: [
					(Math.random() - 0.5) * 8,
					6 + i * 0.2,
					(Math.random() - 0.5) * 8
				],
				rotation: [Math.random(), Math.random(), Math.random()],
				scale: [scale, scale, scale],
			});
		}
		return instances;
	}, [])

	return <>
        <InstancedRigidBodies
            instances={instances}
        >
            <instancedMesh castShadow ref={cubes} args={[undefined, undefined, cubesCount]}>
                <boxGeometry />
                <meshStandardMaterial color="pink" />
            </instancedMesh>
        </InstancedRigidBodies>
	</>
}