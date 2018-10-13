<template>
    <div class="page">
        <div class="date-title"><span>本周</span></div>
        <div class="weui_cell">
            <div class="weui_cell_hd"><label class="weui_label">体重(kg)：</label></div>
            <div class="weui_cell_bd weui_cell_primary">
                <input class="weui_input" type="text" placeholder="请输入" v-model="forms.thisWeek.weight" @input="input('thisWeek','weight')">
            </div>
        </div>
        <div class="weui_cell">
            <div class="weui_cell_hd"><label class="weui_label">体脂率(%)：</label></div>
            <div class="weui_cell_bd weui_cell_primary">
                <input class="weui_input" type="text" placeholder="请输入" v-model="forms.thisWeek.fatPercentage" @input="input('thisWeek','fatPercentage')">
            </div>
        </div>
        <div class="weui_cell">
            <div class="weui_cell_hd"><label class="weui_label">BMI：</label></div>
            <div class="weui_cell_bd weui_cell_primary">
                <input class="weui_input" type="text" placeholder="请输入" v-model="forms.thisWeek.bmi" @input="input('thisWeek','bmi')">
            </div>
        </div>
        <div class="weui_cell">
            <div class="weui_cell_hd"><label class="weui_label">肥胖等级：</label></div>
            <div class="weui_cell_bd weui_cell_primary">
                <input class="weui_input" type="text" placeholder="请输入" v-model="forms.thisWeek.fatWeightStatusText" @input="input('thisWeek','fatWeightStatusText')">
            </div>
        </div>
        <div class="weui_cell">
            <div class="weui_cell_hd"><label class="weui_label">最佳体重(kg)：</label></div>
            <div class="weui_cell_bd weui_cell_primary">
                <input class="weui_input" type="text" placeholder="请输入" v-model="forms.thisWeek.bestWeight" @input="input('thisWeek','bestWeight')">
            </div>
        </div>
        <div class="weui_cell">
            <div class="weui_cell_hd"><label class="weui_label">体重等级：</label></div>
            <div class="weui_cell_bd weui_cell_primary">
                <input class="weui_input" type="text" placeholder="请输入" v-model="forms.thisWeek.weightStatusText" @input="input('thisWeek','weightStatusText')">
            </div>
        </div>
        <div class="weui_cell last-weui-cell">
            <div class="weui_cell_hd"><label class="weui_label">体脂率等级：</label></div>
            <div class="weui_cell_bd weui_cell_primary">
                <input class="weui_input" type="text" placeholder="请输入" v-model="forms.thisWeek.fatPercentageStatusText" @input="input('thisWeek','fatPercfatPercentageStatusTextentage')">
            </div>
        </div>

        <div class="date-title"><span>上周</span></div>
        <div class="weui_cell">
            <div class="weui_cell_hd"><label class="weui_label">体重(kg)：</label></div>
            <div class="weui_cell_bd weui_cell_primary">
                <input class="weui_input" type="text" placeholder="请输入" v-model="forms.lastWeek.weight" @input="input('lastWeek','weight')">
            </div>
        </div>
        <div class="weui_cell">
            <div class="weui_cell_hd"><label class="weui_label">体脂率(%)：</label></div>
            <div class="weui_cell_bd weui_cell_primary">
                <input class="weui_input" type="text" placeholder="请输入" v-model="forms.lastWeek.fatPercentage" @input="input('lastWeek','fatPercentage')">
            </div>
        </div>
        <div class="weui_cell last-weui-cell">
            <div class="weui_cell_hd"><label class="weui_label">BMI：</label></div>
            <div class="weui_cell_bd weui_cell_primary">
                <input class="weui_input" type="text" placeholder="请输入" v-model="forms.lastWeek.bmi" @input="input('lastWeek','bmi')">
            </div>
        </div>

        <div class="date-title"><span>昨天</span></div>
        <div class="weui_cell">
            <div class="weui_cell_hd"><label class="weui_label">体重(kg)：</label></div>
            <div class="weui_cell_bd weui_cell_primary">
                <input class="weui_input" type="text" placeholder="请输入" v-model="forms.yesterday.weight" @input="input('yesterday','weight')">
            </div>
        </div>
        <div class="weui_cell">
            <div class="weui_cell_hd"><label class="weui_label">体脂率(%)：</label></div>
            <div class="weui_cell_bd weui_cell_primary">
                <input class="weui_input" type="text" placeholder="请输入" v-model="forms.yesterday.fatPercentage" @input="input('yesterday','fatPercentage')">
            </div>
        </div>
        <div class="weui_cell last-weui-cell">
            <div class="weui_cell_hd"><label class="weui_label">BMI：</label></div>
            <div class="weui_cell_bd weui_cell_primary">
                <input class="weui_input" type="text" placeholder="请输入" v-model="forms.yesterday.bmi" @input="input('yesterday','bmi')">
            </div>
        </div>

        <div class="date-title"><span>历史</span></div>
        <div class="weui_cell">
            <div class="weui_cell_hd"><label class="weui_label">体重(kg)：</label></div>
            <div class="weui_cell_bd weui_cell_primary">
                <input class="weui_input" type="text" placeholder="请输入" v-model="forms.origin.weight" @input="input('origin','weight')">
            </div>
        </div>
        <div class="weui_cell">
            <div class="weui_cell_hd"><label class="weui_label">体脂率(%)：</label></div>
            <div class="weui_cell_bd weui_cell_primary">
                <input class="weui_input" type="text" placeholder="请输入" v-model="forms.origin.fatPercentage" @input="input('origin','fatPercentage')">
            </div>
        </div>
        <div class="weui_cell last-weui-cell">
            <div class="weui_cell_hd"><label class="weui_label">BMI：</label></div>
            <div class="weui_cell_bd weui_cell_primary">
                <input class="weui_input" type="text" placeholder="请输入" v-model="forms.origin.bmi" @input="input('origin','bmi')">
            </div>
        </div>
        <!-- <von-input type="text" placeholder="请输入" v-model="forms.thisWeek.weight" label="体重(kg)：" @input="input('thisWeek','weight')"></von-input>
        <von-input type="text" placeholder="请输入" v-model="forms.thisWeek.fatPercentage" label="体脂率(%)：" @input="input('thisWeek','fatPercentage')"></von-input>
        <von-input type="text" placeholder="请输入" v-model="forms.thisWeek.bmi" label="BMI：" @input="input('thisWeek','bmi')" @blur="bmiBlur('thisWeek','bmi')"></von-input>
        <von-input type="text" placeholder="请输入" v-model="forms.thisWeek.fatWeightStatusText" label="肥胖等级：" @input="input('thisWeek','fatWeightStatusText')"></von-input>
        <von-input type="text" placeholder="请输入" v-model="forms.thisWeek.bestWeight" label="最佳体重(kg)：" @input="input('thisWeek','bestWeight')"></von-input>
        <von-input type="text" placeholder="请输入" v-model="forms.thisWeek.weightStatusText" label="体重等级：" @input="input('thisWeek','weightStatusText')"></von-input>
        <von-input type="text" placeholder="请输入" v-model="forms.thisWeek.fatPercentageStatusText" label="体脂率等级：" @input="input('thisWeek','fatPercfatPercentageStatusTextentage')"></von-input>

        <div class="date-title"><span>上周</span></div>
        <von-input type="text" placeholder="请输入" v-model="forms.lastWeek.weight" label="体重(kg)：" @input="input('lastWeek','weight')"></von-input>
        <von-input type="text" placeholder="请输入" v-model="forms.lastWeek.fatPercentage" label="体脂率(%)：" @input="input('lastWeek','fatPercentage')"></von-input>
        <von-input type="text" placeholder="请输入" v-model="forms.lastWeek.bmi" label="BMI：" @input="input('lastWeek','bmi')"></von-input>

        <div class="date-title"><span>昨天</span></div>
        <von-input type="text" placeholder="请输入" v-model="forms.yesterday.weight" label="体重(kg)：" @input="input('yesterday','weight')"></von-input>
        <von-input type="text" placeholder="请输入" v-model="forms.yesterday.fatPercentage" label="体脂率(%)：" @input="input('yesterday','fatPercentage')"></von-input>
        <von-input type="text" placeholder="请输入" v-model="forms.yesterday.bmi" label="BMI：" @input="input('yesterday','bmi')"></von-input>

        <div class="date-title"><span>历史</span></div>
        <von-input type="text" placeholder="请输入" v-model="forms.origin.weight" label="体重(kg)：" @input="input('origin','weight')"></von-input>
        <von-input type="text" placeholder="请输入" v-model="forms.origin.fatPercentage" label="体脂率(%)：" @input="input('origin','fatPercentage')"></von-input>
        <von-input type="text" placeholder="请输入" v-model="forms.origin.bmi" label="BMI：" @input="input('origin','bmi')"></von-input>
        <div class="md-button button button-balanced button-block" @click="submitData()">
            {{btnMessage}}
        </div> -->
        <a href="javascript:;" class="weui_btn weui_btn_primary" @click="submitData()">{{btnMessage}}</a>
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
                timer:null,
                alertMsg:'',
                toastShow:false,
                btnMessage:'提交',
                forms:{
                    userId:'',
                    thisWeek: {
                        weight: '',
                        fatPercentage: '',
                        bmi: '',
                        fatWeightStatusText: '',
                        bestWeight: '',
                        weightStatusText: '',
                        fatPercentageStatusText: ''
                    },
                    lastWeek: {
                        weight: '',
                        fatPercentage: '',
                        bmi: ''
                    },
                    yesterday: {
                        weight: '',
                        fatPercentage: '',
                        bmi: ''
                    },
                    origin: {
                        weight: '',
                        fatPercentage: '',
                        bmi: ''
                    }
                }
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
            // 体重验证证
            submitData(){
                for(let key in this.forms.thisWeek){
                    // 本周数据如果有没填的
                    if(!this.forms.thisWeek[key]){
                        this.toast('请填写完本周数据')
                        return;
                    }
                }
                if(this.btnMessage == '提交'){
                    req.post('新增修改数据',this.forms,(result) =>{
                        if(result.code == 401){
                            return this.$router.replace('/login');
                        }
                        if(result.code == 1){
                            this.toast('提交成功，再次点击按钮即可投屏哦')
                            this.btnMessage = '投屏';
                        }
                        else{
                            this.toast(result.alertMsg)
                        }
                    },(error) =>{
                        this.toast(error.toString())
                    })
                }
                else if(this.btnMessage == '投屏'){
                    // 请求投屏
                    // alert('投屏')
                    req.get('投屏',{userId:this.$route.query.id},(result)=>{
                        if(result.code == 401){
                            return this.$router.replace('/login');
                        }
                        if(result.code == 1){
                            setTimeout(() =>{
                                this.$router.back('/');
                            },750)
                        }
                        this.toast(result.alertMsg);
                    },(error) =>{
                        this.toast(error.toString())
                    })
                }
            },
            input(key1,key2){
                var oldValue = this.forms[key1][key2];
                clearTimeout(this.timer);
                this.timer = setTimeout(() =>{
                    switch (key2) {
                        case 'weight':
                            var a = oldValue.replace(/^[0|\D|\.]*/,'').replace(/[^\d\.]/g,'').replace(/\.{2,}/g,'.');
                            if(a){
                                var firstDot = a.indexOf('.');
                                if(firstDot != -1){
                                    if(firstDot + 2 >= firstDot){
                                        a = a.slice(0,firstDot+2)
                                    }
                                }
                            }
                            this.forms[key1][key2] = (a > 600 ? 600 : a).toString();
                            break;
                        case 'fatPercentage':
                            var a = oldValue.replace(/^[0|\D|\.]*/,'').replace(/[^\d\.]/g,'').replace(/\.{2,}/g,'.')
                            if(a){
                                var firstDot = a.indexOf('.');
                                if(firstDot != -1){
                                    if(firstDot + 2 >= firstDot){
                                        a = a.slice(0,firstDot+2)
                                    }
                                }
                            }
                            this.forms[key1][key2] = (a > 99.9 ? 99.9 : a).toString();
                            break;
                        case 'bmi':
                            var a = oldValue.replace(/^[0|\D|\.]*/,'').replace(/[^\d\.]/g,'').replace(/\.{2,}/g,'.')
                            if(a){
                                var firstDot = a.indexOf('.');
                                if(firstDot != -1){
                                    if(firstDot + 2 >= firstDot){
                                        a = a.slice(0,firstDot+2)
                                    }
                                }
                            }
                            this.forms[key1][key2] = (a > 999 ? 999 : a).toString();
                            break;
                        case 'bestWeight':
                            var a = oldValue.replace(/^[0|\D|\.]*/,'').replace(/[^\d\.]/g,'').replace(/\.{2,}/g,'.')
                            if(a){
                                var firstDot = a.indexOf('.');
                                if(firstDot != -1){
                                    if(firstDot + 2 >= firstDot){
                                        a = a.slice(0,firstDot+2)
                                    }
                                }
                            }
                            this.forms[key1][key2] = (a > 600 ? 600 : a).toString();
                            break;
                        default:
                            break;
                    }
                },30)
                
                if(this.btnMessage == '投屏'){
                    this.btnMessage = '提交';
                }
            }
        },
        created(){
            this.forms.userId = this.$route.query.id;
            req.get('获取用户最新数据',{userId:this.$route.query.id},(result) =>{
                if(result.code == 401){
                    return this.$router.replace('/login');
                }
                if(result.code == 1){
                    // 有默认数据
                    if(result.data.thisWeek){
                        let thisWeek = Object.assign({},result.data.thisWeek);
                        let lastWeek = Object.assign({},result.data.lastWeek);
                        let yesterday = Object.assign({},result.data.yesterday);
                        let origin = Object.assign({},result.data.origin);

                        Object.assign(this.forms.thisWeek,thisWeek)
                        Object.assign(this.forms.lastWeek,lastWeek)
                        Object.assign(this.forms.yesterday,yesterday)
                        Object.assign(this.forms.origin,origin)

                        this.btnMessage = '投屏';
                    }
                    // 无默认数据
                    else{
                        
                    }
                }
                else{
                    this.toast(result.alertMsg)
                }
            },(error) =>{
                this.toast(error.toString())
            })
        }
    }
</script>

<style scoped>
    .page{
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
    }
    .date-title{
        margin: 11px 0;
        padding-left: 22px;
    }
    .date-title span{
        color:#8F8F8F;
        position: relative;
        line-height: 1;
    }
    .date-title span::after{
        content: "";
        width: 2px;
        height: 100%;
        background: #43D24C;
        position: absolute;
        top:0;
        left:-8px;
        transform-origin: 0 50%;
        transform: scaleY(0.75);
    }
    .weui_btn{
        border-radius: 0;
        box-shadow: none;
        margin-top: 40px;
        margin-bottom: 0;
    }
    .weui_label{
        width: 100px;
    }
    .last-weui-cell::after{
        content: " ";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        border-top: 1px solid #d9d9d9;
        color: #d9d9d9;
        -webkit-transform-origin: 0 0;
        -ms-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleY(.5);
        -ms-transform: scaleY(.5);
        transform: scaleY(.5);
        left: 15px;
    }
</style>