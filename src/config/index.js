const config = {
    //开发环境
    "development":{
        ENV:'dev',
        API_URL:'http://lbw.mindcherish.com',
        HOST_URL:'http://lbw.mindcherish.com',
        APP_KEY:'da0fb2ac892daab4810fb781272173c1',
        APP_SECRET:'zv1ZsvYQYuQgPs1P2bpbm12AuIFkc6gg',
    },
    //测试环境
    "testing":{
        ENV:'test',
        API_URL:'https://test.mindcherish.com',
        HOST_URL:'http://test.mindcherish.com',
        APP_KEY:'da0fb2ac892daab4810fb781272173c1',
        APP_SECRET:'zv1ZsvYQYuQgPs1P2bpbm12AuIFkc6gg',
    },
    //正式环境
    "production":{
        ENV:'pro',
        API_URL:'https://m.mindcherish.com',
        HOST_URL:'http://m.mindcherish.com',
        APP_KEY:'da0fb2ac892daab4810fb781272173c1',
        APP_SECRET:'zv1ZsvYQYuQgPs1P2bpbm12AuIFkc6gg',
    },
}
const commonConfig = {
    BELONG_TO:location.host.includes('chainwired')?'tzcode':'puoke',
    WX_APP_ID:location.host.includes('chainwired')?'wxe617c94cff9c212e':'wxf9ca05a4f8b556dd',
    SHARE:{
        title: document.title,
        desc: `扑克财经，汇聚全球大宗商品、债券、外汇以及期货期权等金融衍生品深度内容，提供最具价值的市场资讯、投研逻辑和业务实操经验的分享。全球大宗商品产业人士、机构投资者、专业投资人士以及银行、期货、券商、基金等金融服务从业者都在这里进行实时、深度、专业的交流。扑克财经，专业从业者必备的投研及知识管理服务平台。`,
        link: `${window.location.href}`,
        imgUrl: "https://m.mindcherish.com/public/sharelogo.png", //分享出来的图片的
    }
}
let env = location.search.includes('test')?'testing':process.env.NODE_ENV;
const envConfig = Object.assign({},commonConfig,config[env]);
export default envConfig;
