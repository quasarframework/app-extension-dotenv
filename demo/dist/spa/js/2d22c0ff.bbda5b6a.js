(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d22c0ff"],{f241:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-layout",{attrs:{view:"lHh Lpr lFf"}},[e("q-header",{staticClass:"glossy",attrs:{elevated:""}},[e("q-toolbar",[e("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu"},on:{click:function(a){t.leftDrawerOpen=!t.leftDrawerOpen}}},[e("q-icon",{attrs:{name:"menu"}})],1),e("q-toolbar-title",[t._v("\n        Quasar App\n      ")]),e("div",[t._v("Quasar v"+t._s(t.$q.version))])],1)],1),e("q-drawer",{attrs:{bordered:"","content-class":"bg-grey-2"},model:{value:t.leftDrawerOpen,callback:function(a){t.leftDrawerOpen=a},expression:"leftDrawerOpen"}},[e("q-list",[e("q-item-label",{attrs:{header:""}},[t._v("Essential Links")]),e("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"http://v1.quasar-framework.org"}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:"school"}})],1),e("q-item-section",[e("q-item-label",[t._v("Docs")]),e("q-item-label",{attrs:{caption:""}},[t._v("v1.quasar-framework.org")])],1)],1),e("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"https://github.com/quasarframework/"}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:"code"}})],1),e("q-item-section",[e("q-item-label",[t._v("Github")]),e("q-item-label",{attrs:{caption:""}},[t._v("github.com/quasarframework")])],1)],1),e("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"http://chat.quasar-framework.org"}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:"chat"}})],1),e("q-item-section",[e("q-item-label",[t._v("Discord Chat Channel")]),e("q-item-label",{attrs:{caption:""}},[t._v("chat.quasar-framework.org")])],1)],1),e("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"https://forum.quasar-framework.org"}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:"record_voice_over"}})],1),e("q-item-section",[e("q-item-label",[t._v("Forum")]),e("q-item-label",{attrs:{caption:""}},[t._v("forum.quasar-framework.org")])],1)],1),e("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"https://twitter.com/quasarframework"}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:"rss_feed"}})],1),e("q-item-section",[e("q-item-label",[t._v("Twitter")]),e("q-item-label",{attrs:{caption:""}},[t._v("@quasarframework")])],1)],1)],1)],1),e("q-page-container",[e("router-view")],1)],1)},o=[],n=e("0967"),i=e("2b0e"),s=function(t,a){var e=window.open;if(!0===n["a"].is.cordova){if(void 0!==cordova&&void 0!==cordova.InAppBrowser&&void 0!==cordova.InAppBrowser.open)e=cordova.InAppBrowser.open;else if(void 0!==navigator&&void 0!==navigator.app)return navigator.app.loadUrl(t,{openExternal:!0})}else if(void 0!==i["a"].prototype.$q.electron)return i["a"].prototype.$q.electron.shell.openExternal(t);var r=e(t,"_blank");if(r)return r.focus(),r;a&&a()},l={name:"MyLayout",data:function(){return{leftDrawerOpen:this.$q.platform.is.desktop}},methods:{openURL:s},mounted:function(){console.log("Dotenv Test",Object({NODE_ENV:"production",CLIENT:!0,SERVER:!1,DEV:!1,PROD:!0,MODE:"spa",VUE_ROUTER_MODE:"hash",VUE_ROUTER_BASE:"",APP_URL:"undefined"}))}},c=l,m=e("2877"),q=Object(m["a"])(c,r,o,!1,null,null,null);a["default"]=q.exports}}]);