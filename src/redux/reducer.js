import { ADD_PRODUCT } from "./actions-types"

const initialState = {
  products: [],
}
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, payload],
      }

    default:
      return { ...state }
  }
}

export default reducer
