import { create } from 'zustand'

type StoreType = {
    enableOrbitControls: boolean
    uniqueId: number
    idArray: number[]
    add: (num: number) => void
    del: (id: number) => void
    reset: ()=>void
    setOrbitControls: (enabled: boolean) => void
}

const useStore = create<StoreType>((set) => ({
    enableOrbitControls: true,
	uniqueId: 0,
    idArray: [],
	add: (num) => set((state) => {
        const final = state.uniqueId + num
        for (let i = state.uniqueId; i < final; i++) {
            state.idArray.push(i)
        }
        console.log(`Jelly Count: ${final} !`)
        return {idArray: state.idArray, uniqueId: final}
    }),
    del: (id) => set((state) => {
        state.idArray = state.idArray.filter(value => value !== id)
        return {}
    }),
    reset: () => set((state) => {
        state.idArray.length = 0
        return {uniqueId: 0}
    }),
    setOrbitControls: (enabled) => set(() => {
        return {enableOrbitControls: enabled}
    }),
}))

export default useStore