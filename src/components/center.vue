<template>
    <div :id="id" ref="container" class="center-container">
        <section>
            <h1>1.1 背景 色彩</h1>
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
        <section>
            <h1>2.1 Text文本 工具</h1>
            <p>我们对字体进行统一规范，力求每个页面都有最佳展示效果</p>
            <h3>2.1.1 文本字体</h3>
            <div class="demo-pre-box">
                 <code class="code">
                     <span>&lt;<span>p</span> class="pk-bg-yellow" &gt;</span>
                     <span><span>font-family:  Microsoft YaHei,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,WenQuanYi Micro Hei,sans-serif;</span></span>
                     <span>&lt;<span>/p</span>&gt;</span>
                 </code>    
            </div>
            <h3>2.1.2 文本颜色</h3>
            <p>一些有代表意义的文本颜色类</p>
            <fieldset class="pk-fieldset">
			    <legend class="pk-legend"> 实例：</legend>
	    		<p class="pk-p">
	    			<span class="pk-text-green">辅助绿</span>
                    <span class="pk-text-yellow">标题型</span>
                    <span class="pk-text-primary">辅助黑</span>
                    <span class="pk-text-regular">辅助深黑</span>
                    <span class="pk-text-secondary">辅助浅深黑</span>
                    <span class="pk-text-prominent">辅助浅色蓝</span>
                    <span class="pk-text-frame">辅助浅灰</span>
	    		</p>
			</fieldset>
            <div class="demo-pre-box">
                 <code class="code">
                     <span>&lt;<span>p</span> class="pk-text-green" &gt;</span>
                     <span><span>2018下半年，中美贸易战之后，大宗商品市场将走向何方？</span></span>
                     <span>&lt;<span>/p</span>&gt;</span>
                 </code>  
                 <code class="code">
                     <span>&lt;<span>p</span> class="pk-text-primary" &gt;</span>
                     <span><span>2018下半年，中美贸易战之后，大宗商品市场将走向何方？</span></span>
                     <span>&lt;<span>/p</span>&gt;</span>
                 </code> 
                 <code class="code">
                     <span>&lt;<span>p</span> class="pk-text-regular" &gt;</span>
                     <span><span>2018下半年，中美贸易战之后，大宗商品市场将走向何方？</span></span>
                     <span>&lt;<span>/p</span>&gt;</span>
                 </code>
                 <code class="code">
                     <span>&lt;<span>p</span> class="pk-text-secondary" &gt;</span>
                     <span><span>2018下半年，中美贸易战之后，大宗商品市场将走向何方？</span></span>
                     <span>&lt;<span>/p</span>&gt;</span>
                 </code>  
                 <code class="code">
                     <span>&lt;<span>p</span> class="pk-text-frame" &gt;</span>
                     <span><span>2018下半年，中美贸易战之后，大宗商品市场将走向何方？</span></span>
                     <span>&lt;<span>/p</span>&gt;</span>
                 </code>     
            </div>
            <h3>2.1.2 文本大小</h3>
            <p>使用.pk-fs-(12/14/16/18/20/24)类，可设置不同大小的文本字号</p>
            <fieldset class="pk-fieldset">
			    <legend class="pk-legend"> 实例：</legend>
	    		<p class="pk-p">
                    <span class="pk-fs-24">标题一</span>
	    			<span class="pk-fs-20">标题一</span>
                    <span class="pk-fs-16">标题二</span>
                    <span class="pk-fs-12">标题三</span>
	    		</p>
			</fieldset>
            <div class="demo-pre-box">
                 <code class="code">
                     <span>&lt;<span>p</span> class="pk-fs-24" &gt;</span>
                     <span><span>2018下半年，中美贸易战之后，大宗商品市场将走向何方？</span></span>
                     <span>&lt;<span>/p</span>&gt;</span>
                 </code>  
                 <code class="code">
                     <span>&lt;<span>p</span> class="pk-fs-20" &gt;</span>
                     <span><span>2018下半年，中美贸易战之后，大宗商品市场将走向何方？</span></span>
                     <span>&lt;<span>/p</span>&gt;</span>
                 </code> 
                 <code class="code">
                     <span>&lt;<span>p</span> class="pk-fs-16" &gt;</span>
                     <span><span>2018下半年，中美贸易战之后，大宗商品市场将走向何方？</span></span>
                     <span>&lt;<span>/p</span>&gt;</span>
                 </code>  
                 <code class="code">
                     <span>&lt;<span>p</span> class="pk-fs-14" &gt;</span>
                     <span><span>2018下半年，中美贸易战之后，大宗商品市场将走向何方？</span></span>
                     <span>&lt;<span>/p</span>&gt;</span>
                 </code> 
                 <code class="code">
                     <span>&lt;<span>p</span> class="pk-fs-12" &gt;</span>
                     <span><span>2018下半年，中美贸易战之后，大宗商品市场将走向何方？</span></span>
                     <span>&lt;<span>/p</span>&gt;</span>
                 </code> 
            </div>

            <h3>2.1.2 文本加粗 </h3>
            <p>通过增加 font-weight 值强调一段文本。也可以通过.pk-text-bold类来强调一段文本。不加粗用类pk-text-normal</p>
            <fieldset class="pk-fieldset">
			    <legend class="pk-legend"> 实例：</legend>
                <p class="pk-p">
                    <span class="pk-text-bold">标题加粗</span>
                    <span class="pk-text-normal">标题不加粗</span>
	    		</p>
			</fieldset>
            <div class="demo-pre-box">
                 <code class="code">
                     <span>&lt;<span>h1</span>  class="pk-text-bold" &gt;</span>
                     <span><span>2018下半年，中美贸易战之后，大宗商品市场将走向何方？</span></span>
                     <span>&lt;<span>/h1</span>&gt;</span>
                 </code>     
            </div>

            <h3>2.1.2 文本溢出 </h3>
            <p>文本溢出显示省略号。</p>
            <fieldset class="pk-fieldset">
			    <legend class="pk-legend"> 实例：</legend>
                <p class="pk-p">
                    <span class="pk-text-ellipsis1">这段文字非常非常长超出显示一行...</span>
                    
                    <span class="pk-text-ellipsis2">
                        这段文字非常非常长超出显示两行非<br>
                        非常长非常长非常长非常长非常...
                    </span>
	    		</p>
			</fieldset>
            <div class="demo-pre-box">
                 <code class="code">
                     <span>&lt;<span>h1</span>  class="pk-text-ellipsis1" &gt;</span>
                     <span><span>这段文字非常非常长超出显示两行非常长非常长非常长非常长...</span></span>
                     <span>&lt;<span>/h1</span>&gt;</span>
                 </code>  
                 <code class="code">
                     <span>&lt;<span>h1</span>  class="pk-text-ellipsis2" &gt;</span>
                     <span>
                         <span>
                           这段文字非常非常长常非常长超出显示两行非常长非常长非<br>
                           常长超出显示两行非常长非常长非常长非常长长非常长非的...
                         </span>
                     </span>
                     <span>&lt;<span>/h1</span>&gt;</span>
                 </code>    
            </div>

            <h3>2.1.2 文本对齐 </h3>
            <p>过文本对齐类，可以简单方便的将文字重新对齐</p>
            <fieldset class="pk-fieldset">
			    <legend class="pk-legend"> 实例：</legend>
                <p class="pk-p">
                    <span class="pk-text-center">本居中对齐</span>
                    <span class="pk-text-left">本居左对齐</span>
                    <span class="pk-text-right">本居右对齐</span>
	    		</p>
			</fieldset>
            <div class="demo-pre-box">
                 <code class="code">
                     <span>&lt;<span>h1</span>  class="pk-text-center" &gt;</span>
                     <span><span>本居中对齐</span></span>
                     <span>&lt;<span>/h1</span>&gt;</span>
                 </code>  
                 <code class="code">
                     <span>&lt;<span>h1</span>  class="pk-text-left" &gt;</span>
                     <span>
                         <span>
                           本居左对齐
                         </span>
                     </span>
                     <span>&lt;<span>/h1</span>&gt;</span>
                 </code> 
                 <code class="code">
                     <span>&lt;<span>h1</span>  class="pk-text-left" &gt;</span>
                     <span>
                         <span>
                           本居右对齐
                         </span>
                     </span>
                     <span>&lt;<span>/h1</span>&gt;</span>
                 </code>    
            </div>

            <h3>2.1.2 Title </h3>
            <p>使用.pk-h1到.pk-h6类，作为标题的样式。在标题内还可以添加.pk-small类，作为<span class="pk-text-blue">&lt;small&gt;</span>标签样式，可以用来标记副标题。</p>
            <fieldset class="pk-fieldset">
			    <legend class="pk-legend"> 实例：</legend>
	    		<p class="pk-p">
                    <h1>h1.标题示例</h1>
	    			<h2>h2.标题示例</h2>
                    <h3>h3.标题示例</h3>
                    <h4>h4.标题示例</h4>
                    <h5>h5.标题示例</h5>
                    <h6>h6.标题示例</h6>
	    		</p>
			</fieldset>
            <div class="demo-pre-box">
                 <code class="code">
                     <span>&lt;<span>h1</span>&gt;</span>
                     <span><span>2018下半年，中美贸易战之后，大宗商品市场将走向何方？</span></span>
                     <span>&lt;<span>/h1</span>&gt;</span>
                 </code>  
                 <code class="code">
                     <span>&lt;<span>h2</span>&gt;</span>
                     <span><span>2018下半年，中美贸易战之后，大宗商品市场将走向何方？</span></span>
                     <span>&lt;<span>/h2</span>&gt;</span>
                 </code>
                 <code class="code">
                     <span>&lt;<span>h3</span>&gt;</span>
                     <span><span>2018下半年，中美贸易战之后，大宗商品市场将走向何方？</span></span>
                     <span>&lt;<span>/h3</span>&gt;</span>
                 </code> 
                 <code class="code">
                     <span>&lt;<span>h4</span>&gt;</span>
                     <span><span>2018下半年，中美贸易战之后，大宗商品市场将走向何方？</span></span>
                     <span>&lt;<span>/h4</span>&gt;</span>
                 </code> 
                 <code class="code">
                     <span>&lt;<span>h5</span>&gt;</span>
                     <span><span>2018下半年，中美贸易战之后，大宗商品市场将走向何方？</span></span>
                     <span>&lt;<span>/h5</span>&gt;</span>
                 </code> 
                 <code class="code">
                     <span>&lt;<span>h6</span>&gt;</span>
                     <span><span>2018下半年，中美贸易战之后，大宗商品市场将走向何方？</span></span>
                     <span>&lt;<span>/h6</span>&gt;</span>
                 </code>    
            </div>
        </section>
        <section>
            <h1>3.1 border 设置</h1>
            <p>pk border可单独再外层设置 ，以便统一调用</p>
            <h3>3.1.2  border-radius</h3>
            <p>可对圆角设置</p>
            <div class="demo-border-radius">
                <span class="pk-br-2"></span>
                <span class="pk-br-4"></span>
                <span class="pk-br-6"></span>
                <span class="pk-br-8"></span>
                <span class="pk-br-10"></span>
                <span class="pk-br-14"></span>
                <span class="pk-br-100"></span>
            </div>
            <div class="demo-pre-box">
                 <code class="code">
                     <span>&lt;<span>p</span> class="pk-br-2" &gt;</span>
                     <span><span></span></span>
                     <span>&lt;<span>/p</span>&gt;</span>
                 </code>
                 <code class="code">
                     <span>&lt;<span>p</span> class="pk-br-4" &gt;</span>
                     <span><span></span></span>
                     <span>&lt;<span>/p</span>&gt;</span>
                 </code>   
                 <code class="code">
                     <span>&lt;<span>p</span> class="pk-br-6" &gt;</span>
                     <span><span></span></span>
                     <span>&lt;<span>/p</span>&gt;</span>
                 </code>       
            </div>
            <h3>3.1.2  border 线</h3>
            <p>使用.</p>
            <div class="demo-border">
                <span class="pk-bd-n">没有border</span>
                <span class="pk-bd-a">border</span>
                <span class="pk-bd-t">border-top</span>
                <span class="pk-bd-b">border-bottom</span>
                <span class="pk-bd-l">border-left</span>
                <span class="pk-bd-l">border-right</span>
            </div>
            <div class="demo-pre-box">
                <code class="code">
                     <span>&lt;<span>p</span> class="pk-bd-n" &gt;</span>
                     <span><span></span></span>
                     <span>&lt;<span>/p</span>&gt;</span>
                 </code>
                 <code class="code">
                     <span>&lt;<span>p</span> class="pk-bd-a" &gt;</span>
                     <span><span></span></span>
                     <span>&lt;<span>/p</span>&gt;</span>
                 </code> 
                 <code class="code">
                     <span>&lt;<span>p</span> class="pk-bd-t" &gt;</span>
                     <span><span></span></span>
                     <span>&lt;<span>/p</span>&gt;</span>
                 </code> 
                 <code class="code">
                     <span>&lt;<span>p</span> class="pk-bd-b" &gt;</span>
                     <span><span></span></span>
                     <span>&lt;<span>/p</span>&gt;</span>
                 </code>      
            </div>
        </section>
        <section>
            <h1>4.1 阴影 设置</h1>
            <p>pk 本站统一卡片阴影设置 .pk-box-shadow</p>
            <h3>4.1.1  box-shadow</h3>
            <p>本站统一卡片阴影设置</p>
            <div class="demo-box-shadow pk-box-shadow">
                box-shadow
            </div>
        </section>
        <section>
            <h1>5.1 内外边距 </h1>
            <p>pk 左右边距默认大小（16px）</p>
            <h3>5.1.1 padding margin</h3>
            <p>增加 {size} 值的内外边距辅助类。</p>
            <div class="demo-padding-margin">
                <div class="thead">
                    <p>Margin</p> 
                    <p>padding</p> 
                </div>
                <table class="demo-table">
                    <tbody>
                        <tr>
                            <td>
                                <code>.pk-mg-{size}</code>
                                <code>.pk-mg-l{size}</code>
                            </td>
                            <br>
                            <td>
                                <code>.pk-pd-{size}</code>
                                <code>.pk-pd-l{size}</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                水平方向外边距
                                <br>
                                <code>.pk-mg-lr{size}</code>
                            </td>
                            <br>
                            <td>
                                水平方向内边距
                                <br>
                                <code>.pk-pd-lr{size}</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                垂直方向外边距
                                <br>
                                <code>.pk-mg-lr{size}</code>
                            </td>
                            <br>
                            <td>
                                垂直方向内边距
                                <br>
                                <code>.pk-pd-tb{size}</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                左外边距
                                <br>
                                <code>.pk-mg-l{size}</code>
                            </td>
                            <br>
                            <td>
                                左内边距
                                <br>
                                <code>.pk-pd-l{size}</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                上外边距
                                <br>
                                <code>.pk-mg-t{size}</code>
                            </td>
                            <br>
                            <td>
                                上内边距
                                <br>
                                <code>.pk-pd-t{size}</code>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                下外边距
                                <br>
                                <code>.pk-mg-b{size}</code>
                            </td>
                            <br>
                            <td>
                                下内边距
                                <br>
                                <code>.pk-pd-b{size}</code>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
        <section>
            <h1>6.1 html元素 button </h1>
            <p>在要应用按钮样式的元素上添加 .pk-btn，再设置相应的颜色。</p>
            <h3>6.1.1 button</h3>
            <p>按钮设置默认样式</p>
            <div class="demo-btn demo-btn-set">
                <div class="demo-btn-box pk-btn-green">
                    <div class="pk-fs-12">#009A61</div>
                </div>
                <div class="demo-btn-box pk-btn-yellow">
                    <div class="pk-fs-12">#FFC800</div>
                </div>
                <div class="demo-btn-box pk-btn-blue">
                    <div class="pk-fs-12">#4A90E2</div>
                </div>
                <div class="demo-btn-box pk-btn-red">
                    <div class="pk-fs-12">#DE4F45</div>
                </div>

                <div class="demo-btn-box pk-btn-regular">
                    <div class="pk-fs-12">#666666</div>
                </div>
                <div class="demo-btn-box pk-btn-frame">
                    <div class="pk-fs-12">#e5e5e5</div>
                </div>
                <div class="demo-btn-box pk-btn-line">
                    <div class="pk-fs-12">#f2f2f2</div>
                </div>
                <div class="demo-btn-box pk-btn-gray">
                    <div class="pk-fs-12">#009A61</div>
                </div>
            </div>
            <div class="demo-pre-box">
                 <code class="code">
                     <span>&lt;<span>h1</span>  class="pk-btn pk-btn-yellow" &gt;</span>
                     <span><span>默认按钮</span></span>
                     <span>&lt;<span>/h1</span>&gt;</span>
                 </code>
                 <code class="code">
                     <span>&lt;<span>h1</span>  class="pk-btn pk-btn-green" &gt;</span>
                     <span><span>绿色按钮</span></span>
                     <span>&lt;<span>/h1</span>&gt;</span>
                 </code>   
                 <code class="code">
                     <span>&lt;<span>h1</span>  class="pk-btn pk-btn-blue" &gt;</span>
                     <span><span>蓝色按钮</span></span>
                     <span>&lt;<span>/h1</span>&gt;</span>
                 </code>   
                 <code class="code">
                     <span>&lt;<span>h1</span>  class="pk-btn pk-btn-regular" &gt;</span>
                     <span><span>灰色按钮</span></span>
                     <span>&lt;<span>/h1</span>&gt;</span>
                 </code>       
            </div>
            <h3>6.1.1 轮廓线button</h3>
            <p>通过添加.pk-btn-{color}-outline类可以使按钮以轮廓线展示/p>
            <fieldset class="pk-fieldset">
			    <legend class="pk-legend"> 实例：</legend>
                <label class="vus-label vus-fluid">默认：</label>
	    		<p class="pk-p demo-btn demo-btn-set demo-btn-set-outline">
                    <span class="demo-btn-box pk-btn-green-outline">#009A61</span>
                    <span class="demo-btn-box pk-btn-yellow-outline">#FFC800</span>
                    <span class="demo-btn-box pk-btn-blue-outline">#4A90E2</span>
	    			<span class="demo-btn-box pk-btn-primary-outline">#323232</span>
                    <span class="demo-btn-box pk-btn-regular-outline">#666666</span>
                    <span class="demo-btn-box pk-btn-secondary-outline">#999999</span>
	    		</p>
			</fieldset>
            <div class="demo-pre-box">
                 <code class="code">
                     <span>&lt;<span>h1</span>  class="pk-btn pk-btn-yellow-outline" &gt;</span>
                     <span><span>默认按钮</span></span>
                     <span>&lt;<span>/h1</span>&gt;</span>
                 </code>
                 <code class="code">
                     <span>&lt;<span>h1</span>  class="pk-btn pk-btn-green-outline" &gt;</span>
                     <span><span>绿色按钮</span></span>
                     <span>&lt;<span>/h1</span>&gt;</span>
                 </code>   
                 <code class="code">
                     <span>&lt;<span>h1</span>  class="pk-btn pk-btn-blue-outline" &gt;</span>
                     <span><span>蓝色按钮</span></span>
                     <span>&lt;<span>/h1</span>&gt;</span>
                 </code>   
                 <code class="code">
                     <span>&lt;<span>h1</span>  class="pk-btn pk-btn-regular-outline" &gt;</span>
                     <span><span>灰色按钮</span></span>
                     <span>&lt;<span>/h1</span>&gt;</span>
                 </code>       
            </div>
            
        </section>
        <section>
            <h1>7.1 icon </h1>
            <p>pk 图标命名规则</p>
            <h3>5.1.1 </h3>
            <p>增加 iconfont icon-{功能}-{状态} 命名规则</p>
            <fieldset class="pk-fieldset">
			    <legend class="pk-legend"> 实例：</legend>
	    		<p class="pk-p demo-icon">
                    <i class="iconfont icon-collect-default"></i>
                    <i class="iconfont icon-collect-pressed"></i>
                    <i class="iconfont icon-good-default"></i>
                    <i class="iconfont icon-good-pressed"></i>
                    <i class="iconfont icon-bad-default"></i>
                    <i class="iconfont icon-bad-pressed"></i>
	    		</p>
			</fieldset>
            <div class="demo-pre-box">
                 <code class="code">
                     <span>&lt;<span>i</span>  class="iconfont icon-collect-default" &gt;</span>
                     <span><span></span></span>
                     <span>&lt;<span>/i</span>&gt;</span>
                 </code> 
                 <code class="code">
                     <span>&lt;<span>i</span>  class="iconfont icon-collect-pressed" &gt;</span>
                     <span><span></span></span>
                     <span>&lt;<span>/i</span>&gt;</span>
                 </code>
                 <code class="code">
                     <span>&lt;<span>i</span>  class="iconfont icon-good-default" &gt;</span>
                     <span><span></span></span>
                     <span>&lt;<span>/i</span>&gt;</span>
                 </code>
                 <code class="code">
                     <span>&lt;<span>i</span>  class="iconfont icon-good-pressed" &gt;</span>
                     <span><span></span></span>
                     <span>&lt;<span>/i</span>&gt;</span>
                 </code>
                 <code class="code">
                     <span>&lt;<span>i</span>  class="iconfont icon-bad-default" &gt;</span>
                     <span><span></span></span>
                     <span>&lt;<span>/i</span>&gt;</span>
                 </code>
                 <code class="code">
                     <span>&lt;<span>i</span>  class="iconfont icon-bad-pressed" &gt;</span>
                     <span><span></span></span>
                     <span>&lt;<span>/i</span>&gt;</span>
                 </code>      
            </div>    
        </section>
        <section>
            <h1>8.1 布局容器 </h1>
            <p>pk 需要一个容器元素来包裹网站的内容。</p>
            <h3>8.1.1 浮动</h3>
            <p>浮动</p>
            <fieldset class="pk-fieldset">
			    <legend class="pk-legend"> 实例：</legend>
	    		<p class="pk-p demo-float">
                    <span class="pk-fl">左浮动</span>
                    <span class="pk-fr">右浮动</span>
	    		</p>
			</fieldset>
            <div class="demo-pre-box">
                 <code class="code">
                     <span>&lt;<span>span</span>  class="pk-fl" &gt;</span>
                     <span><span></span></span>
                     <span>&lt;<span>/span</span>&gt;</span>
                 </code> 
                 <code class="code">
                     <span>&lt;<span>span</span>  class="pk-fr" &gt;</span>
                     <span><span></span></span>
                     <span>&lt;<span>/span</span>&gt;</span>
                 </code>     
            </div>  
            <h3>8.1.1 清除浮动</h3>
            <p>清除浮动</p>
            <fieldset class="pk-fieldset">
			    <legend class="pk-legend"> 实例：</legend>
	    		<p class="pk-p demo-float">
                    <span class="clearfix">左浮动</span>
	    		</p>
			</fieldset>
            <div class="demo-pre-box">
                 <code class="code">
                     <span>&lt;<span>span</span>  class="clearfix" &gt;</span>
                     <span><span></span></span>
                     <span>&lt;<span>/span</span>&gt;</span>
                 </code>      
            </div>
            <h3>8.1.1 弹性盒子flex</h3>
            <p>使用.pk-flex-box类，作为弹性盒子的容器样式。在容器内添加.pk-flex-box-fx作为Flex的类。</p>
            <fieldset class="pk-fieldset">
			    <legend class="pk-legend"> 实例：</legend>
	    		<p class="demo-flex pk-flex-box">
                    <span class="pk-flex-box-fx">3</span>
                    <span class="pk-flex-box-fx">3</span>
                    <span class="pk-flex-box-fx">3</span>
	    		</p>
			</fieldset>
            <div class="demo-pre-box">
                 <code class="code">
                     <span>&lt;<span>div</span>  class="pk-flex-box" &gt;</span>
                     <span><span>
                         <br>
                        &nbsp;&nbsp;<span>&lt;<span>span</span>  class="pk-flex-box" &gt;</span>
                        <span><span></span></span>
                        <span>&lt;<span>/span</span>&gt;</span>
                        <br>
                        &nbsp;&nbsp;<span>&lt;<span>span</span>  class="pk-flex-box" &gt;</span>
                        <span><span></span></span>
                        <span>&lt;<span>/span</span>&gt;</span>
                        <br>
                        &nbsp;&nbsp;<span>&lt;<span>span</span>  class="pk-flex-box" &gt;</span>
                        <span><span></span></span>
                        <span>&lt;<span>/span</span>&gt;</span>
                        <br>
                     </span></span>
                     <span>&lt;<span>/div</span>&gt;</span>
                 </code>      
            </div>    
        </section>
        <div class="frame-bottom">以上规范整理</div>     
    </div>
