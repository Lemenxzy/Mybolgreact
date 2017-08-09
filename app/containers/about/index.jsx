/**
 * Created with JetBrains WebStorm.
 User: xuzhiyuan
 Date: 2017/8/2
 Time: 13:12
 To change this template use File | Settings | File Templates.
 */

import React from 'react';
import style from './about.css';
import Pagetittle from 'Components/Pagetittle'
import ProgressBar from 'Components/ProgressBar'

class About extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {


    }


    render() {
        return (
            <div>
                <Pagetittle pic = {require('./img/dark.jpg')} tittle="关于" content ="了解Jorie，关于我，About Me"></Pagetittle>
                <div className={style.contentwrap}>
                    <div className={style.mymessage + " clearfix"}>
                        <div className={style.username}></div>
                        <div className={style.contentbox}>
                            <h3>许智源</h3>
                            <p>职业：开发工程师</p>
                            <p>年龄：23</p>
                            <p>学历：本科</p>
                        </div>
                    </div>
                    <div className={style.progressBarwrap}>
                        <div className={style.progresslist}>
                            <span>react:</span>
                            <ProgressBar options={{height: 6, width: 600, schedule: 70,color:'#000',bgcolor:'#ccc'}}/>
                        </div>
                            
                    </div>
                </div>
            </div>
        )

    }
}

module.exports = About;