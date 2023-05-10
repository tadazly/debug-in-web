import { useCallback, useEffect, useState } from 'react'
import RedButton from './components/ui/redButton'
import useStore from './stores/useStore'
import { useControls, button } from 'leva'

export default function Overlay() {
    const { idArray, reset } = useStore()
    const [weinreLoaded, setWeinreLoaded] = useState(false)
    const [chiiLoaded, setChiiLoaded] = useState(false)
    const [uuid] = useState(() => {
        let uuid = localStorage.getItem('uuid')
        if (!uuid) {
            uuid = Date.now().toString()
            localStorage.setItem('uuid', uuid)
        }
        return uuid
    })

    const loadWeinre = useCallback(() => {
        if (!weinreLoaded) {
            const script = document.createElement('script')
            script.src = `http://proxy.s.61.com:31986/target/target-script-min.js#${uuid}`
            script.async = true
            document.body.appendChild(script)
            setWeinreLoaded(true)
        }
        window.open(`http://proxy.s.61.com:31986/client/#${uuid}`)

        return () => {
            // document.body.removeChild(script)
        }
    }, [])

    const loadChii = useCallback(() => {
        if (!chiiLoaded) {
            document.title = `debug-in-web-` + uuid
            const script = document.createElement('script')
            script.src = `http://proxy.s.61.com:8888/target.js`
            script.async = true
            document.body.appendChild(script)
            setChiiLoaded(true)
        }
        window.open(`http://proxy.s.61.com:8888/ohhoho`)

        return () => {
            // document.body.removeChild(script)
        }
    }, [])

    useControls("远程调试", {
        weinreStart: button(() => {
            localStorage.setItem('weinreEnabled', 'true')
            loadWeinre()
        }),
        chiiStart: button(() => {
            localStorage.setItem('chiiEnabled', 'true')
            loadChii()
        }),
        weinreStop: button(() => {
            localStorage.removeItem('weinreEnabled')
            location.reload()
        }),
        chiiStop: button(() => {
            localStorage.removeItem('chiiEnabled')
            location.reload()
        })
    })

    useEffect(() => {
        if (localStorage.getItem('weinreEnabled') === 'true') {
            loadWeinre()
        }

        if (localStorage.getItem('chiiEnabled') === 'true') {
            loadChii()
        }
    }, [])

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