<template>
	<div class="foodDeta" v-show="swit">
		<div class="img">
			<img :src="food.image">
		</div>
		<div class="deta">
			<h1>{{food.name}}</h1>
			<div><span>月售{{food.sellCount}}</span><span>好评率{{food.rating}}%</span></div>
			<div class="price">¥{{food.price}}</div>
			<div class="car">
				<car-comput  :food='food' v-show="car" ref="carcom"></car-comput>
				<div class="join" @click="joins" v-show="join">加入购物车</div>
			</div>
		</div>

	</div>
</template>
<script type="text/javascript">
	import carComput from './carcomput'
	export default{
		props:{
			food:{
				type:Object
			}
		},
		data(){
			return{
				swit:false,
				join:true,
				car:false
			}
		},
		methods:{
			show(){
				this.swit = true
			},
			joins(){
				this.join = false,
				this.car = true,
				this.$refs.carcom.addFood();
			}
		},
		components:{
			carComput
		}

	}
</script>
<style type="text/css">
	.foodDeta{
		text-align: left;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color:  #ffffff;
		z-index: 79;
	}
	.foodDeta .img img{
		width: 100%;
	}
	.foodDeta  .deta{
		padding: 15px;
		position: relative;
	}
	.foodDeta  .deta h1{
		line-height: 14px;
	    margin-bottom: 8px;
	    font-size: 14px;
	    font-weight: 700;
	    color: #07111b;
	}
	.foodDeta  .deta span{
		margin-right: 12px;
		font-size: 10px;
    	color: #93999f;
	}
	.foodDeta  .price{
		display: inline-block;
		margin-right: 8px;
	    font-size: 14px;
	    color: #f01414;
	}
	.car{
		position: absolute;
		right: 15px;
		bottom: 15px;


	}
	.car .join{
	    height: 24px;
	    line-height: 24px;
	    padding: 0 12px;
	    box-sizing: border-box;
	    border-radius: 12px;
	    font-size: 10px;
	    color: #fff;
	    background: #00a0dc;
	}
	.carcomput{
			}

</style>