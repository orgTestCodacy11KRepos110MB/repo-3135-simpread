!function(){"use strict";var e=document.createElement("script"),t="https://raw.githubusercontent.com/kenshin/simpread-little/develop/src/bookmarklet/res/theme_pixyii.css",r="https://raw.githubusercontent.com/kenshin/simpread-little/develop/src/bookmarklet/res/theme_gothic.css",a={};function n(){return/win|mac/i.test(navigator.platform)?"pc":"mobile"}function s(e){"iphone"==(/iphone|android/i.test(navigator.userAgent)?"iphone":"ipad")?(e.FontSize("62.5%"),$.get(r,function(e){$("head").append('<style type="text/css">'+e+"</style>")})):(e.FontSize("72%"),e.Layout("10%"),$.get(t,function(e){$("head").append('<style type="text/css">'+e+"</style>")}));var a=$(document).width();$("sr-read").width()>=a&&$("sr-read").css({"min-width":a-20+"px"})}function o(){var e=0;$(window).scroll(function(t){var r=$(window).scrollTop();r>e?($("sr-rd-crlbar").css({opacity:0}),$("sr-crlbar-group").css({opacity:0})):$("sr-rd-crlbar").css({opacity:1}),e=r}),$(".simpread-read-root sr-rd-crlbar fab.anchor").on("mouseenter",function(e){$("sr-crlbar-group").css({opacity:1,display:"block"})})}function i(e){$(".simpread-read-root sr-rd-crlbar fab.crlbar-close").on("click",function(t){$(".simpread-read-root").addClass("simpread-read-root-hide"),e.removeClass("simpread-theme-root").removeClass("simpread-font"),e.attr("style")&&e.attr("style",e.attr("style").replace("font-size: 62.5%!important","")),$("body").removeClass("simpread-hidden"),$(".simpread-read-root").remove()})}function c(e){var t=function(t){var r="https://simpread.herokuapp.com",n=t.target.className,s=a.secret&&a.secret[n]?a.secret[n].access_token:"",o=(new Notify).Render({state:"loading",content:"保存中，请稍后！"}),i=function(e,t,r){o.complete(),200==e.code?(new Notify).Render("保存成功！"):(new Notify).Render("保存失败，请稍候再试！")},c=function(e,t,r){o.complete(),(new Notify).Render("保存失败，请稍候再试！")};if("pocket"==n)$.ajax({url:r+"/service/add",type:"POST",data:{name:"pocket",token:s,tags:"temp",title:e.html.title,url:location.href}}).done(i).fail(c);else if("evernote"==n||"yinxiang"==n)$.ajax({url:r+"/evernote/add",type:"POST",headers:{sandbox:!1,china:"evernote"!=n,type:n},data:{token:s,title:e.html.title,content:function(e,t){var r=void 0,a=void 0,n=["figure","sup","hr","section","applet","base","basefont","bgsound","blink","body","button","dir","embed","fieldset","form","frame","frameset","head","html","iframe","ilayer","input","isindex","label","layer","legend","link","marquee","menu","meta","noframes","noscript","object","optgroup","option","param","plaintext","script","select","style","textarea","xml"];$("html").append('<div id="simpread-en" style="display: none;">'+e+"</div>"),(r=$("#simpread-en")).find("img:not(.sr-rd-content-nobeautify)").map(function(e,t){$("<div>").attr("style","width: "+t.naturalWidth+"px; height:"+t.naturalHeight+"px; background: url("+t.src+")").replaceAll($(t))}),r.find(n.join(",")).map(function(e,t){$("<div>").html($(t).html()).replaceAll($(t))}),r.find(n.join(",")).remove(),a=r.html(),r.remove();try{return a=(a='<blockquote>本文由 <a href="http://ksria.com/simpread" target="_blank">简悦 SimpRead</a> 转码，原文地址 <a href="'+t+'" target="_blank">'+t+"</a></blockquote><hr></hr><br></br>"+a).replace(/(id|class|onclick|ondblclick|accesskey|data|dynsrc|tabindex)="[\w- ]+"/g,"").replace(/label=[\u4e00-\u9fa5 \w="-:\/\/:#;]+"/gi,"").replace(/ finallycleanhtml=[\u4e00-\u9fa5 \w="-:\/\/:#;]+"/gi,"").replace(/<img[ \w="-:\/\/?!]+>/gi,"").replace(/data[-\w]*=[ \w=\-.:\/\/?!;+"]+"[ ]?/gi,"").replace(/href="javascript:[\w()"]+/gi,"").replace(/sr-blockquote/gi,"blockquote").replace(/<p[ -\w*= \w=\-.:\/\/?!;+"]*>/gi,"").replace(/<figcaption[ -\w*= \w=\-.:\/\/?!;+"]*>/gi,"").replace(/<\/figcaption>/gi,"").replace(/<\/br>/gi,"").replace(/<br>/gi,"<br></br>").replace(/<\/p>/gi,"<br></br>")}catch(e){return'<div>转换失败，原文地址 <a href="'+t+'" target="_blank">'+t+"</a></div>"}}($("sr-rd-content").html(),e.org_url)}}).done(i).fail(c);else if("dropbox"==n){var d=(new TurndownService).turndown(l($("sr-rd-content").html())),p={path:"/md/"+function(e){return e.replace(/\//gi,"")}(e.html.title+".md"),mode:"overwrite"};$.ajax({url:"https://content.dropboxapi.com/2/files/upload",type:"POST",data:d,headers:{Authorization:"Bearer "+s,"Dropbox-API-Arg":function(e){return JSON.stringify(e).replace(/[\u007f-\uffff]/g,function(e){return"\\u"+("000"+e.charCodeAt(0).toString(16)).slice(-4)})}(p),"Content-Type":"application/octet-stream"},processData:!1,contentType:!1}).done(function(e,t,r){return i({code:200,data:e})}).fail(c)}else if("bear"==n||"drafts"==n){var u=(new TurndownService).turndown(l($("sr-rd-content").html())),m=encodeURIComponent(e.html.title),f=encodeURIComponent(u),b="bear://x-callback-url/create?title="+m+"&text="+f+"&tags=simpread",h="drafts4://x-callback-url/create?text="+encodeURIComponent("# "+e.html.title+"\r\n\r\n")+f,g="bear"==n?"Bear":"Drafts";o.complete(),(new Notify).Render("保存成功，2 秒后，将会提示打开 "+g),setTimeout(function(){$notify&&$notify("open",{url:"bear"==n?b:h}),window.location.href="bear"==n?b:h},2e3)}};a.secret&&a.secret.pocket&&$("sr-rd-crlbar fab.pocket").click(t)&&$("sr-rd-crlbar fab.pocket").css({opacity:1,"background-color":"rgb(3, 169, 244)"}),a.secret&&a.secret.evernote&&$("sr-rd-crlbar fab.evernote").click(t)&&$("sr-rd-crlbar fab.evernote").css({opacity:1,"background-color":"rgb(3, 169, 244)"}),a.secret&&a.secret.yinxiang&&$("sr-rd-crlbar fab.yinxiang").click(t)&&$("sr-rd-crlbar fab.yinxiang").css({opacity:1,"background-color":"rgb(3, 169, 244)"}),a.secret&&a.secret.yinxiang&&$("sr-rd-crlbar fab.dropbox").click(t)&&$("sr-rd-crlbar fab.dropbox").css({opacity:1,"background-color":"rgb(3, 169, 244)"}),"pc"!=n()&&$("sr-rd-crlbar fab.bear").click(t)&&$("sr-rd-crlbar fab.bear").css({opacity:1}),"pc"!=n()&&$("sr-rd-crlbar fab.drafts").click(t)&&$("sr-rd-crlbar fab.drafts").css({opacity:1})}function l(e){return e=(e='<blockquote><p>本文由 <a href="http://ksria.com/simpread/" target="_blank">简悦 SimpRead</a> 转码， 原文地址 <a href="'+window.location.href+'" target="_blank">'+window.location.href+"</a></p></blockquote>\r\n\r\n "+e).replace(/<\/?(ins|font|span|div|canvas|noscript|fig\w+)[ -\w*= \w=\-.:&\/\/?!;,%+()#'"{}\u4e00-\u9fa5]*>/gi,"").replace(/sr-blockquote/gi,"blockquote").replace(/<\/?style[ -\w*= \w=\-.:&\/\/?!;,+()#"\S]*>/gi,"").replace(/(name|lable)=[\u4e00-\u9fa5 \w="-:\/\/:#;]+"/gi,"")}e.type="text/javascript",e.src="https://cdn.bootcss.com/script.js/2.5.8/script.min.js",e.onload=function(){$script("https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js",function(){$.get("https://raw.githubusercontent.com/kenshin/simpread-little/develop/src/bookmarklet/res/notify.css",function(e){$("head").append('<style type="text/css">'+e+"</style>")}),$.get("https://raw.githubusercontent.com/kenshin/simpread-little/develop/src/bookmarklet/res/simpread.css",function(e){$("head").append('<style type="text/css">'+e+"</style>")}),$.get("https://raw.githubusercontent.com/kenshin/simpread-little/develop/src/bookmarklet/res/option.css",function(e){$("head").append('<style type="text/css">'+e+"</style>")}),$.get("https://raw.githubusercontent.com/kenshin/simpread-little/develop/src/bookmarklet/res/simpread_user.css",function(e){$("head").append('<style type="text/css">'+e+"</style>")}),$.get("https://raw.githubusercontent.com/kenshin/simpread-little/develop/src/bookmarklet/res/theme_common.css",function(e){$("head").append('<style type="text/css">'+e+"</style>")}),$script(["https://greasyfork.org/scripts/39995-pureread/code/PureRead.js","https://greasyfork.org/scripts/40236-notify/code/Notify.js","https://greasyfork.org/scripts/39997-puplugin/code/PuPlugin.js","https://greasyfork.org/scripts/40244-mduikit/code/MDUIKit.js","https://unpkg.com/turndown@4.0.2/dist/turndown.js"],"bundle"),$script.ready("bundle",function(){$.getJSON("https://raw.githubusercontent.com/kenshin/simpread-little/develop/src/bookmarklet/res/website_list_v4.json",function(e){var t=new PureRead;t.Addsites(e),t.AddPlugin(puplugin.Plugin()),t.Getsites(),"none"==t.state?(alert(location.href),(new Notify).Render("当前页面不支持简悦的阅读模式")):function(e,t,r){var a=r("html");if(e.ReadMode(),function(){if(e.html.include&&e.html.include.includes&&e.html.include.includes("sr-rd-content-error"))return(new Notify).Render('当前页面结构改变导致不匹配阅读模式，请报告 <a href="https://github.com/Kenshin/simpread/issues/new" target="_blank">此页面</a>'),!0}())return;r("body").addClass("simpread-hidden"),a.addClass("simpread-font").addClass("simpread-theme-root").append('<div class="simpread-read-root">\n                        <sr-read>\n                            <sr-rd-title></sr-rd-title>\n                            <sr-rd-desc></sr-rd-desc>\n                            <sr-rd-content></sr-rd-content>\n                            <sr-page></sr-page>\n                            <sr-rd-footer>\n                                <sr-rd-footer-text style="display:none;">全文完</sr-rd-footer-text>\n                                <sr-rd-footer-copywrite>\n                                    <span>本文由 简悦 </span><a href="http://ksria.com/simpread" target="_blank">SimpRead</a><span> 优化，用以提升阅读体验。</span>\n                                </sr-rd-footer-copywrite>\n                                </sr-rd-footer>\n                            <sr-rd-crlbar>\n                                <sr-crlbar-group>\n                                    <fab class="drafts"></fab>\n                                    <fab class="bear"></fab>\n                                    <fab class="dropbox"></fab>\n                                    <fab class="yinxiang"></fab>\n                                    <fab class="evernote"></fab>\n                                    <fab class="pocket"></fab>\n                                </sr-crlbar-group>\n                                <fab class="anchor" style="opacity:1;"></fab>\n                                <fab class="crlbar-close"></fab>\n                            </sr-rd-crlbar>\n                        </sr-read>\n                    </div>'),r(".simpread-read-root").addClass("simpread-theme-root").animate({opacity:1},{delay:100}).addClass("simpread-read-root-show"),r("sr-rd-title").html(e.html.title),""!=e.html.desc?r("sr-rd-desc").html(e.html.desc):r("sr-rd-desc").remove();e.html.avatar?function(e,t){var a=[],n=t[0].name,s=t[1].url;e.each(function(e,t){var o={};o.name=r(n[e]).text(),o.url=r(s[e]).attr("src"),o.content=r(t).html(),!o.url&&(o.url=default_src),a.push(o)});var o=a.map(function(e){return'<sr-rd-mult>\n                            <sr-rd-mult-avatar>\n                                <div class="sr-rd-content-nobeautify"><img src='+e.url+" /></div>\n                                <span>"+e.name+"</span>\n                            </sr-rd-mult-avatar>\n                            <sr-rd-mult-content>"+e.content+"</sr-rd-mult-content>\n                    </sr-rd-mult>"});r("sr-rd-content").html(o)}(e.html.include,e.html.avatar):r("sr-rd-content").html(e.html.include);e.html.paging?(n=e.html.paging,l=n[0].prev,d=n[1].next,p=mduikit.Button("btn-next","后一页 →",{href:void 0==d?"javascript:;":d,disable:void 0==d,color:"#fff",bgColor:"#1976D2"}),u=mduikit.Button("btn-prev","← 前一页",{href:void 0==l?"javascript:;":l,disable:void 0==l,color:"#fff",bgColor:"#1976D2"}),l||d?r("sr-page").html(u+p):r("sr-page").remove()):r("sr-page").remove();var n,l,d,p,u;r("sr-rd-content").find(e.Exclude(r("sr-rd-content"))).remove(),e.Beautify(r("sr-rd-content")),e.Format("simpread-read-root"),setTimeout(function(){s(t.Plugin("style")),o(),c(e),i(a)},500)}(t,puplugin,$)})})})},document.body.appendChild(e)}();