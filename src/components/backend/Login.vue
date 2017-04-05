<template>
  <div>
    <div class="container">
  	<form class="form-signin" action="" method="post">
  		<h2 class="form-signin-heading">Bitte melden Sie sich an</h2>
  		<label for="inputEmail" class="sr-only">Benutzername</label>
  		<input id="username" class="form-control" type="text" name="username" placeholder="Benutzername" autofocus required>
  		<label for="inputPassword" class="sr-only">Passwort</label>
  		<input id="password" class="form-control" type="password" name="password" placeholder="Passwort" required>
  		<button class="btn btn-lg btn-primary btn-block" type="submit">Anmelden</button>
  	</form>
  </div>

  </div>
</template>

<script>
  import Vue from 'vue'
  // import About_Hero from '@/components/about/Hero'
  // import About_Employee from '@/components/about/Employee'
  // import About_Text from '@/components/about/Text'
  // Vue.component('about-hero', About_Hero);
  // Vue.component('about-employee', About_Employee);
  // Vue.component('about-text', About_Text);

  export default {
    name: 'login'
  }
</script>

<style scoped lang="scss">
  @import "../../styles/util/util.scss";

  .wrapper {
  	background: $color-white;
  }
</style>
