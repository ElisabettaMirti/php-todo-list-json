const { createApp } = Vue

    createApp({
        data() {
        return {
            toDoList: [],
            apiURL: './api/get_all_tasks.php'
            }
        },
        methods: {
            getToDoList(){
                axios.get(this.apiURL)
                    .then((response) => {
                    console.log(response);
                    this.toDoList = response.data.tasks;
                })
                .catch(function (error) {
                console.log(error);
                })
                .finally(function () {
                // always executed
                });  
            }
        },
        created(){
            this.getToDoList();
        }
    }).mount('#app')