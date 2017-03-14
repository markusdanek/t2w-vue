<template>
  <div class="wrapper block">
    <div class="row">
      <div class="col-sm-10 col-sm-offset-1">
        <h3>Informationen zur Cookie-Nutzung</h3>
        <p>
          Ein Cookie ist eine kleine Textdatei, die an Ihren Computer gesendet wird, wenn Sie eine Webseite besuchen.
          Diese Datei erfasst Informationen zu Ihrem Besuch auf Websites und kann erneut gelesen werden,
          wenn Sie diese Seite zu einem späteren Zeitpunkt wieder besuchen. So hat diese Website eine geringere
          Ladezeit und Sie finden sich schneller zurecht.
        </p>
        <p>
          Der Schutz Ihrer Daten steht bei uns an oberster Stelle. Dafür nutzt team<span class="two">2</span>work entsprechende organisatorische
          und technische Maßnahmen. Wenn Sie Cookies dennoch deaktivieren möchten, können Sie dies in den
          Browsereinstellungen anpassen. Bitte beachten Sie, dass so Ihr Username und Passwort nicht länger auf unserer
          Website gespeichert wird.
        </p>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'impress-cookies'
  }
</script>

<style scoped lang="scss">
  @import "../../styles/util/util.scss";

  .block {
    @include rem((padding: 30px 0 30px 0));
    h3 {
      @include rem((margin-bottom: 20px));
      font-weight: bold;
    }
    hr {
      @include rem((margin-top: 60px));
    }
  }
</style>
