<template>
  <div>
   <!-- 三级联动全局组件:三级联动已经注册为全局组件,因此不需要在引入 -->
   <TypeNav/>
   <ListContainer/>
   <Recommend/>
   <Rank/>
   <Like/>
   <!-- Floor这个组件：自己在组件内部没有发请求,数据是父组件给的 -->
   <Floor v-for="(floor,index) in floorList" :key="floor.id" :list="floor"/>
   <Brand/>
  </div>
</template>

<script>
//引入其余的组件
import ListContainer from '@/pages/Home/ListContainer';
import Recommend from '@/pages/Home/Recommend';
import Rank from '@/pages/Home/Rank';
import Like from '@/pages/Home/Like';
import Floor from '@/pages/Home/Floor';
import Brand from '@/pages/Home/Brand';
import {mapState} from 'vuex'
export default {
    name:'',
    components:{
      ListContainer,
      Recommend,
      Rank,
      Like,
      Floor,
      Brand
    },
    mounted(){
      //因为floor组件复用了,派发action改在home组件进行
       this.$store.dispatch('getFloorList')
    },
    computed:{
    ...mapState({
       floorList: state => state.home.floorList
    })
},
}
</script>

<style>

</style>