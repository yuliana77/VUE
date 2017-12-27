<template>
	<div class="sellers">
		<div class="sellers-profile">
			 <div>
			 	<h2>{{seller.name}}</h2>
			 	<star :size="36" :score="seller.score"></star> 
			 	<span class="text">月售90单</span>
			 </div>
			 <div>
			 	<icon></icon>
			 	<p>已收藏</p>
			 </div>
		</div>
		<div class="delivery">
			<div>
				<span>起送价</span>
				<p>{{seller.minPrice}}<span>元</span></p>
			</div>
			<div>
				<span>商家配送</span>
				<p>{{seller.deliveryPrice}}<span>元</span></p>
			</div>
			<div>
				<span>平均配送时间</span>
				<p>{{seller.deliveryTime}}<span>分钟</span></p>
			</div>
		</div>
		<!-- 华丽的分割线～～～～ -->
		<div class="dividing-line"></div>
		 <!-- 公告与活动 -->
		 <div class="announcement">
		 	<h2>公告与活动</h2>
		 	<p>{{seller.bulletin}}</p>
		 	 <activity :seller="seller"></activity>
		 </div>
		
	</div>
</template>
<style type="text/css">
	.sellers-profile,.delivery{
		display: flex;
		padding: 15px 15px;
	}
	.sellers-profile{
		padding-bottom: 0
	}
	.sellers-profile>div:nth-child(1){
		flex: 1;
		text-align: left;

	}
	.sellers-profile .star{
		display: inline-block;
	}
	.sellers-profile .star span{
		margin-right: 5px;
	}
	.sellers-profile>div:nth-child(1) h2{
		margin-bottom: 8px;
	    line-height: 14px;
	    color: #07111b;
	    font-size: 14px;
	    font-weight: 500
	}
	.sellers-profile>div:nth-child(1) .text{
		display: inline-block;
	    margin-right: 12px;
	    line-height: 18px;
	    vertical-align: top;
	    font-size: 10px;
	    color: #4d555d;
	}
	.sellers-profile>div:nth-child(2) p{

	}
	.delivery >div{
		flex: 1;
		border-right: 1px solid #dfdfdf
	}
	.delivery >div:last-child{
		border: 0
	}
	.delivery >div span{
		margin-bottom: 4px;
	    line-height: 10px;
	    font-size: 10px;
	    color: #93999f;
	    font-weight: bold;
	}
	.delivery >div p{
		font-size: 24px;
	}
	.announcement{
		padding: 15px 15px;
		text-align: justify;

	}
	.announcement h2{
		font-size: 16px;
		font-weight: inherit;
		margin-bottom: 8px;
	    line-height: 14px;
	    color: #07111b;
	}
	.announcement  p{
		line-height: 24px;
	    font-size: 12px;
	    color: #f01414;
	    font-weight: bold;
	}
	.activity{
		margin-top: 20px;
	}
	.activity li{
		border-top: 1px solid #dfdfdf;
		text-align: left;
		height: 35px;
		line-height: 35px;
		font-size: 13px;
	}

</style>
<script type="text/javascript">
	import activity  from '../components/activity.vue'
	import star from '../components/star.vue'
	export default{
		props:{
			seller:{
				type:Object
			}
		},
		components:{
			activity,
			star
		}
	}

</script>
















