<template>
<div>
  <HeroSmall title="Job hinzufügen" template="backend" />
  <div class="wrapper">
    <b-container>
      <div v-show="authenticated">
        <b-col>
          <notification v-bind:notifications="notifications"></notification>
        </b-col>
        <b-col>
          <router-link :class="['btn-back btn back-to-list']" :role="['button']" :to="{ name: 'jobList' }">
            Zurück zur Übersicht
          </router-link>
        </b-col>
        <b-col>
          <form class='form-horizontal' v-on:submit.prevent="addJob">
            <h2 class="">Pflicht</h2>
            <div class="form-group">
              <label for="title" class="control-label">Titel der Anzeige</label>
              <b-col>
                <input type='text' name='title' v-model="job.title" class='form-control' required>
              </b-col>
            </div>
            <div class="form-group">
              <label for="salary" class="control-label">Gehalt</label>
              <b-col>
                <input type='text' name='salary' v-model="job.salary" class='form-control'>
                </b-col>
            </div>
            <div class="form-group">
              <label for="hours" class="control-label">Wochenstunden</label>
              <b-col>
                <input type='text' name='hours' v-model="job.hours" class='form-control' required>
                  </b-col>
            </div>
            <hr>
            <h2>Optional</h2>
            <div class="form-group">
              <label for="xmlschnittstelle" class="col-sm-3 control-label">XML Schnittstelle</label>
              <b-col>
                <div class="checkbox">
                  <input type="checkbox" @change="onChange('stepstone', $event)"> Stepstone
                                </div>
                  <div class="checkbox">
                    <input type="checkbox" @change="onChange('karriere', $event)"> Karriere
                                </div>
              </b-col>
            </div>
            <div class="form-group">
              <label for="referenceId" class="col-sm-3 control-label">Referenznummer</label>
              <b-col>
                <input type='text' name='referenceId' v-model="job.referenceId" class='form-control'>
                        </b-col>
            </div>
            <div class="form-group">
              <label for="title" class="col-sm-3 control-label">Zweiter Titel</label>
              <b-col>
                <input type='text' name='title' v-model="job.subTitle" class='form-control'>
                          </b-col>
            </div>
            <div class="form-group">
              <label for="subText" class="col-sm-3 control-label">Job Untertitel (nach Titel der Anzeige)</label>
              <b-col>
                <input type='text' name='subText' v-model="job.subText" class='form-control'>
                            </b-col>
            </div>
            <div class="form-group">
              <label for="minSalary" class="col-sm-3 control-label">Min. Gehalt</label>
              <b-col>
                <input type='text' name='minSalary' v-model="job.minSalary" class='form-control'>
                            </b-col>
            </div>
            <div class="form-group">
              <label for="maxSalary" class="col-sm-3 control-label">Max. Gehalt</label>
              <b-col>
                <input type='text' name='maxSalary' v-model="job.maxSalary" class='form-control'>
                            </b-col>
            </div>
            <div class="form-group">
              <label for="salaryText" class="col-sm-3 control-label">Zusatztext f&uuml;r Gehalt</label>
              <b-col>
                <input type='text' name='salaryText' v-model="job.salaryText" class='form-control'>
                            </b-col>
            </div>
            <div class="form-group">
              <label for="area" class="col-sm-3 control-label">Gebiet</label>
              <b-col>
                <input type='text' name='area' v-model="job.area" class='form-control'>
                            </b-col>
            </div>
            <div class="form-group">
              <label for="introText" class="col-sm-3 control-label">Einleitungstext</label>
              <b-col>
                <input type='text' name='introText' v-model="job.introText" class='form-control'>
                            </b-col>
            </div>
            <div class="form-group">
              <label for="moreInfoText" class="col-sm-3 control-label">Unser Kunde bietet</label>
              <b-col>
                <input type='text' name='moreInfoText' v-model="job.moreInfoText" class='form-control'>
                            </b-col>
            </div>
            <div class="form-group">
              <label for="email" class="col-sm-3 control-label">E-Mail</label>
              <b-col>
                <input type='email' name='email' v-model="job.email" class='form-control'>
                            </b-col>
            </div>
            <div class="form-group">
              <label for="contact" class="col-sm-3 control-label">Ansprechperson</label>
              <b-col>
                <input type='text' name='contact' v-model="job.contact" class='form-control'>
                            </b-col>
            </div>
            <div class="form-group">
              <label for="expectText" class="col-sm-3 control-label">Erwartungstext</label>
              <b-col>
                <input type='text' name='expectText' v-model="job.expectText" class='form-control'>
                            </b-col>
            </div>
            <hr>
            <h2>Qualifikationen</h2>
            <div class="form-group" v-for="qual in qualification" :key="qual.id">
              <label for="qualifications" class="col-sm-3 control-label">Qualifikation</label>
              <b-col>
                <input type='text' name='qualifications' v-model="qual.text" class='form-control'>
                            </b-col>
            </div>
            <b-row>
              <a @click.prevent="addQualification" class="col-sm-offset-3 addmore">
                                + Neue Qualifikation
                            </a>
            </b-row>
            <hr>
            <h2>Aufgaben</h2>
            <div class="form-group" v-for="resp in responsibility" :key="resp.id">
              <label for="responsibility" class="col-sm-3 control-label">Aufgaben</label>
              <b-col>
                <input type='text' name='responsibility' v-model="resp.text" class='form-control'>
                            </b-col>
            </div>
            <b-row>
              <a @click.prevent="addResponsibility" class="col-sm-offset-3 addmore">
                                + Neue Verantwortung
                            </a>
            </b-row>
            <hr>
            <b-row>
              <b-col>
                <button class='submit-btn btn' type='submit' style="display: block;margin: 10px 0 20px 0;">
                                    Job hinzufügen
                                </button>
              </b-col>
            </b-row>
          </form>
        </b-col>
        <div class="formating-info col-sm-10 col-sm-offset-1">
          <div class="alert alert-info" role="alert">
            <b-row>
              <b-col>
                <b>Fett</b>: __Wort__ (zwei Unterstrich vor und nach dem Wort)<br/>
              </b-col>
                <b-col>
                  <em>Kursiv</em>: _Wort_ (ein Unterstrich vor und nach dem Wort)
                </b-col>
            </b-row>
          </div>
        </div>
      </div>
      <div class="nologin" v-show="!authenticated">
        <b-container>
          <b-col>
            <h2>Sie sind nicht angemeldet!</h2>
            <router-link to="/backend/login" :class="['btn-login btn back-to-list']">
              Zur Anmeldeseite
            </router-link>
          </b-col>
        </b-container>
      </div>
    </b-container>
  </div>
