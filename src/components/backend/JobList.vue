<template>
    <div>
        <backend-hero></backend-hero>
        <div class="wrapper">
            <div class="job-list container" v-show="authenticated">
                <div class="col-sm-10 col-sm-offset-1">
                    <router-link to="/backend/add" :class="['btn btn-primary back-to-list pull-right']">
                        Neuen Job anlegen
                    </router-link>
                    <table class="table table-responsive">
                        <thead>
                            <tr>
                                <th class="col-md-2">Referenznummer</th>
                                <th class="col-md-6">Titel</th>
                                <th class="col-md-2">Gebiet</th>
                                <th class="col-md-2">Aktion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="job in orderedJobs">
                                <td>{{ job.referenceId }}</td>
                                <td class="jobtitle">
                                    {{ job.title }} m/w
                                </td>
                                <td>
                                    {{ job.area }}
                                </td>
                                <td>
                                    <router-link :to="{name:'JobEdit', params:{id:job._id}}" :class="['btn-edit btn btn-warning btn-xs']">
                                        Bearbeiten
                                    </router-link>
                                    <router-link :to="{name:'JobSingle', params:{id:job._id}}" :class="['btn-see btn btn-primary btn-xs']">
                                        Ansehen
                                    </router-link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="container nologin" v-show="!authenticated">
                <div class="col-sm-10 col-sm-offset-1">
                    <h2>Sie sind nicht angemeldet!</h2>
                    <router-link to="/backend/login" :class="['btn-login btn']">
                        Zur Anmeldeseite
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import JobMethods from '../../mixins/job'

    export default {
        name: 'api-job-list',
        data() {
            return {
                jobs: [],
                localStorage,
                authenticated: false,
                loading: false,
            }
        },
        methods: {
            checkAuth() {
                if (localStorage.getItem('profile')) {
                    this.authenticated = true;
                } else {
                    this.authenticated = false;
                }
            }
        },
        computed: {
            orderedJobs() {
                return _.orderBy(this.jobs, 'createdAt', ['desc', 'asc'])
            }
        },
        mounted() {
            this.checkAuth();
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

    .nologin {
        @include rem((padding: 50px 0));
        text-align: center;
    }
    .job-list {
        table.table {
            @include rem((padding: 60px 0));
            tbody {
                tr > td {
                    vertical-align: middle;
                }
                tr {
                    height: 80px;
                    td {
                        &.jobtitle {
                            a {
                                color: $color-red-t2w;
                                font-weight: bold;
                                cursor: pointer;
                            }
                        }
                        p {
                            @include rem(font-size, 14px);
                            max-width: 600px;
                        }
                    }
                    &:hover {
                        background: $color-gray-light;
                    }
                }
            }
        }
    }
    a.back-to-list {
        @include rem((margin: 20px 20px 20px 0));
        @extend %ghost-button-red;
    }
    a.btn-edit {
        @extend %ghost-button-orange-inverted;
    }
    a.btn-login {
        @include rem((margin-top: 20px));
        @extend %ghost-button-green;
    }
    a.btn-see {
        @extend %ghost-button-blue-inverted;
    }
</style>
