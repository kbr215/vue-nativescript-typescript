export enum CounterMutation {
    setCount = 'setCount'
}

export enum CounterGetter {
    getCount = 'getCount'
}

export const Counter = {
    namespaced: true,
    state: {
        count: 0
    },
    mutations: {
        [CounterMutation.setCount](state, count: number) {
            state.count = count
        }
    },
    getters: {
        [CounterGetter.getCount](state) {
            return state.count
        }
    }
}