(function($){$.mobiscroll.classes.Scroller=function(I,J){var m,K,v,L,N,O,P,Q,R,T,U,V,W,X,Y,Z,_,a1,b1,c1,d1,p,e1,f1,g1,h1,i1,j1,k1,l1,m1,n1,o1,p1,q1,r1=this,e=I,s1=$(e),s=F({},H),t1={},iv={},v1={},w1={},x1=[],y1=[],z1=s1.is('input'),A1=false,B1=function(e){if(C(e)&&!h&&!Y&&!q1&&!K1(this)){e.preventDefault();h=true;_=s.mode!='clickpick';h1=$('.dw-ul',this);M1(h1);a1=iv[i1]!==undefined;p=a1?P1(h1):v1[i1];b1=B(e,'Y');c1=new Date();d1=b1;R1(h1,i1,p,0.001);if(_){h1.closest('.dwwl').addClass('dwa')}$(document).on(M,C1).on(G,D1)}},C1=function(e){if(_){e.preventDefault();e.stopPropagation();d1=B(e,'Y');R1(h1,i1,c(p+(b1-d1)/K,e1-1,f1+1))}if(b1!==d1){a1=true}},D1=function(e){var t=new Date()-c1,b=c(p+(b1-d1)/K,e1-1,f1+1),d,i,j,k=h1.offset().top;if(t<300){d=(d1-b1)/t;i=(d*d)/s.speedUnit;if(d1-b1<0){i=-i}}else{i=d1-b1}j=Math.round(p-i/K);if(!i&&!a1){var l=Math.floor((d1-k)/K),o=$($('.dw-li',h1)[l]),w=_;if(U1('onValueTap',[o])!==false){j=l}else{w=true}if(w){o.addClass('dw-hl');setTimeout(function(){o.removeClass('dw-hl')},200)}}if(_){V1(h1,j,0,true,Math.round(b))}h=false;h1=null;$(document).off(M,C1).off(G,D1)},E1=function(e){if(q1){q1.removeClass('dwb-a')}q1=$(this);$(document).on(G,F1);if(!q1.hasClass('dwb-d')&&!q1.hasClass('dwb-nhl')){q1.addClass('dwb-a')}if(q1.hasClass('dwwb')){if(C(e)){J1(e,q1.closest('.dwwl'),q1.hasClass('dwwbp')?W1:X1)}}},F1=function(e){if(Y){clearInterval(j1);Y=false}if(q1){q1.removeClass('dwb-a');q1=null}$(document).off(G,F1)},G1=function(e){if(e.which==38&&!e.altKey){J1(e,$(this),W1)}else if(e.which==40&&!e.altKey){J1(e,$(this),X1)}else if(e.which==33){J1(e,$(this),Y1)}else if(e.which==34){J1(e,$(this),Z1)}},H1=function(e){if(Y){clearInterval(j1);Y=false}},I1=function(e){if(!K1(this)){e.preventDefault();e=e.originalEvent||e;var d=e.wheelDelta?(e.wheelDelta/120):(e.detail?(-e.detail/3):0),t=$('.dw-ul',this);M1(t);V1(t,Math.round(v1[i1]-d),d<0?1:2)}};function J1(e,w,b){e.stopPropagation();e.preventDefault();if(!Y&&!K1(w)&&!w.hasClass('dwa')){Y=true;var t=w.find('.dw-ul');M1(t);clearInterval(j1);j1=setInterval(function(){b(t)},s.delay);b(t)}}function K1(Q){if($.isArray(s.readonly)){var i=$('.dwwl',L).index(Q);return s.readonly[i]}return s.readonly}function L1(i){var b='<div class="dw-bf">',P=x1[i],w=P.values?P:f(P),l=1,d=w.labels||[],k=w.values,o=w.keys||k;$.each(k,function(j,v){if(l%20==0){b+='</div><div class="dw-bf">'}b+='<div role="option" aria-selected="false" class="dw-li dw-v" data-val="'+o[j]+'"'+(d[j]?' aria-label="'+d[j]+'"':'')+' style="height:'+K+'px;line-height:'+K+'px;"><div class="dw-i">'+v+'</div></div>';l++});b+='</div>';return b}function M1(t){e1=$('.dw-li',t).index($('.dw-v',t).eq(0));f1=$('.dw-li',t).index($('.dw-v',t).eq(-1));i1=$('.dw-ul',L).index(t)}function N1(v){var t=s.headerText;return t?(typeof t==='function'?t.call(e,v):t.replace(/\{value\}/i,v)):''}function O1(){r1.temp=r1.values?r1.values.slice(0):s.parseValue(s1.val()||'',r1);$1()}function P1(t){var b=window.getComputedStyle?getComputedStyle(t[0]):t[0].style,d,j;if(A){$.each(['t','webkitT','MozT','OT','msT'],function(i,v){if(b[v+'ransform']!==undefined){d=b[v+'ransform'];return false}});d=d.split(')')[0].split(', ');j=d[13]||d[5]}else{j=b.top.replace('px','')}return Math.round(m-(j/K))}function Q1(t,i){clearTimeout(iv[i]);delete iv[i];t.closest('.dwwl').removeClass('dwa')}function R1(t,i1,b,d,j){var k=(m-b)*K,l=t[0].style,i;if(k==w1[i1]&&iv[i1]){return}if(d&&k!=w1[i1]){U1('onAnimStart',[L,i1,d])}w1[i1]=k;l[z+'Transition']='all '+(d?d.toFixed(3):0)+'s ease-out';if(A){l[z+'Transform']='translate3d(0,'+k+'px,0)'}else{l.top=k+'px'}if(iv[i1]){Q1(t,i1)}if(d&&j){t.closest('.dwwl').addClass('dwa');iv[i1]=setTimeout(function(){Q1(t,i1)},d*1000)}v1[i1]=b}function S1(b,t,d){var i=$('.dw-li[data-val="'+b+'"]',t),j=$('.dw-li',t),v=j.index(i),l=j.length;if(!i.hasClass('dw-v')){var k=i,o=i,w=0,u1=0;while(v-w>=0&&!k.hasClass('dw-v')){w++;k=j.eq(v-w)}while(v+u1<l&&!o.hasClass('dw-v')){u1++;o=j.eq(v+u1)}if(((u1<w&&u1&&d!==2)||!w||(v-w<0)||d==1)&&o.hasClass('dw-v')){i=o;v=v+u1}else{i=k;v=v-w}}return{cell:i,v:v,val:i.attr('data-val')}}function T1(b,i1,d,j,k){if(U1('validate',[L,i1,b,j])!==false){$('.dw-ul',L).each(function(i){var t=$(this),l=i==i1||i1===undefined,o=S1(r1.temp[i],t,j),w=o.cell;if(!(w.hasClass('dw-sel'))||l){r1.temp[i]=o.val;if(!s.multiple){$('.dw-sel',t).removeAttr('aria-selected');w.attr('aria-selected','true')}$('.dw-sel',t).removeClass('dw-sel');w.addClass('dw-sel');R1(t,i,o.v,l?b:0.1,l?k:false)}});v=s.formatResult(r1.temp);if(r1.live){$1(d,d,0,true)}$('.dwv',L).html(N1(v));if(d){U1('onChange',[v])}}}function U1(b,d){var j;d.push(r1);$.each([W,t1,J],function(i,v){if(v&&v[b]){j=v[b].apply(e,d)}});return j}function V1(t,b,d,V,i){b=c(b,e1,f1);var j=$('.dw-li',t).eq(b),o=i===undefined?b:i,k=i!==undefined,l=i1,w=V?(b==o?0.1:Math.abs((b-o)*s.timeUnit)):0;r1.temp[l]=j.attr('data-val');R1(t,l,b,w,k);setTimeout(function(){T1(w,l,true,d,k)},10)}function W1(t){var b=v1[i1]+1;V1(t,b>f1?e1:b,1,true)}function X1(t){var b=v1[i1]-1;V1(t,b<e1?f1:b,2,true)}function Y1(t){V1(t,e1,2,true)}function Z1(t){V1(t,f1,2,true)}function $1(b,d,t,i,j,k){if(A1&&!i){T1(t,undefined,k)}v=s.formatResult(r1.temp);if(!j){r1.values=r1.temp.slice(0);r1.val=v}if(b){if(z1){s1.val(v);if(d){l1=true;s1.change()}}U1('onValueFill',[v,d])}}function _1(b,d){var i;n1.on(b,function(e){clearTimeout(i);i=setTimeout(function(){if((U&&d)||!d){r1.position(!d)}},200)})}r1.position=function(b){var i=L.width(),j=n1[0].innerHeight||n1.innerHeight();if(!(P===i&&Q===j&&b)&&!m1&&(U1('onPosition',[L,i,j])!==false)&&g1){var w,l,t,k,o,ap,at,al,u1,a2,b2,dh,R1,d2=0,e2=0,sl=n1.scrollLeft(),st=n1.scrollTop(),wr=$('.dwwr',L),d=$('.dw',L),i2={},j2=s.anchor===undefined?s1:s.anchor;if(/modal|bubble/.test(s.display)){$('.dwc',L).each(function(){w=$(this).outerWidth(true);d2+=w;e2=(w>e2)?w:e2});w=d2>i?e2:d2;wr.width(w).css('white-space',d2>i?'':'nowrap')}R=d.outerWidth();T=d.outerHeight(true);U=T<=j&&R<=i;r1.scrollLock=U;if(s.display=='modal'){l=(i-R)/2;t=st+(j-T)/2}else if(s.display=='bubble'){R1=true;u1=$('.dw-arrw-i',L);ap=j2.offset();at=Math.abs($(s.context).offset().top-ap.top);al=Math.abs($(s.context).offset().left-ap.left);k=j2.outerWidth();o=j2.outerHeight();l=c(al-(d.outerWidth(true)-k)/2-sl,3,i-R-3);t=at-T;if((t<st)||(at>st+j)){d.removeClass('dw-bubble-top').addClass('dw-bubble-bottom');t=at+o}else{d.removeClass('dw-bubble-bottom').addClass('dw-bubble-top')}a2=u1.outerWidth();b2=c(al+k/2-(l+(R-a2)/2)-sl,0,a2);$('.dw-arr',L).css({left:b2})}else{if(s.display=='top'){t=st}else if(s.display=='bottom'){t=st+j-T}}i2.top=t<0?0:t;i2.left=l;d.css(i2);N.height(0);dh=Math.max(t+T,s.context=='body'?$(document).height():o1.scrollHeight);N.css({height:dh,left:sl});if(R1&&((t+T>st+j)||(at>st+j))){m1=true;setTimeout(function(){m1=false},300);n1.scrollTop(Math.min(t+T-j,dh-j))}}P=i;Q=j};r1.enable=function(){s.disabled=false;if(z1){s1.prop('disabled',false)}};r1.disable=function(){s.disabled=true;if(z1){s1.prop('disabled',true)}};r1.setValue=function(b,d,t,i,j){r1.temp=$.isArray(b)?b.slice(0):s.parseValue.call(e,b+'',r1);$1(d,j===undefined?d:j,t,false,i,d)};r1.getValue=function(){return r1.values};r1.getValues=function(){var b=[],i;for(i in r1._selectedValues){b.push(r1._selectedValues[i])}return b};r1.changeWheel=function(b,t,d){if(L){var i=0,l=b.length;$.each(s.wheels,function(j,o){$.each(o,function(k,w){if($.inArray(i,b)>-1){x1[i]=w;$('.dw-ul',L).eq(i).html(L1(i));l--;if(!l){r1.position();T1(t,undefined,d);return false}}i++});if(!l){return false}})}};r1.isVisible=function(){return A1};r1.tap=function(b,d){var i,j;if(s.tap){b.on('touchstart.dw mousedown.dw',function(e){e.preventDefault();i=B(e,'X');j=B(e,'Y')}).on('touchend.dw',function(e){if(Math.abs(B(e,'X')-i)<20&&Math.abs(B(e,'Y')-j)<20){d.call(this,e)}a()})}b.on('click.dw',function(e){if(!n){d.call(this,e)}e.preventDefault()})};r1.show=function(d){var k,l=0,o='';if(s.disabled||A1){return}g=s1;if(s.display=='top'){V='slidedown'}if(s.display=='bottom'){V='slideup'}O1();U1('onBeforeShow',[]);if(V&&!d){o='dw-'+V+' dw-in'}var t='<div role="dialog" class="'+s.theme+' dw-'+s.display+(y?' dw'+y.replace(/\-$/,''):'')+(Z?'':' dw-nobtn')+'"><div class="dw-persp">'+(!g1?'<div class="dw dwbg dwi">':'<div class="dwo"></div><div class="dw dwbg '+o+'"><div class="dw-arrw"><div class="dw-arrw-i"><div class="dw-arr"></div></div></div>')+'<div class="dwwr"><div aria-live="assertive" class="dwv'+(s.headerText?'':' dw-hidden')+'"></div><div class="dwcc">',u1=$.isArray(s.minWidth),a2=$.isArray(s.maxWidth),b2=$.isArray(s.fixedWidth);$.each(s.wheels,function(i,b){t+='<div class="dwc'+(s.mode!='scroller'?' dwpm':' dwsc')+(s.showLabel?'':' dwhl')+'"><div class="dwwc dwrc"><table cellpadding="0" cellspacing="0"><tr>';$.each(b,function(j,w){x1[l]=w;k=w.label!==undefined?w.label:j;t+='<td><div class="dwwl dwrc dwwl'+l+'">'+(s.mode!='scroller'?'<a href="#" tabindex="-1" class="dwb-e dwwb dwwbp" style="height:'+K+'px;line-height:'+K+'px;"><span>+</span></a><a href="#" tabindex="-1" class="dwb-e dwwb dwwbm" style="height:'+K+'px;line-height:'+K+'px;"><span>&ndash;</span></a>':'')+'<div class="dwl">'+k+'</div><div tabindex="0" aria-live="off" aria-label="'+k+'" role="listbox" class="dwww"><div class="dww" style="height:'+(s.rows*K)+'px;'+(s.fixedWidth?('width:'+(b2?s.fixedWidth[l]:s.fixedWidth)+'px;'):(s.minWidth?('min-width:'+(u1?s.minWidth[l]:s.minWidth)+'px;'):'min-width:'+s.width+'px;')+(s.maxWidth?('max-width:'+(a2?s.maxWidth[l]:s.maxWidth)+'px;'):''))+'"><div class="dw-ul">';t+=L1(l);t+='</div><div class="dwwol"></div></div><div class="dwwo"></div></div><div class="dwwol"></div></div></td>';l++});t+='</tr></table></div></div>'});t+='</div>';if(g1&&Z){t+='<div class="dwbc">';$.each(p1,function(i,b){b=(typeof b==='string')?r1.buttons[b]:b;t+='<span'+(s.btnWidth?' style="width:'+(100/p1.length)+'%"':'')+' class="dwbw '+b.css+'"><a href="#" class="dwb dwb'+i+' dwb-e" role="button">'+b.text+'</a></span>'});t+='</div>'}t+='</div></div></div></div>';L=$(t);N=$('.dw-persp',L);O=$('.dwo',L);A1=true;T1();U1('onMarkupReady',[L]);if(g1){L.appendTo(s.context);if(V&&!d){L.addClass('dw-trans');setTimeout(function(){L.removeClass('dw-trans').find('.dw').removeClass(o)},350)}}else if(s1.is('div')){s1.html(L)}else{L.insertAfter(s1)}U1('onMarkupInserted',[L]);if(g1){$(window).on('keydown.dw',function(e){if(e.keyCode==13){r1.select()}else if(e.keyCode==27){r1.cancel()}});if(s.scrollLock){L.on('touchmove',function(e){if(U){e.preventDefault()}})}$('input,select,button',o1).each(function(){if(!this.disabled){if($(this).attr('autocomplete')){$(this).data('autocomplete',$(this).attr('autocomplete'))}$(this).addClass('dwtd').prop('disabled',true).attr('autocomplete','off')}});_1('scroll.dw',true)}r1.position();_1('orientationchange.dw resize.dw',false);L.on('DOMMouseScroll mousewheel','.dwwl',I1).on('keydown','.dwwl',G1).on('keyup','.dwwl',H1).on('selectstart mousedown',E).on('click','.dwb-e',E).on('touchend',function(){if(s.tap){a()}}).on('keydown','.dwb-e',function(e){if(e.keyCode==32){e.preventDefault();e.stopPropagation();$(this).click()}});setTimeout(function(){$.each(p1,function(i,b){r1.tap($('.dwb'+i,L),function(e){b=(typeof b==='string')?r1.buttons[b]:b;b.handler.call(this,e,r1)})});if(s.closeOnOverlay){r1.tap(O,function(){r1.cancel()})}L.on(S,'.dwwl',B1).on(S,'.dwb-e',E1)},300);U1('onShow',[L,v])};r1.hide=function(b,q1,d){if(!A1||(!d&&U1('onClose',[v,q1])===false)){return}$('.dwtd',o1).each(function(){$(this).prop('disabled',false).removeClass('dwtd');if($(this).data('autocomplete')){$(this).attr('autocomplete',$(this).data('autocomplete'))}else{$(this).removeAttr('autocomplete')}});if(L){var i=g1&&V&&!b;if(i){L.addClass('dw-trans').find('.dw').addClass('dw-'+V+' dw-out')}if(b){L.remove()}else{setTimeout(function(){L.remove();if(g){q=true;g.focus()}},i?350:1)}n1.off('.dw')}w1={};A1=false};r1.select=function(){if(r1.hide(false,'set')!==false){$1(true,true,0,true);U1('onSelect',[r1.val])}};r1.attachShow=function(s1,b){y1.push(s1);if(s.display!=='inline'){s1.on((s.showOnFocus?'focus.dw':'')+(s.showOnTap?' click.dw':''),function(d){if((d.type!=='focus'||(d.type==='focus'&&!q))&&!n){if(b){b()}g=s1;r1.show()}setTimeout(function(){q=false},300)})}};r1.cancel=function(){if(r1.hide(false,'cancel')!==false){U1('onCancel',[r1.val])}};r1.init=function(b){W=r.themes[b.theme||s.theme];X=r.i18n[b.lang||s.lang];F(J,b);U1('onThemeLoad',[X,J]);F(s,W,X,J);s.buttons=s.buttons||['set','cancel'];s.headerText=s.headerText===undefined?(s.display!=='inline'?'{value}':false):s.headerText;r1.settings=s;s1.off('.dw');var d=r.presets[s.preset];if(d){t1=d.call(e,r1);F(s,t1,J)}m=Math.floor(s.rows/2);K=s.height;V=s.animate;g1=s.display!=='inline';p1=s.buttons;n1=$(s.context=='body'?window:s.context);o1=$(s.context)[0];if(!s.setText){p1.splice($.inArray('set',p1),1)}if(!s.cancelText){p1.splice($.inArray('cancel',p1),1)}if(s.button3){p1.splice($.inArray('set',p1)+1,0,{text:s.button3Text,handler:s.button3})}r1.context=n1;r1.live=!g1||($.inArray('set',p1)==-1);r1.buttons.set={text:s.setText,css:'dwb-s',handler:r1.select};r1.buttons.cancel={text:(r1.live)?s.closeText:s.cancelText,css:'dwb-c',handler:r1.cancel};r1.buttons.clear={text:s.clearText,css:'dwb-cl',handler:function(){r1.trigger('onClear',[L]);s1.val('');if(!r1.live){r1.hide()}}};Z=p1.length>0;if(A1){r1.hide(true,false,true)}if(g1){O1();if(z1){if(k1===undefined){k1=e.readOnly}e.readOnly=true}r1.attachShow(s1)}else{r1.show()}if(z1){s1.on('change.dw',function(){if(!l1){r1.setValue(s1.val(),false,0.2)}l1=false})}};r1.option=function(o,b){var d={};if(typeof o==='object'){d=o}else{d[o]=b}r1.init(d)};r1.destroy=function(){r1.hide(true,false,true);$.each(y1,function(i,v){v.off('.dw')});$(window).off('.dwa');if(z1){e.readOnly=k1}delete u[e.id];U1('onDestroy',[])};r1.getInst=function(){return r1};r1.getValidCell=S1;r1.trigger=U1;u[e.id]=r1;r1.values=null;r1.val=null;r1.temp=null;r1.buttons={};r1._selectedValues={};r1.init(J)};function a(){n=true;setTimeout(function(){n=false},300)}function c(v,m,b){return Math.max(m,Math.min(v,b))}function f(w){var b={values:[],keys:[]};$.each(w,function(k,v){b.keys.push(k);b.values.push(v)});return b}var g,h,n,q,r=$.mobiscroll,u=r.instances,x=r.util,y=x.prefix,z=x.jsPrefix,A=x.has3d,B=x.getCoord,C=x.testTouch,D=function(){},E=function(e){e.preventDefault()},F=$.extend,S='touchstart mousedown',M='touchmove mousemove',G='touchend mouseup',H=F(r.defaults,{width:70,height:40,rows:3,delay:300,disabled:false,readonly:false,closeOnOverlay:true,showOnFocus:true,showOnTap:true,showLabel:true,wheels:[],theme:'',display:'modal',mode:'scroller',preset:'',lang:'en-US',context:'body',scrollLock:true,tap:true,btnWidth:true,speedUnit:0.0012,timeUnit:0.1,formatResult:function(d){return d.join(' ')},parseValue:function(v,b){var d=v.split(' '),e=[],i=0,l;$.each(b.settings.wheels,function(j,m){$.each(m,function(k,w){w=w.values?w:f(w);l=w.keys||w.values;if($.inArray(d[i],l)!==-1){e.push(d[i])}else{e.push(l[0])}i++})});return e}});r.i18n.en=r.i18n['en-US']={setText:'Set',selectedText:'Selected',closeText:'Close',cancelText:'Cancel',clearText:'Clear'};$(window).on('focus',function(){if(g){q=true}});$(document).on('mouseover mouseup mousedown click',function(e){if(n){e.stopPropagation();e.preventDefault();return false}})})(jQuery);
