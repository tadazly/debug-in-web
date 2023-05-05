import { Canvas } from '@react-three/fiber'
import Scene from './Scene'
import Overlay from './Overlay'
import { Suspense } from 'react'

export default function App() {
	return <>
		<Canvas
			shadows
			camera={{
				fov: 45,
				near: 0.1,
				far: 200,
				position: [4, 2, 6]
			}}
		>	
			<Suspense fallback={null}>
				<Scene />
			</Suspense>
		</Canvas>
		<Overlay />
	</>
}