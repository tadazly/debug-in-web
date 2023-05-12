import { usePlane } from '@react-three/cannon'
import { MeshReflectorMaterial } from '@react-three/drei'
import type { Mesh } from 'three'
import type {BodyProps} from '@react-three/cannon'

export default function Floor(props: BodyProps) {
    const [ref] = usePlane<Mesh>(() => ({ type: "Static", ...props }))
    return (
      <mesh ref={ref} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <MeshReflectorMaterial
          color="#878790"
          blur={[500, 400]}
          resolution={1024}
          mixBlur={1}
          mixStrength={3}
          depthScale={0.3}
          minDepthThreshold={0.95}
          metalness={0}
          roughness={1}
          mirror={1}
        />
      </mesh>
    )
  }
  