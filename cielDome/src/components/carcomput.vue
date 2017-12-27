<!--  加减组件 -->
<template>
	<div class="carcomput">
		<!-- 减号 -->
		 <transition name='feda'>
		 	<div v-show="food.count > 0"  @click.stop.prevent="minusFood"><i class="minus"></i></div>
		 </transition>
		 <!-- 数量 -->
		 <div  class="foodNumber" v-show="food.count > 0">{{food.count}}</div>
		 <!-- 加号 -->
		 <div @click.stop.prevent="addFood"><i class="plus"></i></div>
	</div>
</template>
<script type="text/javascript">
	import Vue from 'vue'
	export default{
		props:{
			food:{
				type:Object
			}
		},
		methods:{
			addFood(){	
				if(!this.food.count){
					Vue.set(this.food , 'count' , 1);//新增一个不存在的属性
				}else{
					this.food.count++;
					console.log(this.food.count)
				}
			},
			minusFood(){
				if(this.food.count){
					this.food.count--
				}
			}
		}	
	}
</script>
<style type="text/css">
	&.feda-enter-active,&.feda-leave-active{
		transition: all .4s linear
	}
	&.feda-enter,&.feda-leave-active{
		opacity: 0;
		transition: translate3d(24px,0,0)
	}
</style>