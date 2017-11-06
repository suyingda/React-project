import { createStore } from 'redux'
import todoApp from './reducer.js'
let store = createStore(todoApp);

export default store