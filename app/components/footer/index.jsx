/**
 * Created with JetBrains WebStorm.
 User: xuzhiyuan
 Date: 2017/7/26
 Time: 16:58
 To change this template use File | Settings | File Templates.
 */

import React from 'react';
import style from './footer.css';

export default class Footer extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                {/*关于*/}
                <div className={style.blogabout}>
                    <p>欢迎来到 Jorie 博客，这里提供好听的音乐及技术文章~ 欢迎各界提供求职机会</p>
                </div>
                {/*联系*/}
                <div className={style.telbox}>
                    <div className={style.t_telbox}>
                        <span>联系方式: </span>
                        <a target="_blank" href="tencent://message/?uin=704694231&site=&menu=yes" className={"fa fa-qq "+style.qq}></a>
                        <span href="javascript:void(0)" className={"fa fa-envelope "+style.qq + ' ' +style.email}>
                            <div className={style.hoverbox}>
                                <div className={style.sanj}></div>
                                <p>704694231@qq.com</p>
                            </div>
                        </span>
                        <span className={"fa fa-weixin "+style.qq + ' ' + style.wechart}>
                            <div className={style.wechartbox}>
                                <div className={style.sanj2}></div>
                                <div className={style.erweimaimg}></div>
                            </div>
                        </span>
                    </div>
                </div>
                {/*footer*/}
                <p className={style.footer}>@ copyright 2017 by jorie</p>
            </div>
        )

    }
}