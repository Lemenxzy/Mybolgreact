/**
 * Created with JetBrains WebStorm.
 User: xuzhiyuan
 Date: 2017/7/25
 Time: 16:24
 To change this template use File | Settings | File Templates.
 */

import React from 'react';
import style from './header.css';
import {Link} from 'react-router'
import {jsonp} from 'cmPath/util.js'

export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            scollboolean:false,
            select:true,
            goodnum:0
        };
        this.scbooleandown = true;
        this.scbooleanup = true;
    }

    /*static contextTypes = {
        name: React.PropTypes.string.isRequired
    };*/

    componentDidMount() {
        let self = this;
        document.addEventListener('scroll',self.winScroll,false);
        jsonp({
            url:'hello',
            type: 'get',
            callback: 'cb',
            success: function (data) {
                self.setState({
                    select:data.boolean,
                    goodnum:data.num
                });
            }
        });

    }

    componentWillUnmount(){
        console.log('我进行了销毁');
        let self = this;
        document.removeEventListener('scroll',self.winScroll,false);
    }

    winScroll = ()=>{
        if (document.body.scrollTop >　400){
            if (this.scbooleandown){
                this.setState({
                    scollboolean:true
                },()=>{
                    this.scbooleandown = false;
                    this.scbooleanup = true;
                });
            }

        }else{
            if (this.scbooleanup){
                this.setState({
                    scollboolean:false
                },()=>{
                    this.scbooleandown = true;
                    this.scbooleanup = false;
                });
            }
        }
    };

    goodclick = ()=>{
        let self = this;
        jsonp({
            url:'goodClick',
            type: 'get',
            callback: 'cb',
            success: function (data) {
                if (data.success === 0){
                    self.setState({
                        select:true,
                        goodnum:self.state.goodnum*1+1
                    })
                }else{
                    self.setState({
                        select:true
                    })
                }
            }
        });
    }


    render() {
        return (
            <div className={"clearfix " + style.headerbox + ' ' + (this.state.scollboolean?style.fixed:'')}>
                <Link to="/home" className={style.weblogo}></Link>
                <ul>
                    <li>
                        <Link to="/home" className={style.navlist +' '+ style.fill}>· 首页</Link>
                    </li>
                    <li>
                        <Link to="/webpage" className={style.navlist +' '+ style.pulse}>· 前端</Link>
                    </li>
                    <li>
                        <Link to="/backstage" className={style.navlist +' '+ style.close}>· 后台</Link>
                    </li>
                    <li>
                        <Link to="/about" className={style.navlist +' '+　style.up}>· 关于</Link>
                    </li>
                    <li>
                        <Link to="/tell" className={style.navlist +' '+ style.slide}>· 联系</Link>
                    </li>
                </ul>
                <div className={style.goodbox + ' clearfix'}>
                    <i className={"fa fa-thumbs-o-up " +　(this.state.select?style.bad:style.good)} onClick={this.state.select?'':this.goodclick.bind(this)}></i>
                    <span>{this.state.goodnum}</span>
                </div>


            </div>
        )

    }
}