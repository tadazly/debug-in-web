import { Canvas } from '@react-three/fiber'
import Scene from './Scene'
import Overlay from './Overlay'
import { Suspense } from 'react'

export default function App() {
	return <>
		<Canvas
			shadows
			camera={{ position: [-40, 40, 40], fov: 25, near: 1, far: 100 }}
		>	
			<Scene />
		</Canvas>
		<Overlay />
	</>
}