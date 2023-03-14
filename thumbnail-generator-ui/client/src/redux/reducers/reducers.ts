import { UPLOAD_IMAGE_SUCCESS, UPLOAD_IMAGE_FAILURE } from '../actions/actions'

interface YourReducerState {
  loading: boolean
  urlImage: string
}

const initialState: YourReducerState = { loading: false, urlImage: '' }

const yourReducer = (state: YourReducerState = initialState, action: any) => {
  switch (action.type) {
    case UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        urlImage: action.payload,
      }
    case UPLOAD_IMAGE_FAILURE:
      return {
        ...state,
        loading: false,
        urlImage: '',
      }
    default:
      return state
  }
}

export default yourReducer
