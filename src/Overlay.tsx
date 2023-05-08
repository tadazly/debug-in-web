import { useEffect, useState } from 'react'
import RedButton from './components/ui/redButton'
import useStore from './stores/useStore'

export default function Overlay() {
    const { idArray, reset } = useStore()

    return (
        <div className="fixed top-0 right-4 flex flex-col items-center w-full">
            <p className="text-3xl font-bold text-white">count:{idArray.length}</p>
            {idArray.length ?
                <RedButton onClick={reset} >
                    归零
                </RedButton>
                : null
            }
        </div>
    )
}