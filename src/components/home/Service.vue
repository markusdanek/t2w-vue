<template>
  <div class="wrapper">
    <div class="service-overview container">
      <div class="col-sm-10 col-sm-offset-1">
        <h2 class="title">
          Unser Service für Ihr Unternehmen
        </h2>
        <div class="text">
          <div class="row">
            <div class="col-lg-3">
              <img src="/static/images/icons/personalberatung-icon.svg" class="field-icons" />
              <h3>
                <router-link to="/unternehmen#personalberatung">
                  Personalberatung und -vermittlung<br/>
                </router-link>
              </h3>
              <p>
                <br /> Dauerhafter Erfolg entsteht, indem die passenden Menschen am richtigen Ort zusammenarbeiten. Wenn Sie geeignete technische, gewerbliche oder kaufmännische Fach- oder Hilfskräfte für Ihr Unternehmen suchen, unterstützen wir Sie dabei.
              </p>
            </div>
            <div class="col-lg-3">
              <img src="/static/images/icons/personalleasing-icon.svg" class="field-icons" />
              <h3>
                <router-link to="/unternehmen#personalleasing">
                  Personalleasing<br/>
                </router-link>
              </h3>
              <p>
                <br /><br /> Personalengpässe treten manchmal schneller auf als erwartet. team
                <span class="two">2</span>work hilft Ihnen dabei, den Personalstand schnell und unkompliziert mit Leasingmitarbeitern auszugleichen.
              </p>
            </div>
            <div class="col-lg-3">
              <img src="/static/images/icons/testen-uebernehmen-icon.svg" class="field-icons" />
              <h3>
                <router-link to="/unternehmen#testenunduebernehmen">
                  Testen &amp; Übernehmen
                </router-link>
              </h3>
              <p>
                <br /><br /> Sie möchten sich länger von den Qualifikationen eines neuen Mitarbeiters im Einsatz überzeugen, bevor Sie sich für eine Übernahme in Ihr Stammpersonal entscheiden? Mit „Testen &amp; Übernehmen“ bieten wir Ihnen diese Möglichkeit.
              </p>
            </div>
            <div class="col-lg-3">
              <img src="/static/images/icons/payroll-icon.svg" class="field-icons" />
              <h3>
                <router-link to="/unternehmen#payroll">
                  Payroll<br/>
                </router-link>
              </h3>
              <p>
                <br /><br /> team
                <span class="two">2</span>work entlastet Ihre Personalabteilung und übernimmt die gesamte Personaladministration für outgesourcte Mitarbeiter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import "../../styles/util/util.scss";

  .service-overview {
    // @include rem((margin: 60px auto 0px auto));

    img.field-icons {
      @include rem((margin: 0 auto 40px auto));
      width: 100px;
      height: 100px;
      display: block;
    }

    h2.title {
      @include rem((margin: 60px 0 40px 0));
      text-align: center;
      font-weight: bold;
    }

    .text {
      @include rem((margin-top: 50px));
      @include rem((margin-bottom: 50px));

      h3,
      p {
        text-align: center;
        display: block;
      }

      span {
        text-align: center;
      }

      h3 {
        a {
          @include rem((margin-bottom: 20px));
          color: $color-black-medium;
          @include rem(font-size, 24px);

          &:hover {
            color: $color-black-medium;
            cursor: pointer;
          }
        }
      }
    }
  }
</style>
