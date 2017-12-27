<template>
	<div class="header">
		<div class="header-content">
			<div class="logo"><img  :src="seller.avatar" height="60" width="60"></div>
			<div class="detail">
				<h3><span class="brands"></span>{{seller.name}}</h3>
				 <p><span class="">{{seller.description}}</span><span>/{{seller.deliveryTime}}分钟送达</span></p>
				 <div>
				 	<span class="activityIcon" :class="listIcon[seller.supports[1].type]"></span>
				 	<span>{{seller.supports[1].description}}</span> 
				 	<div @click="maskShow"  class="securities">{{seller.supports.length}}  个</div>
				 </div>
			</div>
		</div>
		<div class="bulletin" @click="maskShow" >
			<p>{{seller.bulletin}}<i>></i></p>
		</div>
		<!-- 公告弹框 -->
		<transition name="fade">
			<div class="head-mask" v-show="maskState" @click="maskHide">
				<h3>{{seller.name}}</h3>
				<!-- star -->
				<star :size="48" :score="seller.score"></star>
				<!-- 优惠 -->
				<div class="coupon">
					<div class="detail">
						<span class="line"></span>
						<span>优惠信息</span>
						<span class="line"></span>
					</div>
					<!-- <div>
						<ul>

							<li v-for="items in seller.supports"><span class="icon"  :class="listIcon[items.type]"></span>{{items.description}}</li>
						</ul>
					</div> -->
					<activity :seller="seller"></activity>
				</div>
				
				<!-- 商家公告 -->
				<div class="announcement">
					<div class="detail">
						<span class="line"></span>
						<span>商家公告</span>
						<span class="line"></span>
					</div>
					<p>{{seller.bulletin}}</p>
				</div>
			</div>
		</transition>
	</div>
</template>
 <script type="text/javascript">
    import activity  from '../components/activity.vue'
    import star from '../components/star.vue'
  	export default{
 		data(){
 			return{
 				maskState:false
 			}
 		},
 		props:{
 			seller:{
 				type:Object
 			}
 		},
 		created(){
 			this.listIcon= ['decrease','special','discount','guarantee','invoice']
 		},
 		methods:{
 			maskShow(){
 				this.maskState=true
 			},
 			maskHide(){
 				this.maskState=false
 			}
 		},
 		components:{
 			activity,
 			star
 		}
 	}
 </script>