<template>
    <div class="job-list">
        <div class="col-sm-11 col-md-7">
            <table class="table table-responsive">
                <thead>
                    <tr>
                        <th class="col-md-9">Jobtitel</th>
                        <th class="col-md-3">Gebiet</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="job in jobs">
                        <td class="jobtitle">
                            <router-link :to="{name:'JobSingle', params:{id:job._id}}">
                                {{ job.title }} m/w
                            </router-link>
                            <p>{{ job.introText | truncate(150) }} </p>
                        </td>
                        <td>
                            {{ job.area }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import JobMethods from '../../mixins/job'

    export default {
        name: 'jobs-list',
        data() {
            return {
                jobs: [],
                loading: false,
            }
        },
        filters: {
            truncate: function(text, length, clamp) {
                clamp = clamp || '...';
                length = length || 30;
                if (text.length <= length) return text;
                var tcText = text.slice(0, length - clamp.length);
                var last = tcText.length - 1;
                while (last > 0 && tcText[last] !== ' ' && tcText[last] !== clamp[0]) last -= 1;
                last = last || length - clamp.length;
                tcText = tcText.slice(0, last);
                return tcText + clamp;
            }
        },
        created() {
            this.retrieveJobsRandom();
        },
        mixins: [JobMethods]
    }
</script>

<style scoped lang="scss">
    @import "../../styles/util/util.scss";

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
</style>
