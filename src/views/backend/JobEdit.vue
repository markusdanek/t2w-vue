<template>
    <div>
        <HeroSmall title="Job bearbeiten" template="backend" />
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
                    <form class='form-horizontal' v-on:submit.prevent="editJob">
                        <h2 class="">Pflicht</h2>
                        <div class="form-group">
                            <label for="title" class="col-sm-3 control-label">Titel der Anzeige</label>
                            <b-col>
                                <input type='text' name='title' v-model="job.title" class='form-control' required />
                            </b-col>
                        </div>
                        <div class="form-group">
                            <label for="salary" class="col-sm-3 control-label">Gehalt</label>
                            <b-col>
                                <input type='text' name='salary' v-model="job.salary" class='form-control' />
                            </b-col>
                        </div>
                        <div class="form-group">
                            <label for="hours" class="col-sm-3 control-label">Wochenstunden</label>
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
                                    <input type="checkbox" :checked="job.xmlOnline && job.xmlOnline.includes('stepstone')" @change="onChange('stepstone', $event)"> Stepstone
                                </div>
                                <div class="checkbox">
                                    <input type="checkbox" :checked="job.xmlOnline && job.xmlOnline.includes('karriere')" @change="onChange('karriere', $event)"> Karriere
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
                            <label for="contact" class="control-label">Ansprechperson</label>
                            <b-col>
                                <input type='text' name='contact' v-model="job.contact" class='form-control'>
                            </b-col>
                        </div>
                        <div class="form-group">
                            <label for="expectText" class="control-label">Erwartungstext</label>
                            <b-col>
                                <input type='text' name='expectText' v-model="job.expectText" class='form-control'>
                            </b-col>
                        </div>
                        <hr>
                        <h2>Qualifikationen</h2>
                        <div class="form-group" v-for="(qual, index) in job.qualifications" :key="index">
                            <label for="qualifications" class="col-sm-3 control-label">Qualifikation {{ index }}</label>
                            <b-row>
                                <b-col>
                                    <input type='text' :name="'qual'+index" v-model="qualifications[index]" class='form-control'>
                                </b-col>
                                <b-col>
                                    <button class="btn btn-danger" @click.prevent="removeQualifiaction(index)"><icon name="trash-alt"></icon></button>
                                </b-col>
                            </b-row>
                        </div>
                        <b-row>
                            <a @click.prevent="addQualification" class="col-sm-offset-3 addmore">
                                + Neue Qualifikation
                            </a>
                        </b-row>
                        <hr>
                        <h2>Aufgaben</h2>
                        <div class="form-group" v-for="(resp, index) in job.responsibility" :key="index">
                            <label for="responsibility" class="col-sm-3 control-label">Aufgaben {{ index }}</label>
                            <b-row>
                                <b-col>
                                    <input type='text' :name="'resp'+index" v-model="responsibility[index]" class='form-control'>
                                </b-col>
                                <b-col>
                                    <button class="btn btn-danger" @click.prevent="removeResponsibility(index)"><icon name="trash-alt"></icon></button>
                                </b-col>
                            </b-row>
                        </div>
                        <b-col>
                            <a @click.prevent="addResponsibility" class="col-sm-offset-3 addmore">
                                + Neue Aufgabe
                            </a>
                        </b-col>
                        <hr>
                        <b-row>
                            <div class="col-sm-6 col-sm-offset-3">
                                <button class='submit-btn btn' type='submit' style="display: block;margin: 10px 0 20px 0;">
                                    Änderungen speichern
                                </button>
                            </div>
                        </b-row>
                    </form>
                    <form v-on:submit.prevent="deleteJob">
                        <div class="row">
                            <b-col>
                                <button class='btn-delete btn' style="margin: 20px 0" type='submit'>
                                    Job löschen
                                </button>
                            </b-col>
                        </div>
                    </form>
                </b-col>
                <div class="formating-info">
                  <b-col>
                    <div class="alert alert-info" role="alert">
                        <div class="row">
                            <b-col>
                                <b>Fett</b>: __Wort__ (zwei Unterstrich vor und nach dem Wort)<br/>
                            </b-col>
                            <b-col>
                                <em>Kursiv</em>: _Wort_ (ein Unterstrich vor und nach dem Wort)
                            </b-col>
                        </div>
                    </div>
                  </b-col>
                </div>
            </div>
            <div class="nologin" v-show="!authenticated">
              <b-container>
                <b-col>
                    <h2>Sie sind nicht angemeldet!</h2>
                    <router-link to="/backend/login" :class="['btn-login btn']">
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
    import Notification from '@/views/backend/notifications.vue';
    import HeroSmall from '@/components/HeroSmall.vue'


    export default {
        name: 'jobEdit',
        data() {
            return {
                job: [],
                jobs: [],
                notifications: [],
                qualifications: [],
                responsibility: [],
                xmlOnline: [],
                authenticated: false,
                loading: false,
            }
        },
        created() {
            this.retrieveJobSingle();
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
                this.qualifications.push({
                    text: ''
                });
            },
            addResponsibility() {
                this.responsibility.push({
                    text: ''
                });
            },
            removeQualifiaction(index) {
                this.qualifications.splice(index, 1);
            },
            removeResponsibility(index) {
                this.responsibility.splice(index, 1);
            },
            editJob() {
                let job = Object.assign({}, this.job);
                job.qualifications = this.qualifications;
                job.responsibility = this.responsibility;
                this.$http.post('https://t2w-api.herokuapp.com/jobs/' + this.$route.params.id, job).then(response => {
                    console.log(response);
                    this.notifications.push({
                        type: 'success',
                        message: 'Job erfolgreich geändert'
                    });
                }, response => {
                    console.log(response);
                    this.notifications.push({
                        type: 'error',
                        message: 'Job wurde nicht geändert'
                    });
                });
            },
            deleteJob() {
                let job = Object.assign({}, this.job);
                this.$http.get('https://t2w-api.herokuapp.com/jobs/' + job._id + '/delete').then(response => {
                    console.log(response);
                    this.notifications.push({
                        type: 'success',
                        message: 'Job erfolgreich gelöscht'
                    });
                }, response => {
                    console.log(response);
                    this.notifications.push({
                        type: 'error',
                        message: 'Job wurde nicht gelöscht'
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
          titleTemplate: '%s » Job editieren',
          meta: [
            {
              'property': 'og:title',
              'content': 'team2work',
              'template': chunk => `${chunk} - Job editieren`,
              'vmid': 'og:title'
            },
            {
              'property': 'og:site_name',
              'content': 'team2work',
              'template': chunk => `${chunk} - Job editieren`,
              'vmid': 'og:site_name'
            },
            {
              'property': 'og:type',
              'content': 'website'
            },
            {
              'property': 'og:url',
              'content': 'https://team2work.at/#/backend/jobedit'
            }
          ]
        }
    }
</script>

<style scoped lang="scss">
    @import "@/styles/util/util.scss";

    .wrapper {
      background: #FFF;
    }
    a.back-to-list {
        @include rem((margin: 20px));
        @extend %ghost-button-red;
    }
    button.submit-btn {
        @extend %ghost-button-orange-inverted;
    }
    button.btn-delete {
        @extend %ghost-button-red-inverted;
    }
    a.btn-login {
        @include rem((margin-top: 20px));
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
