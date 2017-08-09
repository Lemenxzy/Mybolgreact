/**
 * Created with JetBrains WebStorm.
 User: xuzhiyuan
 Date: 2017/8/2
 Time: 12:15
 To change this template use File | Settings | File Templates.
 */

import React from 'react';
import style from './backstage.css';
import Pagetittle from 'Components/Pagetittle'
import Listwrap from 'Components/Listwrap'

class Backstage extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {


    }


    render() {
        return (
            <div>
                <Pagetittle pic = {require('./img/backstage.jpg')} tittle="后台" content ="后台开发相关讯息及心得分享，在记录中不断的提高自己"></Pagetittle>
                <div className={style.listwrap + ' clearfix'}>
                    <Listwrap kind ='前端' tittle = 'react全家桶' date = '2017.07.02'></Listwrap>
                </div>
            </div>
        )

    }
}

module.exports = Backstage;