import RedButton from './components/ui/redButton'
import useStore from './stores/useStore'

export default function Overlay() {
    const {idArray, uniqueId, add} = useStore()

    return (
		<div className="fixed top-0 right-4">
            <p className="text-3xl font-bold">count:{idArray.length}</p>
            <RedButton onClick={()=>{
                add(uniqueId);
            }} >
                {idArray.length <= 0 ? '整一个' : '再整一个'}
            </RedButton>
        </div>
    )
}