/**
 * Created with JetBrains WebStorm.
 User: xuzhiyuan
 Date: 2017/8/2
 Time: 9:57
 To change this template use File | Settings | File Templates.
 */

import React from 'react';
import style from './Pagetittle.css';
import Header from 'Components/header'
export default class Pagetittle extends React.Component {

    render() {
        return (
            <div className={style.slidebanner} style={
            {
                'background': "url('"+this.props.pic+"') no-repeat",
                "backgroundSize": "100% auto",
                'backgroundPosition': 'top',
                'backgroundAttachment': 'fixed'}
            }>
                <div className={style.blackbrold}>
                    <Header></Header>
                    <h1>{this.props.tittle}</h1>
                    <p>{this.props.content}</p>
                </div>
            </div>
        )

    }
}