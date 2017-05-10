<template>
  <div>
    <backend-hero></backend-hero>
    <div class="wrapper">
      <div class="container">

        <form class='form-horizontal' action='https://t2w-api.herokuapp.com/jobs/' method='POST'>
          <div class="form-group">
						<label for="inputReferenceId" class="col-sm-2 control-label">Referenznummer (optional)</label>
						<div class="col-sm-9">
							<input type='text' name='referenceId' value="" class='form-control' placeholder='1234567K'>
						</div>
					</div>
          <div class="form-group">
						<label for="inputEmail3" class="col-sm-2 control-label">XML Schnittstelle (optional)</label>
						<div class="col-sm-9" style="margin-left: 20px;">
							<div class="checkbox">
									<input type='checkbox' name='xmlOnline[]' value="stepstone" class='' > Stepstone
							</div>
							<div class="checkbox">
								<input type='checkbox' name='xmlOnline[]' value="karriere" class='' > Karriere
							</div>
						</div>
					</div>
    			<div class="form-group">
    				<label for="inputEmail3" class="col-sm-2 control-label">Titel der Anzeige (pflicht)</label>
    				<div class="col-sm-9">
    					<input type='text' name='title' value="" class='form-control' placeholder='1 Software Entwickler (m/w)' required>
    				</div>
    			</div>
          <div class="form-group">
						<label for="inputEmail3" class="col-sm-2 control-label">Job Untertitel (nach Titel der Anzeige, optional)</label>
						<div class="col-sm-9">
							<input type='text' name='subText' value="" class='form-control' placeholder='.. mit spannenden Weiterentwicklungsmöglichkeiten'>
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
          <div class="form-group">
						<label for="inputEmail3" class="col-sm-2 control-label">Min. Gehalt (optional)</label>
						<div class="col-sm-9">
							<input type='text' name='minSalary' value="" class='form-control' placeholder='800'>
						</div>
					</div>
					<div class="form-group">
						<label for="inputEmail3" class="col-sm-2 control-label">Max. Gehalt (optional)</label>
						<div class="col-sm-9">
							<input type='text' name='maxSalary' value="" class='form-control' placeholder='8000'>
						</div>
					</div>
					<div class="form-group">
						<label for="inputEmail3" class="col-sm-2 control-label">Zusatztext f&uuml;r Gehalt (optional)</label>
						<div class="col-sm-9">
							<input type='text' name='salaryText' value="" class='form-control' placeholder='mit der M&ouml;glichkeit auf &Uuml;berzahlung...'>
						</div>
					</div>
          <div class="form-group">
						<label for="inputEmail3" class="col-sm-2 control-label">Gebiet (optional)</label>
						<div class="col-sm-9">
							<input type='text' name='area' value="" class='form-control' placeholder='W, NÖ, BGLD'>
						</div>
					</div>
					<div class="form-group">
						<label for="inputEmail3" class="col-sm-2 control-label">Einleitungstext (optional)</label>
						<div class="col-sm-9">
							<input type='text' name='introText' value="" class='form-control' placeholder='Unser Kunde, ein namhaftes Handelsunternehmen, in der Abfall- und Entsorgungstechnik sucht...'>
						</div>
					</div>
					<div class="form-group">
						<label for="inputEmail3" class="col-sm-2 control-label">Unser Kunde bietet (optional)</label>
						<div class="col-sm-9">
							<input type='text' name='moreInfoText' value="" class='form-control' placeholder='Als Benefit erwartet Sie...'>
						</div>
					</div>
					<div class="form-group">
						<label for="inputEmail3" class="col-sm-2 control-label">E-Mail (optional)</label>
						<div class="col-sm-9">
							<input type='email' name='email' value="bewerbung@team2work.at" class='form-control' placeholder='bewerbung@team2work.at'>
						</div>
					</div>
					<div class="form-group">
						<label for="inputEmail3" class="col-sm-2 control-label">Ansprechperson (optional)</label>
						<div class="col-sm-9">
							<input type='text' name='contact' value="" class='form-control' placeholder='Martina Brandtmayer'>
						</div>
					</div>
					<div class="form-group">
						<label for="inputEmail3" class="col-sm-2 control-label">Erwartungstext (optional)</label>
						<div class="col-sm-9">
							<input type='text' name='expectText' value="" class='form-control' placeholder='Es erwartet Sie eine interessante und vielseitige Tätigkeit in einem technisch...'>
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
