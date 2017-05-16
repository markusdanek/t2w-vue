<template>
  <div class="footer container">
    <div class="wrapper">
      <div class="content">
        <div class="row">
          <div class="col-md-12">
            <div class="col-md-3 col-md-offset-1">
              <p class="title">
                Navigation
              </p>
              <ul class="links">
                <li>
                  <router-link to="/unternehmen">Für Unternehmen</router-link>
                </li>
                <li>
                  <router-link to="/bewerber">Für Bewerber</router-link>
                </li>
                <li>
                  <router-link to="/ueber">Über Uns</router-link>
                </li>
                <li>
                  <router-link to="/jobs">Jobs</router-link>
                </li>
                <li>
                  <router-link to="/kontakt">Kontakt</router-link>
                </li>
                <li>
                  <router-link to="/impressum">Impressum</router-link>
                </li>
                <li>
                  <router-link to="/backend/login">Login</router-link>
                </li>
              </ul>
            </div>
            <div class="col-md-4 col-md-offset-1">
              <p class="title">
                Kontakt
              </p>
              <ul class="contact">
                <li>team<span class="two">2</span>work Arbeitskräfteüberlassung GmbH</li>
                <li>Mariahilfer Straße 136</li>
                <li>1150 Wien, Österreich</li>
                <li>Tel +43 (0)1/892 1 892, Fax -14</li>
                <li><a :href="`mailto:office@team2work.at`">E-Mail: office@team2work.at</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="copy col-sm-12 col-md-offset-1">
            <div class="col-sm-4">
              <p>
                &copy; {{year}} <strong>team<span class="two">2</span>work Arbeitskräfteüberlassung GmbH</strong> - Alle Rechte vorbehalten
              </p>
            </div>
            <div class="col-sm-4">
              <p>
                <a href="http://www.creativebrains.net" target="_blank">
                  Design &amp; Entwicklung: Markus Danek
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'footer',
    computed: {
      month() {
        return this.twoDigits((new Date()).getUTCMonth() + 1);
      },
      year() {
        return (new Date()).getUTCFullYear();
      }
    },
    mounted() {
      this.checkAuth();
    },
    methods: {
      checkAuth() {
        if (localStorage.getItem('profile')) {
          this.authenticated = true;
        } else {
          this.authenticated = false;
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../styles/util/util.scss";

  .footer {
  	.content {
  		@include rem((padding: 40px 0));
  		background: $color-gray-light;
  		color: $color-black-medium;
  		p.title {
  			font-weight: bold;
  		}
  		ul {
  			&.links {
  				li {
  					display: block;
  					list-style-type: none;
  					a {
  						@include rem(font-size, 15px);
  						color: $color-black-medium;
  						&:hover {
  							border-bottom: 1px solid $color-red-t2w;
  							text-decoration: none;
  						}
  					}
  				}
  			}
  			&.contact {
  				li {
  					@include rem(font-size, 15px);
  					list-style-type: none;
  					a {
  						@include rem(font-size, 15px);
  						color: $color-black-medium;
  						&:hover {
  							border-bottom: 1px solid $color-red-t2w;
  							text-decoration: none;
  						}
  					}
  				}
  			}
  		}
  		.copy {
  			p {
  				@include rem(font-size, 15px);
  				span {
  					color: $color-red-t2w;
  				}
  				a {
  					@include rem(font-size, 15px);
  					text-decoration: none;
  					color: $color-black-medium;
  					&:hover {
  						border-bottom: 1px solid $color-red-t2w;
  						text-decoration: none;
  					}
  				}
  			}
  			@media (max-width: $screen-md) {
  				p {
  					@include rem((padding: 0 30px));
  				}
  			}
  		}
  	}
  }
</style>
