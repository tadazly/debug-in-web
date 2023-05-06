export default function CubeMesh(props: JSX.IntrinsicElements['mesh']) {
	return (
        <mesh
            castShadow
            onPointerEnter={() => { document.body.style.cursor = 'pointer' }}
            onPointerLeave={() => { document.body.style.cursor = 'default' }}
            {...props}
        >
            {props.children || <>
                <boxGeometry />
                <meshStandardMaterial color="lightpink" />
            </>}
        </mesh>
    )
}