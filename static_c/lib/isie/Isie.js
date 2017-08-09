/**
 * Created by xuzhiyuan on 2017/5/15.
 */


//判断IE低版本
 var isIE =  function(){
     this.main();
};

isIE.prototype.main = function () {
    var self = this;
    if (!!window.ActiveXObject || "ActiveXObject" in window){
        self.num = self.getIeNum()
    }

    self.locationHref();
};


isIE.prototype.locationHref = function () {
    var self = this;
    if (typeof self.num !== 'undefined' && self.num*1 <10){
        window.location.href = '/static_c/lib/isie/index.html'
    }
};



isIE.prototype.getIeNum = function () {
    var win = window;
    var doc = win.document;
    var input = doc.createElement ("input");
    if (win.ActiveXObject === undefined) return null;
    if (!win.XMLHttpRequest) return 6;
    if (!doc.querySelector) return 7;
    if (!doc.addEventListener) return 8;
    if (!win.atob) return 9;
    if (!input.dataset) return 10;
    return 11;
};


new isIE();