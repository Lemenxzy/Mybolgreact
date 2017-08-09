/**
 * Created with JetBrains WebStorm.
 User: 70469
 Date: 2017/4/27
 Time: 11:36
 To change this template use File | Settings | File Templates.
 <ProgressBar options={{height: 6, width: 600, schedule: 70}}/>
 */

import React from 'react';
import style from './ProgressBar.css';

export default class ProgressBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            schedule:this.props.options.schedule + '%'
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            schedule:nextProps.options.schedule + '%'
        })
    }


    render() {

        const ProgressWidth = {
            width:this.props.options.width+'px'
        };
        const ProgressHeight = {
            height:this.props.options.height+'px'
        };
        const Schedule = {
            width:this.state.schedule
        };
        const Background = {
            background: this.props.options.color,
            background: '-moz-linear-gradient(left,'+this.props.options.bgcolor+' 0%, '+this.props.options.color +'100%)',
            background: '-webkit-gradient(linear,left center, right center, color-stop(0%,'+this.props.options.bgcolor+'), color-stop(100%,'+this.props.options.color+'))',
            background: '-webkit-linear-gradient(left,  '+this.props.options.bgcolor+' 0%,'+this.props.options.color+' 100%)',
            background: '-o-linear-gradient(left,  '+this.props.options.bgcolor+' 0%,'+this.props.options.color+' 100%)',
            background: '-ms-linear-gradient(left,  '+this.props.options.bgcolor+' 0%,'+this.props.options.color+' 100%)',
            background: 'linear-gradient(to right,  '+this.props.options.bgcolor+' 0%,'+this.props.options.color+' 100%)',
            filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr='+this.props.options.bgcolor+', endColorstr='+this.props.options.color+',GradientType=1)'
        };
        
        const Color = {
            color:this.props.options.color
        };
        console.log(111,this.props.options.color);
        return (
            <div style={ProgressWidth} className={style.inlineblock}>
                <p className={style.progresscontent} style={Color}>{this.state.schedule}</p>
                <div className={style.progresswrap} style={ProgressHeight}>
                    <div className={style.progressChild} style = {Object.assign({},Schedule,ProgressHeight,Background)}></div>
                </div>
            </div>
        )

    }
}

ProgressBar.propTypes = {
    options: React.PropTypes.object
};

ProgressBar.defaultProps = {
    options: {
        height:6,
        width:600,
        schedule:36,
        color:'red'
    }
};