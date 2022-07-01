//当前这个模块:API进行统一管理
import requests from "./ajax";
import mockRequests from './mockAjax';
//三级联动接口
///api/product/getBaseCategoryList get 无参数
export const reqCategoryList = ()=>{
    //发请求:axios发请求返回结果是Promise对象
   return requests({url:'/product/getBaseCategoryList',method:'get'});
}

//切记:当前函数执行需要把服务器返回结果返回
//获取banner(Home首页轮播图接口)
export const reqGetBannerList =()=>mockRequests.get('/banner')