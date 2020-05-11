let codeInput=null;var auto=!0;getMarkdown=null,replaceAtCaret=null,function(){function e(){let e=document.getElementById("out");"preview"==e.src.substring(e.src.lastIndexOf("/")+1)?e.src="/create/output/#/preview2":document.getElementById("out").src="/create/output/#/preview"}function t(){auto?($("#auto").addClass("green-b"),$("#preview-btn").text("Auto Preview"),document.getElementById("preview-btn").disabled=!0,e()):($("#auto").removeClass("green-b"),$("#preview-btn").text("Preview Changes"),document.getElementById("preview-btn").disabled=!1)}"undefined"==typeof Storage&&alert("Your browser does not support saving. Please use the latest version of Google Chrome, Edge, Firefox, Safari, or Opera."),auto="true"==window.localStorage.autoStored,replaceAtCaret=function(e){codeInput.replaceSelection(e),codeInput.focus()},getMarkdown=function(){return codeInput.getValue()};var n="";n=window.localStorage.savedWrite?window.localStorage.savedWrite:"*BigBrain Team @5.3.20* \n# Welcome to the Editor!\n## About\n- We use [markdown](https://www.markdownguide.org/basic-syntax/) to generate courses.\n- This allows for great customizability and it's easy to learn!\n- Your work will be saved on this computer. :computer:\n- More features to aid your lesson creation comming soon...\n\n\n",codeInput=CodeMirror(document.getElementById("in"),{value:n,theme:"material-palenight",mode:"gfm",lineNumbers:!0}),codeInput.focus(),codeInput.setCursor(codeInput.lineCount()),MathLive.default.makeMathField("mathfield",{virtualKeyboardMode:"manual"}),document.getElementById("preview-btn").addEventListener("click",e);for(let e="i";"iiiii"!=e;e+="i")document.getElementById(e+"-heading").addEventListener("click",(function(){let t=`\n${"#".repeat(e.length)} Heading\n`;replaceAtCaret(t)}));document.getElementById("tabs").addEventListener("click",(function(){replaceAtCaret("\n\x3c!-- tabs:start --\x3e\n\n#### **Tab 1**\n\n#### **Tab 2**\n\n\x3c!-- tabs:end --\x3e\n")})),document.getElementById("eq").addEventListener("click",(function(){let e=document.getElementById("mathfield").mathfield.$text();e=e.replace("\\mright","\\right").replace("\\mleft","\\left"),replaceAtCaret(`$${e}$`)})),document.getElementById("eq-block").addEventListener("click",(function(){let e=document.getElementById("mathfield").mathfield.$text();e=e.replace("\\mright","\\right").replace("\\mleft","\\left"),replaceAtCaret(`\n$$${e}$$\n`)})),document.getElementById("alert-btn").addEventListener("click",(function(){replaceAtCaret("\n!> Alert! :100:\n")})),document.getElementById("callout-btn").addEventListener("click",(function(){replaceAtCaret("\n?> Callout. :smirk:\n")})),document.getElementById("code-btn").addEventListener("click",(function(){replaceAtCaret('\n```java\nSystem.out.println("Hello World");\n```\n')})),document.getElementById("flip").addEventListener("click",(function(){$(".cards-container").toggleClass("stacked")})),document.getElementById("bold-btn").addEventListener("click",(function(){let e=codeInput.getSelection();e.substring(0,2)+e.substring(e.length-2)=="****"?codeInput.replaceSelection(e.substring(2,e.length-2)):codeInput.replaceSelection(`**${e}**`),codeInput.focus()})),document.getElementById("italic-btn").addEventListener("click",(function(){let e=codeInput.getSelection();e.substring(0,1)+e.substring(e.length-1)=="**"&&e.substring(0,2)+e.substring(e.length-2)!="****"||e.substring(0,3)+e.substring(e.length-3)=="******"?codeInput.replaceSelection(e.substring(1,e.length-1)):codeInput.replaceSelection(`*${e}*`),codeInput.focus()})),document.getElementById("link-btn").addEventListener("click",(function(){0!=codeInput.getSelection().length?replaceAtCaret(`[${codeInput.getSelection()}](url)`):replaceAtCaret("[text](url)")})),document.getElementById("auto").addEventListener("click",(function(){auto=!auto,window.localStorage.autoStored=auto,t()})),document.getElementById("hider").addEventListener("click",(function(){$(".btn-row").stop(!0,!1).slideToggle(500,"easeInOutExpo"),$("#hider").toggleClass("red")})),codeInput.on("change",(function(){window.localStorage.savedWrite=getMarkdown(),auto&&e()})),$(window).bind("keydown",(function(t){(t.ctrlKey||t.metaKey)&&"s"==String.fromCharCode(t.which).toLowerCase()&&(t.preventDefault(),e())})),t(),$(".ML__virtual-keyboard-toggle").attr("data-tooltip","Keyboard")}(),function(){const e=document.getElementById("sidebar-flow"),t=document.getElementById("sidebar-catalog");new Sortable(e,{group:"main",handle:".grip",animation:150,fallbackOnBody:!0,removeCloneOnHide:!0}),new Sortable(t,{group:{name:"main",pull:"clone",put:!1},sort:!1,handle:".grip",animation:150,fallbackOnBody:!0}),$("item > i.red").click((function(){$(this).parent().slideToggle(100,(function(){$(this).remove()}))}))}();