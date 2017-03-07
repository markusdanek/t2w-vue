<!-- HTML -->
<template>
<div id="app">
  <nav class="navbar navbar-fixed-top">
    <div class="container">
      <div class="col-sm-10 col-sm-offset-1">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
          <h1><a class="navbar-brand" href="#/">team2work</a></h1>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><a class="nav-link" href="#/unternehmen">Für Unternehmen</a></li>
            <li><a class="nav-link" href="#/bewerber">Für Bewerber</a></li>
            <li><a class="nav-link" href="#/ueber">Über uns</a></li>
            <li><a class="nav-link" href="#/jobs">Jobs</a></li>
            <li><a class="nav-link" href="#/kontakt">Kontakt</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>

  <div class="container">
    <router-view></router-view>
  </div>

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
                  <a href="#/unternehmen">Für Unternehmen</a>
                </li>
                <li>
                  <a href="#/bewerber">Für Bewerber</a>
                </li>
                <li>
                  <a href="#/ueber">Über Uns</a>
                </li>
                <li>
                  <a href="#/jobs">Jobs</a>
                </li>
                <li>
                  <a href="#/kontakt">Kontakt</a>
                </li>
                <li>
                  <a href="#/impressum">Impressum</a>
                </li>
              </ul>
            </div>
            <div class="col-md-4 col-md-offset-1">
              <p class="title">
                Kontakt
              </p>
              <ul class="contact">
                <li>
                  team<span class="two">2</span>work Arbeitskräfteüberlassung GmbH
                </li>
                <li>
                  Mariahilfer Straße 136
                </li>
                <li>
                  1150 Wien, Österreich
                </li>
                <li>
                  Tel +43 (0)1/892 1 892, Fax -14
                </li>
                <li>
                  <a href="mailto:office@team2work.at">
                  E-Mail: office@team2work.at
                </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="copy col-sm-12 col-md-offset-1">
            <div class="col-sm-4">
              <p>
                &copy; 2016 <strong>team<span class="two">2</span>work Arbeitskräfteüberlassung GmbH</strong> - Alle Rechte vorbehalten
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
</div>
</template>

<!-- Vue script -->
<script>
  export default {
    name: 'app',
    mounted() {
      $(document).ready(function () {
        console.log("document ready");
      })
    }
  }
</script>

<!-- Stylesheet -->
<style lang="scss" src="./styles/main.scss"></style>
