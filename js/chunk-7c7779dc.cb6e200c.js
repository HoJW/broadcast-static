(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c7779dc"],{"24a5":function(t,e,a){},"63f7":function(t,e,a){"use strict";var i=a("872c"),l=a.n(i);l.a},"7b75":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("div",{staticClass:"container"},[a("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"用户列表",name:"user"}},[a("user-manager")],1),a("el-tab-pane",{attrs:{label:"标签管理",name:"tips"}},[a("tips-manager")],1)],1)],1)])},l=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table"},[a("div",{staticClass:"container"},[a("el-row",{staticClass:"handle-box",attrs:{gutter:10}},[a("el-col",{attrs:{md:4}},[a("el-select",{attrs:{filterable:"",placeholder:"状态"},model:{value:t.statusValue,callback:function(e){t.statusValue=e},expression:"statusValue"}},t._l(t.statusOptions,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),a("el-col",{attrs:{md:6}},[a("el-input",{staticClass:" mr10",attrs:{placeholder:"IMEI"},model:{value:t.select_word,callback:function(e){t.select_word=e},expression:"select_word"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.search},slot:"append"})],1)],1),a("el-col",{attrs:{md:14}},[a("el-button",{staticClass:"r",staticStyle:{"margin-left":"10px"},attrs:{type:"primary"}},[a("i",{staticClass:"el-icon-download el-icon--left"}),t._v("导出")]),a("el-button",{staticClass:"r",attrs:{type:"primary"}},[a("i",{staticClass:"el-icon-upload2 el-icon--left"}),t._v("导入")]),a("el-button",{staticClass:"r",attrs:{type:"danger",disabled:0==t.multipleSelection.length},on:{click:function(e){return t.handleDelete()}}},[a("i",{staticClass:"el-icon-delete el-icon--left"}),t._v("删除")]),a("el-button",{staticClass:"r",attrs:{type:"success"},on:{click:function(e){return t.addAccount()}}},[a("i",{staticClass:"el-icon-plus el-icon--left"}),t._v("添加")])],1)],1),a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:t.data,height:t.tableHeight,align:"center"},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"id",label:"ID",width:"100",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"username",label:"姓名",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"identity",label:"身份证",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"phone",label:"联系电话",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"address",label:"住址",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"status",label:"状态",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"tip",label:"标签",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(a){return t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),a("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(a){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper",total:30},on:{"current-change":t.handleCurrentChange}})],1)],1),a("user-edit-dialog",{attrs:{title:t.userEditTitle,show:t.userEditDialogVisible},on:{"update:show":function(e){t.userEditDialogVisible=e}}})],1)},o=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{attrs:{title:t.dialogTitle,visible:t.visible},on:{"update:visible":function(e){t.visible=e},close:function(e){return t.closeDialog()}}},[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}})],1),a("el-form-item",{attrs:{label:"联系电话"}},[a("el-input",{model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),a("el-form-item",{attrs:{label:"身份证"}},[a("el-input",{model:{value:t.identityID,callback:function(e){t.identityID=e},expression:"identityID"}})],1),a("el-form-item",{attrs:{label:"家庭住址"}},[a("el-cascader",{attrs:{options:t.addressOptions},model:{value:t.addressValue,callback:function(e){t.addressValue=e},expression:"addressValue"}})],1),a("el-form-item",{attrs:{label:"详细地址"}},[a("el-input",{model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1),a("el-form-item",{attrs:{label:"所属机构"}},[a("el-cascader",{attrs:{options:t.areaOptions},model:{value:t.areaValue,callback:function(e){t.areaValue=e},expression:"areaValue"}})],1),a("el-form-item",{attrs:{label:"用户标签"}},[a("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.tipLabel,callback:function(e){t.tipLabel=e},expression:"tipLabel"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-edit"},on:{click:function(e){return t.openTipsEdit()}},slot:"append"})],1)],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.visible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.comfirm()}}},[t._v("确 定")])],1)],1)],1)},r=[],c={name:"user-edit-dialog",data:function(){return{visible:this.show,dialogTitle:"",form:{name:"",date:"",address:""},areaOptions:[],addressOptions:[],userName:"",phone:"",identityID:"",addressValue:"",areaValue:"",address:"",tipLabel:""}},props:{show:{type:Boolean,default:!1},EDIT:{type:String},datas:{type:Object},title:{type:String,default:""}},watch:{show:function(){console.log(this.datas),this.form=this.datas,this.dialogTitle=this.title,this.visible=this.show}},created:function(){this.getAreaOptionsData()},methods:{comfirm:function(){this.visible=!1},getAreaOptionsData:function(){var t=this;this.$axios.get("./mock-options/area-options.json").then(function(e){t.areaOptions=e.data.list,t.addressOptions=e.data.list})},openTipsEdit:function(){},closeDialog:function(){this.userName="",this.phone="",this.identityID="",this.addressValue="",this.areaValue="",this.address="",this.tipLabel="",this.$emit("update:show",!1)}}},u=c,d=a("2877"),p=Object(d["a"])(u,s,r,!1,null,null,null),h=p.exports,f={name:"user-manager",components:{userEditDialog:h},data:function(){return{url:"./mock-data/user-manager.json",tableData:[],cur_page:1,multipleSelection:[],select_cate:"",select_word:"",is_search:!1,idx:-1,statusValue:"",statusOptions:[{value:"选项1",label:"已激活"},{value:"选项2",label:"未激活"}],userEditDialogVisible:!1,userEditTitle:""}},created:function(){this.getData()},computed:{data:function(){return this.tableData},tableHeight:function(){return window.innerHeight-297+"px"}},methods:{handleCurrentChange:function(t){this.cur_page=t,this.getData()},getData:function(){var t=this;this.$axios.get(this.url,{page:this.cur_page}).then(function(e){console.log(),t.tableData=e.data.list})},search:function(){this.is_search=!0},handleEdit:function(t,e){this.idx=t,this.userEditTitle="编辑用户",this.userEditDialogVisible=!0},handleDelete:function(t,e){var a=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.$message({type:"success",message:"删除成功!"})}).catch(function(){})},handleSelectionChange:function(t){this.multipleSelection=t},addAccount:function(){this.userEditTitle="添加用户",this.userEditDialogVisible=!0}}},b=f,m=(a("a716"),Object(d["a"])(b,n,o,!1,null,"13043658",null)),g=m.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table"},[a("div",{staticClass:"container"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("el-row",{staticClass:"handle-box",attrs:{gutter:10}},[a("el-col",{attrs:{md:24}},[a("el-button",{staticClass:"r",attrs:{type:"success"},on:{click:function(e){return t.addTips()}}},[a("i",{staticClass:"el-icon-plus el-icon--left"}),t._v("添加标签")])],1)],1),a("el-table",{staticClass:"table",attrs:{data:t.tipsData,align:"center",height:t.tableHeight,"highlight-current-row":""},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"index"}}),a("el-table-column",{attrs:{prop:"tipName",label:"标签名",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(a){return t.handleTipEdit(e.$index,e.row)}}},[t._v("编辑")]),a("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(a){return t.handleDeleteTip(e.$index,e.row)}}},[t._v("删除")])]}}])})],1)],1),a("el-col",{attrs:{span:16}},[a("el-row",{staticClass:"handle-box",attrs:{gutter:10}},[a("el-col",{attrs:{md:24}},[a("el-button",{staticClass:"r",attrs:{type:"success"},on:{click:function(e){return t.addTipMenber()}}},[a("i",{staticClass:"el-icon-plus el-icon--left"}),t._v("添加用户")])],1)],1),a("el-table",{staticClass:"table",attrs:{data:t.tipDetailData,align:"center",height:t.rightTableHeight,"highlight-current-row":""},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"index"}}),a("el-table-column",{attrs:{prop:"username",label:"用户名",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"address",label:"地址",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"phone",label:"电话",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",icon:"el-icon-view"},on:{click:function(a){return t.handleMenberDetail(e.$index,e.row)}}},[t._v("查看")]),a("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(a){return t.handleDelete(e.$index,e.row)}}},[t._v("移除")])]}}])})],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper",total:30},on:{"current-change":t.handleCurrentChange}})],1)],1)],1)],1),a("tips-add-dialog",{attrs:{title:t.tipsAddTitle,show:t.tipsAddDialogVisible},on:{"update:show":function(e){t.tipsAddDialogVisible=e}}}),a("tip-menber-detail-dialog",{attrs:{title:t.tipMenberDetailTitle,show:t.tipMenberDetailDialogVisible},on:{"update:show":function(e){t.tipMenberDetailDialogVisible=e}}}),a("account-list-dialog",{attrs:{show:t.accountListDialogVisible},on:{"update:show":function(e){t.accountListDialogVisible=e}}})],1)},w=[],D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{attrs:{title:t.dialogTitle,visible:t.visible},on:{"update:visible":function(e){t.visible=e},close:function(e){return t.closeDialog()}}},[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"100px"}},[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"标签名"}},[a("el-input",{model:{value:t.tipName,callback:function(e){t.tipName=e},expression:"tipName"}})],1),a("el-form-item",{attrs:{label:"标签备注"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10},placeholder:"请输入内容"},model:{value:t.tipRemark,callback:function(e){t.tipRemark=e},expression:"tipRemark"}})],1)],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.visible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.comfirm()}}},[t._v("确 定")])],1)],1)],1)},x=[],y={name:"tips-add-dialog",data:function(){return{visible:this.show,dialogTitle:"",form:{name:"",date:"",address:""},tipName:"",tipRemark:""}},props:{show:{type:Boolean,default:!1},EDIT:{type:String},datas:{type:Object},title:{type:String,default:""}},watch:{show:function(){console.log(this.datas),this.form=this.datas,this.dialogTitle=this.title,this.visible=this.show}},created:function(){},methods:{comfirm:function(){this.visible=!1},closeDialog:function(){this.tipName="",this.tipRemark="",this.$emit("update:show",!1)}}},_=y,k=Object(d["a"])(_,D,x,!1,null,null,null),C=k.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{attrs:{title:t.dialogTitle,visible:t.visible},on:{"update:visible":function(e){t.visible=e},close:function(e){return t.$emit("update:show",!1)}}},[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"100px"}},[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{model:{value:t.groupName,callback:function(e){t.groupName=e},expression:"groupName"}})],1),a("el-form-item",{attrs:{label:"地址"}},[a("el-input",{model:{value:t.groupName,callback:function(e){t.groupName=e},expression:"groupName"}})],1),a("el-form-item",{attrs:{label:"电话"}},[a("el-input",{model:{value:t.groupName,callback:function(e){t.groupName=e},expression:"groupName"}})],1),a("el-form-item",{attrs:{label:"所属机构"}},[a("el-input",{model:{value:t.groupName,callback:function(e){t.groupName=e},expression:"groupName"}})],1)],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.visible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.comfirm()}}},[t._v("确 定")])],1)],1)],1)},V=[],E={name:"tip-menber-detail-dialog",data:function(){return{visible:this.show,dialogTitle:"",form:{name:"",date:"",address:""},groupName:""}},props:{show:{type:Boolean,default:!1},EDIT:{type:String},datas:{type:Object},title:{type:String,default:""}},watch:{show:function(){console.log(this.datas),this.form=this.datas,this.dialogTitle=this.title,this.visible=this.show}},created:function(){},methods:{comfirm:function(){this.visible=!1}}},N=E,O=Object(d["a"])(N,T,V,!1,null,null,null),$=O.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{attrs:{title:"添加用户",visible:t.visible,width:"70%"},on:{"update:visible":function(e){t.visible=e},close:function(e){return t.$emit("update:show",!1)}}},[a("div",{staticClass:"table"},[a("div",{staticClass:"container-tab"},[a("el-row",{staticClass:"handle-box",attrs:{gutter:10}},[a("el-col",{attrs:{md:24}},[a("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"",placeholder:"搜索或选择机构"},model:{value:t.orgValue,callback:function(e){t.orgValue=e},expression:"orgValue"}},t._l(t.orgOptions,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1)],1),a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:t.tableData,height:"220px",align:"center"},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),a("el-table-column",{attrs:{prop:"id",label:"ID",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"IMEI",label:"IMEI",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"username",label:"用户名",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"address",label:"家庭地址",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"phone",label:"联系电话",align:"center","show-overflow-tooltip":""}})],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper",total:30},on:{"current-change":t.handleCurrentChange}})],1)],1)]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.visible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.comfirm()}}},[t._v("确 定")])],1)])],1)},j=[],I={name:"device-add-dialog",data:function(){return{visible:this.show,tableData:[],url:"./mock-data/device-list-dialog.json",cur_page:1,orgValue:"",orgOptions:[]}},props:{show:{type:Boolean,default:!1},EDIT:{type:String},datas:{type:Object}},watch:{show:function(){console.log(this.datas),this.form=this.datas,this.visible=this.show}},created:function(){this.getData(),this.getOrgOptionsData()},methods:{comfirm:function(){this.visible=!1},handleSelectionChange:function(t){this.multipleSelection=t},handleCurrentChange:function(t){this.cur_page=t,this.getData()},getData:function(){var t=this;this.$axios.get(this.url,{page:this.cur_page}).then(function(e){console.log(),t.tableData=e.data.list})},getOrgOptionsData:function(){var t=this;this.$axios.get("./mock-options/org-options.json").then(function(e){t.orgOptions=e.data.list})}}},M=I,A=(a("fd11"),Object(d["a"])(M,S,j,!1,null,"351a382e",null)),L=A.exports,H={name:"tips-manager",components:{tipsAddDialog:C,tipMenberDetailDialog:$,accountListDialog:L},data:function(){return{url:"./tips-manager.json",tipsData:[],tipDetailData:[],cur_page:1,multipleSelection:[],select_cate:"",select_word:"",is_search:!1,idx:-1,tipsAddTitle:"",tipsAddDialogVisible:!1,tipMenberDetailTitle:"",tipMenberDetailDialogVisible:!1,accountListDialogVisible:!1}},created:function(){this.getData(),this.getTipDetailData()},computed:{data:function(){return this.tipsData},tableHeight:function(){return window.innerHeight-224+"px"},rightTableHeight:function(){return window.innerHeight-297+"px"}},methods:{handleCurrentChange:function(t){this.cur_page=t,this.getData()},getData:function(){var t=this;this.$axios.get(this.url,{page:this.cur_page}).then(function(e){console.log(),t.tipsData=e.data.list})},getTipDetailData:function(){var t=this;this.$axios.get("./tip-detail.json",{page:this.cur_page}).then(function(e){console.log(),t.tipDetailData=e.data.list})},search:function(){this.is_search=!0},handleEdit:function(t,e){this.idx=t},handleDeleteTip:function(t,e){var a=this;this.$confirm("此操作将永久删除该标签, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.$message({type:"success",message:"删除成功!"})}).catch(function(){})},handleSelectionChange:function(t){this.multipleSelection=t},addTips:function(){this.tipsAddTitle="添加标签",this.tipsAddDialogVisible=!0},handleTipEdit:function(t,e){this.idx=t,this.tipsAddTitle="编辑标签",this.tipsAddDialogVisible=!0},handleMenberDetail:function(t,e){this.idx=t,this.tipMenberDetailTitle="用户信息",this.tipMenberDetailDialogVisible=!0},addTipMenber:function(){this.accountListDialogVisible=!0}}},B=H,R=(a("63f7"),Object(d["a"])(B,v,w,!1,null,"51d8bf54",null)),J=R.exports,z={name:"tabs",data:function(){return{activeName:"user"}},components:{userManager:g,tipsManager:J},methods:{},computed:{}},q=z,F=Object(d["a"])(q,i,l,!1,null,null,null);e["default"]=F.exports},"872c":function(t,e,a){},a716:function(t,e,a){"use strict";var i=a("24a5"),l=a.n(i);l.a},c19b:function(t,e,a){},fd11:function(t,e,a){"use strict";var i=a("c19b"),l=a.n(i);l.a}}]);