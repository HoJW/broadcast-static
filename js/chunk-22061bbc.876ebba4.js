(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22061bbc"],{2784:function(t,e,s){"use strict";var i=s("a799"),a=s.n(i);a.a},"5ebe":function(t,e,s){},"6d41":function(t,e,s){"use strict";var i=s("af06"),a=s.n(i);a.a},7159:function(t,e,s){t.exports=s.p+"img/img.146655c9.jpg"},a799:function(t,e,s){},af06:function(t,e,s){},bfe9:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper"},[s("v-head"),s("v-sidebar"),s("div",{staticClass:"content-box",class:{"content-collapse":t.collapse}},[s("div",{staticClass:"content"},[s("transition",{attrs:{name:"move",mode:"out-in"}},[s("router-view")],1)],1)])],1)},a=[],n=(s("7f7f"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header"},[s("div",{staticClass:"collapse-btn",on:{click:t.collapseChage}},[s("i",{staticClass:"el-icon-menu"})]),s("div",{staticClass:"logo"},[t._v("巨硅云广播")]),s("div",{staticClass:"header-right"},[s("div",{staticClass:"header-user-con"},[s("div",{staticClass:"btn-bell"},[s("el-tooltip",{attrs:{effect:"dark",content:t.message?"有"+t.message+"条未读消息":"报警记录",placement:"bottom"}},[s("router-link",{attrs:{to:"/alarm-record"}},[s("i",{staticClass:"el-icon-bell"})])],1),t.message?s("span",{staticClass:"btn-bell-badge"}):t._e()],1),t._m(0),s("el-dropdown",{staticClass:"user-name",attrs:{trigger:"click"},on:{command:t.handleCommand}},[s("span",{staticClass:"el-dropdown-link"},[t._v("\n                    "+t._s(t.username)+" "),s("i",{staticClass:"el-icon-caret-bottom"})]),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.accountInfo()}}},[s("el-dropdown-item",[t._v("账户消息")])],1),s("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.changePass()}}},[s("el-dropdown-item",[t._v("修改密码")])],1),s("el-dropdown-item",{attrs:{divided:"",command:"loginout"}},[t._v("退出登录")])],1)],1)],1)]),s("change-pass-dialog",{attrs:{show:t.changePassDialogVisible},on:{"update:show":function(e){t.changePassDialogVisible=e}}}),s("account-info-dialog",{attrs:{show:t.accountInfoDialogVisible},on:{"update:show":function(e){t.accountInfoDialogVisible=e}}})],1)}),l=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"user-avator"},[i("img",{attrs:{src:s("7159")}})])}],o=s("2b0e"),c=new o["default"],r=c,u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("el-dialog",{attrs:{title:"修改密码",visible:t.visible},on:{"update:visible":function(e){t.visible=e},close:function(e){return t.closeDialog()}}},[s("el-form",{ref:"form",attrs:{model:t.form,"label-width":"100px"}},[s("el-form-item",{attrs:{label:"输入原密码"}},[s("el-input",{model:{value:t.oldPassw,callback:function(e){t.oldPassw=e},expression:"oldPassw"}})],1),s("el-form-item",{attrs:{label:"输入新密码"}},[s("el-input",{model:{value:t.friNewPass,callback:function(e){t.friNewPass=e},expression:"friNewPass"}})],1),s("el-form-item",{attrs:{label:"再输入新密码"}},[s("el-input",{model:{value:t.secNewPass,callback:function(e){t.secNewPass=e},expression:"secNewPass"}})],1)],1),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(e){t.visible=!1}}},[t._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.comfirm()}}},[t._v("确 定")])],1)],1)],1)},d=[],m={name:"change-pass-dialog",data:function(){return{visible:this.show,dialogTitle:"",form:{name:"",date:"",address:""},oldPassw:"",friNewPass:"",secNewPass:""}},props:{show:{type:Boolean,default:!1},EDIT:{type:String},datas:{type:Object}},watch:{show:function(){console.log(this.datas),this.form=this.datas,this.visible=this.show}},created:function(){},methods:{comfirm:function(){this.visible=!1},closeDialog:function(){this.oldPassw="",this.friNewPass="",this.secNewPass="",this.$emit("update:show",!1)}}},f=m,h=s("2877"),p=Object(h["a"])(f,u,d,!1,null,null,null),g=p.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("el-dialog",{attrs:{title:"账户信息",visible:t.visible},on:{"update:visible":function(e){t.visible=e},close:function(e){return t.closeDialog()}}},[s("el-form",{ref:"form",attrs:{"label-width":"100px"}},[s("div",{staticClass:"upload-box"},[s("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload}},[t.imageUrl?s("img",{staticClass:"avatar",attrs:{src:t.imageUrl}}):s("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),s("el-form-item",{attrs:{label:"账号"}},[s("el-input",{model:{value:t.accountID,callback:function(e){t.accountID=e},expression:"accountID"}})],1),s("el-form-item",{attrs:{label:"姓名"}},[s("el-input",{model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}})],1),s("el-form-item",{attrs:{label:"联系电话"}},[s("el-input",{model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),s("el-form-item",{attrs:{label:"邮箱"}},[s("el-input",{model:{value:t.mail,callback:function(e){t.mail=e},expression:"mail"}})],1),s("el-form-item",{attrs:{label:"所属机构"}},[s("el-input",{model:{value:t.org,callback:function(e){t.org=e},expression:"org"}})],1),s("el-form-item",{attrs:{label:"部门"}},[s("el-input",{model:{value:t.department,callback:function(e){t.department=e},expression:"department"}})],1),s("el-form-item",{attrs:{label:"职位"}},[s("el-input",{model:{value:t.job,callback:function(e){t.job=e},expression:"job"}})],1),s("el-form-item",{attrs:{label:"员工编号"}},[s("el-input",{model:{value:t.employeeID,callback:function(e){t.employeeID=e},expression:"employeeID"}})],1)],1),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(e){t.visible=!1}}},[t._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.comfirm()}}},[t._v("确 定")])],1)],1)],1)},v=[],w={name:"account-info-dialog",data:function(){return{visible:this.show,imageUrl:"",accountID:"",userName:"",phone:"",mail:"",org:"",department:"",job:"",employeeID:""}},props:{show:{type:Boolean,default:!1},EDIT:{type:String},datas:{type:Object}},watch:{show:function(){console.log(this.datas),this.form=this.datas,this.dialogTitle=this.title,this.visible=this.show}},created:function(){},methods:{comfirm:function(){this.visible=!1},handleAvatarSuccess:function(t,e){this.imageUrl=URL.createObjectURL(e.raw)},beforeAvatarUpload:function(t){var e="image/jpeg"===t.type,s=t.size/1024/1024<2;return e||this.$message.error("上传头像图片只能是 JPG 格式!"),s||this.$message.error("上传头像图片大小不能超过 2MB!"),e&&s},closeDialog:function(){this.imageUrl="",this.accountID="",this.userName="",this.phone="",this.mail="",this.org="",this.department="",this.job="",this.employeeID="",this.$emit("update:show",!1)}}},x=w,_=(s("d982"),Object(h["a"])(x,b,v,!1,null,"38e8ef1a",null)),C=_.exports,k={components:{changePassDialog:g,accountInfoDialog:C},data:function(){return{collapse:!1,fullscreen:!1,name:"header",message:2,changePassDialogVisible:!1,accountInfoDialogVisible:!1}},computed:{username:function(){var t=localStorage.getItem("ms_username");return t||this.name}},methods:{handleCommand:function(t){"loginout"==t&&(localStorage.removeItem("ms_username"),this.$router.push("/login"))},collapseChage:function(){this.collapse=!this.collapse,r.$emit("collapse",this.collapse)},handleFullScreen:function(){var t=document.documentElement;this.fullscreen?document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullScreen?t.webkitRequestFullScreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen&&t.msRequestFullscreen(),this.fullscreen=!this.fullscreen},changePass:function(){this.changePassDialogVisible=!0},accountInfo:function(){this.accountInfoDialogVisible=!0}},mounted:function(){document.body.clientWidth<1500&&this.collapseChage()}},$=k,y=(s("6d41"),Object(h["a"])($,n,l,!1,null,"d6449774",null)),P=y.exports,D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sidebar"},[s("el-menu",{staticClass:"sidebar-el-menu",attrs:{"default-active":t.onRoutes,collapse:t.collapse,"background-color":"#324157","text-color":"#bfcbd9","active-text-color":"#20a0ff","unique-opened":"",router:""}},[t._l(t.items,function(e){return[e.subs?[s("el-submenu",{key:e.index,attrs:{index:e.index}},[s("template",{slot:"title"},[s("i",{class:e.icon}),s("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])]),t._l(e.subs,function(e){return[e.subs?s("el-submenu",{key:e.index,attrs:{index:e.index}},[s("template",{slot:"title"},[t._v(t._s(e.title))]),t._l(e.subs,function(e,i){return s("el-menu-item",{key:i,attrs:{index:e.index}},[t._v("\n                                "+t._s(e.title)+"\n                            ")])})],2):s("el-menu-item",{key:e.index,attrs:{index:e.index}},[t._v("\n                            "+t._s(e.title)+"\n                        ")])]})],2)]:[s("el-menu-item",{key:e.index,attrs:{index:e.index}},[s("i",{class:e.icon}),s("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])])]]})],2)],1)},L=[],I=(s("a481"),{data:function(){return{collapse:!1,items:[{icon:"el-icon-map-location",index:"broadcast-map",title:"广播地图"},{icon:"el-icon-connection",index:"broadcast-group",title:"分组管理"},{icon:"el-icon-help",index:"11",title:"设备管理",subs:[{index:"device-monitoring",title:"设备监控"},{index:"device-import",title:"设备导入"},{index:"alarm-record",title:"报警记录"},{index:"repair-order",title:"报修工单"},{index:"remote-control",title:"远程控制"}]},{icon:"el-icon-headset",index:"21",title:"广播管理",subs:[{index:"broadcast-manager",title:"调频广播管理"},{index:"audio-manager",title:"音频管理"},{index:"guide-audio",title:"前导音"},{index:"urgency-broadcast",title:"紧急广播"}]},{icon:"el-icon-office-building",index:"organ-manager",title:"机构管理"},{icon:"el-icon-s-data",index:"analysis-chart",title:"统计分析"},{icon:"el-icon-user",index:"31",title:"用户管理",subs:[{index:"system-account",title:"系统用户管理"},{index:"app-account",title:"App用户管理"},{index:"device-account",title:"设备用户管理"}]},{icon:"el-icon-setting",index:"system-manager",title:"系统管理"}]}},computed:{onRoutes:function(){return this.$route.path.replace("/","")}},created:function(){var t=this;r.$on("collapse",function(e){t.collapse=e})}}),j=I,F=(s("2784"),Object(h["a"])(j,D,L,!1,null,"b0fb54dc",null)),S=F.exports,N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.showTags?s("div",{staticClass:"tags"},[s("ul",t._l(t.tagsList,function(e,i){return s("li",{key:i,staticClass:"tags-li",class:{active:t.isActive(e.path)}},[s("router-link",{staticClass:"tags-li-title",attrs:{to:e.path}},[t._v("\n                "+t._s(e.title)+"\n            ")]),s("span",{staticClass:"tags-li-icon",on:{click:function(e){return t.closeTags(i)}}},[s("i",{staticClass:"el-icon-close"})])],1)}),0),s("div",{staticClass:"tags-close-box"},[s("el-dropdown",{on:{command:t.handleTags}},[s("el-button",{attrs:{size:"mini",type:"primary"}},[t._v("\n                标签选项"),s("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),s("el-dropdown-menu",{attrs:{slot:"dropdown",size:"small"},slot:"dropdown"},[s("el-dropdown-item",{attrs:{command:"other"}},[t._v("关闭其他")]),s("el-dropdown-item",{attrs:{command:"all"}},[t._v("关闭所有")])],1)],1)],1)]):t._e()},T=[],E={data:function(){return{tagsList:[]}},methods:{isActive:function(t){return t===this.$route.fullPath},closeTags:function(t){var e=this.tagsList.splice(t,1)[0],s=this.tagsList[t]?this.tagsList[t]:this.tagsList[t-1];s?e.path===this.$route.fullPath&&this.$router.push(s.path):this.$router.push("/")},closeAll:function(){this.tagsList=[],this.$router.push("/")},closeOther:function(){var t=this,e=this.tagsList.filter(function(e){return e.path===t.$route.fullPath});this.tagsList=e},setTags:function(t){var e=this.tagsList.some(function(e){return e.path===t.fullPath});e||(this.tagsList.length>=8&&this.tagsList.shift(),this.tagsList.push({title:t.meta.title,path:t.fullPath,name:t.matched[1].components.default.name})),r.$emit("tags",this.tagsList)},handleTags:function(t){"other"===t?this.closeOther():this.closeAll()}},computed:{showTags:function(){return this.tagsList.length>0}},watch:{$route:function(t,e){this.setTags(t)}},created:function(){var t=this;this.setTags(this.$route),r.$on("close_current_tags",function(){for(var e=0,s=t.tagsList.length;e<s;e++){var i=t.tagsList[e];if(i.path===t.$route.fullPath){e<s-1?t.$router.push(t.tagsList[e+1].path):e>0?t.$router.push(t.tagsList[e-1].path):t.$router.push("/"),t.tagsList.splice(e,1);break}}})}},O=E,R=(s("c5f3"),Object(h["a"])(O,N,T,!1,null,null,null)),q=R.exports,A={data:function(){return{tagsList:[],collapse:!1}},components:{vHead:P,vSidebar:S,vTags:q},created:function(){var t=this;r.$on("collapse",function(e){t.collapse=e}),r.$on("tags",function(e){for(var s=[],i=0,a=e.length;i<a;i++)e[i].name&&s.push(e[i].name);t.tagsList=s})}},U=A,V=Object(h["a"])(U,i,a,!1,null,null,null);e["default"]=V.exports},c5f3:function(t,e,s){"use strict";var i=s("5ebe"),a=s.n(i);a.a},d982:function(t,e,s){"use strict";var i=s("eeef"),a=s.n(i);a.a},eeef:function(t,e,s){}}]);