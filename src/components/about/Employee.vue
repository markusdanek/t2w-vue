<template>
  <div class="wrapper">
    <div class="about-photos container">
      <!-- <h2 class="title">Das team<span class="two">2</span>work Team</h2> -->
      <div class="col-sm-10 col-sm-offset-1">
        <div class="row">
          <div class="col-sm-6 col-lg-3">
            <img src="/static/images/team/irina-friedrich.jpg" class="photo img-circle" />
            <h4>Irina Friedrich-Ahrer</h4>
            <p>
              <a href="mailto:irina.friedrich@team2work.at">
                E: irina.friedrich@team<span class="two">2</span>work.at
              </a>
            </p>
            <p>T: +43 (0)676/ 404 94 87</p>
            <ul class="social">
              <li><a href="https://www.xing.com/profile/Irina_Friedrich"><i class="fa fa-xing-square fa-lg" aria-hidden="true"></i></a></li>
              <li><a href="https://www.linkedin.com/in/irina-friedrich-4a4986a1"><i class="fa fa-linkedin-square fa-lg" aria-hidden="true"></i></a></li>
            </ul>
          </div>
          <div class="col-sm-6 col-lg-3">
            <img src="/static/images/team/monika-hrib.jpg" class="photo img-circle" />
            <h4>Monika Hrib</h4>
            <p>
              <a href="mailto:monika.hrib@team2work.at">
                E: monika.hrib@team<span class="two">2</span>work.at
              </a>
            </p>
            <p>T: +43 (0)676/ 754 03 54</p>
            <ul class="social">
              <li><a href="https://www.xing.com/profile/Monika_Hrib"><i class="fa fa-xing-square fa-lg" aria-hidden="true"></i></a></li>
            </ul>
          </div>
          <div class="col-sm-6 col-lg-3">
            <img src="/static/images/team/martina-brandtmayer.jpg" class="photo img-circle" />
            <h4>Martina Brandtmayer</h4>
            <p>
              <a href="mailto:martina.brandtmayer@team2work.at">
                E: martina.brandtmayer@team<span class="two">2</span>work.at
              </a>
            </p>
            <p>T: +43 (0)676/ 507 45 47</p>
            <ul class="social">
              <li><a href="https://www.xing.com/profile/Tina_Brandtmayer"><i class="fa fa-xing-square fa-lg" aria-hidden="true"></i></a></li>
              <li><a href="https://www.linkedin.com/in/martina-brandtmayer-138273b2"><i class="fa fa-linkedin-square fa-lg" aria-hidden="true"></i></a></li>
            </ul>
          </div>
          <div class="col-sm-6 col-lg-3">
            <img src="/static/images/team/melanie-friedrich.jpg" class="photo img-circle" />
            <h4>Melanie Friedrich, MA</h4>
            <p>
              <a href="mailto:melanie.friedrich@team2work.at">
                E: melanie.friedrich@team<span class="two">2</span>work.at
              </a>
            </p>
            <p>T: +43 (0)676/ 758 29 58</p>
            <ul class="social">
              <li><a href="https://www.xing.com/profile/Melanie_Friedrich"><i class="fa fa-xing-square fa-lg" aria-hidden="true"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'about-employee'
  }
</script>

<style scoped lang="scss">
  @import "../../styles/util/util.scss";

  .about-photos {
    @include rem((padding: 60px 0 60px 0));
    h2.title {
      @include rem((margin-bottom: 60px));
      font-weight: bold;
      text-align: center;
    }
    img.photo {
      @include transition(all .3s ease);
      display: block;
      margin: 0 auto;
      width: 150px;
      -webkit-filter: grayscale(0%);
      filter: grayscale(0%);
      &:hover {
        @include transition(all .3s ease);
        -webkit-filter: grayscale(10%);
        filter: grayscale(10%);
      }
    }
    h4 {
      @include rem((margin: 30px 0 30px 0));
      text-align: center;
      font-weight: bold;
      span {
        @include rem(font-size, 15px);
      }
    }
    p {
      @include rem(font-size, 15px);
      text-align: center;
      margin: 0;
      a {
        @include rem(font-size, 15px);
        color: $color-black-medium;
        text-decoration: none;
        &:hover {
          color: $color-black-medium;
          cursor: pointer;
          text-decoration: none;
        }
      }
    }
    ul.social {
      @include rem((margin-top: 10px));
      @include rem((padding: 0));
      text-align: center;
      li {
        @include rem((margin-right: 10px));
        display: inline;
        a {
          @include transition(all .3s ease);
          text-decoration: none;
          color: $color-black-medium;
          &:hover {
            @include transition(all .3s ease);
            color: $color-red-t2w;
          }
        }
      }
    }
  }
</style>
