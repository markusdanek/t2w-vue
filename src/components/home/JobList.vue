<template>
  <div class="wrapper">
    <div class="jobs-overview container">
      <div class="col-sm-11">
        <h2 class="title">
          Die aktuellsten Stellenanzeigen für Sie
        </h2>
        <div class="col-md-12">
          <ul class="jobs">
            <li class="col-md-5 col-md-offset-1" v-for="job in limitedJobs">
              <div class="title col-sm-11">
                {{ job.title }}
              </div>
              <router-link to="">
                <div class="link col-sm-1">
                  <i class="fa fa-angle-right fa-lg" aria-hidden="true"></i>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
        <router-link to="" class="btn-more-jobs btn btn-danger pull-right">
          Alle Stellenanzeigen &nbsp;&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i>
        </router-link>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
  export default {
    name: 'home-joblist',
    data() {
      return {
        jobs: [],
        loading: false,
        limitNumber: 4
      }
    },
    filters: {
      limit: function(arr, limit) {
        return arr.slice(0, limit)
      }
    },
    computed: {
      limitedJobs() {
        return this.jobs.slice(0,this.limitNumber)
      }
    },
    created() {
      this.retrieveJobs();
    },
    methods: {
      shuffleArray: function(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
          while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
          }
        return array;
      },
      retrieveJobs() {
        this.loading = true;
        this.$http.get('http://t2w-node.herokuapp.com/api/jobs/json').then(response => {
          this.jobs = response.data;
          this.jobs = this.shuffleArray(this.jobs);
        }, response => {
          console.log("Error", response);
        }).then(_ => {
          this.loading = false;
        });
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../styles/util/util.scss";

  .jobs-overview {
  	@include rem((padding-bottom: 60px));
  	h2.title {
  		@include rem((margin: 60px 0 40px 0));
  		text-align: center;
  		font-weight: bold;
  	}
  	ul.jobs {
  		@include rem((margin-top: 14px));
  		@include rem((margin-bottom: 14px));
  		li {
  			@include rem((margin-bottom: 30px));
  			@include rem((padding: 0));
  			background: $color-gray-light;
  			list-style-type: none;
  			.title {
  				display: flex;
  				align-items: center;
  				min-height: 80px;
  			}
  			a {
  				color: $color-black-medium;
  				text-align: center;
  				display: block;
  				&:hover {
  					text-decoration: none;
  				}
  				.link {
  					@include rem((padding: 0));
  					@include rem((margin: 0));
  					@include transition(all 0.5s ease);
  					min-height: 80px;
  					display: flex;
  					align-items: center;
  					justify-content: center;
  					background: $color-gray-medium;
  					&:hover {
  						@include transition(all 0.5s ease);
  						background: rgba($color-black-medium, 0.3);
  					}
  				}
  			}
  		}
  	}
    a.btn-more-jobs {
    	@include transition(all 0.5s ease);
    	@include rem((margin-right: 15px));
    	background: transparent;
    	color: $color-black-medium;
    	border-radius: 0;
    	border: 2px solid $color-red-t2w;
    	&:hover {
    		@include transition(all 0.5s ease);
    		background: $color-red-t2w;
    		border: 2px solid $color-red-t2w;
    		color: $color-white;
    	}
    }
    @media (max-width: $screen-md) {
    	ul.jobs {
    		@include rem((padding: 0));
    	}
    }
  }
</style>
