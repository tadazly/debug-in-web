import { Cursor } from './helpers/drag'
import { Guy } from './components/guy'
import { Mug, Chair, Table, Lamp } from './components/furniture'

export default function RagdollScene() {
    return (
        <group>
            <Cursor />
            <Guy rotation={[-Math.PI / 3, 0, 0]} />
            <Chair position={[0, 0, -2.52]} />
            <Table position={[8, 0, 0]} />
            <Mug position={[8, 3, 0]} />
            <Lamp position={[0, 15, 0]} />
        </group>
    )
}