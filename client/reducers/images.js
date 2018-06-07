const images = (state = [], action) => {
    // let newState = [...state]
    switch (action.type) {
      case 'RECEIVE_IMAGES':
        return action.images
      case 'ADD_IMAGE':
          return [...state, action.image]
      default:
        return state
    }
  }
  
  export default images