import { useEffect, useState } from 'react'
import RedButton from './components/ui/redButton'
import useStore from './stores/useStore'
import { useControls } from 'leva'

export default function Overlay() {
    const {idArray, add} = useStore()
    const [total, setTotal] = useState(0)

    useEffect(()=>{
        const addComponents = () => {
            if (idArray.length < total) {
                add();
            }
            setTimeout(addComponents, 50);
        }

        addComponents()
    }, [total, idArray, add])


    return (
		<div className="fixed top-0 right-4">
            <p className="text-3xl font-bold text-white">count:{idArray.length}</p>
            <RedButton onClick={()=>{
                setTotal(value => value + 50)
            }} >
                {idArray.length <= 0 ? '整一个' : '再整一个'}
            </RedButton>
        </div>
    )
}