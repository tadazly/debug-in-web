import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { InstancedRigidBodies, CuboidCollider, RigidBody, Physics } from '@react-three/rapier'
import { useRef, useMemo } from 'react'
import type { InstancedRigidBodyProps } from '@react-three/rapier'
import Cube from './components/object/cube'
import Twister from './components/object/twister'
import Ground from './components/object/ground'

export default function App() {
	const cubesCount = 20
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
		<Perf position="top-left" />
		<OrbitControls makeDefault />
		<directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
		<ambientLight intensity={0.5} />
		<Physics debug gravity={[0, -9.81, 0]}>
			<Ground />
			<Cube />
			<Twister position={[0, -0.8, 0]} friction={0} />

			<InstancedRigidBodies
				instances={instances}
			>
				<instancedMesh castShadow ref={cubes} args={[undefined, undefined, cubesCount]}>
					<boxGeometry />
					<meshStandardMaterial color="tomato" />
				</instancedMesh>
			</InstancedRigidBodies>

		</Physics>
	</>
}