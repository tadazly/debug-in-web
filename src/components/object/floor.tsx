import { MeshReflectorMaterial } from '@react-three/drei'

export default function Floor(props: JSX.IntrinsicElements['mesh']) {
    return (
      <mesh receiveShadow>
        <planeGeometry args={[100, 100]} />
        <MeshReflectorMaterial
          color="#878790"
          blur={[400, 400]}
          resolution={1024}
          mixBlur={1}
          mixStrength={3}
          depthScale={1}
          minDepthThreshold={0.85}
          metalness={0}
          roughness={1}
          mirror={1}
        />
      </mesh>
    )
  }
  