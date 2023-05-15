import { Canvas } from '@react-three/fiber'
import Scene from './Scene'
import Overlay from './Overlay'
import TestScene from './TestScene'

export default function App() {
	return <>
		<Canvas
			shadows
			dpr={[1,2]}
			camera={{ position: [-36, 36, 36], fov: 25, near: 1, far: 100 }}
		>	
			<Scene />
		</Canvas>
		<Overlay />
	</>
}