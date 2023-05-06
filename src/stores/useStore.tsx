import { create } from 'zustand'

type StoreType = {
    uniqueId: number
    idArray: number[]
    add: () => void
    del: (id: number) => void
}

const useStore = create<StoreType>((set) => ({
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
}))

export default useStore