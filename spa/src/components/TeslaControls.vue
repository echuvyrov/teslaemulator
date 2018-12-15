<script>
    import axios from "axios";
    import ShardsVue from 'shards-vue'

    export default {
        name: 'TeslaControls',
        data () {
            return {
                vehicleID: localStorage.getItem('vehicleID')
            }
        },
       methods: {
            honk() {
                axios({ method: "POST",
                    "url": "https://cors-anywhere.herokuapp.com/https://owner-api.teslamotors.com/api/1/vehicles/"+localStorage.getItem('vehicleID')+"/command/honk_horn",
                    "headers": {
                                "Authorization": "Bearer "+localStorage.getItem('token')
                                }
                }).then(result => {
                }, error => {
                    console.error(error);
                });
            },
            flashLights() {
                axios({ method: "POST",
                    "url": "https://cors-anywhere.herokuapp.com/https://owner-api.teslamotors.com/api/1/vehicles/"+localStorage.getItem('vehicleID')+"/command/flash_lights",
                    "headers": {
                                "Authorization": "Bearer "+localStorage.getItem('token')
                                }
                }).then(result => {
                }, error => {
                    console.error(error);
                });
            }
        }
    }
</script>

<template>
<d-card style="max-width: 300px">
    <d-card-header>Car Controls</d-card-header>
    <d-card-body title="Click One!">
        <d-btn v-on:click="honk()">Honk Horn &rarr;</d-btn>
        <d-btn v-on:click="flashLights()">Flash Lights &rarr;</d-btn>
    </d-card-body>
    <d-card-footer>Vehicle ID {{ vehicleID }}</d-card-footer>
</d-card>
</template>
