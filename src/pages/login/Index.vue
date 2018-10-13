<template>
    <div class="page">
        <form>
            <h3 style="text-align:center;margin-top:100px;">请登录</h3>
            <div class="weui_cell">
                <div class="weui_cell_hd"><label class="weui_label">用户名</label></div>
                <div class="weui_cell_bd weui_cell_primary">
                    <input class="weui_input" type="text" v-model="username"  placeholder="用户名">
                </div>
            </div>
            <div class="weui_cell">
                <div class="weui_cell_hd"><label class="weui_label">密码</label></div>
                <div class="weui_cell_bd weui_cell_primary">
                    <input class="weui_input" type="password" v-model="password"  placeholder="密码">
                </div>
            </div>
            <a href="javascript:;" class="weui_btn weui_btn_primary login" @click="login">登陆</a>
            <!-- <von-input 
                type="text" 
                v-model="username" 
                placeholder="用户名" 
                label="用户名">
            </von-input>
            <von-input 
                type="password" 
                v-model="password" 
                placeholder="密码" 
                label="密码">
            </von-input>
            <div class="md-button button button-positive button-block login" @click="login">
                登录
            </div> -->
        </form>
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
        data(){
            return {
                alertMsg:'',
                toastShow:false,
                username:'',
                password:'',
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
            login(){
                req.get('登录',{username:this.username,password:this.password},(result) =>{
                    if(result.code == 1){
                        this.$router.replace('/');
                    }
                    else{
                        this.toast(result.alertMsg);
                    }
                },(error) =>{
                    this.toast(error.toString());
                })
            }
        }
    }
</script>

<style scoped>
    .login{
        width: 94%;
        margin: 20px auto 0;
    }
    .page{
        position: relative;
        width: 100%;
    }
    h3{
        margin-bottom: 20px;
    }
</style>