<template>
    <div class="page">
        <div class="list-ios">
            <div class="weui_cells weui_cells_access" v-for="(item,index) in dataList" :key="index" @click="itemWasClick($event,item,index)">
                <a class="weui_cell" href="javascript:;">
                    <a href="javascript:;" class="weui_btn weui_btn_mini weui_btn_warn delete" v-show="isEditing">删除</a>
                    <div class="weui_cell_bd weui_cell_primary">
                        <table>
                            <tr>
                                <td width="33.3%">{{item.userName}}</td>
                                <td width="33.3%">{{item.gender == 'm' ? '男' : '女'}}</td>
                                <td width="33.3%">{{item.age}}岁</td>
                            </tr>
                        </table>
                    </div>
                    <div class="weui_cell_ft">
                    </div>
                </a>
            </div>
        </div>
        <!-- <list class="list-ios">
            <item v-for="(item,index) in dataList" :key="index">
                <div @click="itemWasClick($event,item,index)">
                    <span class="icon ion-ios-arrow-right" style="float:right;"></span>
                    <md-button class="button button-assertive delete" v-show="isEditing">
                        删除
                    </md-button>
                    <table>
                        <tr>
                            <td width="33.3%">{{item.userName}}</td>
                            <td width="33.3%">{{item.gender == 'm' ? '男' : '女'}}</td>
                            <td width="33.3%">{{item.age}}岁</td>
                        </tr>
                    </table>
                </div>
            </item>
        </list> -->
        <div class="footer">
            <div class="flex">
                <div class="flex1 edit" @click="intoEditing()" :class="isEditing?'add':''">编辑</div>
                <div class="flex1 add" @click="addWasClick()">添加</div>
            </div>
        </div>
        <div id="toast" v-show="toastShow">
            <div class="weui_mask_transparent"></div>
            <div class="weui_toast a">
                <p class="weui_toast_content">{{alertMsg}}</p>
            </div>
        </div>
        <div class="weui_dialog_confirm delete_confirm" id="dialog1" v-show="delete_confirm_show">
            <div class="weui_mask"></div>
            <div class="weui_dialog">
                <div class="weui_dialog_bd">确认删除该用户吗？</div>
                <div class="weui_dialog_ft">
                    <a href="javascript:;" class="weui_btn_dialog default" @click="delete_confirm_show=false">取消</a>
                    <a href="javascript:;" class="weui_btn_dialog primary" @click="beSureDelete()">确定</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import req from '../../assets/js/req'
    var qs = require('qs');
    export default {
        data(){
            return {
                delete_confirm_show:false,
                alertMsg:'',
                toastShow:false,
                isEditing:false, //是否处于编辑状态
                dataList:[],
                willDeleteItem:null,
                willDeleteIndex:'',
            }
        },
        methods:{
            toast(alertMsg){
                this.alertMsg = alertMsg;
                this.toastShow = true;
                setTimeout(() =>{
                    this.toastShow = false;
                },750)
            },
            beSureDelete(){
                if(!this.willDeleteItem){
                    return this.toast('点击过快');
                }
                var item = this.willDeleteItem;
                var index = this.willDeleteIndex;
                this.willDeleteItem = null;
                this.willDeleteIndex = '';
                // 确认删除
                req.get('删除用户',{id:item.id},(result) =>{
                    if(result.code == 401){
                        return this.$router.replace('/login');
                    }
                    if(result.code == 1){
                        this.isEditing = false;
                        this.dataList.splice(index,1);
                    }
                    this.delete_confirm_show = false;
                    this.toast(result.alertMsg)
                },(error) =>{
                    this.toast(error.toString())
                })
            },
            showPopup(item,index) {
                this.delete_confirm_show = true;
                this.willDeleteItem = item;
                this.willDeleteIndex = index;
            },
            deleteItem(item,index){
                this.delete_confirm_show = true;
                this.willDeleteItem = item;
                this.willDeleteIndex = index;
            },
            // 去编辑
            itemWasClick(event,item,index){
                var target = event.target;
                if(/\bdelete/.test(target.className)){
                    this.deleteItem(item,index);
                    return;
                }
                // 编辑用户
                if(this.isEditing){
                    this.$router.push({path:`/adduser?${qs.stringify(item)}&title=编辑用户`})
                }
                // 详情
                else{
                    this.$router.push({path:`/userdetail?id=${item.id}`})
                }
            },
            // 添加
            addWasClick(){
                this.$router.push({path:`/adduser?title=新增用户`})
            },
            // 切换编辑状态
            intoEditing(){
                this.isEditing = !this.isEditing;
            }
        },
        created(){
            req.post('用户列表','',(result)=> {
                if(result.code == 401){
                    return this.$router.replace('/login');
                }
                if(result.code == 1){
                    this.dataList = result.data.heavyWeightUsersList || [];
                }
                else{
                    this.toast(result.alertMsg)
                }
            },(error)=> {
                this.toast(error.toString())
            })
        }
    }
</script>

<style scoped>
    .page{
        height: 100%;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
    }
    table{
        width: 80%;
    }
    .delete{
        position: absolute;
        width: 60px;
        height: calc(100% - 2px);
        min-height: 90%;
        right:0;
        top:1px;
        bottom:1px;
        padding: 0;
        border-radius: 0;
        border:0;
        font-size: 13px;
        line-height: 3.25;
        z-index: 2;
    }
    .delete:after{
        border:0;
    }
    .list-ios{
        margin-bottom: 45px;
    }
    .footer{
        position: fixed;
        width: 100%;
        bottom:0;
        left:0;
        z-index: 2;
    }
    .flex{
        display: flex;
    }
    .flex > .flex1{
        flex:1;
        text-align: center;
        border-top:1px solid #43D24C;
        height: 45px;
        line-height: 45px;
        font-size: 13px;
    }
    .edit{
        background: #fff;
        color: #43D24C;
    }
    .add{
        background: #43D24C;
        color: #fff;
    }
    td{
        font-size: 14px;
    }
    .delete_confirm .weui_dialog_bd{
        margin-top: 25px;
        text-align: center;
    }
    .weui_mask, .weui_mask_transition, .weui_mask_transparent{z-index: 3;}
</style>