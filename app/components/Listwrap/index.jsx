/**
 * Created with JetBrains WebStorm.
 User: xuzhiyuan
 Date: 2017/8/2
 Time: 11:21
 To change this template use File | Settings | File Templates.
 */

import React from 'react';
import style from './listwrap.css';

export default class Listwrap extends React.Component {

    render() {
        return (
            <div className={style.listwrap_son}>
                <div className={style.listcontent}>
                    <p>{this.props.kind}</p>
                    <h4>{this.props.tittle}</h4>
                    <div>
                        <h6>{this.props.date}</h6>
                    </div>
                </div>
            </div>
        )

    }
}