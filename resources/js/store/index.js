
        //  ИМПОРТИРУЕМ VUE И VUEX


import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



        //  ИМПОРТИРУЕМ МОДУЛИ


import testStoreModule from './modules/test.store.module'



        //  СОЗДАЕМ STORE


const store = new Vuex.Store ({

    modules: {
        testStoreModule,
    }

})



        //  ЭКСОПРТИРУЕМ STORE


export default store



