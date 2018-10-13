<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<style>
html{
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
body{
  margin: 0;
  width: 100%;
  height: 100%;
  font-size:14px;
}
#app{
  height: 100%;
  position: relative;
}
.page{
  position: relative;
  min-height: 100%;
}
.weui_toast.a{
    min-width: 7.6em;
    max-width: 12em;
    width: auto;
    height: auto;
    padding: 6px 10px;
    min-height: 24px !important;
    top:300px;
    left:50%;
    margin-left:0;
    transform: translate(-50%,0);
}
.weui_toast.a .weui_toast_content{
    margin-bottom: 0;
}
.weui_label{
  width: 80px;
  border-right:1px solid #ececec;
}
.weui_input{
  padding-left: 10px;
}
.weui_cells{
    margin-top: 0;
    margin-bottom: -1px;
}
</style>