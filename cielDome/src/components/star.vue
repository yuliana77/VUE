<template>
	<div class="star">
		<div :class="setSize" >
			<span v-for = "c in setClass" :class="c" ></span>
		</div>	 
	</div>
</template>
<script type="text/javascript">
	const starSize = 5;
	const _ON = "on";
	const _OFF = "off";
	const _HALF = "half";
	export default{
		props:{
			size:{
				type:Number
			},
			score:{
				type:Number
			}
		},
		computed:{
			setSize(){
				return('star-'+this.size);
			},
			setClass(){
				var cls = [];//加入所以的class
				 //获取分数   先向下取整   在除2
				 let score = Math.floor(this.score*2)/2;
				 //表示小数
				 let decimals = score%1 !==0;
				 //全星
				 let stars  = Math.floor(score);
				 for(let i=0; i<stars;i++){
				 	cls.push(_ON);
				 }
				 if (decimals) {
				 	cls.push(_HALF);
				 }
				 while(cls.length<starSize){
				 	cls.push(_OFF);
				 }

				 return cls;
			}
		}
	}
</script>
<style type="text/css">
	.star-48 span{
		display: inline-block;
		width: 20px;
		height: 20px;
		background-size: 20px 20px;
		background-repeat: no-repeat;

	}
	.star-36 span{
		display: inline-block;
		width: 15px;
		height: 15px;
		background-size: 15px 15px;
		background-repeat: no-repeat;

	}
	.star-24 span{
		display: inline-block;
		width: 10px;
		height: 10px;
		background-size: 10px 10px;
		background-repeat: no-repeat;

	}
	.star-48 span.on{
		background-image: url(../assets/img/star48_on@3x.png);
	}
	.star-48 span.off{
		background-image: url(../assets/img/star48_off@3x.png);
	}
	.star-48 span.half{
		background-image: url(../assets/img/star48_half@3x.png);
	}
	.star-36 span.on{
		background-image: url(../assets/img/star36_on@3x.png);
	}
	.star-36 span.off{
		background-image: url(../assets/img/star36_off@3x.png);
	}
	.star-36 span.half{
		background-image: url(../assets/img/star36_half@3x.png);
	}
	.star-24 span.on{
		background-image: url(../assets/img/star24_on@3x.png);
	}
	.star-24 span.off{
		background-image: url(../assets/img/star24_off@3x.png);
	}
	.star-24 span.half{
		background-image: url(../assets/img/star24_half@3x.png);
	}
</style>