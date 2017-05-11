<template>
  <div>
    <backend-hero></backend-hero>
    <div class="wrapper">
      <div class="container">

        <router-link :class="['btn btn-primary pull-right back-to-list']" :role="['button']" :to="{ name: 'JobList' }">Return to jobs</router-link>
        <notification v-bind:notifications="notifications"></notification>

        <form class='form-horizontal' v-on:submit.prevent="addJob">
          <h2 class="">Pflicht</h2>
          <div class="form-group">
    				<label for="title" class="col-sm-3 control-label">Titel der Anzeige</label>
    				<div class="col-sm-8">
    					<input type='text' name='title' :value="job.title" v-model="job.title" class='form-control' placeholder='1 Software Entwickler (m/w)' required>
    				</div>
    			</div>
          <div class="form-group">
    				<label for="salary" class="col-sm-3 control-label">Gehalt</label>
    				<div class="col-sm-8">
    					<input type='text' name='salary' :value="job.salary" v-model="job.salary" class='form-control' placeholder='3000'>
    				</div>
    			</div>
          <div class="form-group">
    				<label for="hours" class="col-sm-3 control-label">Wochenstunden</label>
    				<div class="col-sm-8">
    					<input type='text' name='hours' :value="job.hours" v-model="job.hours" class='form-control' placeholder='38,5h/Woche' required>
    				</div>
    			</div>
          <hr>
          <h2>Optional</h2>
          <div class="form-group">
    				<label for="referenceId" class="col-sm-3 control-label">Referenznummer</label>
    				<div class="col-sm-8">
    					<input type='text' name='referenceId' v-model="job.referenceId" class='form-control' placeholder='1234567K'>
    				</div>
    			</div>

          <div v-for="qual in qualification">
            <input v-model="qual.text">
          </div>
          <button @click.prevent="addQualification">
            New Qualification
          </button>
          <!-- <div class="form-group">
    				<label for="inputEmail3" class="col-sm-2 control-label">XML Schnittstelle (optional)</label>
    				<div class="col-sm-9" style="margin-left: 20px;">
    					<div class="checkbox">
    							<input type='checkbox' name='xmlOnline[]' value="stepstone" class='' {{#if (ifIn 'stepstone' job.xmlOnline)}} checked="checked" {{/if}}> Stepstone
    					</div>
    					<div class="checkbox">
    						<input type='checkbox' name='xmlOnline[]' value="karriere" class='' {{#if (ifIn 'karriere' job.xmlOnline)}} checked="checked" {{/if}}> Karriere
    					</div>
    				</div>
    			</div> -->

          <div class="form-group">
    				<label for="subText" class="col-sm-3 control-label">Job Untertitel (nach Titel der Anzeige)</label>
    				<div class="col-sm-8">
    					<input type='text' name='subText' v-model="job.subText" class='form-control' placeholder='.. mit spannenden Weiterentwicklungsmöglichkeiten'>
    				</div>
    			</div>
    			<div class="form-group">
    				<label for="minSalary" class="col-sm-3 control-label">Min. Gehalt</label>
    				<div class="col-sm-8">
    					<input type='text' name='minSalary' v-model="job.minSalary" class='form-control' placeholder='800'>
    				</div>
    			</div>
    			<div class="form-group">
    				<label for="maxSalary" class="col-sm-3 control-label">Max. Gehalt</label>
    				<div class="col-sm-8">
    					<input type='text' name='maxSalary' v-model="job.maxSalary" class='form-control' placeholder='8000'>
    				</div>
    			</div>
    			<div class="form-group">
    				<label for="salaryText" class="col-sm-3 control-label">Zusatztext f&uuml;r Gehalt</label>
    				<div class="col-sm-8">
    					<input type='text' name='salaryText' v-model="job.salaryText" class='form-control' placeholder='mit der M&ouml;glichkeit auf &Uuml;berzahlung...'>
    				</div>
    			</div>
    			<div class="form-group">
    				<label for="area" class="col-sm-3 control-label">Gebiet</label>
    				<div class="col-sm-8">
    					<input type='text' name='area' v-model="job.area" class='form-control' placeholder='W, NÖ, BGLD'>
    				</div>
    			</div>
    			<div class="form-group">
    				<label for="introText" class="col-sm-3 control-label">Einleitungstext</label>
    				<div class="col-sm-8">
    					<input type='text' name='introText' v-model="job.introText" class='form-control' placeholder='Unser Kunde, ein namhaftes Handelsunternehmen, in der Abfall- und Entsorgungstechnik sucht...'>
    				</div>
    			</div>
    			<div class="form-group">
    				<label for="moreInfoText" class="col-sm-3 control-label">Unser Kunde bietet</label>
    				<div class="col-sm-8">
    					<input type='text' name='moreInfoText' v-model="job.moreInfoText" class='form-control' placeholder='Als Benefit erwartet Sie...'>
    				</div>
    			</div>
    			<div class="form-group">
    				<label for="email" class="col-sm-3 control-label">E-Mail</label>
    				<div class="col-sm-8">
    					<input type='email' name='email' value="bewerbung@team2work.at" v-model="job.email" class='form-control' placeholder='bewerbung@team2work.at'>
    				</div>
    			</div>
    			<div class="form-group">
    				<label for="contact" class="col-sm-3 control-label">Ansprechperson</label>
    				<div class="col-sm-8">
    					<input type='text' name='contact' v-model="job.contact" class='form-control' placeholder='Martina Brandtmayer'>
    				</div>
    			</div>
    			<div class="form-group">
    				<label for="expectText" class="col-sm-3 control-label">Erwartungstext</label>
    				<div class="col-sm-8">
    					<input type='text' name='expectText' v-model="job.expectText" class='form-control' placeholder='Es erwartet Sie eine interessante und vielseitige Tätigkeit in einem technisch...'>
    				</div>
    			</div>
          <button class='btn btn-lg btn-primary' type='submit'>Job hinzufügen</button>
        </form>


      </div>


      <pre>{{ $data }}</pre>
      {{ job }}
      {{ this.job }}
      {{ this.job.qualifications }}
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import JobMethods from '../../mixins/job';
  import Backend_Hero from '@/components/backend/Hero';
  import Notification from '@/components/backend/notifications.vue';
  Vue.component('backend-hero', Backend_Hero);

  export default {
    name: 'api-job-add',
    data() {
      return {
        job: {},
        loading: false,
        notifications: [],
        qualification: []
      }
    },
    route: {
      beforeEnter() {
        return checkAuth();
      }
    },
    methods: {
      removeRun: function(i) {
        console.log("Remove", i);
        this.settings.runs.splice(i,1);
      },
      addQualification() {
        this.qualification.push({ text: '' });
        this.job.qualifications = this.qualification;
      },
      addJob: function() {
        this.checkEmptyFields();
        // this.job.qualifications = this.qualification;
        let job = Object.assign({}, this.job);
        job.qualifications = this.qualifications.map(q => q.text);

        console.log(this.qualification);
        console.log(this.job.qualifications);
        console.log(this.job);
        console.log(job);

        this.$http.post('http://localhost:9001/jobs/', job).then(response => {
          console.log(response);
          this.notifications.push({
            type: 'success',
            message: 'Job created successfully'
          });
        }, response => {
          console.log(response);
          this.notifications.push({
            type: 'error',
            message: 'Job not created'
          });
        });
      }
    },
    mixins: [JobMethods],
    components: {
      'notification' : Notification
    }
  }
</script>

<style scoped lang="scss">
  @import "../../styles/util/util.scss";

  a.back-to-list {
    @include rem((margin: 20px));
    background: $color-red-t2w;
    border: none;
  }
  form {
    h2 {
      @include rem((margin: 20px 0 20px 50px));
      color: $color-red-t2w;
    }
  }
</style>
