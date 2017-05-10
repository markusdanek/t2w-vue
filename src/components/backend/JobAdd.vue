<template>
  <div>
    <backend-hero></backend-hero>
    <div class="wrapper">
      <div class="container">
        <form class='form-horizontal' action='https://t2w-api.herokuapp.com/jobs/' method='POST'>
    			<div class="form-group">
    				<label for="inputEmail3" class="col-sm-2 control-label">Titel der Anzeige (pflicht)</label>
    				<div class="col-sm-9">
    					<input type='text' name='title' value="" class='form-control' placeholder='1 Software Entwickler (m/w)' required>
    				</div>
    			</div>
          <div class="form-group">
    				<label for="inputEmail3" class="col-sm-2 control-label">Gehalt (pflicht)</label>
    				<div class="col-sm-9">
    					<input type='text' name='salary' value="" class='form-control' placeholder='3000'>
    				</div>
    			</div>
          <div class="form-group">
    				<label for="inputEmail3" class="col-sm-2 control-label">Wochenstunden (pflicht)</label>
    				<div class="col-sm-9">
    					<input type='text' name='hours' value="" class='form-control' placeholder='38,5h/Woche' required>
    				</div>
    			</div>
          <button class='btn btn-lg btn-primary' type='submit'>Job hinzufügen</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import JobMethods from '../../mixins/job';
  import Backend_Hero from '@/components/backend/Hero';
  Vue.component('backend-hero', Backend_Hero);

  export default {
    name: 'api-job-add',
    data() {
      return {
        jobs: [],
        loading: false,
      }
    },
    created() {
      this.retrieveJobs();
    },
    route: {
      beforeEnter() {
        return checkAuth();
      }
    },
    mixins: [JobMethods]
  }
</script>

<style scoped lang="scss">
  @import "../../styles/util/util.scss";


</style>
