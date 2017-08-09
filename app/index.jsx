import React from 'react';
import ReactDOM from 'react-dom';
import route from './router.jsx';
import {Provider} from 'react-redux';
import store from './redux/store/store.jsx';


class Blogindex extends React.Component {
    render() {
        return(
            <Provider store={store}>
            {route}
            </Provider>
        )
    }
}

ReactDOM.render(
    <Blogindex/>,
    document.getElementById('init')
)
