<template>
	<div class="activity">
		<ul>
			<li v-for="items in seller.supports"><span  :class="listIcon[items.type]" class="activityIcon"></span>{{items.description}}</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default{
		props:{
			seller:{
				type:Object
			}
		},
		created(){
 			this.listIcon= ['decrease','special','discount','guarantee','invoice']
 		}
	}
</script>