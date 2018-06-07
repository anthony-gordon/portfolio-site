import request from 'superagent'

export const receiveImages = (images) => {
    return {
      type: 'RECEIVE_IMAGES',
      images
    }
  }
  
  export function getImagesRequest () {
    return (dispatch) => {
      return request
        .get(`/api/v1`)
        .then(res => {
            dispatch(receiveImages(res.body))
        })
        .catch(err => {
            dispatch(showError(err.message))
          
        })
    }
  }

export const addImage = (image) => {
    return {
        type:'ADD_IMAGE',
        image
    }
}

export function postImageRequest (image) {
    console.log("action", image)
    return (dispatch) => {
      request
        .post('/api/v1')
        .send(image)
        .then(dispatch(addImage(image)))
        .catch(err => {
            dispatch(showError(err.message))
        })
    }
  }

