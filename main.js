const { createApp } = Vue


createApp({
    data() {
        return {
            tasks: [
                { 
                    text: "Preparare il pranzo",
                    done: true 
                },
                { 
                    text: "Lavare il pavimento", 
                    done: false
                },
                { 
                    text: "Fare la spesa", 
                    done: false 
                },
                { 
                    text: "Palestra", 
                    done: false
            }
            ],
            newTask: {
                text: "",
                done: false
            }
        }
    },
    created() {

    },
    methods: {
        /*MILESTONE 2
            Visualizzare una "x": al click todo viene rimosso dalla lista. */
        deleteTask(index) {
            this.tasks.splice(index, 1)
        },
        addTask() {
            if (this.tasks.filter(e => e.text === this.newTask.text).length > 0) {
                alert("Task già inserita")
            } else if (this.newTask.text == ""){
                alert("Non hai inserito Task")
            } else {
                let addNewTask = Object.assign({}, this.newTask);
                this.tasks.push(addNewTask)
                this.newTask.text = ""
            }
        },
        /* BONUS 2 : cliccare sul testo inverte il valore di done */
        changeStatus(index){
            if(this.tasks[index].done == true){
                this.tasks[index].done = false
            } else {
                this.tasks[index].done = true
            }
        }
    }

}).mount('#app')