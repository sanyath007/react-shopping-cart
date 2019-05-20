const UPDATE_FILTER = "UPDATE_FILTER"

const initialState = {
  items: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_FILTER:
      return {
        ...state,
        items: action.payload
      }
    default:
      return state
  }
}