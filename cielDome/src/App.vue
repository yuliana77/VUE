<template>
  <div id="app">
    <v-header :seller='seller'></v-header>
    <div class="nav-list">
        <router-link to="/commodity" class="active">商品</router-link>
        <router-link to="/comment">评论</router-link>
        <router-link to="/seller">商家</router-link>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
import vHeader from '@/view/header'
import sellerData from '@/assets/json/seller.js'
import {urlParse} from '@/assets/js/util.js'

export default {
  name: 'app',
  data(){
  		return{
  			seller:[{
                  id:(()=>{
                      let queryParam = urlParse();
                      return queryParam.id;
                  })()
              }]
  		}
  },
  // mounted(){
  //       this.sellerGet()
  //   },
    created(){
        this.seller = Object.assign({},this.seller,sellerData)
    },
   // methods:{
   //      sellerGet(){
   //          var _this = this;
   //          this.$http.get("../static/seller.js").then((res)=>{
               
   //             _this.seller = res.data ;
   //             console.log(_this.seller)
   //          })
   //      }
   // },
  components:{
    vHeader
  }
}
</script>
<style type="text/css">
    .nav-list{
        display: flex;
       justify-content: center;
        height: 40px;
       line-height: 40px;
       border-bottom: 1px solid rgba(7,17,27,0.1)
    }
    .nav-list a{
        display: block;
       text-decoration: none;
       color: #111111;
       flex: 1

    }
    .nav-list .router-link-active{
        color: #ff0000;
    }
</style>
