import {reqGetSearchInfo} from '@/api/index'
//search模块的小仓库
const state = {
    //仓库初始状态
    searchList:{}
};
const mutations = {
    GETSEARCHLIST(state,searchList){
        state.searchList = searchList;
    }
};
const actions = {
   async getSearchList({commit},params={}){
        //当前这个reqGetSearchInfo这个函数在调用获取服务器数据的时候,至少传递一个参数(空对象)
        //params形参:是当前用户派发action的时候,第二个参数传递过来的,至少是一个空对象
        let result = await reqGetSearchInfo(params)
        if(result.code==200){
            commit('GETSEARCHLIST',result.data)
        }
    }
};
//计算属性,在项目当中,为了简化数据而生。
//可以把我们将来在组件当中需要的数据简化一下【将来组件在获取数据的时候就方便了】
const getters = {
    goodsList(state){
        //state.searchList.goodsList如果服务器数据回来了,没问题是一个数组
        //加入网络不给力|没有网state.searchList.goodsList应该返回的是undefined
        //计算新的属性的属性值至少给人家来一个数组
        return state.searchList.goodsList||[];
    },
    attrsList(state){
        return state.searchList.attrsList
    },
    trademarkList(state){
        return state.searchList.trademarkList
    }
};
export default {
    state,
    mutations,
    actions,
    getters
}