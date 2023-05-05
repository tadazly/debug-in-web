import RedButton from './components/ui/redButton'
import useStore from './stores/useStore'

export default function Overlay() {
    const {idArray, uniqueId, add} = useStore()

    return (
		<div className="fixed top-0 right-4">
            <p className="text-3xl font-bold text-white">count:{idArray.length}</p>
            <RedButton onClick={()=>{
                for (let i = 0; i < 100; i++) {
                    add(Date.now() + i);
                }
            }} >
                {idArray.length <= 0 ? '整一个' : '再整一个'}
            </RedButton>
        </div>
    )
}