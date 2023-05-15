import { Html, useGLTF } from '@react-three/drei'
import { useBox } from '@react-three/cannon'
import type { Group } from 'three'

export default function Computer({...props}) {
    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')

    const [ref] = useBox<Group>(() => ({ mass: 1, args:[2,2,1] , ...props}))

    return <>
        <group 
            ref={ref} 
            {...props}
        >
            <rectAreaLight
                width={2.5}
                height={1.65}
                intensity={65}
                color={'#ff6900'}
                rotation={[0.1, Math.PI, 0]}
                position={[0, 0.55, -1.15]}
            />
            <primitive object={computer.scene} position-y={-1.2} >
                <Html
                    occlude="blending"
                    transform
                    wrapperClass="htmlScreen"
                    distanceFactor={4.17}
                    position={[0, 1.56, -1.4]}
                    rotation-x={-0.256}
                >
                    <iframe src="https://s.61.com/" />
                </Html>
            </primitive>
        </group>
    </>
}