</div>
</template>

<script>
import JobMethods from '../../mixin';
import HeroSmall from '@/components/HeroSmall.vue'
import Notification from '@/views/backend/notifications.vue';

export default {
  name: 'jobAdd',
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
      return this.checkAuth();
    }
  },
  mounted() {
    this.checkAuth();
  },
  methods: {
    onChange(value, $event) {
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
      } else {
        this.authenticated = false;
      }
    },
    addQualification() {
      this.qualification.push({
        text: ''
      });
    },
    addResponsibility() {
      this.responsibility.push({
        text: ''
      });
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
    'notification': Notification,
    HeroSmall
  },
  metaInfo: {
    title: 'team2work',
    titleTemplate: '%s » Job hinzufügen',
    meta: [
      {
        'property': 'og:title',
        'content': 'team2work',
        'template': chunk => `${chunk} - Job hinzufügen`,
        'vmid': 'og:title'
      },
      {
        'property': 'og:site_name',
        'content': 'team2work',
        'template': chunk => `${chunk} - Job hinzufügen`,
        'vmid': 'og:site_name'
      },
      {
        'property': 'og:type',
        'content': 'website'
      },
      {
        'property': 'og:url',
        'content': 'https://team2work.at/#/backend/jobadd'
      }
    ]
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
.formating-info {
    @include rem((margin-top: 20px));
    .alert-info {
        background-color: transparent;
        color: $color-black;
        border-color: $color-red-t2w;
    }
}
</style>
