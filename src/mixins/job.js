module.exports = {
    methods: {
      shuffleArray: function(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
          while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
          }
        return array;
      },
      retrieveJobs() {
        this.loading = true;
        this.$http.get('https://t2w-node.herokuapp.com/api/jobs/json').then(response => {
          this.jobs = response.data;
        }, response => {
          console.log("Error", response);
        }).then(_ => {
          this.loading = false;
        });
      },
      retrieveJobsRandom() {
        this.loading = true;
        this.$http.get('https://t2w-node.herokuapp.com/api/jobs/json').then(response => {
          this.jobs = response.data;
          this.jobs = this.shuffleArray(this.jobs);
        }, response => {
          console.log("Error", response);
        }).then(_ => {
          this.loading = false;
        });
      },
      retrieveJobSingle() {
        this.loading = true;
        this.$http.get('https://t2w-node.herokuapp.com/api/jobs/' + this.$route.params.id + '/json')
          .then(response => {
            this.job = response.data;
            this.responsibility = response.data.responsibility;
            this.qualifications = response.data.qualifications;
            this.maxSalary = response.data.maxSalary;
            this.minSalary = response.data.minSalary;
            if (this.maxSalary == '') {
                this.maxSalary = 'Keine Angabe';
            } else {
                this.maxSalary = response.data.maxSalary;
            }
            if (this.minSalary == '') {
                this.minSalary = 'Laut KV';
            } else {
                this.minSalary = response.data.minSalary;
            }
          }, response => {
            console.log("Error", response);
          });
      },
      checkEmptyFields() {
        if(this.job.referenceId == undefined) {
          this.job.referenceId = "";
        }
        if (this.job.subText == undefined){
          this.job.subText = "";
        }
        if (this.job.subText == undefined){
          this.job.subText = "";
        }
        if (this.job.minSalary == undefined){
          this.job.minSalary = "";
        }
        if (this.job.maxSalary == undefined){
          this.job.maxSalary = "";
        }
        if (this.job.salaryText == undefined){
          this.job.salaryText = "";
        }
        if (this.job.area == undefined){
          this.job.area = "";
        }
        if (this.job.introText == undefined){
          this.job.introText = "";
        }
        if (this.job.moreInfoText == undefined){
          this.job.moreInfoText = "";
        }
        if (this.job.email == undefined){
          this.job.email = "";
        }
        if (this.job.contact == undefined){
          this.job.contact = "";
        }
        if (this.job.expectText == undefined){
          this.job.expectText = "";
        }
        if (this.job.qualifications == undefined){
          this.job.qualifications = "";
        }
        if (this.job.responsibility == undefined){
          this.job.responsibility = "";
        }
      }
    }
}
