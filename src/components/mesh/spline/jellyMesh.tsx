import { forwardRef } from 'react'
import useSpline from '@splinetool/r3f-spline'
import type { Mesh } from 'three'
import type { MeshProps } from '@react-three/fiber'

const JellyMesh = forwardRef<Mesh, MeshProps>((props, ref) => {
    const { nodes, materials } = useSpline('https://prod.spline.design/Wpdu9TO6hUyvr9UG/scene.splinecode')

    return (
        <mesh
            ref={ref}
            scale={0.001}
            geometry={nodes.jelly.geometry}
            material={materials['jelly Material']}
            castShadow
            {...props}
        />
    )
})

export default JellyMesh;