const { createApp } = Vue


createApp({
    data() {
        return {
            tasks: [
                { 
                    text: "Preparare il pranzo",
                    done: false 
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

    }

}).mount('#app')