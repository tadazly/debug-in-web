import { RigidBody, CuboidCollider } from '@react-three/rapier';
import useStore from '../../../stores/useStore'
import JellyMesh from '../../mesh/spline/jellyMesh'

export default function Jelly({ ...props }) {
    const { del } = useStore()

    const destroy = () => {
        const { uniqueId } = props
        del(uniqueId)
        console.log(uniqueId)
    }

    return (
        <RigidBody
            position={[1.5, 2, 0]}
            gravityScale={1}
            restitution={0}
            friction={0.7}
            colliders={false}
            // onCollisionEnter={collisionEnter}
            // onCollisionExit={collisionExit}
            {...props}
        >
            <JellyMesh 
                onClick={destroy}
                onPointerEnter={() => { document.body.style.cursor = 'pointer' }}
                onPointerLeave={() => { document.body.style.cursor = 'default' }}
            />
            <CuboidCollider mass={20} args={[0.3, 0.3, 0.3]} />
        </RigidBody>
    )
}
