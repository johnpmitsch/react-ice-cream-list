const flavors = ["mint chocolate chip", "rocky road", "cherry garcia"];

const initialState = {
  flavors: flavors,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FLAVOR": {
      return {
        flavors: [
          ...state.flavors,
          action.flavor
        ]
      }
    }

    default: {
      return state
    }
  }
}
