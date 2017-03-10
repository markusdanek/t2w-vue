<template>
  <div class="wrapper">
    <div class="company container">
      <div class="row">
        <div class="col-sm-11 col-sm-offset-1">
          <div class="left col-sm-2">
            <ul class="nav nav-tabs" role="tablist">
              <li role="presentation" class="active"><a href="javascript:#allgemeines" aria-controls="home" role="tab" data-toggle="tab">Allgemeines</a></li>
              <li role="presentation"><a href="javascript:#bewerbungen" aria-controls="profile" role="tab" data-toggle="tab">Bewerbungen</a></li>
              <li role="presentation"><a href="javascript:#erfolgsgeschichten" aria-controls="messages" role="tab" data-toggle="tab">Erfolgsgeschichten</a></li>
            </ul>
          </div>
          <div class="right col-sm-8 col-sm-offset-1">
            <div class="tab-content">
              <applicants-tab-general></applicants-tab-general>
              <applicants-tab-application></applicants-tab-application>
              <applicants-tab-stories></applicants-tab-stories>
            </div>
          </div>
        </div>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Applicants_Tab_Layout from '@/components/applicants/tab/Layout'
  import Applicants_Tab_General from '@/components/applicants/tab/General'
  import Applicants_Tab_Application from '@/components/applicants/tab/Application'
  import Applicants_Tab_Stories from '@/components/applicants/tab/Stories'
  Vue.component('applicants-tab-general', Applicants_Tab_General);
  Vue.component('applicants-tab-application', Applicants_Tab_Application);
  Vue.component('applicants-tab-stories', Applicants_Tab_Stories);

  export default {
    name: 'applicants-tab'
  }
</script>

<style lang="scss">
  @import "../../../styles/util/util.scss";

  .wrapper {
  	background: $color-white;
  }

  .company {
  	.navtabs {
  		@include rem((margin: 0 auto));
  		text-align: center;
  		position: relative;
  		display: block;
  	}
  	ul.nav.nav-tabs {
  		@include rem((margin: 30px auto 30px auto));
  		border: none;
  		h4 {
  			font-weight: bold;
  			text-transform: uppercase;
  		}
  		li {
  			@include rem((margin-bottom: 0));
  			float: none;
  			a {
  				@include rem((padding: 20px 15px));
  				color: $color-black-medium;
  				border: none;
  				border-bottom: 1px solid $color-red-t2w;
  			}
  			&.active {
  				a {
  					font-weight: bold;
  				}
  			}
  		}
  	}
  	@include rem((padding-bottom: 60px));
  	.text {
  		.section {
  			@include rem((padding: 30px 0 15px 0));
  			h2 {
  				@include rem((margin-bottom: 20px));
  				font-weight: bold;
  				color: $color-red-t2w;
  			}
  			ul {
  				li {
  					list-style-type: square;
  				}
  			}
  		}
  	}
  	.open-questions {
  		@include rem((padding: 30px));
  		background: $color-gray-light;
  		h2 {
  			@include rem((margin-bottom: 20px));
  			text-align: center;
  			font-weight: bold;
  		}
  	}
  }

</style>
