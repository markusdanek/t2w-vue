<template>
  <div>
    <backend-hero></backend-hero>
    <div class="wrapper">
      <div class="container" v-show="authenticated">
        <div class="col-sm-12 col-sm-offset-4">
          <notification v-bind:notifications="notifications"></notification>
        </div>
        <div class="col-sm-offset-1">
          <router-link :class="['btn-back btn back-to-list']" :role="['button']" :to="{ name: 'JobList' }">
            Zurück zur Übersicht
          </router-link>
        </div>
        <div class="col-sm-10 col-sm-offset-1">
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
      				<label for="xmlschnittstelle" class="col-sm-3 control-label">XML Schnittstelle</label>
      				<div class="col-sm-8" style="margin-left: 20px;">
      					<div class="checkbox">
      							<input type="checkbox" @change="onChange('stepstone', $event)"> Stepstone
      					</div>
      					<div class="checkbox">
      						<input type="checkbox" @change="onChange('karriere', $event)"> Karriere
      					</div>
      				</div>
      			</div>
            <div class="form-group">
      				<label for="referenceId" class="col-sm-3 control-label">Referenznummer</label>
      				<div class="col-sm-8">
      					<input type='text' name='referenceId' v-model="job.referenceId" class='form-control' placeholder='1234567K'>
      				</div>
      			</div>
            <div class="form-group">
      				<label for="title" class="col-sm-3 control-label">Zweiter Titel</label>
      				<div class="col-sm-8">
      					<input type='text' name='title' v-model="job.subTitle" class='form-control' placeholder=''>
      				</div>
      			</div>
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
      					<input type='email' name='email' v-model="job.email" class='form-control' placeholder='bewerbung@team2work.at'>
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
            <hr>
            <h2>Qualifikationen</h2>
            <div class="form-group" v-for="qual in qualification">
      				<label for="qualifications" class="col-sm-3 control-label">Qualifikation</label>
      				<div class="col-sm-8">
      					<input type='text' name='qualifications' v-model="qual.text" class='form-control' placeholder='Sie verfügen..'>
      				</div>
      			</div>
            <div class="row">
              <a @click.prevent="addQualification" class="col-sm-offset-3 addmore">
                + Neue Qualifikation
              </a>
            </div>
            <hr>
            <h2>Verantwortungen</h2>
            <div class="form-group" v-for="resp in responsibility">
      				<label for="responsibility" class="col-sm-3 control-label">Verantwortung</label>
      				<div class="col-sm-8">
      					<input type='text' name='responsibility' v-model="resp.text" class='form-control' placeholder='Sie müssen...'>
      				</div>
      			</div>
            <div class="row">
              <a @click.prevent="addResponsibility" class="col-sm-offset-3 addmore">
                + Neue Verantwortung
              </a>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-offset-3">
                <button class='submit-btn btn' type='submit' style="display: block;margin: 10px 0 20px 0;">
                  Job hinzufügen
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="container nologin" v-show="!authenticated">
        <div class="col-sm-10 col-sm-offset-1">
          <h2>Sie sind nicht angemeldet!</h2>
          <router-link to="/backend/login"  :class="['btn-login btn back-to-list']">
            Zur Anmeldeseite
          </router-link>
        </div>
      </div>
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
        authenticated: false,
        notifications: [],
        qualification: [],
        responsibility: []
      }
    },
    route: {
      beforeEnter() {
        return checkAuth();
      }
    },
    mounted() {
      this.checkAuth();
    },
    methods: {
      onChange(value, $event){
        if (!this.job.xmlOnline)
          this.job.xmlOnline = []

        const index = this.job.xmlOnline.findIndex(v => v == value)
        const checked = $event.target.checked

        if (checked && index < 0)
          this.job.xmlOnline.push(value)
        if (!checked && index >= 0)
          this.job.xmlOnline.splice(index, 1)
      },
      checkAuth() {
        if (localStorage.getItem('profile')) {
          this.authenticated = true;
          console.log("authenticated");
        } else {
          this.authenticated = false;
          console.log("not authenticated");
        }
      },
      addQualification() {
        this.qualification.push({ text: '' });
      },
      addResponsibility() {
        this.responsibility.push({ text: '' });
      },
      addJob() {
        this.checkEmptyFields();
        let job = Object.assign({}, this.job);
        job.qualifications = this.qualification.map(q => q.text);
        job.responsibility = this.responsibility.map(q => q.text);
        this.$http.post('https://t2w-api.herokuapp.com/jobs/', job).then(response => {
          console.log(response);
          this.notifications.push({
            type: 'success',
            message: 'Job erfolgreich erstellt'
          });
        }, response => {
          console.log(response);
          this.notifications.push({
            type: 'error',
            message: 'Job wurde nicht erstellt'
          });
        });
        this.$router.push('/backend/list');
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
    @extend %ghost-button-red;
  }
  button.submit-btn {
    @extend %ghost-button-green-inverted;
  }
  a.btn-login {
    @extend %ghost-button-green;
  }
  .nologin {
    @include rem((padding: 50px 0));
    text-align: center;
  }
  form {
    h2 {
      @include rem((margin: 20px 0 20px 50px));
      color: $color-red-t2w;
    }
    a.addmore {
      padding-left: 15px;
    }
  }
</style>
