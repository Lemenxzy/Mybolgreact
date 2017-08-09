/**
 * Created with JetBrains WebStorm.
 User: xuzhiyuan
 Date: 2017/7/24
 Time: 16:13
 To change this template use File | Settings | File Templates.
 */

import React from 'react';
import style from './home.css'
import canvas from './lib/main.js'
import Header from 'Components/header'
import Footer from 'Components/footer'



class Home extends React.Component {

    constructor(props) {
        super(props);
        //固定渲染文案
        this.home = {
            sec:{
                tittle:'Lemen博客新生：Jorie Blog',
                detail:'—— Jorie Design',
                list:[
                    {tittle:'· 相关技术讯息',detail:'及时发布自己的前端技术，后台技术，督促自己不断学习进步，早日达到自己心仪的目标。'},
                    {tittle:'· 工作心得感悟',detail:'吾日三省吾身，形形色色的事物，感悟出不一样的心得体会.'},
                    {tittle:'· 求职心得感想',detail:'分享各种面试经验，及目前对前端界的看法'},
                    {tittle:'· 音乐人的梦想',detail:'热爱各种音乐，好的节奏就是需要分享，跟上我的节奏。呦呦呦！'}
                ]
            },
            thirth:{
                tittle:'What Can I Do ?',
                list:[
                    {tittle:'JavaScript',img:require('./img/js-logo.png'),detail:'专注探索高性能react，vue，jq等前端框架。学习nodejs，D3，threejs等热门技术，定期分享相关技术文章。欢迎各界前端大牛一起交流学习，虚心求教。'},
                    {tittle:'Java',img:require('./img/java-logo.png'),detail:'了解spring相关技术。对java有着特殊感情，启蒙语言，写了两年前端忘记差不多了，希望能重新拾起来。欢迎各种大牛教育。'},
                    {tittle:'Python',img:require('./img/Python-logo.png'),detail:'本站技术选型语言。刚开始入手学习，因为火热，所以想深入研究，定期会发放一些文章欢迎菜鸟们一起学习，一起成为一个老鸟。'},
                ]
            }
        };

        this.state = {
              contentlist:[
                  {
                      tittle:'react全家桶',
                      channel:'前端',
                      date:'2017.07.26'
                  }
              ]
        }

    }

    componentDidMount() {
        //canvas动画效果
        canvas();
    }

    render() {
        return (

            <div className={style.bigwidth}>
                {/*第一屏显示*/}
                <div className={style.bgpic} style={{height:window.innerHeight}}>
                    <canvas id="canvas" className={style.canvas}>your browser does not support the canvas tag </canvas>
                    <div className={style.blackblod}>
                        <Header></Header>
                        {/*文字显示*/}
                        <div className={style.text_effect}>
                            <h1 className={style.neon} data-text="Jorie Blog">Jorie Blog</h1>
                            <div className={style.gradient}></div>
                            <div className={style.spotlight}></div>
                        </div>
                    </div>
                </div>
                {/*第二屏*/}
                <div className={style.content}>
                    <div className={style.contentbox + ' clearfix'}>
                        <img src={require('./img/phone.png')} height="500"/>
                        <div className={style.sessionwrap}>
                            <h2>{this.home.sec.tittle}</h2>
                            <p>{this.home.sec.detail}</p>
                            <div className={style.content_detail}>
                                {
                                    this.home.sec.list.map((data,index)=>{
                                        return(
                                            <div key={'homesec'+index}>
                                                <h3>{data.tittle}</h3>
                                                <p>{data.detail}</p>
                                            </div>
                                        )
                                    })
                                }


                            </div>
                        </div>
                    </div>
                </div>
                {/*第三屏*/}
                <div className={style.secbgpic} style={{height:window.innerHeight}}>
                    <div className={style.blackblod}>
                        <h3 className={style.thrtitle}>{this.home.thirth.tittle}</h3>
                        <div className={style.content+ ' ' + style.handreheight}>
                            {
                                this.home.thirth.list.map((data,index)=>{
                                    return(
                                        <div className={style.conttr} key={"third"+index}>
                                            <div className={'clearfix'}>
                                                <div className={style.feature_left}>
                                                    <img src={data.img} width="35" height="35" alt="jslogo"/>
                                                </div>
                                                <div className={style.feature_right}>
                                                    <h4>{data.tittle}</h4>
                                                    <p>
                                                        {data.detail}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                {/*第四屏*/}
                <div className={style.fourbg}>
                    <div className={style.content}>
                        <h2>最新文章</h2>
                        <p className={style.five_detail}>Jorie最新技术感想心得，带你认识不一样的技术栈</p>
                        <div className={style.five_list  + ' clearfix'}>
                            {
                                this.state.contentlist.map((data,index)=>{
                                    return(
                                        <div className={style.list_item} key={"newcontent"+index}>
                                            <div className={style.item}>
                                                <div>
                                                    <h5>{data.channel}</h5>
                                                    <h4>{data.tittle}</h4>
                                                    <p>{data.date}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className={style.morebtn}>
                            <a href="javascript:void(0)">
                                查看更多
                            </a>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )

    }
}

module.exports = Home;