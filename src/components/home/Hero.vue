<template>
  <div class="section-hero">
    <div class="hero-image">
      <div class="image-src" style="background-image: url('./static/images/hero/hero-home.jpg')"></div>
    </div>
    <div class="container">
      <div class="hero-text">
        <div class="text container">
          <h1 class="startpage">
            <span class="one">Überlassung, </span>
            <span class="twoo">Vermittlung</span>
            <span class="three">und Beratung</span>
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home-hero'
  }
</script>

<style scoped lang="scss">
  @import "../../styles/util/util.scss";

  .section-hero {
  	@extend %hero;
  	height: 600px;
  	h1.startpage {
  		@include rem(font-size, 52px);
  		line-height: 56px;
  		font-family: 'Open Sans';
  		font-weight: bolder;
  		text-transform: uppercase;
  	}
  	h2.startpage {
  		@include rem(font-size, 24px);
  		font-family: 'Open Sans';
  		font-weight: lighter;
  	}
  	.hero-image {
  		background-color: $color-black;
  		top: -80px;
  		.image-src {
  			opacity: 0.6;
  		}
  	}
  }
  @-webkit-keyframes fadein{
    0% {
      opacity: 0;
      visibility: hidden;
    }
   100% {
     opacity: 1;
     visibility: visible;
   }
  }
  span.one {
    visibility: hidden;
    -webkit-animation: fadein 3s forwards;
    animation-delay: 1s;
  }
  span.twoo {
    visibility: hidden;
    -webkit-animation: fadein 3s forwards;
    animation-delay: 3s;
  }
  span.three {
    visibility: hidden;
    -webkit-animation: fadein 3s forwards;
    animation-delay: 5s;
  }
</style>
