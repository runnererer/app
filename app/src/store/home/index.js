import {reqCategoryList} from '@/api/index'
import {reqGetBannerList} from '@/api/index'
//home模块的小仓库
const state = {
    //state中数据默认初始值别瞎写,服务器返回对象,服务器返回数组。【根据接口返回值初始化的】
    categoryList:[],
    bannerList:[]
};
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList;
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList = bannerList;
    }
};
const actions = {
    //通过API里面的接口函数调用,向服务器发请求,获取服务器的数据
   async categoryList({commit}){
     let result =await reqCategoryList();
     if(result.code==200){
        commit('CATEGORYLIST',result.data)
     }
    },
    //获取首页轮播图的数据
   async getBannerList({commit}){
        let result = await reqGetBannerList();
       if(result.code==200){
            commit('GETBANNERLIST',result.data)
       }
    }

};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters
}