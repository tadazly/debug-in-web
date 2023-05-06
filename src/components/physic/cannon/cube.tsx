import { useBox } from '@react-three/cannon'
import { Mesh } from 'three'

export default function Cube(props: JSX.IntrinsicElements['mesh']) {

    const [ref] = useBox<Mesh>(() => ({ mass: 1 }))

	return <>
        <mesh
            ref={ref} 
            castShadow
            onPointerEnter={() => { document.body.style.cursor = 'pointer' }}
            onPointerLeave={() => { document.body.style.cursor = 'default' }}
            {...props}
        >
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>
	</>
}