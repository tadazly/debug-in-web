import { useGLTF, MeshTransmissionMaterial } from '@react-three/drei'
import { Geometry, Base } from '@react-three/csg'
import { useCompoundBody } from '@react-three/cannon'

export default function Bunny({ ...props }) {
    const { nodes } = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/bunny/model.gltf')
    const [ref] = useCompoundBody(() => ({
        mass: 24,
        linearDamping: 0.95,
        angularDamping: 0.95,
        shapes: [
          { type: 'Box', mass: 10, position: [0, 0, 0], args: [3.1, 3.1, 0.5] },
          { type: 'Box', mass: 10, position: [0, -1.75, 1.25], args: [3.1, 0.5, 3.1] },
          { type: 'Box', mass: 1, position: [5 + -6.25, -3.5, 0], args: [0.5, 3, 0.5] },
          { type: 'Box', mass: 1, position: [5 + -3.75, -3.5, 0], args: [0.5, 3, 0.5] },
          { type: 'Box', mass: 1, position: [5 + -6.25, -3.5, 2.5], args: [0.5, 3, 0.5] },
          { type: 'Box', mass: 1, position: [5 + -3.75, -3.5, 2.5], args: [0.5, 3, 0.5] }
        ],
        ...props
      }))
    return (
        <group ref={ref} color="hotpink" lightSource={[5, 5, -10]} worldRadius={0.6} ior={1.2} intensity={0.2}>
            <mesh castShadow receiveShadow {...props} dispose={null}>
                <Geometry>
                    <Base geometry={nodes.bunny.geometry} />
                </Geometry>
                <MeshTransmissionMaterial color="hotpink" resolution={128} thickness={0.5} anisotropy={2} temporalDistortion={0.05} distortion={10} />
            </mesh>
        </group>
    )
}