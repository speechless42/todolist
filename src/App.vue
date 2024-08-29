<template>
  <div class="main">
    <div class="backgroundImage">
    <h2 class="items" style="font-family:fantasy;">代辦清單</h2>
    
    <div class="items">
      <div class="">
      <el-input clearable type="text" placeholder="輸入代辦事項" v-model="WillDo">
        <template #prepend>代辦事項</template>
      </el-input>
      </div>
    </div>
    <div class="items">
      <el-switch v-model="important" active-text="重要" inactive-text="不重要" inline-prompt >
        <template #active-action>
          <el-icon><WarningFilled /></el-icon>
        </template>
        <template #inactive-action>
          <el-icon><SuccessFilled /></el-icon>
        </template>
      </el-switch>
      <el-switch v-model="urgent" active-text="緊急" inactive-text="不緊急" inline-prompt >
        <template #active-action>
          <el-icon><WarningFilled /></el-icon>
        </template>
        <template #inactive-action>
          <el-icon><SuccessFilled /></el-icon>
        </template>
      </el-switch>
    
      <el-button type="primary" @click="submitTodo()" >提交</el-button>
    </div>
    <el-tabs v-model="activeName" class="demo-tabs">
    <el-tab-pane label="全部" name="All" >
    <div class="items-2">
      <ShowThings/>
    </div>
    </el-tab-pane>
    <el-tab-pane label="已完成" name="Already">
      <div class="items-2">
      <ShowAlreadyThings/>
      </div>
    </el-tab-pane>
    <el-tab-pane label="未完成" name="Notyet">
      <div class="items-2">
      <ShowNotyetThinga/>
      </div>
    </el-tab-pane>
    </el-tabs>
    
    </div>
  </div>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <!-- <router-view/> -->
</template>
<script setup>
  import { ref } from 'vue'
  import ShowThings from './components/ShowThings.vue';
  import ShowAlreadyThings from './components/ShowAlreadyThings.vue';
  import ShowNotyetThinga from './components/ShowNotyetThinga.vue';
  import { useStore } from 'vuex'
  // import  { TabsPaneContext } from 'element-plus';
  const activeName = ref('All')
  const WillDo = ref("")
  const urgent = ref(false)
  const important = ref(false)
  const store = useStore()
  function submitTodo(){
    store.commit('sendTodo',{ detail:WillDo.value,isdoing:false,isurgent:urgent.value,isimportant:important.value})
    WillDo.value = '';
  }

  
</script>
<style>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #C1E1DE;
}
/* .backgroundImage{
  background-image: url("../public/Blue.jpg");
  background-size:90%;
  background-position:center center;
  background-repeat:no-repeat;
  width:650px;
  height: 864px;
  border-style: solid;
  border-color: black;
} */
/* .theme-items{
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;top:50px;right: 180px;
} */
*{
  margin: 0;
  padding: 0;
}
.items{
  display: flex;
  justify-content: center;
  align-items: center;
}
.items-2{
  display: flex;
  flex:0 0 450px 450px;
  justify-content: center;
  align-items: center;
}
/* div{
  border-style: solid;
  border-color: black;
} */
</style>
