import axios from 'axios'
import wx from 'weixin-js-sdk'
import config from '../config'
function act() {
    return new Promise((resolve, reject) => {
        axios({
            url: location.protocol+'//m.mindcherish.com/rpc/wechat/sign',//后台索要的算法签名
            method: 'get',
            params: {
                url: encodeURIComponent(window.location.href.split('#')[0]),
                appId:config.WX_APP_ID,
            },
        }).then(function(ret) {
            resolve(ret.data.data)
        }).catch(function(ret) {
            reject( ret );
        })
    })
}


export default function wechatShare(shareData){
    console.log(shareData);
    return new Promise(async function(resolve, reject) {
        try{
            let isWechat=navigator.userAgent.indexOf('MicroMessenger')>-1 //判断为微信浏览器
            if(!isWechat){
                return resolve('not weichat')
            }
            var defaultData = {
                title: document.title,
                desc: `分享描述`,
                link: `${window.location.href}`,
                imgUrl: "https://m.mindcherish.com/public/sharelogo.png", //分享出来的图片的
                success: function (res) {

                },
            }
            let data = { ...defaultData, ...shareData }
            let ret = await act()
            ret.jsApiList = ['onMenuShareQQ','onMenuShareAppMessage', 'onMenuShareTimeline'];
            wx.config(ret);
            console.log(data);
            wx.ready(function () {
            wx.onMenuShareTimeline({
                title: data.title,
                desc: '',
                link: data.link,
                imgUrl: data.imgUrl,
                dataUrl: '',
                success: data.success,
                cancel: function () {},
            })
            wx.onMenuShareAppMessage({
                title: data.title,
                desc: data.desc,
                link: data.link,
                imgUrl: data.imgUrl,
                dataUrl: '',
                success: data.success,
                cancel: function () {},
                })
            wx.onMenuShareQQ({
                title: data.title,
                desc: data.desc,
                link: data.link,
                imgUrl: data.imgUrl,
                dataUrl: '',
                success: data.success,
                cancel: function () {},
                })
                
            })
        }catch(error){
            reject( error );
        }
    })
}