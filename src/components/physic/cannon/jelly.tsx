import { useState } from 'react';
import { useBox } from '@react-three/cannon';
import JellyMesh from '../../mesh/spline/jellyMesh'
import type { Mesh } from 'three';

export default function Jelly({ ...props }) {
    const [scale] = useState(props.scale * (Math.random() * 0.7 + 0.3))
    const [position] = useState({
        x: props.uniqueId % 5 - 3,
        y: -20 + props.uniqueId % 20 * Math.random() * 20,
        z: props.uniqueId % 5 - 4,
    })
    const [ref, api] = useBox<Mesh>(() => ({
        mass: Math.random() * 5 + 0.5,
        material: {restitution: 1.1},
        args: [scale * 0.6, scale * 0.6, scale * 0.6],
        position: [position.x, position.y, position.z],
        ...props
    }))

    // api.applyImpulse([0,10,0], [0,0,0])

    return (
        <JellyMesh
            ref={ref}
            {...props}
            scale={scale * 0.001}
        />
    )
}
