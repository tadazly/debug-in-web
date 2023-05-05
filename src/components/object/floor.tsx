import { MeshReflectorMaterial } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export default function Floor(props: JSX.IntrinsicElements['mesh']) {
    return (
      <RigidBody
        type="fixed"
        friction={0.7}
    >
      <mesh receiveShadow {...props}>
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
    </RigidBody>
    )
  }
  