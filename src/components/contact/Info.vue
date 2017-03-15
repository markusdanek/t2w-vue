<template>
  <div class="wrapper">
    <div class="contact-maps container">
      <div class="col-sm-10 col-sm-offset-1">
        <div class="row">
          <div class="info col-sm-6">
            <div class="item">
              <h2>Adresse:</h2>
              <ul>
                <li class="t2w">team<span class="two">2</span>work Arbeitskräfteüberlassung GmbH</li>
                <li>Mariahilfer Straße 136</li>
                <li>A-1150 Wien</li>
                <li>Tel: +43 1 892 1 892, Fax -14</li>
                <li>
                  <a :href="`mailto:office@team2work.at`">E-Mail: office@team2work.at</a>
                </li>
              </ul>
            </div>
            <div class="item">
              <h2>Bewerbungen</h2>
              <p>
                <b>Mo bis Fr</b> zwischen <b>09:00</b> und <b>12:00</b> Uhr.<br />
                Persönliche Beratung und Besprechung nach <u>vorheriger telefonischer</u> Vereinbarung.
              </p>
            </div>
          </div>
          <div class="col-sm-6">
            <contact-maps></contact-maps>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Contact_Maps from '@/components/contact/Maps'
  Vue.component('contact-maps', Contact_Maps);

  export default {
    name: 'contact-info'
  }
</script>

<style scoped lang="scss">
  @import "../../styles/util/util.scss";

  .contact-maps {
  	@include rem((padding-top: 60px));
    @include rem((padding-bottom: 60px));
  	.info {
  		.item {
  			@include rem((margin-bottom: 60px));
  			h2 {
  				@include rem((margin-bottom: 20px));
  				font-weight: bold;
  				color: $color-red-t2w;
  			}
  			ul {
  				@include rem((padding-left: 0));
  				li {
  					list-style-type: none;
  					span {
  						display: inline;
  					}
  					&.t2w {
  						font-weight: bold;
  					}
  					a {
  						color: $color-black-medium;
  						&:hover {
  							border-bottom: 1px solid $color-red-t2w;
  							text-decoration: none;
  						}
  					}
  				}
  			}
  		}
  	}
  }
</style>
