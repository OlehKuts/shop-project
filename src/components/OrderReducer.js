import { orderActions } from "../constants/constants";

export const orderReducer = (state, {type, payload}) => {
    switch (type) {
        case orderActions.ADD:
            if(state.some(item => item.id === payload.newGood.id)) {
                return [...state.map((item) => {
                    if (item.id === payload.newGood.id) {
                        return {...item, amount: item.amount + 1}
                    }
                    return item
                })]};
            return [...state, payload.newGood];
            break;
            case orderActions.REMOVE:
                return [...state].filter(item => item.id !== payload.orderId)
                break;
                case orderActions.INCREMENT_AMOUNT:
                    return [...state].map(item => item.id === payload.orderId ? {...item, amount: item.amount + 1} : item)
                    break;
                    case orderActions.DECREMENT_AMOUNT:
                        return [...state].map(item => item.id === payload.orderId && item.amount > 0 ? {...item, amount: item.amount - 1} : item)
                        break;
                        case orderActions.CLEAR:
                            return []
                            break;
        default:
            return state
            break;
    }
}