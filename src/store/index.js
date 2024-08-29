import { createStore } from 'vuex'

const store = createStore({
  state(){
    return{
      data:"",
      todoThings:[]
    }
  },
  getters: {
    getalreadtdone(state){
      return state.todoThings.filter((item) =>{return item.isdoing == true});
    },
    notyetdone(state){
      return state.todoThings.filter((item) =>{ return item.isdoing == false})
    }
  },
  mutations: {
    sendTodo(state,params) {
      state.todoThings.push(params)
    },
    deleteThings(state,params){
      state.todoThings.splice(params,1)
    },
    completeThings(state,params){
      state.todoThings[params].isdoing = true;
    }
  },
  actions: {
  },
  modules: {
  }
})
export default store
