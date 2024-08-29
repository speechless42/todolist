<template>
    <div>
            <el-table :data="store.state.todoThings" height="300" style="width: 300px;font-size: 15px;" :cell-style="cellstyle">
                <el-table-column type fixed prop="detail" label="代辦事件" width="120px"  />
                <el-table-column type prop="tags" fixed="right" label="標籤" width="55px">
                    <template #default="scope">
                        <el-tag v-if="scope.row.isurgent" type="danger" disable-transitions>緊急</el-tag>
                        <el-tag v-if="scope.row.isimportant" type="warning" disable-transitions>重要</el-tag>
                    </template>
                </el-table-column>
                <el-table-column  fixed="right" label="Operations" width="0px">
                    <template #default="scope">
                        <span><el-button size="small" @click="completedo(scope.$index)">完成</el-button></span>
                        <span><el-button size="small" @click="deletedo(scope.$index)">刪除</el-button></span>
                    </template>
                </el-table-column>
                <!-- <el-table-column prop="name" label="Name" width="180" />
                <el-table-column prop="address" label="Address" /> -->
            </el-table>
      
    </div>
</template>
<script setup>
import {ref} from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const completecss = ref(false)
function deletedo(index){
    store.commit('deleteThings',index)
}
function completedo(index){
    store.commit('completeThings',index)
    completecss.value = true
}
const cellstyle = (data)=>{
    if(data.row.isdoing ==true){
        return {
            "text-decoration" : "line-through"
        }
    }
}
</script>
<style scoped>
.things{
    overflow:scroll;
    width: 200px;
}
</style>