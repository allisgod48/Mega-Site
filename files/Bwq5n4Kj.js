const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["files/CCq5YGwj.js","files/lucifer.v7.js","files/index-B1komKJl.css"])))=>i.map(i=>d[i]);
import{i as e,a as t,M as o,A as i,O as s,b as a,E as n,c as r,R as d,_ as l,T as c,U as h,d as w,S as u,C as m,r as p,e as b}from"./lucifer.v7.js";const v=e`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`;var g=function(e,t,o,i){var s,a=arguments.length,n=a<3?t:i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(n=(a<3?s(n):a>3?s(t,o,n):s(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};const f="scroll-lock";let y=class extends t{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=o.state.open,this.caipAddress=i.state.caipAddress,this.isSiweEnabled=s.state.isSiweEnabled,this.connected=i.state.isConnected,this.loading=o.state.loading,this.shake=o.state.shake,this.initializeTheming(),a.prefetch(),this.unsubscribe.push(o.subscribeKey("open",e=>e?this.onOpen():this.onClose()),o.subscribeKey("shake",e=>this.shake=e),o.subscribeKey("loading",e=>{this.loading=e,this.onNewAddress(i.state.caipAddress)}),i.subscribeKey("isConnected",e=>this.connected=e),i.subscribeKey("caipAddress",e=>this.onNewAddress(e)),s.subscribeKey("isSiweEnabled",e=>this.isSiweEnabled=e)),n.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?r`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            <wui-card
              shake="${this.shake}"
              role="alertdialog"
              aria-modal="true"
              tabindex="0"
              data-testid="w3m-modal-card"
            >
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){const e="ConnectingSiwe"===d.state.view,t="ApproveTransaction"===d.state.view;if(this.isSiweEnabled){const{SIWEController:i}=await l(async()=>{const{SIWEController:e}=await import("./CCq5YGwj.js");return{SIWEController:e}},__vite__mapDeps([0,1,2]));"success"!==i.state.status&&(e||t)?o.shake():o.close()}else o.close()}initializeTheming(){const{themeVariables:e,themeMode:t}=c.state,o=h.getColorTheme(t);w(e,o)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),u.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=f,e.textContent="\n      body {\n        touch-action: none;\n        overflow: hidden;\n        overscroll-behavior: contain;\n      }\n      w3m-modal {\n        pointer-events: auto;\n      }\n    ",document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${f}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;const e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",t=>{if("Escape"===t.key)this.handleClose();else if("Tab"===t.key){const{tagName:o}=t.target;!o||o.includes("W3M-")||o.includes("WUI-")||e?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}async onNewAddress(e){if(!this.connected||this.loading)return;const t=m.getPlainAddress(this.caipAddress),o=m.getPlainAddress(e),i=m.getNetworkId(this.caipAddress),s=m.getNetworkId(e);if(this.caipAddress=e,this.isSiweEnabled){const{SIWEController:e}=await l(async()=>{const{SIWEController:e}=await import("./CCq5YGwj.js");return{SIWEController:e}},__vite__mapDeps([0,1,2])),a=await e.getSession();if(a&&t&&o&&t!==o)return void(e.state._client?.options.signOutOnAccountChange&&(await e.signOut(),this.onSiweNavigation()));if(a&&i&&s&&i!==s)return void(e.state._client?.options.signOutOnNetworkChange&&(await e.signOut(),this.onSiweNavigation()));this.onSiweNavigation()}}onSiweNavigation(){this.open?d.push("ConnectingSiwe"):o.open({view:"ConnectingSiwe"})}};y.styles=v,g([p()],y.prototype,"open",void 0),g([p()],y.prototype,"caipAddress",void 0),g([p()],y.prototype,"isSiweEnabled",void 0),g([p()],y.prototype,"connected",void 0),g([p()],y.prototype,"loading",void 0),g([p()],y.prototype,"shake",void 0),y=g([b("w3m-modal")],y);export{y as W3mModal};
