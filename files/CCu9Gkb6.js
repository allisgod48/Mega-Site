const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["files/CNols2sS.js","files/lucifer.v7.js","files/index-B1komKJl.css","files/D77m38dm.js","files/CVzmeW6c.js","files/B1KpvxN7.js","files/B357KF-6.js","files/DFhWDvPq.js","files/oSVQ8Z4o.js","files/BUvsSNwM.js","files/CAeYKwMY.js","files/CzFRg-ZV.js","files/BeEiSWLb.js","files/CfHzv53N.js","files/M_YIFj80.js","files/CKC2rDdo.js","files/CWu3vcGz.js","files/B4IKWJOF.js","files/DqczqNgw.js","files/2YTgNpUl.js","files/DHj0PZk2.js","files/D1lkvi2_.js","files/w-XWkfBs.js","files/BDpzB_Az.js","files/Dr6Au5j-.js","files/BxMqfNd4.js","files/D0q_oxG4.js","files/B3n-jvxx.js","files/MJEo0yaI.js","files/eNxk-UGD.js","files/ChrQ0nNV.js","files/fZQwvZm_.js","files/CzoQKMa5.js","files/CPUhtYpA.js","files/BwAMeCCr.js","files/CQJR5lHs.js","files/D0bPpFGr.js","files/CYXvmjCT.js","files/dFD49Ger.js","files/I879jswJ.js","files/R6jiqhvD.js","files/CHSf3vOu.js","files/BcWti_O9.js","files/CjDXAcei.js","files/DCQvHE5m.js","files/tQ5ebou-.js","files/BKsWuQ3f.js","files/B7t1YRUL.js","files/X3Y8h7wB.js","files/Bhc27nZd.js","files/Ce_q6QHI.js","files/BHRayhsp.js","files/DmNgM8Nb.js","files/DYmwjHkU.js","files/BpxKFjOy.js","files/B_lev1WG.js","files/DZ3DsGWo.js","files/CQGehtUg.js","files/BFuflAHS.js","files/BnpZiNeH.js","files/B_iSdW2j.js","files/frCkIfiu.js","files/Cthq55eH.js","files/Bt-T4DKA.js","files/4F77n6Dr.js","files/DtKFNTmK.js","files/5yo0qd7v.js","files/QN46mFPd.js","files/BZD5AEZV.js","files/C3lAXyrk.js","files/BkXQHqph.js","files/CoiAP5x5.js","files/D4X9GGvv.js","files/pbN-nHht.js","files/D1qAG3BK.js","files/C3GhT0NI.js"])))=>i.map(i=>d[i]);
import{i as t,a4 as a,a as e,c as o,a5 as r,a6 as i,a7 as n,a8 as s,_ as c,a9 as l}from"./lucifer.v7.js";import{h as g,i as w,j as v}from"./BmRHgLm3.js";const p={getSpacingStyles:(t,a)=>Array.isArray(t)?t[a]?`var(--wui-spacing-${t[a]})`:void 0:"string"==typeof t?`var(--wui-spacing-${t})`:void 0,getFormattedDate:t=>new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t),getHostName(t){try{return new URL(t).hostname}catch(a){return""}},getTruncateString:({string:t,charsStart:a,charsEnd:e,truncate:o})=>t.length<=a+e?t:"end"===o?`${t.substring(0,a)}...`:"start"===o?`...${t.substring(t.length-e)}`:`${t.substring(0,Math.floor(a))}...${t.substring(t.length-Math.floor(e))}`,generateAvatarColors(t){const a=t.toLowerCase().replace(/^0x/iu,"").replace(/[^a-f0-9]/gu,"").substring(0,6).padEnd(6,"0"),e=this.hexToRgb(a),o=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),r=100-3*Number(o?.replace("px","")),i=`${r}% ${r}% at 65% 40%`,n=[];for(let s=0;s<5;s+=1){const t=this.tintColor(e,.15*s);n.push(`rgb(${t[0]}, ${t[1]}, ${t[2]})`)}return`\n    --local-color-1: ${n[0]};\n    --local-color-2: ${n[1]};\n    --local-color-3: ${n[2]};\n    --local-color-4: ${n[3]};\n    --local-color-5: ${n[4]};\n    --local-radial-circle: ${i}\n   `},hexToRgb(t){const a=parseInt(t,16);return[a>>16&255,a>>8&255,255&a]},tintColor(t,a){const[e,o,r]=t;return[Math.round(e+(255-e)*a),Math.round(o+(255-o)*a),Math.round(r+(255-r)*a)]},isNumber:t=>/^[0-9]+$/u.test(t),getColorTheme:t=>t||("undefined"!=typeof window&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)")?.matches?"dark":"light":"dark"),splitBalance(t){const a=t.split(".");return 2===a.length?[a[0],a[1]]:["0","00"]},roundNumber:(t,a,e)=>t.toString().length>=a?Number(t).toFixed(e):t,formatNumberToLocalString:(t,a=2)=>void 0===t?"0.00":"number"==typeof t?t.toLocaleString("en-US",{maximumFractionDigits:a,minimumFractionDigits:a}):parseFloat(t).toLocaleString("en-US",{maximumFractionDigits:a,minimumFractionDigits:a})};function h(t){return function(a){return"function"==typeof a?function(t,a){return customElements.get(t)||customElements.define(t,a),a}(t,a):function(t,a){const{kind:e,elements:o}=a;return{kind:e,elements:o,finisher(a){customElements.get(t)||customElements.define(t,a)}}}(t,a)}}const u=t`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var _=function(t,a,e,o){var r,i=arguments.length,n=i<3?a:o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,a,e,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(i<3?r(n):i>3?r(a,e,n):r(a,e))||n);return i>3&&n&&Object.defineProperty(a,e,n),n};let d=class extends e{render(){return this.style.cssText=`\n      flex-direction: ${this.flexDirection};\n      flex-wrap: ${this.flexWrap};\n      flex-basis: ${this.flexBasis};\n      flex-grow: ${this.flexGrow};\n      flex-shrink: ${this.flexShrink};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&p.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&p.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&p.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&p.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&p.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&p.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&p.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&p.getSpacingStyles(this.margin,3)};\n    `,o`<slot></slot>`}};d.styles=[g,u],_([a()],d.prototype,"flexDirection",void 0),_([a()],d.prototype,"flexWrap",void 0),_([a()],d.prototype,"flexBasis",void 0),_([a()],d.prototype,"flexGrow",void 0),_([a()],d.prototype,"flexShrink",void 0),_([a()],d.prototype,"alignItems",void 0),_([a()],d.prototype,"justifyContent",void 0),_([a()],d.prototype,"columnGap",void 0),_([a()],d.prototype,"rowGap",void 0),_([a()],d.prototype,"gap",void 0),_([a()],d.prototype,"padding",void 0),_([a()],d.prototype,"margin",void 0),d=_([h("wui-flex")],d);class m{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class y{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??(this.Y=new Promise(t=>this.Z=t))}resume(){this.Z?.(),this.Y=this.Z=void 0}}const f=t=>!s(t)&&"function"==typeof t.then,S=1073741823;const E=r(class extends i{constructor(){super(...arguments),this._$Cwt=S,this._$Cbt=[],this._$CK=new m(this),this._$CX=new y}render(...t){return t.find(t=>!f(t))??n}update(t,a){const e=this._$Cbt;let o=e.length;this._$Cbt=a;const r=this._$CK,i=this._$CX;this.isConnected||this.disconnected();for(let n=0;n<a.length&&!(n>this._$Cwt);n++){const t=a[n];if(!f(t))return this._$Cwt=n,t;n<o&&t===e[n]||(this._$Cwt=S,o=0,Promise.resolve(t).then(async a=>{for(;i.get();)await i.get();const e=r.deref();if(void 0!==e){const o=e._$Cbt.indexOf(t);o>-1&&o<e._$Cwt&&(e._$Cwt=o,e.setValue(a))}}))}return n}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}});const b=new class{constructor(){this.cache=new Map}set(t,a){this.cache.set(t,a)}get(t){return this.cache.get(t)}has(t){return this.cache.has(t)}delete(t){this.cache.delete(t)}clear(){this.cache.clear()}},x=t`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`;var R=function(t,a,e,o){var r,i=arguments.length,n=i<3?a:o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,a,e,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(i<3?r(n):i>3?r(a,e,n):r(a,e))||n);return i>3&&n&&Object.defineProperty(a,e,n),n};const T={add:async()=>(await c(async()=>{const{addSvg:t}=await import("./CNols2sS.js");return{addSvg:t}},__vite__mapDeps([0,1,2]))).addSvg,allWallets:async()=>(await c(async()=>{const{allWalletsSvg:t}=await import("./D77m38dm.js");return{allWalletsSvg:t}},__vite__mapDeps([3,1,2]))).allWalletsSvg,arrowBottomCircle:async()=>(await c(async()=>{const{arrowBottomCircleSvg:t}=await import("./CVzmeW6c.js");return{arrowBottomCircleSvg:t}},__vite__mapDeps([4,1,2]))).arrowBottomCircleSvg,appStore:async()=>(await c(async()=>{const{appStoreSvg:t}=await import("./B1KpvxN7.js");return{appStoreSvg:t}},__vite__mapDeps([5,1,2]))).appStoreSvg,apple:async()=>(await c(async()=>{const{appleSvg:t}=await import("./B357KF-6.js");return{appleSvg:t}},__vite__mapDeps([6,1,2]))).appleSvg,arrowBottom:async()=>(await c(async()=>{const{arrowBottomSvg:t}=await import("./DFhWDvPq.js");return{arrowBottomSvg:t}},__vite__mapDeps([7,1,2]))).arrowBottomSvg,arrowLeft:async()=>(await c(async()=>{const{arrowLeftSvg:t}=await import("./oSVQ8Z4o.js");return{arrowLeftSvg:t}},__vite__mapDeps([8,1,2]))).arrowLeftSvg,arrowRight:async()=>(await c(async()=>{const{arrowRightSvg:t}=await import("./BUvsSNwM.js");return{arrowRightSvg:t}},__vite__mapDeps([9,1,2]))).arrowRightSvg,arrowTop:async()=>(await c(async()=>{const{arrowTopSvg:t}=await import("./CAeYKwMY.js");return{arrowTopSvg:t}},__vite__mapDeps([10,1,2]))).arrowTopSvg,bank:async()=>(await c(async()=>{const{bankSvg:t}=await import("./CzFRg-ZV.js");return{bankSvg:t}},__vite__mapDeps([11,1,2]))).bankSvg,browser:async()=>(await c(async()=>{const{browserSvg:t}=await import("./BeEiSWLb.js");return{browserSvg:t}},__vite__mapDeps([12,1,2]))).browserSvg,card:async()=>(await c(async()=>{const{cardSvg:t}=await import("./CfHzv53N.js");return{cardSvg:t}},__vite__mapDeps([13,1,2]))).cardSvg,checkmark:async()=>(await c(async()=>{const{checkmarkSvg:t}=await import("./M_YIFj80.js");return{checkmarkSvg:t}},__vite__mapDeps([14,1,2]))).checkmarkSvg,checkmarkBold:async()=>(await c(async()=>{const{checkmarkBoldSvg:t}=await import("./CKC2rDdo.js");return{checkmarkBoldSvg:t}},__vite__mapDeps([15,1,2]))).checkmarkBoldSvg,chevronBottom:async()=>(await c(async()=>{const{chevronBottomSvg:t}=await import("./CWu3vcGz.js");return{chevronBottomSvg:t}},__vite__mapDeps([16,1,2]))).chevronBottomSvg,chevronLeft:async()=>(await c(async()=>{const{chevronLeftSvg:t}=await import("./B4IKWJOF.js");return{chevronLeftSvg:t}},__vite__mapDeps([17,1,2]))).chevronLeftSvg,chevronRight:async()=>(await c(async()=>{const{chevronRightSvg:t}=await import("./DqczqNgw.js");return{chevronRightSvg:t}},__vite__mapDeps([18,1,2]))).chevronRightSvg,chevronTop:async()=>(await c(async()=>{const{chevronTopSvg:t}=await import("./2YTgNpUl.js");return{chevronTopSvg:t}},__vite__mapDeps([19,1,2]))).chevronTopSvg,chromeStore:async()=>(await c(async()=>{const{chromeStoreSvg:t}=await import("./DHj0PZk2.js");return{chromeStoreSvg:t}},__vite__mapDeps([20,1,2]))).chromeStoreSvg,clock:async()=>(await c(async()=>{const{clockSvg:t}=await import("./D1lkvi2_.js");return{clockSvg:t}},__vite__mapDeps([21,1,2]))).clockSvg,close:async()=>(await c(async()=>{const{closeSvg:t}=await import("./w-XWkfBs.js");return{closeSvg:t}},__vite__mapDeps([22,1,2]))).closeSvg,compass:async()=>(await c(async()=>{const{compassSvg:t}=await import("./BDpzB_Az.js");return{compassSvg:t}},__vite__mapDeps([23,1,2]))).compassSvg,coinPlaceholder:async()=>(await c(async()=>{const{coinPlaceholderSvg:t}=await import("./Dr6Au5j-.js");return{coinPlaceholderSvg:t}},__vite__mapDeps([24,1,2]))).coinPlaceholderSvg,copy:async()=>(await c(async()=>{const{copySvg:t}=await import("./BxMqfNd4.js");return{copySvg:t}},__vite__mapDeps([25,1,2]))).copySvg,cursor:async()=>(await c(async()=>{const{cursorSvg:t}=await import("./D0q_oxG4.js");return{cursorSvg:t}},__vite__mapDeps([26,1,2]))).cursorSvg,cursorTransparent:async()=>(await c(async()=>{const{cursorTransparentSvg:t}=await import("./B3n-jvxx.js");return{cursorTransparentSvg:t}},__vite__mapDeps([27,1,2]))).cursorTransparentSvg,desktop:async()=>(await c(async()=>{const{desktopSvg:t}=await import("./MJEo0yaI.js");return{desktopSvg:t}},__vite__mapDeps([28,1,2]))).desktopSvg,disconnect:async()=>(await c(async()=>{const{disconnectSvg:t}=await import("./eNxk-UGD.js");return{disconnectSvg:t}},__vite__mapDeps([29,1,2]))).disconnectSvg,discord:async()=>(await c(async()=>{const{discordSvg:t}=await import("./ChrQ0nNV.js");return{discordSvg:t}},__vite__mapDeps([30,1,2]))).discordSvg,etherscan:async()=>(await c(async()=>{const{etherscanSvg:t}=await import("./fZQwvZm_.js");return{etherscanSvg:t}},__vite__mapDeps([31,1,2]))).etherscanSvg,extension:async()=>(await c(async()=>{const{extensionSvg:t}=await import("./CzoQKMa5.js");return{extensionSvg:t}},__vite__mapDeps([32,1,2]))).extensionSvg,externalLink:async()=>(await c(async()=>{const{externalLinkSvg:t}=await import("./CPUhtYpA.js");return{externalLinkSvg:t}},__vite__mapDeps([33,1,2]))).externalLinkSvg,facebook:async()=>(await c(async()=>{const{facebookSvg:t}=await import("./BwAMeCCr.js");return{facebookSvg:t}},__vite__mapDeps([34,1,2]))).facebookSvg,farcaster:async()=>(await c(async()=>{const{farcasterSvg:t}=await import("./CQJR5lHs.js");return{farcasterSvg:t}},__vite__mapDeps([35,1,2]))).farcasterSvg,filters:async()=>(await c(async()=>{const{filtersSvg:t}=await import("./D0bPpFGr.js");return{filtersSvg:t}},__vite__mapDeps([36,1,2]))).filtersSvg,github:async()=>(await c(async()=>{const{githubSvg:t}=await import("./CYXvmjCT.js");return{githubSvg:t}},__vite__mapDeps([37,1,2]))).githubSvg,google:async()=>(await c(async()=>{const{googleSvg:t}=await import("./dFD49Ger.js");return{googleSvg:t}},__vite__mapDeps([38,1,2]))).googleSvg,helpCircle:async()=>(await c(async()=>{const{helpCircleSvg:t}=await import("./I879jswJ.js");return{helpCircleSvg:t}},__vite__mapDeps([39,1,2]))).helpCircleSvg,image:async()=>(await c(async()=>{const{imageSvg:t}=await import("./R6jiqhvD.js");return{imageSvg:t}},__vite__mapDeps([40,1,2]))).imageSvg,id:async()=>(await c(async()=>{const{idSvg:t}=await import("./CHSf3vOu.js");return{idSvg:t}},__vite__mapDeps([41,1,2]))).idSvg,infoCircle:async()=>(await c(async()=>{const{infoCircleSvg:t}=await import("./BcWti_O9.js");return{infoCircleSvg:t}},__vite__mapDeps([42,1,2]))).infoCircleSvg,lightbulb:async()=>(await c(async()=>{const{lightbulbSvg:t}=await import("./CjDXAcei.js");return{lightbulbSvg:t}},__vite__mapDeps([43,1,2]))).lightbulbSvg,mail:async()=>(await c(async()=>{const{mailSvg:t}=await import("./DCQvHE5m.js");return{mailSvg:t}},__vite__mapDeps([44,1,2]))).mailSvg,mobile:async()=>(await c(async()=>{const{mobileSvg:t}=await import("./tQ5ebou-.js");return{mobileSvg:t}},__vite__mapDeps([45,1,2]))).mobileSvg,more:async()=>(await c(async()=>{const{moreSvg:t}=await import("./BKsWuQ3f.js");return{moreSvg:t}},__vite__mapDeps([46,1,2]))).moreSvg,networkPlaceholder:async()=>(await c(async()=>{const{networkPlaceholderSvg:t}=await import("./B7t1YRUL.js");return{networkPlaceholderSvg:t}},__vite__mapDeps([47,1,2]))).networkPlaceholderSvg,nftPlaceholder:async()=>(await c(async()=>{const{nftPlaceholderSvg:t}=await import("./X3Y8h7wB.js");return{nftPlaceholderSvg:t}},__vite__mapDeps([48,1,2]))).nftPlaceholderSvg,off:async()=>(await c(async()=>{const{offSvg:t}=await import("./Bhc27nZd.js");return{offSvg:t}},__vite__mapDeps([49,1,2]))).offSvg,playStore:async()=>(await c(async()=>{const{playStoreSvg:t}=await import("./Ce_q6QHI.js");return{playStoreSvg:t}},__vite__mapDeps([50,1,2]))).playStoreSvg,plus:async()=>(await c(async()=>{const{plusSvg:t}=await import("./BHRayhsp.js");return{plusSvg:t}},__vite__mapDeps([51,1,2]))).plusSvg,qrCode:async()=>(await c(async()=>{const{qrCodeIcon:t}=await import("./DmNgM8Nb.js");return{qrCodeIcon:t}},__vite__mapDeps([52,1,2]))).qrCodeIcon,recycleHorizontal:async()=>(await c(async()=>{const{recycleHorizontalSvg:t}=await import("./DYmwjHkU.js");return{recycleHorizontalSvg:t}},__vite__mapDeps([53,1,2]))).recycleHorizontalSvg,refresh:async()=>(await c(async()=>{const{refreshSvg:t}=await import("./BpxKFjOy.js");return{refreshSvg:t}},__vite__mapDeps([54,1,2]))).refreshSvg,search:async()=>(await c(async()=>{const{searchSvg:t}=await import("./B_lev1WG.js");return{searchSvg:t}},__vite__mapDeps([55,1,2]))).searchSvg,send:async()=>(await c(async()=>{const{sendSvg:t}=await import("./DZ3DsGWo.js");return{sendSvg:t}},__vite__mapDeps([56,1,2]))).sendSvg,swapHorizontal:async()=>(await c(async()=>{const{swapHorizontalSvg:t}=await import("./CQGehtUg.js");return{swapHorizontalSvg:t}},__vite__mapDeps([57,1,2]))).swapHorizontalSvg,swapHorizontalMedium:async()=>(await c(async()=>{const{swapHorizontalMediumSvg:t}=await import("./BFuflAHS.js");return{swapHorizontalMediumSvg:t}},__vite__mapDeps([58,1,2]))).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await c(async()=>{const{swapHorizontalBoldSvg:t}=await import("./BnpZiNeH.js");return{swapHorizontalBoldSvg:t}},__vite__mapDeps([59,1,2]))).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await c(async()=>{const{swapHorizontalRoundedBoldSvg:t}=await import("./B_iSdW2j.js");return{swapHorizontalRoundedBoldSvg:t}},__vite__mapDeps([60,1,2]))).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await c(async()=>{const{swapVerticalSvg:t}=await import("./frCkIfiu.js");return{swapVerticalSvg:t}},__vite__mapDeps([61,1,2]))).swapVerticalSvg,telegram:async()=>(await c(async()=>{const{telegramSvg:t}=await import("./Cthq55eH.js");return{telegramSvg:t}},__vite__mapDeps([62,1,2]))).telegramSvg,threeDots:async()=>(await c(async()=>{const{threeDotsSvg:t}=await import("./Bt-T4DKA.js");return{threeDotsSvg:t}},__vite__mapDeps([63,1,2]))).threeDotsSvg,twitch:async()=>(await c(async()=>{const{twitchSvg:t}=await import("./4F77n6Dr.js");return{twitchSvg:t}},__vite__mapDeps([64,1,2]))).twitchSvg,twitter:async()=>(await c(async()=>{const{xSvg:t}=await import("./DtKFNTmK.js");return{xSvg:t}},__vite__mapDeps([65,1,2]))).xSvg,twitterIcon:async()=>(await c(async()=>{const{twitterIconSvg:t}=await import("./5yo0qd7v.js");return{twitterIconSvg:t}},__vite__mapDeps([66,1,2]))).twitterIconSvg,verify:async()=>(await c(async()=>{const{verifySvg:t}=await import("./QN46mFPd.js");return{verifySvg:t}},__vite__mapDeps([67,1,2]))).verifySvg,verifyFilled:async()=>(await c(async()=>{const{verifyFilledSvg:t}=await import("./BZD5AEZV.js");return{verifyFilledSvg:t}},__vite__mapDeps([68,1,2]))).verifyFilledSvg,wallet:async()=>(await c(async()=>{const{walletSvg:t}=await import("./C3lAXyrk.js");return{walletSvg:t}},__vite__mapDeps([69,1,2]))).walletSvg,walletConnect:async()=>(await c(async()=>{const{walletConnectSvg:t}=await import("./BkXQHqph.js");return{walletConnectSvg:t}},__vite__mapDeps([70,1,2]))).walletConnectSvg,walletConnectLightBrown:async()=>(await c(async()=>{const{walletConnectLightBrownSvg:t}=await import("./BkXQHqph.js");return{walletConnectLightBrownSvg:t}},__vite__mapDeps([70,1,2]))).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await c(async()=>{const{walletConnectBrownSvg:t}=await import("./BkXQHqph.js");return{walletConnectBrownSvg:t}},__vite__mapDeps([70,1,2]))).walletConnectBrownSvg,walletPlaceholder:async()=>(await c(async()=>{const{walletPlaceholderSvg:t}=await import("./CoiAP5x5.js");return{walletPlaceholderSvg:t}},__vite__mapDeps([71,1,2]))).walletPlaceholderSvg,warningCircle:async()=>(await c(async()=>{const{warningCircleSvg:t}=await import("./D4X9GGvv.js");return{warningCircleSvg:t}},__vite__mapDeps([72,1,2]))).warningCircleSvg,x:async()=>(await c(async()=>{const{xSvg:t}=await import("./DtKFNTmK.js");return{xSvg:t}},__vite__mapDeps([65,1,2]))).xSvg,info:async()=>(await c(async()=>{const{infoSvg:t}=await import("./pbN-nHht.js");return{infoSvg:t}},__vite__mapDeps([73,1,2]))).infoSvg,exclamationTriangle:async()=>(await c(async()=>{const{exclamationTriangleSvg:t}=await import("./D1qAG3BK.js");return{exclamationTriangleSvg:t}},__vite__mapDeps([74,1,2]))).exclamationTriangleSvg,reown:async()=>(await c(async()=>{const{reownSvg:t}=await import("./C3GhT0NI.js");return{reownSvg:t}},__vite__mapDeps([75,1,2]))).reownSvg};let j=class extends e{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`\n      --local-color: var(--wui-color-${this.color});\n      --local-width: var(--wui-icon-size-${this.size});\n      --local-aspect-ratio: ${this.aspectRatio}\n    `,o`${E(async function(t){if(b.has(t))return b.get(t);const a=(T[t]??T.copy)();return b.set(t,a),a}(this.name),o`<div class="fallback"></div>`)}`}};j.styles=[g,w,x],R([a()],j.prototype,"size",void 0),R([a()],j.prototype,"name",void 0),R([a()],j.prototype,"color",void 0),R([a()],j.prototype,"aspectRatio",void 0),j=R([h("wui-icon")],j);const P=t`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;var L=function(t,a,e,o){var r,i=arguments.length,n=i<3?a:o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,a,e,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(i<3?r(n):i>3?r(a,e,n):r(a,e))||n);return i>3&&n&&Object.defineProperty(a,e,n),n};let k=class extends e{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const t={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`\n      --local-align: ${this.align};\n      --local-color: var(--wui-color-${this.color});\n    `,o`<slot class=${l(t)}></slot>`}};k.styles=[g,P],L([a()],k.prototype,"variant",void 0),L([a()],k.prototype,"color",void 0),L([a()],k.prototype,"align",void 0),L([a()],k.prototype,"lineClamp",void 0),k=L([h("wui-text")],k);const I=t`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var $=function(t,a,e,o){var r,i=arguments.length,n=i<3?a:o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,a,e,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(i<3?r(n):i>3?r(a,e,n):r(a,e))||n);return i>3&&n&&Object.defineProperty(a,e,n),n};let D=class extends e{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const t=this.iconSize||this.size,a="lg"===this.size,e="xl"===this.size,r=a?"12%":"16%",i=a?"xxs":e?"s":"3xl",n="gray"===this.background,s="opaque"===this.background,c="accent-100"===this.backgroundColor&&s||"success-100"===this.backgroundColor&&s||"error-100"===this.backgroundColor&&s||"inverse-100"===this.backgroundColor&&s;let l=`var(--wui-color-${this.backgroundColor})`;return c?l=`var(--wui-icon-box-bg-${this.backgroundColor})`:n&&(l=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`\n       --local-bg-value: ${l};\n       --local-bg-mix: ${c||n?"100%":r};\n       --local-border-radius: var(--wui-border-radius-${i});\n       --local-size: var(--wui-icon-box-size-${this.size});\n       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}\n   `,o` <wui-icon color=${this.iconColor} size=${t} name=${this.icon}></wui-icon> `}};D.styles=[g,v,I],$([a()],D.prototype,"size",void 0),$([a()],D.prototype,"backgroundColor",void 0),$([a()],D.prototype,"iconColor",void 0),$([a()],D.prototype,"iconSize",void 0),$([a()],D.prototype,"background",void 0),$([a({type:Boolean})],D.prototype,"border",void 0),$([a()],D.prototype,"borderColor",void 0),$([a()],D.prototype,"icon",void 0),D=$([h("wui-icon-box")],D);const z=t`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var O=function(t,a,e,o){var r,i=arguments.length,n=i<3?a:o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,a,e,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(i<3?r(n):i>3?r(a,e,n):r(a,e))||n);return i>3&&n&&Object.defineProperty(a,e,n),n};let V=class extends e{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`\n      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      `,o`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};V.styles=[g,w,z],O([a()],V.prototype,"src",void 0),O([a()],V.prototype,"alt",void 0),O([a()],V.prototype,"size",void 0),V=O([h("wui-image")],V);const A=t`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`;var C=function(t,a,e,o){var r,i=arguments.length,n=i<3?a:o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,a,e,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(i<3?r(n):i>3?r(a,e,n):r(a,e))||n);return i>3&&n&&Object.defineProperty(a,e,n),n};let B=class extends e{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const t="md"===this.size?"mini-700":"micro-700";return o`
      <wui-text data-variant=${this.variant} variant=${t} color="inherit">
        <slot></slot>
      </wui-text>
    `}};B.styles=[g,A],C([a()],B.prototype,"variant",void 0),C([a()],B.prototype,"size",void 0),B=C([h("wui-tag")],B);const H=t`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var F=function(t,a,e,o){var r,i=arguments.length,n=i<3?a:o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,a,e,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(i<3?r(n):i>3?r(a,e,n):r(a,e))||n);return i>3&&n&&Object.defineProperty(a,e,n),n};let G=class extends e{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText="--local-color: "+("inherit"===this.color?"inherit":`var(--wui-color-${this.color})`),this.dataset.size=this.size,o`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};G.styles=[g,H],F([a()],G.prototype,"color",void 0),F([a()],G.prototype,"size",void 0),G=F([h("wui-loading-spinner")],G);export{p as U,h as c};
