/* <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script> */

const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Ok',
            title: 'primo pilota',
            firstName: 'Lando',
            lastName: 'Norris',
            counter: 2,
            classString: ""
        }
    }
}).mount('#app');
