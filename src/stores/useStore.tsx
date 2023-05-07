import { create } from 'zustand'

type StoreType = {
    enableOrbitControls: boolean
    uniqueId: number
    idArray: number[]
    add: () => void
    del: (id: number) => void
    setOrbitControls: (enabled: boolean) => void
}

const useStore = create<StoreType>((set) => ({
    enableOrbitControls: true,
	uniqueId: Date.now(),
    idArray: [],
	add: () => set((state) => {
        state.idArray.push(state.uniqueId);
        return {uniqueId: Date.now() + Math.random()}
    }),
    del: (id) => set((state) => {
        state.idArray = state.idArray.filter(value => value !== id);
        return {}
    }),
    setOrbitControls: (enabled) => set(() => {
        return {enableOrbitControls: enabled}
    }),
}))

export default useStore