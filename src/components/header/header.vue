<template>
	<div class="header">
		<div class="content-wrapper">
			<div class="avatar">
				<img width="64" height="64" :src="seller.avatar">
			</div>
			<div class="content">
				<div class="title">
					<span class="brand"></span>
					<span class="name">{{seller.name}}</span>
				</div>
				<div class="description">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
				<div class="support" v-if='seller.supports'>
					<span class="icon" :class='classMap[seller.supports[0].type]'></span>
					<span class="text">{{seller.supports[0].description}}</span>
				</div>
			</div>
			<div v-if='seller.supports' class="support-count">
				<span class="count">{{seller.supports.length}}个</span>
				<i class="icon-keyboard_arrow_right"></i>
			</div>
		</div>
		<div class="bulletin-wrapper">
			<span class="bulletin-title"></span>
			<span class="bulletin-text">{{seller.bulletin}}</span>
			<i class="icon-keyboard_arrow_right"></i>
		</div>
	</div>
</template>
<script type="text/ecmascript">
	export default {
		props:{
			seller:{
				type:Object
			}
	},
	created() {
		this.classMap=['decrease','discount','special','invoice','guarantee']
	}
	
};
</script>
<style lang="scss" scoped="" type="text/css">
	@import '../../common/style/mixin.scss';
	.header{
		color:#fff;
		background: #999;
		.content-wrapper{
			position: relative;
			padding: 24px 12px 18px 24px;
			font-size: 0;
			.avatar{
				font-size: 14px;
				display: inline-block;
				vertical-align:top;
				img{
					border-radius: 2px;
				}
			}
			.content{
				margin-left: 16px;
				display:inline-block;
				.title{
					margin:2px 0 8px 0;
					.brand{
						display:inline-block;
						width:30px;
						height:18px;
						@include bg-image('brand');
						background-size: 30px 18px;
						background-repeat: no-repeat;
						vertical-align: top;
					}
					.name{
						margin-left:6px;
						font-size:16px;
						line-height: 18px;
						font-weight: bold;
					}
				}
				.description{
					margin-bottom:10px;
					line-height:12px; 
					font-size:12px;
				}
				.support{
					.icon{
						vertical-align:top;
						display:inline-block;
						height:12px;
						width:12px;
						margin-right: 4px;
						background-size:12px 12px;
						background-repeat:no-repeat;
						&.decrease{
							@include bg-image('decrease_1');
						};
						&.discount{
							@include bg-image('discount_1');
						};
						&.guarantee{
							@include bg-image('guarantee_1');
						};
						&.invoice{
							@include bg-image('invoice_1');
						};
						&.special{
							@include bg-image('special_1');
						};
					}
					.text{
						line-height:12px;
						font-size:12px;
					}
				}
			}
			.support-count{
				position:absolute;
				right: 12px;
				bottom:18px;
				padding:0 8px;
				height:24px;
				line-height:24px;
				border-radius:14px;
				background:rgba(0,0,0,0.2);
				text-align: center;
				.count{
					font-size:10px;
					vertical-align:top;
				}
				.icon-keyboard_arrow_right{
					margin-left:2px;
					line-height: 24px;
					font-size: 10px;
				}
			}
		}
		.bulletin-wrapper{
			position:relative;
			height:28px;
			line-height:28px;
			padding:0 22px 0 12px;
			white-space:nowrap;
			overflow: hidden;
			text-overflow:ellipsis;
			background:rgba(7,17,27,0.2);
			.bulletin-title{
				display:inline-block;
				width:22px;
				height:12px;
				vertical-align:middle;
				@include bg-image('bulletin');
				background-size: 22px 12px;
			}
			.bulletin-text{
				margin:0 4px;
				font-size:10px;
			}
			.icon-keyboard_arrow_right{
				position:absolute;
				font-size:10px;
				right:12px;top:8px;

			}
		}
	}
</style>
