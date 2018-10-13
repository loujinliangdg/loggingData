<template>
    <div class="page">
        <div class="weui_cell">
            <div class="weui_cell_hd"><label class="weui_label">姓名</label></div>
            <div class="weui_cell_bd weui_cell_primary">
                <input class="weui_input" type="text" v-model="userForm.userName" placeholder="请输入姓名" @input="checkForm('userName',userForm.userName)">
            </div>
        </div>
        <div class="weui_cells weui_cells_radio">
            <p class="select-gender-title">选择性别：</p>
            <label class="weui_cell weui_check_label" for="x11" @click="genderChange(true)">
                <div class="weui_cell_bd weui_cell_primary">
                    <p>男</p>
                </div>
                <div class="weui_cell_ft">
                    <input type="radio" class="weui_check" name="radio1" id="x11" :checked="userForm.gender">
                    <span class="weui_icon_checked"></span>
                </div>
            </label>
            <label class="weui_cell weui_check_label" for="x12" @click="genderChange(false)">
                <div class="weui_cell_bd weui_cell_primary">
                    <p>女</p>
                </div>
                <div class="weui_cell_ft">
                    <input type="radio" name="radio1" class="weui_check" id="x12" :checked="!userForm.gender">
                    <span class="weui_icon_checked"></span>
                </div>
            </label>
        </div>
        <div class="weui_cell">
            <div class="weui_cell_hd"><label class="weui_label">身高(cm)</label></div>
            <div class="weui_cell_bd weui_cell_primary">
                <input class="weui_input" type="tel" v-model="userForm.height"  placeholder="请输入身高" @input="checkForm('height',userForm.height)">
            </div>
        </div>
        <div class="weui_cell">
            <div class="weui_cell_hd"><label class="weui_label">年龄</label></div>
            <div class="weui_cell_bd weui_cell_primary">
                <input class="weui_input" type="tel" v-model="userForm.age"  placeholder="请输入年龄" @input="checkForm('age',userForm.age)">
            </div>
        </div>


        <!-- <von-input
            type="text" 
            v-model="userForm.userName" 
            placeholder="请输入姓名" 
            label="姓名" @input="checkForm('userName',userForm.userName)">
        </von-input>
        <von-radio :options="genderOptions" v-model="userForm.gender"></von-radio>
        <von-input
            type="tel" 
            v-model="userForm.height" 
            placeholder="请输入身高" 
            label="身高(cm)" @input="checkForm('height',userForm.height)">
        </von-input>
        <von-input
            type="tel"
            v-model="userForm.age" 
            placeholder="请输入年龄" 
            label="年龄" @input="checkForm('age',userForm.age)">
        </von-input> -->

        <div class="footer">
            <a href="javascript:;" class="weui_btn weui_btn_primary" @click="submit()">确定</a>
        </div>
        <div id="toast" v-show="toastShow">
            <div class="weui_mask_transparent"></div>
            <div class="weui_toast a">
                <p class="weui_toast_content">{{alertMsg}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import req from '../../assets/js/req'

    export default {
        name:'adduser',
        data(){
            return {
                alertMsg:'',
                toastShow:false,
                userForm:{
                    userName:'',
                    gender:true,
                    height:'',
                    age:'',
                },
                genderOptions: ["男", "女"],
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
            genderChange(gender){
                this.userForm.gender = gender;
            },
            checkForm(key,value){
                setTimeout(() =>{
                    switch (key) {
                        case 'userName':
                            this.userForm[key] = value.slice(0,value.length > 5 ? 5 : value.length)
                            break;
                        case 'height':
                            this.userForm[key] = value.replace(/^(0|\D)*/,'').replace(/\D/g,'');
                            if(value > 300){
                                this.userForm[key] = 300
                            }
                            break;
                        case 'age':
                            this.userForm[key] = value.replace(/^(0|\D)*/,'').replace(/\D/g,'');
                            if(value > 150){
                                this.userForm[key] = 150
                            }
                            break;
                        default:
                            break;
                    }
                },30)
            },
            submit(){
                let instanceName;
                if(this.$route.query.title == '编辑用户'){
                    // 编辑用户
                    instanceName = '编辑用户'
                }
                else{
                    // 新增用户
                    instanceName = '新增用户'
                }
                req.get(instanceName,Object.assign({},this.userForm,{gender:this.userForm.gender == true ? 'm' : 'f'}),(result)=> {
                    if(result.code == 401){
                        return this.$router.replace('/login');
                    }
                    if(result.code == 1){
                        this.$router.back('/');
                    }
                    else{
                        this.toast(result.alertMsg)
                    }
                },(error)=> {
                    this.toast(error.toString())
                })
            }
        },
        created(){
            let query = Object.assign({},this.$route.query);
            let title = query.title;
            delete query.title;
            if(title == '编辑用户'){
                this.userForm = Object.assign({},query,{gender:query.gender == 'm' ? true : false})
            }
        }
    }
</script>

<style scoped>
    .footer{
        position: absolute;
        width: 100%;
        left:0;
        bottom:0;
    }
    .footer .weui_btn{
        margin: 0;
        padding: 0;
        border-radius: 0;
        border:0;
        position: relative;
    }
    .select-gender-title{
        line-height: 1.75;
        padding-left: 15px;
        margin-top: 10px;
    }
    .weui_cells_radio .weui_cell_bd p{
        color: #b3b3b3;
        font-size: 14px;
    }
</style>