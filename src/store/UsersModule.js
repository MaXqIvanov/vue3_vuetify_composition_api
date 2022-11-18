import api from "@/plugins/api";

export default {
  state: {
      cars_all: [1 ,2 ,3 ,4],
  },
  mutations: {
    changeIsVisibleAddCarModal(state,){
      state.isVisibleAddCarModal = !state.isVisibleAddCarModal
    },
  },
  actions: {
    getCars({
     state
    }) {
    api.get(`users/`).then((response)=>{
      console.log(response);
      if(response.status < 400) {
          state.cars_all = response.data.results
      }
    })
    },
  },
  modules: {
  },
  namespaced: true,
}