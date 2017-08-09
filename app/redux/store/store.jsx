import {createStore, combineReducers, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import oTopJobList from '../reducer/topJobListReducer'
//创建一个 Redux store 来以存放应用中所有的 state，应用中应有且仅有一个 store。
let store;

if(!(window.__REDUX_DEVTOOLS_EXTENSION__ || window.__REDUX_DEVTOOLS_EXTENSION__)){
    store = createStore(
        combineReducers({
            oTopJobList
        }),
        applyMiddleware(thunk)
    );
}else{
    store = createStore(
        combineReducers({
            oTopJobList
        }),
        compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) //插件调试，未安装会报错
    );
}



export default store;