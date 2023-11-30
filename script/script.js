/* <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script> */

const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Ok',
            title: 'Ferrari F1 Driver',
            firstName: 'Charles',
            lastName: 'Leclerc',
            pilotNumber: 16,
            profileImg: "./img/Leclerc.jfif"
        }
    }
}).mount('#app');
