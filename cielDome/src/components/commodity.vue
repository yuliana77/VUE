<template>
	<div>
	<div class="mainContent">
		<div class="menu-wrapper" ref="menuWrapper">
			<ul>
				<li v-for="(item,index) in foodTitles" :key="index"  :class="{'active':countHeight==index}" @click="selectMenu(index,$event)">{{item.name}}</li>
			</ul>
		</div>
		<div class="food-wrapper" ref="foodWrapper">
			<ul >
				<li v-for="(item,index) in foodTitles" class="foods-list">
					<h2>{{item.name}}</h2>
					<ul>
						<li class="food-item" v-for="(food,index) in item.foods" @click="FoodDeta(food)">
							<div class="food-icon"><img :src="food.icon" height="200" width="200"></div>
							<div class="food-detail">
								<h3>{{food.name}}</h3>
								<p>{{food.description}}</p>
								<p>
									<span>月售{{food.sellCount}}</span>
									<span>好评率{{food.rating}}%</span>
								</p>
								<div class="food-price">
									<span>${{food.price}}</span>
									<!-- 增加减少组件 -->
									<car-comput  :food='food'></car-comput>
								</div>
							</div>
						</li>
					</ul>
				</li>
			</ul>
		</div>
		<shop-cart :selectFoods="selectFoods" :deliveryPrice="seller.deliveryPrice" :minPrice="seller.minPrice"></shop-cart>
	</div>
	<goods-detailed :food="selectDate" ref = "foods"></goods-detailed>
	</div>
</template>
<script type="text/javascript">
	import foodDetail from '@/assets/json/goods.js'
	import shopCart from './shopcart'
	import BScroll from 'better-scroll'
	import carComput from './carcomput'
	import goodsDetailed from './goodsDetailed.vue'
	// import food from ''

	export default{
		props:{
			seller:{
				type:Object
			}
		},
		name:'commodity',
		data(){
			return{
				foodTitles:[],//食物分类
				foodHight:[],//右边一个li菜单的高度
				scorllY:0 ,//右边菜单滚动的高度
				selectDate:{}
			}
			
		},
		created() {
	      // 类别图标样式
	      this.foodTitles = foodDetail;
	      console.log(this.foodTitles);
	      
	      this.$nextTick(() => {

	      	 this._initScroll();
	      	 this._calculateHeight();
	      	 //console.log("......"+this.foodHight[2]);
	      })
	    },
	    computed:{
	    	countHeight(){
	    		for(let i =0; i < this.foodHight.length; i++){
	    			let h1 = this.foodHight[i];
	    			console.log("......"+h1);
	    			let h2 = this.foodHight[i+1];
	    			console.log("......"+h2);
	    			if(this.scorllY >= h1 && this.scorllY <= h2){
	    				return i;
	    			}
	    		}
	    		return 0;
	    	},
	    	selectFoods(){
	    		let foods=[]; //放入选中的所以食物
	    		this.foodTitles.forEach((good)=>{
	    			good.foods.forEach((food)=>{
	    				if(food.count){
	    					foods.push(food)
	    				}
	    			})
	    		});
	    		return foods;
	    	}
	    }, 
	    methods: {
	    	selectMenu(index,event){
	    		if (!event._constructed) { return }
	    		console.log(index)
	    		let foodList = this.$refs.foodWrapper.getElementsByClassName('foods-list');
	    		let el=foodList[index];
	    		console.log(el);
	    		this.foodScroll.scrollToElement(el, 300);

	    		
	    	},
	    	//初始化滚动
		    _initScroll(){
		    	this.menuScroll = new BScroll(this.$refs.menuWrapper,{
		    		//一开始点击事件会被scroll阻止  设置true才能用
		    		click:true  
		    	}),
		    	this.foodScroll = new BScroll(this.$refs.foodWrapper,{
		    		 probeType: 3,
		    		 click:true  //允许点击  在加减组件中遇到这个问题 
		    	}),
		    	this.foodScroll.on('scroll',(p)=>{
		    		this.scorllY = Math.abs(Math.round(p.y))
		    	})
		    },
		    _calculateHeight(){
		    	//获取右边的菜单
		    	let foodList = this.$refs.foodWrapper.getElementsByClassName('foods-list');
		    		let height = 0;
		    		this.foodHight.push(height)
		    	for(let i = 0;i < foodList.length;i++ ){
		    		let item = foodList[i];
		    		height += item.clientHeight;
		    		this.foodHight.push(height)
		    		console.log(this.foodHight)
		    	}
		    },
		    FoodDeta(food){
		    	this.selectDate = food;
		    	this.$refs.foods.show();
		    }

	    },
	    components:{
	    	shopCart,
	    	carComput,goodsDetailed
	    }
	    
	}
</script>