import { create } from 'zustand'

type StoreType = {
    uniqueId: number
    idArray: number[]
    add: (id: number) => void
    del: (id: number) => void
}

const useStore = create<StoreType>((set) => ({
	uniqueId: 0,
    idArray: [],
	add: (id) => set((state) => {
        state.idArray.push(id);
        return {uniqueId: state.uniqueId + 1}
    }),
    del: (id) => set((state) => {
        state.idArray = state.idArray.filter(value => value !== id);
        return {}
    }),
}))

export default useStore