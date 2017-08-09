/**
 * Created with JetBrains WebStorm.
 User: xuzhiyuan
 Date: 2017/8/1
 Time: 22:53
 To change this template use File | Settings | File Templates.
 */

import React from 'react';
import style from './webpage.css';
import Footer from 'Components/footer'
import Pagetittle from 'Components/Pagetittle'
import Listwrap from 'Components/Listwrap'
class Webpage extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {


    }


    render() {
        return (
            <div>
                <Pagetittle pic = {require('./img/webbg.jpg')} tittle="前端" content ="前端开发相关讯息及心得分享，在记录中不断的提高自己"></Pagetittle>
                <div className={style.listwrap + ' clearfix'}>
                    <Listwrap kind ='前端' tittle = 'react全家桶' date = '2017.07.02'></Listwrap>
                </div>
            </div>
        )

    }
}

module.exports = Webpage;