</template>
<script>
import pageUtil from '../utils/page';
import {throttle} from '../utils/throttle'
export default{
    name:'center',
    data(){
        return{
            id:pageUtil.centerId
        }
    },
    mounted(){
        var self = this;
        let container = this.$refs.container;
        let containerChildren = container.children;
        let containerChildrenAmount = containerChildren.length;
        let onscrollAmount = 0;
        container.onscroll = throttle(function(){
            for(let i=0;i<containerChildrenAmount-1;i++){
                //console.log('onscroll:',onscrollAmount++);
                if(containerChildren[i].offsetTop <= container.scrollTop && containerChildren[i+1].offsetTop>container.scrollTop){
                    self.$emit("currentScrollIndex",i+1);
                    break;
                }
            }
        },100)
    }
}
</script>
<style lang="scss" type="sass" scoped>
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
    // 实例
    .pk-fieldset{
        padding: 5px 10px 10px;
        border: 1px solid #ddd;
        .pk-legend{
            max-width: 100%;
            display: table;
            white-space: normal;
            padding: 0 10px 5px;
            font-weight: 500;
        }
        h3,p{
            margin:0;
            padding:0;
        }
    }
    h3{
        margin: 55px 0 20px;
    }
    section{
        margin-top: 50px;
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
    .demo-color,.demo-btn{
        margin-left: -6px;
        margin-right: -6px;
        display: flex;
        &-box{
            border-radius: 4px;
            margin: 20px 50px 20px 0;
            height: 74px;
            line-height: 74px;
            box-sizing: border-box;
            color: #fff;
            font-size: 14px; 
            flex:1;
            text-align: center;
        }
        &-box-1{
            flex-grow: 0;
            min-width: 200px;
        }
    }
    .demo-btn-set{
        .demo-btn-box{
            margin: 20px 6px 20px 0;
            height: 35px;
            padding: 0;
            line-height: 35px;
        }
        &-outline{
            .demo-btn-box{
                color: #000000;
            }
        }
    }
    .demo-border-radius{
        padding: 20px;
        margin: 20px 50px 20px 0;
        display: flex;
        span{


            width:50px;
            height:50px;
            background: #999999;
            margin-right: 15px;
        }
    }
    .demo-border{
        span{
            width: 126px;
            height: 50px;
            display: inline-block;
            text-align: center;
            line-height: 50px;
        }
    }
    .demo-box-shadow{
        width:100%;
        height: 100px;
        line-height: 100px;
        padding-left: 150px;
    }
    .demo-padding-margin{
        .thead {
            vertical-align: middle;
            border-color: inherit;
            display: flex;
            width:100%;
            p{
                flex:1;
                font-weight: 800;
            }
        }
        table{
            width: 100%;
            margin-bottom: 16px;
            border-spacing: 0;
            border-collapse: separate;
        }
        tbody>tr>td{
                background-color: #f9f9f9;
                padding: 16px;
                line-height: 1.6;
                vertical-align: top;
                border-top: 1px solid #f2f2f2;
                code{
                    padding: 2px 4px;
                    font-size: 14px;
                    color: #c7254e;
                    background-color: #f8f8f8;
                    white-space: nowrap;
                    border-radius: 0;
                }
        }

    }   
    .demo-btn{
        span{
            padding: 4px 14px;
            color: #fff;
        }
    }
    .demo-icon{
        i{
            font-size: 20px;
            margin-right:20px;
        }
    }
    .demo-flex{
        span{
            width: 100px;
            height: 38px;
            background: #ccc;
            margin-right: 50px;
            line-height: 38px;
            text-align: center;
            color: #fff;
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