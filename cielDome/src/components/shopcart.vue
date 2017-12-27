<template>
<div class="shopcart">
	<div class="content"  >
		<div class="content-left" >
			<div class="img " :class="{'active':totalCount>0}">
				<div class="icon">
					<img src="../view/car.png" @click="toggleList">
				</div>
				<div class="food-unmber" v-show="totalCount>0">{{totalCount}}</div>
			</div>
			<div class="price">
				<div>¥<span>{{totalPrice}}</span>元</div>
				<div>配送费¥{{deliveryPrice}}元</div>
			</div>
		</div>
		<div class="content-right">
			<div @click="pay">{{sendingFee}}</div>
		</div>
	</div>
	<!-- 列表 -->
	<transition  name='feda'>
		<div class="chapcarList" id="chapcarList" v-show="showList">
			<ul>
				<li><h2>购物车</h2><span @click="emptying">清空</span></li>
				<li v-for="food in selectFoods">
					<div class="name">{{food.name}}</div>
					<div class="price">¥{{food.count*food.price}}</div>
					<carcomput  :food="food"></carcomput>
				</li>
			</ul>
		</div>
	</transition>
	<div @click="toggleList" class="shapcar-mask" v-show="showList"></div>
</div>
<!-- v-for="food in foods" -->
</template>
<style type="text/css">
	&.feda-enter-active,&.feda-leave-active{
		transition: all .4s linear
	}
	&.feda-enter,&.feda-leave-active{
		opacity: 0;
		transition: translate3d(24px,0,0)
	}
</style>
<script type="text/javascript">
	import carcomput from './carcomput'
	export default{
		data(){
			return{
				showList:false
			}
		},
		props:{
			selectFoods:{
				type:Array,
				default(){
					return[
					]
				}
			},
			minPrice:{//起送费
				type:Number,
				default: 0
			},
			deliveryPrice:{// 配送费
				type:Number
			}
			
		},
		computed:{
			//计算总价的
			totalPrice(){
				let total=0;
				this.selectFoods.forEach((food)=>{
					total += food.count * food.price;
				})
				return total;
			},
			//计算总数量的
			totalCount(){
				let counts=0;
				this.selectFoods.forEach((food)=>{
					counts +=food.count;
				})
				return counts;
			},
			//起送费
			sendingFee(){
				if(this.totalPrice==0){
					return  `¥`+this.minPrice+`元起送`  // ` 是es6的语法 详情查百度
				}else if(this.minPrice>this.totalPrice>0){
					return  `还差¥`+(this.minPrice-this.totalPrice)+`元起送`
				}else{
					return  `去结算`
				}
			}
			
		},
		methods:{
			pay(){
				alert("您需支付"+(this.totalPrice+this.deliveryPrice)+"元")
			},
			//  清空
			emptying(){
				this.selectFoods.forEach((food)=>{
					food.count=0;
					this.showList=false;
				})
			},
			toggleList(){
				if(this.totalCount>0){
					this.showList = !this.showList 
				}else{
					this.showList = false
				}
			}
			
		},
		components:{
	    	carcomput
	    }
	}
</script>
		
