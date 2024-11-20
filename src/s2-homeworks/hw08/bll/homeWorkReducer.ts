import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const prevState = [...state];
            if(action.payload === 'up') {
                return prevState.sort((f,s) => f.name.localeCompare(s.name));
            }
            if(action.payload === 'down') {
                return prevState.sort((f,s) => s.name.localeCompare(f.name));
            }

            return state // need to fix
        }
        case 'check': {
            return state.filter(user => user.age >= action.payload)  // need to fix
        }
        default:
            return state
    }
}
