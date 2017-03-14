<template>
  <nav class="navbar navbar-fixed-top">
    <div class="container">
      <div class="col-sm-10 col-sm-offset-1">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
          <h1>
            <router-link to="/" class="navbar-brand">team2work</router-link>
          </h1>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li>
              <router-link to="unternehmen" class="nav-link">Für Unternehmen</router-link>
            </li>
            <li>
              <router-link to="bewerber" class="nav-link">Für Bewerber</router-link>
            </li>
            <li>
              <router-link to="ueber" class="nav-link">Über Uns</router-link>
            </li>
            <li>
              <router-link to="jobs" class="nav-link">Jobs</router-link>
            </li>
            <li>
              <router-link to="kontakt" class="nav-link">Kontakt</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    mounted() {
      $(window).scroll(function () {
        if ($(window).scrollTop() > 80) {
          $('nav.navbar').addClass('scroll');
          $('h1 a.navbar-brand').addClass('shrink');
        }
        else {
          $('nav.navbar').removeClass('scroll');
          $('h1 a.navbar-brand').removeClass('shrink');
        }
      });
    }
  }
</script>

<style scoped lang="scss">
  @import "../../styles/util/util.scss";

  nav.navbar {
  	@include transition(all 0.5s ease);
  	@include rem((margin: 0));
  	background: transparent;
  	border-right: 10px solid $color-red-t2w;
  }
  nav.navbar.scroll {
  	@include transition(all 0.5s ease);
  	background: $color-white;
  	box-shadow: 0 1px 3px rgba(0,0,0,.1);
  	.nav > li > a {
  		color: $color-black-medium;
  		&:hover {
  			text-decoration: underline;
  		}
  	}
  	h1 a.navbar-brand {
  		background: url("/static/images/logo/team2work.svg") no-repeat;
  		font-family: 'Open Sans';
  	}
  }
  h1 a.navbar-brand {
  	@include transition(all 0.5s ease);
  	text-indent: -999px;
  	background: url("/static/images/logo/team2work-white.svg") no-repeat;
  	display: block;
  	width: 220px;
  	height: 130px;
  	font-family: 'Open Sans';

  	&.shrink {
  		@include transition(all 0.5s ease);
  		width: 130px;
  		height: 80px;
  	}
  }
  @media (max-width: $screen-md) {
  	h1 a.navbar-brand {
  		width: 130px;
  		height: 80px;
  	}
  }
  .navbar-right {
  	@include rem((margin: 15px 15px 0 0));
  }
  @media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (orientation: portrait)
  and (-webkit-min-device-pixel-ratio: 1) {
  	.navbar-right {
  		@include rem((margin: -65px -50px 0 0));
  	}
  }
  @media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (orientation: portrait)
  and (-webkit-min-device-pixel-ratio: 2) {
  	.navbar-right {
  		@include rem((margin: -65px -50px 0 0));
  	}
  }
  .nav > li > a {
  	color: $color-white;
  	&:focus,
  	&:hover {
  		@include transition(all .3s ease);
  		background-color: transparent;
  		text-decoration: none;
  		color: $color-red-t2w;
  		border-bottom: none;
  	}
  }
  .navbar-toggle {
  	@include rem((margin-top: 27px));
  	.icon-bar {
  		background-color: $color-red-t2w;
  	}
  }
  .navbar-collapse.in {
  	background: $color-white;
  	@include rem((margin: 0 -15px));
  	@include rem((padding: 0 30px));
  	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  	.nav > li > a {
  		color: $color-black-medium;
  	}
  }
  @media (max-device-width: 480px) and (orientation: landscape) {
  	.navbar-fixed-bottom .navbar-collapse,
  	.navbar-fixed-top .navbar-collapse {
  		max-height: 220px;
  	}
  }
  @media (min-width: 768px) and (max-width: 991px) {
  	.navbar-right {
  		@include rem((margin: 0 ));
  		position: relative;
  		left: 70px;
  		top: -65px;
  	}
  }
  .navbar-collapse.in .nav > li > a:hover {
  	text-decoration: underline;
  }
</style>
