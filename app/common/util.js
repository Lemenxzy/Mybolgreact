/**
 * Created by xuzhiyuan on 2017/7/27.
 */
import * as apiconfig from './config';

//发起ajax请求
export const Ajax = function(obj){
    //指定提交方式的默认值
    obj.type = obj.type || "get";
    //设置是否异步，默认为true(异步)
    obj.async = obj.async || true;
    //设置数据的默认值
    obj.data = obj.data || null;
    if (window.XMLHttpRequest){
        //非ie
        var ajax = new XMLHttpRequest();
    }else{
        //ie
        var ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //区分get和post
    if (obj.type == "post"){
        ajax.open(obj.type,apiconfig.HOST,obj.async);
        ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        var data = toData(obj.data);
        ajax.send(data);
    }else{
        //get  test.php?xx=xx&aa=xx
        var url = apiconfig.HOST+"?"+toData(obj.data);
        ajax.open(obj.type,url,obj.async);
        ajax.send();
    }

    ajax.onreadystatechange = function (){
        if (ajax.readyState == 4){
            if (ajax.status>=200&&ajax.status<300 || ajax.status==304){
                if (obj.success){
                    obj.success(ajax.responseText);
                }
            }else{
                if (obj.error){
                    obj.error(ajax.status);
                }
            }
        }
    }
};
//解析数据
const toData = function(obj){
    if (obj == null){
        return obj;
    }
    var arr = [];
    for (var i in obj){
        var str = i+"="+obj[i];
        arr.push(str);
    }
    return arr.join("&");
};

//jsonp
export const jsonp = function(options){
    var url = apiconfig.HOST+options.url;
    var data = options.data?options.data:{};

    var oBody = document.getElementsByTagName('body')[0];
    var oScript = document.createElement('script');

    var callbackName = 'cb' + (~~(Math.random()*0xffffff)).toString(16);
    window[callbackName] = function (result) {
        options.success(result)
    };
    data[options.callback] = callbackName;

    oScript.setAttribute('src', url + '?' + format(data));
    oBody.append(oScript)
};
function format(data) {
    var str = '';
    for (var p in data) {
        str += encodeURIComponent(p) + '=' + encodeURIComponent(data[p]) + '&'
    }
    return str
}