<template>
  <div class="wrapper">
    <div class="company container">
      <div class="row">
        <div class="col-sm-11 col-sm-offset-1">
          <div class="left col-sm-2">
            <ul class="nav nav-tabs" role="tablist">
              <li role="presentation" class="active"><a href="#allgemeines" aria-controls="home" role="tab" data-toggle="tab">Allgemeines</a></li>
              <li role="presentation"><a href="#personalberatung" aria-controls="profile" role="tab" data-toggle="tab">Personalberatung und -vermittlung</a></li>
              <li role="presentation"><a href="javascript:#personalleasing" aria-controls="messages" role="tab" data-toggle="tab">Personalleasing</a></li>
              <li role="presentation"><a href="javascript:#testenunduebernehmen" aria-controls="settings" role="tab" data-toggle="tab">Testen &amp; Übernehmen</a></li>
              <li role="presentation"><a href="javascript:#payroll" aria-controls="settings" role="tab" data-toggle="tab">Payroll</a></li>
            </ul>
          </div>
          <div class="right col-sm-8 col-sm-offset-1">
            <div class="tab-content">
              <company-tab-general></company-tab-general>
              <company-tab-consulting></company-tab-consulting>
              <company-tab-leasing></company-tab-leasing>
              <company-tab-test></company-tab-test>
              <company-tab-payroll></company-tab-payroll>
            </div>
          </div>
        </div>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
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
