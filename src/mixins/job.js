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
      }
    }
}
