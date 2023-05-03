import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import App from './App.tsx'

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement);
root.render(
    <Canvas
      shadows
      camera={ {
          fov: 45,
          near: 0.1,
          far: 200,
          position: [ 4, 2, 6 ]
      } }
    >
        <App />
    </Canvas>
)