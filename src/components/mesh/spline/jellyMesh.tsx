import { Suspense, forwardRef } from 'react'
import useSpline from '@splinetool/r3f-spline'
import * as THREE from 'three'
import type { Mesh } from 'three'
import type { MeshProps } from '@react-three/fiber'

const boxGeometry = new THREE.BoxGeometry(1, 1, 1)

const JellyMesh = forwardRef<Mesh, MeshProps>((props, ref) => {
    const { nodes, materials } = useSpline('https://prod.spline.design/Wpdu9TO6hUyvr9UG/scene.splinecode')

    return (
        <instancedMesh
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