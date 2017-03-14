<template>
  <div class="section-hero small">
    <div class="hero-image">
      <div class="image-src" style="background-image: url('./static/images/hero/hero-applicants.jpg')"></div>
    </div>
    <div class="container">
      <div class="hero-text">
        <div class="text container">
          <h1 class="startpage">
            Wir suchen Sie!
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'jobs-hero'
  }
</script>

<style scoped lang="scss">
  @import "../../styles/util/util.scss";

  .section-hero {
  	@extend %hero;
  	height: 600px;
  	h1.startpage {
  		@include rem(font-size, 46px);
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
</style>
