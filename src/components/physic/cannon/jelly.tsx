import { useBox } from '@react-three/cannon';
import useStore from '../../../stores/useStore'
import JellyMesh from '../../mesh/spline/jellyMesh'
import { Mesh } from 'three';

export default function Jelly({ ...props }) {
    const [ref] = useBox<Mesh>(()=>({mass: 1}))

    const { del } = useStore()

    const destroy = () => {
        const { uniqueId } = props
        del(uniqueId)
        console.log(uniqueId)
    }

    return (
        <JellyMesh 
            ref={ref}
            onClick={destroy}
            onPointerEnter={() => { document.body.style.cursor = 'pointer' }}
            onPointerLeave={() => { document.body.style.cursor = 'default' }}
        />
    )
}
