const { createApp } = Vue

    createApp({
        data() {
        return {
            toDoList: [],
            apiURL: './api/get_all_tasks.php',
            newTaskContent: ''
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
            },
            addTask: function(){
                const newTask = {
                    content: this.newTaskContent,
                    done: false
                }
                this.toDoList.push(newTask);
                this.newTaskContent = "";
            },
        },
        created(){
            this.getToDoList();
        }
    }).mount('#app')