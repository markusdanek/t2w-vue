<template>
  <div role="tabpanel" class="tab-pane" id="erfolgsgeschichten">
    <h2>Erfolgsgeschichten von unseren Mitarbeitern</h2>
    <div class="text">
      <div class="story-single">
        <div class="row">
          <div class="picture col-sm-3">
            <!-- <img src="/static/images/team/monika-hrib.jpg" class="img-circle" /> -->
            <p>Katrin D., BSc, 27 Jahre, Supply Chain</p>
          </div>
          <div class="text col-sm-9">
            <p>
              Dank der tollen Betreuung und Beratung seitens team2work habe ich
              nach 1jähriger Auszeit wieder eine Anstellung in meinem gewünschten
              Arbeitsumfeld gefunden. Durch die offene Kommunikation seitens des
              Teams von team2work hatte ich von Anfang an ein gutes Gefühl. Während
              des Vorstellungsgespräches hatte ich nicht das Gefühl, nur eine unter
              vielen zu sein und die Beraterin ging auf meine persönliche Situation ein.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div class="story-single">
        <div class="row">
          <div class="picture col-sm-3">
            <!-- <img src="/static/images/team/irina-friedrich.jpg" class="img-circle" /> -->
            <p>Jürgen H., 25 Jahre, EAT</p>
          </div>
          <div class="text col-sm-9">
            <p>
              Nach mehr als 1jähriger Beschäftigung über team2work wurde ich übernommen.
              Ich bedanke mich für die gute Zusammenarbeit, die korrekte und pünktliche
              Abwicklung der Personalabrechnung, und dass ich jederzeit eine Ansprechperson
              hatte. <br /><br/> Ich kann nur Positives über diese
              Personalbereitstellungsfirma berichten!
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div class="story-single">
        <div class="row">
          <div class="picture col-sm-3">
            <!-- <img src="/static/images/team/irina-friedrich.jpg" class="img-circle" /> -->
            <p>Robert K., 48 Jahre, Lager</p>
          </div>
          <div class="text col-sm-9">
            <p>
              In der heutigen Zeit war es schwer, wieder einen guten Job zu bekommen,
              da viele Firmen Mitarbeiter abgebaut haben bzw. Unternehmen auch ins
              Ausland gegangen sind.<br /><br /> Nach etlichen Bewerbungen, bei
              denen ich von einigen nicht einmal eine Reaktion bekommen habe, habe
              ich mich bei team2work beworben und wurde schon nach wenigen Tagen
              zu einem Vorstellungsgespräch eingeladen. Anfangs war ich skeptisch,
              da es ja eine Zeitarbeitsfirma war.<br /><br /> Das Gespräch verlief
              in angenehmer und persönlicher Atmosphäre und wurden mir einige Tipps
              hinsichtlich des Lebenslaufes gegeben. Ich war überrascht, von einer
              Leihfirma solche Hilfestellungen zu bekommen und konnte aufgrund dieser
              Tipps bald eine Stelle annehmen. Mittlerweile wurde ich nach mehr als
              3 Jahren Leiharbeit von diesem Unternehmen übernommen und ich möchte
              mich herzlichst bei team2work für die gute Zusammenarbeit bedanken.
            </p>
          </div>
        </div>
      </div>
      <router-link to="/jobs" class="own-story-link">
        <div class="own-story-link">
          <h3 class="own-story">
            Sie wollen Ihre eigene Erfolgsgeschichte hier lesen?<br />Dann bewerbe Sie sich für unsere aktuellen Jobs!
          </h3>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'applicants-tab-stories'
  }
</script>

<style scoped lang="scss">
  @import "../../../styles/util/util.scss";

  #erfolgsgeschichten {
    h2 {
      @include rem((margin: 30px 0));
      font-weight: bold;
      color: $color-red-t2w;
    }
    .story-single {
      @include rem((margin: 30px 0));
      .picture {
        img {
          @include rem((margin: 0 auto 10px auto));
          display: block;
        }
        p {
          text-align: center;
          font-style: italic;
        }
      }
    }
    a.own-story-link {
      text-decoration: none;
      color: $color-black-medium;
      .own-story-link {
        h3.own-story {
          @include rem ((margin: 100px 0 50px 0));
          @include rem((padding: 20px 10px));
          @include transition(all 0.5s ease);
          background: $color-gray-light;
          text-align: center;
          font-weight: bold;
          line-height: 38px;
          &:hover {
            @include transition(all 0.5s ease);
            background: $color-gray-medium;
          }
        }
      }
    }
  }
</style>
