<template>
  <div class="apply-section col-sm-9">
    <div class="waiting">
      <p>{{job.expectText}}</p>
    </div>
    <hr />
    <div class="apply-contact">
      <p>
        Wenn Sie Interesse an dieser herausfordernden Tätigkeit haben freuen wir
        uns über Ihre aussagekräftigen Bewerbungsunterlagen mit Lebenslauf samt
        Foto an
        <a :href="`mailto:${job.email}?subject=Bewerbung als ${job.title}`" class="mailto">{{job.email}}</a> z.Hd. Frau {{job.contact}}.
      </p>
    </div>
  </div>
</template>

<script>
  import JobMethods from '../../mixins/job'

  export default {
    name: 'jobsingle-apply',
    data() {
      return {
        job: []
      }
    },
    created() {
      this.retrieveJobSingle();
    },
    mixins: [JobMethods]
  }
</script>

<style scoped lang="scss">
  @import "../../styles/util/util.scss";

  .apply-section {
    @include rem((margin: 30px 0));
    @include rem((padding: 0));
    .apply-contact {
      a.mailto {
        color: $color-red-t2w;
        text-decoration: none;
        &:hover {
          border-bottom: 1px solid $color-red-t2w;
          text-decoration: none;
        }
      }
    }
  }
</style>
