import HTML2Canvas from 'html2canvas'
import Canvas2Image from '../utils/canvas2image'
class helper {
    //判断是否微信
    static is_weixin() {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/wechatdevtools/i) == "wechatdevtools") {
            return true;
        }
        var platform = navigator.platform;
        if (platform.indexOf("Win") == 0 || platform.indexOf("Mac") == 0) {
            return false;
        }
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
            return true;
        } else {
            return false;
        }
    }
    static setTitle(title) {
        document.title = title;
    }
    static toast(msg) {
        /*接口返回信息提示框*/
        alert(msg);
    }
    static is_android_app() {
        var ua = navigator.userAgent.toLowerCase();
        var platform = navigator.platform;
        if (platform.indexOf("Win") == 0 || platform.indexOf("Mac") == 0) {
            return false;
        }
        if (ua.match(/mindcherish_android_app/i) == "mindcherish_android_app") {
            return true;
        } else {
            return false;
        }
    }
    static is_ios_app() {
        var ua = navigator.userAgent.toLowerCase();
        var platform = navigator.platform;
        if (platform.indexOf("Win") == 0 || platform.indexOf("Mac") == 0) {
            return false;
        }
        if (ua.match(/mindcherish_ios_app/i) == "mindcherish_ios_app") {
            return true;
        } else {
            return false;
        }
    }
    static is_app() {
        return helper.is_android_app() || helper.is_ios_app();
    }
    static is_mobile() {
        return navigator.userAgent.search(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i) >= 0;
    }

    static getOS() {
        var platform = navigator.platform.toLocaleLowerCase();
        var isWin = (platform == "win32") || (platform == "windows");
        var isIOS = (platform == "iphone") || (platform == "ipad") || (platform == "ipod");
        var isLinux = (String(platform).indexOf("linux") > -1);
        if (isWin) { return 'windows' }
        if (isLinux) { return 'android' }
        if (isIOS) { return 'ios' }
        return platform;
    }

    static inputHack(switchOperate) {
        if (helper.getOS() == 'ios') {
            if (switchOperate == 'close') {
                document.body.style.position = 'relative';
                document.body.style.width = 'auto';
            } else {
                document.body.style.position = 'fixed';
                document.body.style.width = '100%';
            }
        }
    }

    static getTimeFormat(input) {
        var now = new Date();
        var year = now.getFullYear();
        var month = (now.getMonth() + 1) > 9 ? (now.getMonth() + 1) : '0' + (now.getMonth() + 1);
        var day = now.getDate() > 9 ? now.getDate() : '0' + now.getDate();
        var input_time = input.split('-');

        if (input_time[0] == year) {
            if (input_time[1] == month) {
                if (input_time[2].substr(0, 2) == day) {
                    return input_time[1] + '月' + input_time[2].substr(0, 2) + '日';
                } else {
                    return input_time[1] + '月' + input_time[2].substr(0, 2) + '日';
                }
            } else {
                return input_time[1] + '月' + input_time[2].substr(0, 2) + '日';
            }
        } else {
            return input_time[0] + '年' + input_time[1] + '月' + input_time[2].substr(0, 2) + '日';
        }
        return input_time;
    }
    //获取多少分钟前
    static formatMsgTime(timespan) {
        timespan = timespan ? timespan.replace(/-/g, '/') : ''
        var dateTime = new Date(timespan);

        var year = dateTime.getFullYear();
        var month = dateTime.getMonth() + 1;
        var day = dateTime.getDate();
        var hour = dateTime.getHours();
        var minute = dateTime.getMinutes();
        var second = dateTime.getSeconds();
        var now = new Date();
        //var now_new = Date.parse(now.toDateString());  //typescript转换写法

        var milliseconds = 0;
        var timeSpanStr;

        milliseconds = now.getTime() - dateTime.getTime();

        if (milliseconds <= 1000 * 60 * 1) {
            timeSpanStr = '刚刚';
        }
        else if (1000 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60) {
            timeSpanStr = Math.round((milliseconds / (1000 * 60))) + '分钟前';
        }
        else if (1000 * 60 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24) {
            timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60)) + '小时前';
        }
        else if (1000 * 60 * 60 * 24 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24 * 15) {
            timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60 * 24)) + '天前';
        }
        else if (milliseconds > 1000 * 60 * 60 * 24 * 15 && year == now.getFullYear()) {
            timeSpanStr = month + '-' + day + ' ' + hour + ':' + minute;
        } else {
            timeSpanStr = year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
        }
        return timeSpanStr;
    }
    static getScreenWidth() {
        return window.screen.width > 768 ? 768 : window.screen.width;
    }
    static getRandomNum(min,max){
      let range = max - min;
      let num = parseInt(Math.random() * (range) + min);
      return num;
    }

    //html生成图片
    static html2Image(htmlDom,options){
      let getPixelRatio = function(context){
        var backingStore = context.backingStorePixelRatio ||
            context.webkitBackingStorePixelRatio ||
            context.mozBackingStorePixelRatio ||
            context.msBackingStorePixelRatio ||
            context.oBackingStorePixelRatio ||
            context.backingStorePixelRatio || 1;
        return (window.devicePixelRatio || 1) / backingStore;
    }

    //htmlDom = document.body;
    var self = this;
    var width = htmlDom.offsetWidth;  // 获取(原生）dom 宽度
    var height = options.height || htmlDom.offsetHeight; // 获取(原生）dom 高
    var offsetTop = htmlDom.offsetTop;
    var bgCanvas = document.createElement('canvas');
    var context = bgCanvas.getContext('2d');
    var scaleBy = getPixelRatio(context);  //缩放比例
    scaleBy = scaleBy == 1 ? 2 : scaleBy;
    bgCanvas.width = width * scaleBy;
    bgCanvas.height = (height + offsetTop) * scaleBy;  //35是我处理完后发现短了一点，具体为什么不清楚,如果你也少的话，根据自己的项目调吧
    context.scale(scaleBy, scaleBy);
    HTML2Canvas(htmlDom,{
            logging: false, //日志开关，发布的时候记得改成false
            allowTaint: true,//允许加载跨域的图片
            tainttest: true, //检测每张图片都已经加载完成
            canvas: bgCanvas,
            scale: scaleBy, // 添加的scale 参数
            width: width,
            height: height,
            backgroundColor:options.backgroundColor || null, //#323232 black,#31377a blue,#5a5047 brown,#b23229 red
        }).then(function (canvas) {
            let sharePoster = Canvas2Image.convertToPNG(canvas, width * scaleBy, height * scaleBy);
            // sharePoster.style.marginTop = '16px';
            // sharePoster.style.marginBottom = '16px';
            // sharePoster.style.borderRadius= '6px';
            htmlDom.parentElement.style.fontSize = 0;
            htmlDom.parentElement.style.height = height + 'px';
            sharePoster.style.width = width +'px';

            htmlDom.parentElement.replaceChild(sharePoster,htmlDom);
        }, function (e) {
            console.log('An error occured:', e);
    });
    }
}
export default helper;
