/**
 * Created with JetBrains WebStorm.
 User: xuzhiyuan
 Date: 2017/8/2
 Time: 13:30
 To change this template use File | Settings | File Templates.
 */

import React from 'react';
import style from './tell.css';
import Pagetittle from 'Components/Pagetittle'

class Tell extends React.Component {

    constructor(props) {
        super(props);

    }


    componentDidMount() {


    }


    render() {
        return (
            <div>
                <Pagetittle pic = {require('./img/tell.jpg')} tittle="联系我" content ="Hi , My Homie , Contact me"></Pagetittle>
            </div>
        )

    }
}

module.exports = Tell;