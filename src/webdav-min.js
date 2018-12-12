!function(s,l){"from"in Array||(Array.from=function(e){return[].slice.call(e)}),"keys"in Object||(Object.keys=function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t});var e,a,d,n,r,c,u,f,p,i,t,m,o,y,h,v,g,b,w,q,E,x=(a=function(e){var t=!1;return s.each(b,function(){if(this.title===e.title)return t=this,!1}),t},d=function(e){var a;return e.item=s("<li/>").data("file",e),e.directory?e.item.addClass("directory"):(e.item.addClass("file"),e.type?e.item.addClass(e.type):e.item.addClass("unknown")),e.directory||e.item.addClass(e.name.replace(/^.+\.([^\.]+)$/,"$1")),e.item.append('<a href="'+e.path+e.name+'" target="_blank" class="title">'+e.title+"</a>"),e.directory||e.item.append('<span class="size">'+o(e.size)+"</span>"),e.name&&(e.delete&&e.item.append('<a href="#delete" title="Delete" class="delete">delete</a>'),e.item.append('<a href="#rename" title="Rename" class="rename">rename</a>'),e.directory||e.item.append('<a href="'+e.path+e.name+'" download="'+e.title+'" title="Download" class="download">download</a>')),(a=e).directory?a.item.find(".title").on("click",function(){return E.list(a.path+a.name),!1}):a.item.find(".title").on("click",function(e){if(e.stopPropagation(),"video"===a.type)s.featherlight('<video autoplay controls><source src="'+a.path+a.name+'"/></video>'),e.preventDefault();else if("audio"===a.type)s.featherlight('<audio autoplay controls><source src="'+a.path+a.name+'"/></audio>'),e.preventDefault();else if("image"===a.type)s.featherlight({image:a.path+a.name}),e.preventDefault();else if("font"===a.type){var t=a.name.replace(/^.+\.([^\.]+)$/,"$1").toLowerCase(),n=(a.path+a.name).replace(/\W+/g,"_"),r="The quick brown fox jumps over the lazy dog. 0123456789<br/>Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz";s('[data-path="'+(a.path+a.name)+'"]').is("style")||s("body").append('<style type="text/css" data-path="'+(a.path+a.name)+'">@font-face{font-family:"'+n+'";src:url("'+a.path+a.name+'") format("'+({eot:"embedded-opentype",otf:"opentype",ttf:"truetype"}[t]||t)+'")}</style>'),s.featherlight("<h1 style=\"font-family:'"+n+"'\">"+a.name+"</h1><p style=\"font-family:'"+n+"';font-size:1.5em\">"+r+"</p><p style=\"font-family:'"+n+"'\">"+r+"</p><p style=\"font-family:'"+n+"'\"><strong>"+r+"</strong></p><p style=\"font-family:'"+n+"'\"><em>"+r+'</em></p><p><a href="'+a.path+a.name+'" style="display:inline-block;padding:.5em;background:#000;font-family:sans-serif;border-radius:.5em;color:#fff">Download</a></p>'),e.preventDefault()}else"text"===a.type&&("code"in s.featherlight.contentFilters||s.extend(s.featherlight.contentFilters,{code:{process:function(e){var n=s.Deferred(),r=s('<pre class="prettyprint"></pre>');return s.ajax(e,{converters:{"text script":function(e){return e}},complete:function(e,t){"error"!==t?(r.text(e.responseText),n.resolve(r),PR.prettyPrint()):n.fail()}}),n.promise()}}}),s.featherlight({code:a.path+a.name}),e.preventDefault())}),a.delete&&(a.item.find(".delete").on("click",function(){return confirm('Are you sure you want to delete "'+a.title+'"?')&&E.del(a),!1}),a.item.find(".rename").on("click",function(){var e=prompt('Please enter the new name for "'+a.title+'":',a.title);return e&&(n(e)?E.rename(a,a.path+e):p("Bad file name.")),!1}),a.item.find(".copy").on("click",function(){return p("Currently not implemented."),!1}),a.item.find(".move").on("click",function(){return p("Currently not implemented."),!1}),a.item.find(".download").on("click",function(e){return e.stopPropagation(),!0})),a.item.on("click",function(){return a.item.find("a.title").click(),!1}),a.item,e},n=function(e){return!!e&&!!e.match(/^[\w \-\.]+$/)&&!e.match(/^\.\.?$/)},r=function(e){return l(e).replace(/[^\w\/\-\.]/g,function(e){return encodeURIComponent(e)})},c=function(e,t){return e.querySelector?e.querySelector(t):e.getElementsByTagName(t)[0]},u=function(e,t){var n=c(e,t);return n?n.textContent:""},f=function(n){if(n.mimeType&&n.mimeType.split("/").shift())return n.mimeType.split("/").shift();var r="unknown";return s.each({text:/\.(?:te?xt|i?nfo|php|pl|cgi|faq|ini|htaccess|log|md|sql|sfv|conf|sh|pl|pm|py|rb|(?:s?c|sa)ss|js|java|coffee|[sx]?html?|xml)$/i,image:/\.(?:jpe?g|gif|a?png|svg)/i,video:/\.(?:mp(?:e?g)?4|mov|avi|webm|ogv)/i,audio:/\.(?:mp3|wav|ogg)/i,font:/\.(?:woff2?|eot|[ot]tf)/i},function(e,t){if(n.match(t))return r=e,!1}),r},p=function(e,t){"notify"in s?s.notify(e,{className:t||"error"}):console.log(e)},i=function(e){return E.list(q,e)},t=function(){return y(),w.empty(),s.each(b,function(e,t){t&&w.append(t.item)}),w},m=function(e,t,n,r){var a=new XMLHttpRequest;return r||(t+=(-1<t.indexOf("?")?"&":"?")+"_="+Date.now()),a.addEventListener("loadstart",function(){}),a.addEventListener("loadend",function(){}),a.open(e,t,!0),n&&Object.keys(n).forEach(function(e){a.setRequestHeader(e,n[e])}),a},o=function(n){var r="";return["bytes","KB","MB","GB","TB","PB"].forEach(function(e,t){!r&&n<Math.pow(1024,t+1)&&(r+=(n/Math.pow(1024,t)).toFixed(0<t?1:0)+" "+(1===n?"byte":e))}),r},y=function(){return b.length&&b.sort(function(e,t){return e.directory===t.directory?e.name.replace(/\/$/,"")<t.name.replace(/\/$/,"")?-1:1:e.directory?-1:1}),s.each(b,function(e){this.index=e}),b},h=function(){document.title=l(q)+" - "+window.location.host,t()},v=function(e){e&&e.length&&s.each(e,function(e,t){var n=a(t);if(n){if(!confirm('A file called "'+n.name+'" already exists, would you like to overwrite it?'))return!1;delete b[n.index]}if("undefined"!=typeof FileReader){var r=new FileReader;r.addEventListener("load",function(e){t.data=e.target.result,E.upload(t)},!1),r.context=E,r.filename=t.name,r.readAsArrayBuffer(t)}else p("Sorry, your browser isn't currently suppored.")})},g={},b=[],w=s('<ul class="list"/>'),q=window.location.pathname,E={init:function(){s('<div class="content"></div><div class="upload"><span class="droppable">Drop&nbsp;files&nbsp;anywhere to&nbsp;upload</span> or <a href="#createDirectory" class="create-directory">create&nbsp;a&nbsp;new directory</a></div>').appendTo(s("body").empty()),e=s("div.upload"),"ontouchstart"in document.body&&(s("span.droppable").replaceWith('<span>Upload files <input type="file" multiple/></span>'),e.find('input[type="file"]').on("change",function(e){var t=e.originalEvent.target.files||e.originalEvent.dataTransfer.files;v(t),this.value=null})),s("div.content").append(w),E.list(q),t(),s("body").on("dragover dragenter",".directory",function(e){return e.stopPropagation(),s(this).addClass("active"),!1}),s("body").on("dragleave",".directory",function(e){return s(this).removeClass("active"),!1}),s("body").on("dragover",function(e){return s("body").addClass("active"),!1}),s("body").on("dragleave dragend",function(e){return s("body").removeClass("active"),!1}),s("body").on("drop",function(e){var t=s(e.target).data("file"),n=e.originalEvent.target.files||e.originalEvent.dataTransfer.files;if(s("body").hasClass("active")&&s("body").removeClass("active"),t&&t.directory){var r=t.path+t.name;r=r.match(/\/$/)?r:r+"/",E.list(r,!1,function(){v(n)})}else v(n);return!1}),s("a.create-directory").on("click",function(){var e=prompt("New folder name:"),t=a(e);return e&&(n(e)?t?t.directory?alert('Directory "'+t.title+'" already exists.'):alert('A file called "'+t.title+'" exists, unable to create folder.'):((t={directory:!0,name:r(e),title:e,path:q,modified:Date.now(),size:!1,type:f(e),mimeType:"",request:null,item:null,delete:!0}).request=m("MKCOL",t.path+t.name),t.request.addEventListener("loadstart",function(e){t.item.addClass("loading")},!1),t.request.addEventListener("load",function(e){t.item.removeClass("loading")},!1),t.request.addEventListener("error",function(e){delete b[t.index],h(),p("Error creating directory "+t.title+".")},!1),t.request.addEventListener("abort",function(e){delete b[t.index],h(),p("Aborted as requested.","success")},!1),b.push(d(t)),h(),t.request.send(null)):alert("Name contains unsupported characters, aborting.")),!1}),s(window).on("popstate",function(e){E.list(window.location.pathname)}),s(document).on("keydown",function(e){var t=e.which||e.keyCode;return 116!==t&&(82!==t||!e.metaKey&&!e.ctrlKey)||(e.preventDefault(),E.list(q,!0),!1)})},list:function(i,e,o){if(i=i.match(/\/$/)?i:i+"/",history.pushState(history.state,i,i),i in g&&!e)return b=[],g[q=i].forEach(function(e){b.push(d(e))}),h(),void(o&&o.call&&o());var t,n;t={loadstart:function(){s("div.content").addClass("loading")},loadend:function(){s("div.content").removeClass("loading")},load:function(e){var t,n,r=e.target,a=(new DOMParser).parseFromString(r.responseText,"application/xml");q=i,b=[],(t=a,n="response",t.querySelectorAll?Array.from(t.querySelectorAll(n)):Array.from(t.getElementsByTagName(n))).forEach(function(e,t){var n=u(e,"href"),r=n.replace(/\/$/,"").split("/").pop();t?b.push(d({directory:!!c(e,"collection"),name:r,title:l(r),path:q,modified:new Date(u(e,"getlastmodified")),size:u(e,"getcontentlength"),type:f(r),mimeType:u(e,"getcontenttype"),request:null,item:null,delete:!0})):"/"!=i&&b.push(d({directory:!0,name:"",title:"&larr;",path:i.replace(/[^\/]+\/?$/,""),modified:"",size:"",type:"",mimeType:"",request:null,item:null,delete:!1}))}),b.timestamp=Date.now(),g[q]=b,h(),o&&o.call&&o()},error:function(){p("There was an error getting details for "+i+".")},abort:function(){p("Aborted as requested. "+i,"success")}},n=m("PROPFIND",i,{Depth:1}),Object.keys(t).forEach(function(e){n.addEventListener(e,t[e],!0)}),n.send(null)},upload:function(e){if(!e.name)return!1;var t={directory:!1,name:e.name,title:l(e.name),path:q,modified:new Date,size:e.data.byteLength,type:f(e.name),mineType:e.type,request:null,item:null,delete:!0};return t.request=m("PUT",t.path+t.name,{"Content-Type":t.type}),t.request.addEventListener("loadstart",function(e){t.item.addClass("loading"),t.item.find("span.size").after('<span class="uploading"><span class="progress"><span class="meter"></span></span><span class="cancel-upload">&times;</span></span>'),t.item.find("span.cancel-upload").on("click",function(){return t.request.abort(),!1})},!1),t.request.addEventListener("progress",function(e){t.item.find("span.meter").width(e.position/e.total*100+"%")},!1),t.request.addEventListener("load",function(e){this.status<400?p(t.title+" uploaded successfully.","success"):(delete b[t.index],p("Error uploading file. ("+this.status+")")),i(!0)},!1),t.request.addEventListener("error",function(e){delete b[t.index],p("Error uploading file.")},!1),t.request.addEventListener("abort",function(e){delete b[t.index],p("Aborted as requested.","success")},!1),b.push(d(t)),h(),t.request.send(e.data),!0},del:function(t){return!!t.name&&("path"in t||(t.path=q),t.request=m("DELETE",t.path+t.name),t.request.addEventListener("load",function(e){i(!0)},!1),t.request.addEventListener("error",function(e){p("Error deleting file "+t.title+".")},!1),t.request.addEventListener("abort",function(e){p("Aborted as requested.","success")},!1),t.request.send(null),!0)},copy:function(e,t){return e.request=m("COPY",e.path+e.name,{Destination:t}),e.request.addEventListener("load",function(e){i()},!1),e.request.addEventListener("error",function(e){p("Error copying file "+file.title+".")},!1),e.request.addEventListener("abort",function(e){p("Aborted as requested.","success")},!1),e.request.send(null),!0},move:function(e,t){return e.request=m("MOVE",e.path+e.name,{Destination:window.location.protocol+"//"+window.location.host+r(t)}),e.request.addEventListener("load",function(e){i(!0)},!1),e.request.addEventListener("error",function(e){p("Error moving file "+file.title+".")},!1),e.request.addEventListener("abort",function(e){p("Aborted as requested.","success")},!1),e.request.send(null),!0},rename:function(e,t){return this.move(e,t)}});s(function(){x.init()})}(jQuery,decodeURIComponent);