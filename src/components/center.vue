<template>
    <div class="center-container">
        <section>
            <h1>1.1 Color 色彩</h1>
            <p>pk 为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为搭建的产品提供一致的外观视觉感受。</p>
            <h3>1.1.1主色</h3>
            <p>扑克项目主色是黄色</p>
            <div class="demo-color">
                <div class="demo-color-box demo-color-box-1 pk-bg-yellow">
                    <div class="pk-fs-12">yellow</div>
                    <div class="pk-fs-12">#FFC800</div>
                </div>
            </div>
            <div class="demo-pre-box">
                 <code class="code">
                     <span>&lt;<span>p</span> class="pk-bg-yellow" &gt;</span>
                     <span><span>yellow #FFC800</span></span>
                     <span>&lt;<span>/p</span>&gt;</span>
                 </code>    
            </div>
            <h3>1.1.2辅助色</h3>
            <p>除了主色之外，需要在不同的场景中使用（譬如免费提问）</p>
            <div class="demo-color">
                <div class="demo-color-box pk-bg-yellow">
                    <div class="pk-fs-12">yellow</div>
                    <div class="pk-fs-12">#FFC800</div>
                </div>
                <div class="demo-color-box pk-bg-blue">
                    <div class="pk-fs-12">blue</div>
                    <div class="pk-fs-12">#4A90E2</div>
                </div>
                <div class="demo-color-box pk-bg-red">
                    <div class="pk-fs-12">red</div>
                    <div class="pk-fs-12">#DE4F45</div>   
                </div>
                <div class="demo-color-box pk-bg-green">
                    <div class="pk-fs-12">green</div>
                    <div class="pk-fs-12">#009A61</div> 
                </div>
            </div>
            <div class="demo-pre-box">
                 <code class="code">
                     <span>&lt;<span>p</span> class="pk-bg-yellow" &gt;</span>
                     <span><span>yellow #FFC800</span></span>
                     <span>&lt;<span>/p</span>&gt;</span>
                 </code>
                 <code class="code">
                     <span>&lt;<span>p</span> class="pk-bg-blue" &gt;</span>
                     <span><span>yellow #4A90E2</span></span>
                     <span>&lt;<span>/p</span>&gt;</span>
                 </code>  
            </div>
            <h3>1.1.3中性色</h3>
            <p>中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。</p>
            <div class="demo-color">
                <div class="demo-color-box pk-bg-primary">
                    <div class="pk-fs-12">#323232</div>
                </div>
                <div class="demo-color-box pk-bg-regular">
                    <div class="pk-fs-12">#666666</div>
                </div>
                <div class="demo-color-box pk-bg-secondary">
                    <div class="pk-fs-12">#999999</div>
                </div>
                <div class="demo-color-box pk-bg-prominent">
                    <div class="pk-fs-12">#5B6A92</div>
                </div>
                <div class="demo-color-box pk-bg-rare">
                    <div class="pk-fs-12">#cccccc</div>
                </div>
                <div class="demo-color-box pk-bg-frame">
                    <div class="pk-fs-12">#e5e5e5</div>
                </div>
                <div class="demo-color-box pk-bg-line">
                    <div class="pk-fs-12">#f2f2f2</div>
                </div>
                <div class="demo-color-box pk-bg-gray">
                    <div class="pk-fs-12">#009A61</div>
                </div>
            </div> 
            <div class="demo-pre-box">
                 <code class="code">
                     <span>&lt;<span>p</span> class="pk-bg-primary" &gt;</span>
                     <span><span>灰色 #323232</span></span>
                     <span>&lt;<span>/p</span>&gt;</span>
                 </code>
                 <code class="code">
                     <span>&lt;<span>p</span> class="pk-bg-blue" &gt;</span>
                     <span><span>yellow #FFC800</span></span>
                     <span>&lt;<span>/p</span>&gt;</span>
                 </code>  
            </div>
        </section>
        <div class="frame-bottom">以上规范整理结束</div>     
    </div>
</template>
<script>
export default{
    name:'center',
    data(){
        return{
            
        }
    }
}
</script>
<style lang="scss" type="sass" scoped>
@import '../assets/css/frame.scss';
.center-container{
    position: fixed;
    top:35px;
    left: 260px;
    width: calc(100% - 260px);
    height: 100%;
    overflow-y: auto;
    z-index: 100;
    background: white;
    box-shadow: 0px 0px 8px #999;
    text-align: left;
    padding:20px;
    p{
        font-size: 14px;
        color: #5e6d82;
        line-height: 1.5;
        padding:10px 0;
    }
    h3{
        margin: 55px 0 20px;
    }
    .demo-pre-box{
        display: block;
        padding: 16px;
        margin: 16px 0;
        font-size: 12px;
        line-height: 1.6;
        word-break: break-all;
        word-wrap: break-word;
        color: #555;
        background-color: #f8f8f8;
        border: 1px solid #dedede;
        border-radius: 0;
        height: 200px;
        overflow-y: scroll; 
    }
    .code{
        color: #c82829;
        display: block;
        padding: 8px 0;
    }
    .demo-color{
        margin-left: -6px;
        margin-right: -6px;
        display: flex;
        &-box{
            border-radius: 4px;
            padding: 20px;
            margin: 20px 50px 20px 0;
            height: 74px;
            box-sizing: border-box;
            color: #fff;
            font-size: 14px; 
            flex:1;
            text-align: center;
        }
        &-box-1{
            flex-grow: 0;
        }
    }

}
.frame-bottom{
    height:150px;
    text-align: -webkit-auto;
    padding-top: 50px;
    font-size: 12px;
    color: #ccc;
}
</style>