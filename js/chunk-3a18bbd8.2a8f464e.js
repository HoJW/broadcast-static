(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a18bbd8"],{"38d9":function(e,t,a){"use strict";var l=a("96bb"),i=a.n(l);i.a},"454f":function(e,t,a){a("46a7");var l=a("584a").Object;e.exports=function(e,t,a){return l.defineProperty(e,t,a)}},"46a7":function(e,t,a){var l=a("63b6");l(l.S+l.F*!a("8e60"),"Object",{defineProperty:a("d9f6").f})},7159:function(e,t,a){e.exports=a.p+"img/img.146655c9.jpg"},"7bde":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table"},[a("div",{staticClass:"container"},[a("el-row",{staticClass:"handle-box",attrs:{gutter:10}},[a("el-col",{attrs:{md:4}},[a("el-select",{attrs:{filterable:"",placeholder:"维修人员"},model:{value:e.repairMenberValue,callback:function(t){e.repairMenberValue=t},expression:"repairMenberValue"}},e._l(e.repairMenberOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),a("el-col",{attrs:{md:4}},[a("el-select",{attrs:{filterable:"",placeholder:"报修类型"},model:{value:e.repairTypeValue,callback:function(t){e.repairTypeValue=t},expression:"repairTypeValue"}},e._l(e.repairTypeOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),a("el-col",{attrs:{md:4}},[a("el-select",{attrs:{filterable:"",placeholder:"故障类型"},model:{value:e.bugTypeValue,callback:function(t){e.bugTypeValue=t},expression:"bugTypeValue"}},e._l(e.bugTypeOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),a("el-col",{attrs:{md:4}},[a("el-select",{attrs:{filterable:"",placeholder:"工单状态"},model:{value:e.orderTypeValue,callback:function(t){e.orderTypeValue=t},expression:"orderTypeValue"}},e._l(e.orderTypeOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),a("el-col",{attrs:{md:6}},[a("el-input",{staticClass:" mr10",attrs:{placeholder:"IMEI"},model:{value:e.select_word,callback:function(t){e.select_word=t},expression:"select_word"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.search},slot:"append"})],1)],1),a("el-col",{attrs:{md:2}},[a("el-button",{staticClass:"r",staticStyle:{"margin-left":"10px"},attrs:{type:"danger"}},[a("i",{staticClass:"el-icon-delete el-icon--left"}),e._v("删除")])],1)],1),a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.data,height:e.tableHeight,align:"center"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"orderId",label:"ID",width:"100",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"time",label:"报修时间",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"menber",label:"维修人员",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"imei",label:"IMEI",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"orderType",label:"报修类型",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"mistakeType",label:"故障类型",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"username",label:"用户名",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"status",label:"状态",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"操作",width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",icon:"el-icon-view"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("详情")])]}}])})],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper",total:30},on:{"current-change":e.handleCurrentChange}})],1)],1),a("order-detail-dialog",{attrs:{show:e.orderDetailDialogVisible},on:{"update:show":function(t){e.orderDetailDialogVisible=t}}})],1)},i=[],o=a("85f2"),r=a.n(o);function n(e,t,a){return t in e?r()(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var s=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("el-dialog",{attrs:{title:"报修详情",visible:e.visible,width:"60%"},on:{"update:visible":function(t){e.visible=t},close:function(t){return e.closeDialog()}}},[l("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[l("el-tab-pane",{attrs:{label:"设备信息",name:"device"}},[l("el-form",{ref:"form",staticClass:"form",attrs:{model:e.form,"label-width":"100px"}},[l("el-form-item",{attrs:{label:"IMEI"}},[l("el-input",{model:{value:e.imei,callback:function(t){e.imei=t},expression:"imei"}})],1),l("el-form-item",{attrs:{label:"设备类型"}},[l("el-input",{model:{value:e.devieceType,callback:function(t){e.devieceType=t},expression:"devieceType"}})],1),l("el-form-item",{attrs:{label:"安装时间"}},[l("el-input",{model:{value:e.setupTime,callback:function(t){e.setupTime=t},expression:"setupTime"}})],1)],1)],1),l("el-tab-pane",{attrs:{label:"工单信息",name:"user"}},[l("el-form",{ref:"form",staticClass:"form",attrs:{model:e.form,"label-width":"100px"}},[l("el-form-item",{attrs:{label:"报修类型"}},[l("el-input",{model:{value:e.repairType,callback:function(t){e.repairType=t},expression:"repairType"}})],1),l("el-form-item",{attrs:{label:"故障类型"}},[l("el-input",{model:{value:e.bugType,callback:function(t){e.bugType=t},expression:"bugType"}})],1),l("el-form-item",{attrs:{label:"下单时间"}},[l("el-input",{model:{value:e.orderTime,callback:function(t){e.orderTime=t},expression:"orderTime"}})],1),l("el-form-item",{attrs:{label:"上门时间"}},[l("el-input",{model:{value:e.callTime,callback:function(t){e.callTime=t},expression:"callTime"}})],1),l("el-form-item",{attrs:{label:"人员安排"}},[l("el-input",{model:{value:e.menber,callback:function(t){e.menber=t},expression:"menber"}})],1),l("el-form-item",{attrs:{label:"故障描述"}},[l("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"请输入内容"},model:{value:e.textarea,callback:function(t){e.textarea=t},expression:"textarea"}})],1),l("el-form-item",{attrs:{label:"图片说明"}},[l("img",{attrs:{src:a("7159"),alt:""}})])],1)],1),l("el-tab-pane",{attrs:{label:"用户信息",name:"unusual"}},[l("el-form",{ref:"form",staticClass:"form",attrs:{model:e.form,"label-width":"100px"}},[l("el-form-item",{attrs:{label:"用户姓名"}},[l("el-input",{model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}})],1),l("el-form-item",{attrs:{label:"联系电话"}},[l("el-input",{model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),l("el-form-item",{attrs:{label:"地址"}},[l("el-input",{model:{value:e.address,callback:function(t){e.address=t},expression:"address"}})],1)],1)],1)],1),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取 消")]),l("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.comfirm()}}},[e._v("确 定")])],1)],1)],1)},c=[],u={name:"order-detail-dialog",data:function(){return{visible:this.show,activeName:"device",form:{name:"",date:"",address:""},imei:"",devieceType:"",setupTime:"",repairType:"",bugType:"",orderTime:"",callTime:"",menber:"",textarea:"",userName:"",phone:"",address:""}},props:{show:{type:Boolean,default:!1},EDIT:{type:String},datas:{type:Object}},watch:{show:function(){console.log(this.datas),this.form=this.datas,this.visible=this.show}},created:function(){},methods:{comfirm:function(){this.visible=!1},closeDialog:function(){this.imei="",this.devieceType="",this.setupTime="",this.repairType="",this.bugType="",this.orderTime="",this.callTime="",this.menber="",this.textarea="",this.userName="",this.phone="",this.address="",this.activeName="device",this.$emit("update:show",!1)}}},p=u,d=a("2877"),m=Object(d["a"])(p,s,c,!1,null,"6e5320ea",null),b=m.exports,f={name:"repair-order",components:{orderDetailDialog:b},data:function(){var e;return e={url:"./repair-order.json",tableData:[],cur_page:1,multipleSelection:[],select_cate:"",select_word:"",is_search:!1,editVisible:!1,idx:-1,repairMenberValue:"",repairMenberOptions:[],repairTypeValue:"",repairTypeOptions:[],bugTypeOptions:[],bugTypeValue:"",orderTypeOptions:[],orderTypeValue:""},n(e,"repairMenberOptions",[{value:"选项1",label:"张三"},{value:"选项2",label:"李四"}]),n(e,"repairMenberValue",""),n(e,"orderDetailDialogVisible",!1),e},created:function(){this.getData(),this.getRepairOptionsData(),this.getOrderTypeOptionsData(),this.getBugTypeOptionsData()},computed:{data:function(){return this.tableData},tableHeight:function(){return window.innerHeight-218+"px"}},methods:{handleCurrentChange:function(e){this.cur_page=e,this.getData()},getData:function(){var e=this;this.$axios.get(this.url,{page:this.cur_page}).then(function(t){console.log(),e.tableData=t.data.list})},getRepairOptionsData:function(){var e=this;this.$axios.get("./options-data/repair-options.json").then(function(t){e.repairTypeOptions=t.data.list})},getOrderTypeOptionsData:function(){var e=this;this.$axios.get("./options-data/order-status-options.json").then(function(t){e.orderTypeOptions=t.data.list})},getBugTypeOptionsData:function(){var e=this;this.$axios.get("./options-data/bug-type-options.json").then(function(t){e.bugTypeOptions=t.data.list})},search:function(){this.is_search=!0},handleEdit:function(e,t){this.orderDetailDialogVisible=!0},handleDelete:function(e,t){var a=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.$message({type:"success",message:"删除成功!"})}).catch(function(){})},handleSelectionChange:function(e){this.multipleSelection=e}}},h=f,v=(a("38d9"),Object(d["a"])(h,l,i,!1,null,"0f6f1254",null));t["default"]=v.exports},"85f2":function(e,t,a){e.exports=a("454f")},"96bb":function(e,t,a){}}]);