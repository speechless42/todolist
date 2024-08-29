<template>
    <div>
            <el-table :data="store.getters.notyetdone" height="300" style="width: 300px;font-size: 15px;">
                <el-table-column fixed prop="detail" label="代辦事件" width="120px" />
                <el-table-column type prop="tags" fixed="right" label="標籤" width="55px">
                    <template #default="scope">
                        <el-tag v-if="scope.row.isurgent" type="danger" disable-transitions>緊急</el-tag>
                        <el-tag v-if="scope.row.isimportant" type="warning" disable-transitions>重要</el-tag>
                    </template>
                </el-table-column>
                <el-table-column fixed="right" label="Operations" width="0">
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
import { useStore } from 'vuex'
const store = useStore()
function deletedo(index){
    store.commit('deleteThings',index)
}
function completedo(index){
    store.commit('completeThings',index)
}
</script>
<style scoped>
.decoration{
    text-decoration:line-through;
}
.things{
    overflow:scroll;
    width: 200px;
}
</style>