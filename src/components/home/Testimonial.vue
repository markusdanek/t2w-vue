<template>
  <div class="wrapper">
    <div class="testimonial">
      <div class="row">
        <div class="col-md-12" data-wow-delay="0.2s">
          <div class="carousel slide" data-ride="carousel" id="quote-carousel">
            <div class="carousel-inner text-center">
              <div class="item active">
                <blockquote>
                  <div class="row">
                    <div class="col-sm-8 col-sm-offset-2">
                      <p>
                        Nach mehr als 1jähriger Beschäftigung über team<span class="two">2</span>work wurde ich übernommen.
                        Ich bedanke mich für die gute Zusammenarbeit, die korrekte und pünktliche Abwicklung der Personalabrechnung,
                        und dass ich jederzeit eine Ansprechperson hatte. <br /><br /> Ich kann nur Positives über diese
                        Personalbereitstellungsfirma berichten!
                      </p>
                      <small>Jürgen H., 25 Jahre, EAT</small>
                    </div>
                  </div>
                </blockquote>
              </div>
              <div class="item">
                <blockquote>
                  <div class="row">
                    <div class="col-sm-8 col-sm-offset-2">
                      <p>
                        Dank der tollen Betreuung und Beratung seitens team<span class="two">2</span>work habe ich nach
                        1jähriger Auszeit wieder eine Anstellung in meinem gewünschten Arbeitsumfeld gefunden. Durch die
                        offene Kommunikation seitens des Teams von team<span class="two">2</span>work hatte ich von Anfang
                        an ein gutes Gefühl. Während des Vorstellungsgespräches hatte ich nicht das Gefühl, nur eine unter
                        vielen zu sein und die Beraterin ging auf meine persönliche Situation ein.
                      </p>
                      <small>Katrin D., BSc, 27 Jahre, Supply Chain</small>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
            <a data-slide="prev" href="javascript:#quote-carousel" class="left carousel-control"><icon name="chevron-left"></icon></a>
            <a data-slide="next" href="javascript:#quote-carousel" class="right carousel-control"><icon name="chevron-right"></icon></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home-testimonial'
  }
</script>

<style scoped lang="scss">
  @import "../../styles/util/util.scss";

  .testimonial {
  	background: $color-black-medium;

  	#quote-carousel {
  		@include rem((padding: 60px 10px 60px 10px));
  		@include rem((margin-top: 30px));
  		color: $color-white;
  		.carousel-control {
  			@include rem(font-size, 41px);
  			@include rem((margin-top: 125px));
  			background: none;
  			color: $color-white;
  			text-shadow: none;
  		}
  		.carousel-control.left {
  			left: -60px;
  		}

  		.carousel-control.right {
  			right: -60px;
  		}
  		.carousel-indicators {
  			@include rem((margin-right: -19px));
  			right: 50%;
  			top: auto;
  			bottom: 0;
  		}
  		.carousel-indicators li {
  			@include rem((margin: 5px));
  			width: 50px;
  			height: 50px;
  			cursor: pointer;
  			border: 4px solid #CCC;
  			border-radius: 50px;
  			opacity: 0.4;
  			overflow: hidden;
  			transition: all 0.4s;
  		}
  	}
  	.carousel-inner {
  		.item p {
  			@include rem(font-size, 28px);
  			line-height: 34px;
  		}
  		@media (max-width: $screen-md) {
  			.item p {
  				@include rem(font-size, 18px);
  			}
  		}
  	}
  	.item blockquote {
  		@include rem((margin: 0));
  		border-left: none;
  	}
  }
</style>
