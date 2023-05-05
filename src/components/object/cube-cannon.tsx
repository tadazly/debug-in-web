import { useBox } from '@react-three/cannon'

export default function Cube(props: any) {

    const [ref] = useBox(() => ({ mass: 1 }))

	return <>
        <mesh
            ref={ref} 
            castShadow
            onPointerEnter={() => { document.body.style.cursor = 'pointer' }}
            onPointerLeave={() => { document.body.style.cursor = 'default' }}
        >
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>
	</>
}