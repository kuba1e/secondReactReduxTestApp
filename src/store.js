import {createStore} from 'redux'
import reducer from './reducers'
import thunkMiddleWare  from 'redux-thunk'

const store = createStore(reducer)

export default store