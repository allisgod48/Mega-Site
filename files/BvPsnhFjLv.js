import{G as e,O as t,J as n,K as s,L as i,A as a,N as r,P as o,Q as c,V as l,R as g,W as u,X as d,Y as h,Z as w,i as p,e as f,a as S,c as m,r as C,M as y,E as I,$ as E,S as v,a0 as O,a1 as N}from"./lucifer.v7.js";import{a2 as _}from"./lucifer.v7.js";const A=i({status:"uninitialized"}),b={state:A,subscribeKey:(e,t)=>s(A,e,t),subscribe:e=>n(A,()=>e(A)),_getClient(){if(!A._client)throw new Error("SIWEController client not set");return A._client},async getNonce(e){const t=this._getClient(),n=await t.getNonce(e);return this.setNonce(n),n},async getSession(){try{const e=this._getClient(),t=await e.getSession();return t&&(this.setSession(t),this.setStatus("success")),t}catch{return}},createMessage(e){const t=this._getClient().createMessage(e);return this.setMessage(t),t},async verifyMessage(e){const t=this._getClient();return await t.verifyMessage(e)},async signIn(){const e=this._getClient();return await e.signIn()},async signOut(){const e=this._getClient();await e.signOut(),this.setStatus("ready"),this.setSession(void 0),e.onSignOut?.()},onSignIn(e){const t=this._getClient();t.onSignIn?.(e)},onSignOut(){const e=this._getClient();e.onSignOut?.()},setSIWEClient(n){A._client=e(n),A.status="ready",t.setIsSiweEnabled(n.options.enabled)},setNonce(e){A.nonce=e},setStatus(e){A.status=e},setMessage(e){A.message=e},setSession(e){A.session=e,A.status=e?"success":"ready"}},x={FIVE_MINUTES_IN_MS:3e5};class M{constructor(e){const{enabled:t=!0,nonceRefetchIntervalMs:n=x.FIVE_MINUTES_IN_MS,sessionRefetchIntervalMs:s=x.FIVE_MINUTES_IN_MS,signOutOnAccountChange:i=!0,signOutOnDisconnect:a=!0,signOutOnNetworkChange:r=!0,...o}=e;this.options={enabled:t,nonceRefetchIntervalMs:n,sessionRefetchIntervalMs:s,signOutOnDisconnect:a,signOutOnAccountChange:i,signOutOnNetworkChange:r},this.methods=o}async getNonce(e){const t=await this.methods.getNonce(e);if(!t)throw new Error("siweControllerClient:getNonce - nonce is undefined");return t}async getMessageParams(){return await(this.methods.getMessageParams?.())||{}}createMessage(e){const t=this.methods.createMessage(e);if(!t)throw new Error("siweControllerClient:createMessage - message is undefined");return t}async verifyMessage(e){return await this.methods.verifyMessage(e)}async getSession(){const e=await this.methods.getSession();if(!e)throw new Error("siweControllerClient:getSession - session is undefined");return e}async signIn(){if(!b.state._client)throw new Error("SIWE client needs to be initialized before calling signIn");const e=a.state.address,t=await this.methods.getNonce(e);if(!e)throw new Error("An address is required to create a SIWE message.");const n=r.getNetworkProp("caipNetwork");if(!n?.id)throw new Error("A chainId is required to create a SIWE message.");const s=o.caipNetworkIdToNumber(n.id);if(!s)throw new Error("A chainId is required to create a SIWE message.");const i=b.state._client?.options.signOutOnNetworkChange;i&&(b.state._client.options.signOutOnNetworkChange=!1,await this.signOut()),await c.switchActiveNetwork(n),i&&(b.state._client.options.signOutOnNetworkChange=!0);const h=await(this.getMessageParams?.()),w=this.methods.createMessage({address:`eip155:${s}:${e}`,chainId:s,nonce:t,version:"1",iat:h?.iat||(new Date).toISOString(),...h});"AUTH"===l.getConnectedConnector()&&g.pushTransactionStack({view:null,goBack:!1,replace:!0,onCancel(){g.replace("ConnectingSiwe")}});const p=await u.signMessage(w);if(!(await this.methods.verifyMessage({message:w,signature:p})))throw new Error("Error verifying SIWE signature");const f=await this.methods.getSession();if(!f)throw new Error("Error verifying SIWE signature");return this.methods.onSignIn&&this.methods.onSignIn(f),d.navigateAfterNetworkSwitch(),f}async signOut(){return this.methods.onSignOut?.(),this.methods.signOut()}}const T=/0x[a-fA-F0-9]{40}/u,k=/Chain ID: (?<temp1>\d+)/u;function R(e){return e.match(T)?.[0]||""}function U(e){return`eip155:${e.match(k)?.[1]||1}`}async function $({address:e,message:t,signature:n,chainId:s,projectId:i}){let a=h(e,t,n);return a||(a=await w(e,t,n,s,i)),a}const W=p`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;let j=class extends S{constructor(){super(...arguments),this.dappImageUrl=t.state.metadata?.icons,this.walletImageUrl=a.state.connectedWalletInfo?.icon}firstUpdated(){const e=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");e?.[0]&&this.createAnimation(e[0],"translate(18px)"),e?.[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){return m`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:"translateX(0px)"},{transform:t}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};j.styles=W,j=function(e,t,n,s){var i,a=arguments.length,r=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,s);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(r=(a<3?i(r):a>3?i(t,n,r):i(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r}([f("w3m-connecting-siwe")],j);var P=function(e,t,n,s){var i,a=arguments.length,r=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,s);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(r=(a<3?i(r):a>3?i(t,n,r):i(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r};let D=class extends S{constructor(){super(...arguments),this.dappName=t.state.metadata?.name,this.isSigning=!1,this.isCancelling=!1}render(){return this.onRender(),m`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="main"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}onRender(){b.state.session&&y.close()}async onSign(){this.isSigning=!0,I.sendEvent({event:"CLICK_SIGN_SIWE_MESSAGE",type:"track",properties:{network:c.state.caipNetwork?.id||"",isSmartAccount:a.state.preferredAccountType===E.ACCOUNT_TYPES.SMART_ACCOUNT}});try{b.setStatus("loading");const e=await b.signIn();return b.setStatus("success"),I.sendEvent({event:"SIWE_AUTH_SUCCESS",type:"track",properties:{network:c.state.caipNetwork?.id||"",isSmartAccount:a.state.preferredAccountType===E.ACCOUNT_TYPES.SMART_ACCOUNT}}),e}catch(e){const t=a.state.preferredAccountType===E.ACCOUNT_TYPES.SMART_ACCOUNT;return t?v.showError("This application might not support Smart Accounts"):v.showError("Signature declined"),b.setStatus("error"),I.sendEvent({event:"SIWE_AUTH_ERROR",type:"track",properties:{network:c.state.caipNetwork?.id||"",isSmartAccount:t}})}finally{this.isSigning=!1}}async onCancel(){this.isCancelling=!0;a.state.isConnected?(await u.disconnect(),y.close()):g.push("Connect"),this.isCancelling=!1,I.sendEvent({event:"CLICK_CANCEL_SIWE",type:"track",properties:{network:c.state.caipNetwork?.id||"",isSmartAccount:a.state.preferredAccountType===E.ACCOUNT_TYPES.SMART_ACCOUNT}})}};function z(e){return new M(e)}P([C()],D.prototype,"isSigning",void 0),P([C()],D.prototype,"isCancelling",void 0),D=P([f("w3m-connecting-siwe-view")],D);export{b as SIWEController,j as W3mConnectingSiwe,D as W3mConnectingSiweView,z as createSIWEConfig,_ as formatMessage,R as getAddressFromMessage,U as getChainIdFromMessage,O as getDidAddress,N as getDidChainId,$ as verifySignature};
