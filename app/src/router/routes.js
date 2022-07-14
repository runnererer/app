//引入一级路由
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Search from '@/pages/Search';
import Detail from '@/pages/Detail';
import AddCartSuccess from '@/pages/AddCartSuccess';
import ShopCart from '@/pages/ShopCart';
import Trade from '@/pages/Trade';
import  Pay from '@/pages/Pay';
import  PaySuccess from '@/pages/PaySuccess';
import  Center from '@/pages/Center';
//引入二级路由组件
import MyOrder from '@/pages/Center/MyOrder';
import GroupOrder from '@/pages/Center/GroupOrder'
//配置路由信息
export default [
    {
        path:'/center',
        component:Center,
        meta:{show: true},
        //二级路由组件
        children:[
            {
                path:'myorder',
                component:MyOrder,
            },
            {
                path:'grouporder',
                component:GroupOrder,
            },
            {
                path:'/center',
                redirect:'/center/myorder'
            }
        ]
    },
    {
        path:'/paysuccess',
        component:PaySuccess,
        meta:{show: true}

    },
    {
        path:'/pay',
        component:Pay,
        //路由元信息key不能瞎写:只能叫做meta
        meta:{show: true},
        beforeEnter:(to,from,next) =>{
            if(from.path=='/trade'){
                next()
            }else{
                next(false);
            }
        }
    },
    {
        path:'/trade',
        component:Trade,
        meta:{show: true},
        //路由独享守卫
        beforeEnter:(to,from,next)=>{
            //去交易页面,必须是从购物车而来
            if(from.path=='/shopcart'){
                next();
            }else{
                //其他的路由组件而来,停留在当前
                next(false);
            }
        }

    },
    {
        path:'/shopcart',
        component:ShopCart,
        //路由元信息key不能瞎写:只能叫做meta
        meta:{show: true}

    },
    {
        path:'/addcartsuccess',
        name:'addcartsuccess',
        component:AddCartSuccess,
        //路由元信息key不能瞎写:只能叫做meta
        meta:{show: true}

    },
    {
        path:'/detail/:skuid',
        component:Detail,
        //路由元信息key不能瞎写:只能叫做meta
        meta:{show: true}
    },
    {
        path:'/home',
        component:Home,
        meta:{show: true}

    },
    {
        path:'/login',
        component:Login,
        meta:{show: false}

    },
    {
        path:'/register',
        component:Register,
        meta:{show: false}

    },
    {
        //下面这种写法:代表的是params参数可以传递|当然也可以不传递 ?(正则:两次代表出现次数0|1)
        //今晚在练习的时候,切记?给我带上,因为咱们项目当中params参数就可以不传递|不传递也可以
        path:'/search/:keyword?',
        component:Search,
        meta:{show: true},
        name:'search',
    },
    //重定向,在项目跑起来的时候,访问/,立马让他定向到首页
    {
        path:'*',
        redirect:"/home"
    }
   ]