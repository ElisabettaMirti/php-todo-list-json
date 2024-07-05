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
            isDone : function(task){  //funzione per mettere e togliere la classe done al task
                if (task.done === false) {
                    task.done = true;
                } else {
                    task.done = false;
                }
            },
    
            removeTask: function(taskIndex){ //funzione per eliminare il task (grazie Giordano di avermi esplicato nuovamente lo splice)
                this.toDoList.splice(taskIndex, 1);
            },

            editTask: function(taskIndex){
                this.toDoList[taskIndex].content = prompt('Modifica qua:');
            }
        },
        created(){
            this.getToDoList();
        }
    }).mount('#app')