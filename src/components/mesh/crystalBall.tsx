import { useSphere } from "@react-three/cannon";
import { Caustics, MeshTransmissionMaterial } from "@react-three/drei";

export default function CrystallBall({...props}) {
    const [ref] = useSphere(() => ({ mass: 1, args: [0.5], ...props }))
    return (
        <mesh ref={ref} castShadow position={[2, 0.5, 2]} {...props}>
            <sphereGeometry args={[0.5, 64, 64]} />
            <MeshTransmissionMaterial resolution={768} thickness={0.3} anisotropy={1} chromaticAberration={0.1} />
        </mesh>
    )
}