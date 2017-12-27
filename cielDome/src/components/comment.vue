 <template>
	<div>
		<!-- 综合评分 -->
		<div class="seller-score">
			<div class="score-left">
				<div class="score">{{seller.score}}</div>
				<div class="title">综合评分</div>
				<p>高于周边商家{{seller.rankRate}}％</p>
			</div>
			<div class="score-right">
				<div class="stars">
					<span class="titles">服务态度</span>
					<star :size="36" :score = "seller.score"></star>
				</div>
				<div class="stars">
					<span class="titles">商品评分</span>
					<star :size="36" :score = "seller.score"></star>
				</div>
				<div class="stars">
					<span class="titles">送达时间</span>
					<div>{{seller.deliveryTime}}分钟</div>
				</div>
			</div>
		</div>
		<!-- 华丽的分割线～～～～ -->
		<div class="dividing-line"></div>
		<!-- 评论 -->
		<div class="seller-appraise">
			<div class="degree ">
				<span>好评<em>24</em></span>
				<span>满意<em>18</em></span>
				<span>不满意<em>11</em></span>
			</div>
			<div class="seller-user">
				<ul v-for = 'rating in ratings'>
					<li>
						<div class="photos">
							<img :src="rating.avatar">
						</div>
						<div class="content">
							<div class="first"><span class="name">{{ rating.username}}</span><span class="time">{{rating.rateTime}}</span></div>
							<div class="name-star">
								<div><em></em></div>
								<span>30</span>
							</div>
							<p class="block">{{rating.text}}</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import Ratings from '../assets/json/ratings.js'
	import star from '../components/star.vue'
	export default{
		props:{
			seller:{
				type:Object
			}
		},
		data(){
			return{
			ratings:[]
		}},
		created(){
			this.ratings = Ratings
			console.log(this.seller)
		},
		components:{star}
	}
</script>
<style type="text/css">
	
</style>