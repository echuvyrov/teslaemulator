<script>
    import axios from "axios";

// Base everything black
//$MT302,$PBSB,$W38B,$PRM31,$IN3PB
// Base everything White
//$MT302,$PPSW,$W38B,$PRM31,$IN3PB
// Everything upgraded
//$MT304,$PPMR,$SPT31,$W32P,$BC3R,$SLR1,$PL31,$PRM31,$IN3PW,$APPB,$APF2

    function convertOptionCodeToText(option_code) {
      var options = {
          "PPMR": "Red Multi-Coat Paint",
          "PPSW": "Premium White Paint",
          "DV2W": "Rear Wheel Drive",
          "DV4W": "All Wheel Drive",
          "BC3R": "Red Brake Calipers",
          "BC3B": "Base Brake Calipers",
          "RF3G": "Glass Roof Model 3",
          "COUS": "Country US",
          "COFI": "Country Finland",
          "COCH": "Country Switzerland",
          "RENA": "Region North America",
          "CH07": "Model 3 Charger 7kW",
          "AU3P": "Model 3 Premium Audio",
          "LTPB": "Premium Black Interior Trim",
          "SU3C": "Model 3 Suspension ??",
          "PC30": "Non-performance Chassis",
          "PC31": "Performance Chassis",
          "UT3P": "Model 3 Premium Headliner",
          "AD15": "J1772",
          "TW00": "No Towing Package",
          "TW01": "Towing Package",
          "REEU": "Region Europe",
          "UTAB": "Alcantara Black Headliner",
          "SP01": "Security Package",
        "MDL3": "Model 3",
        "MDLS": "Model S",
        "UTZW": "Light Headliner",
        "BR00": "No firmware limit",
        "BR03": "Firmware limit",
        "HC01": "Home Charging Installation",
        "HC00": "null",
        "AU00": "No Audio Package",
        "AU01": "Premium Sound",
        "LT4B": "LT4B",
        "LT4C": "LT4C",
        "SC00": "Supercharging",
        "WTDS": "19\" Sonic Carbon Slipstream Wheels",
        "WTSS": "21\" Turbine",
        "PS01": "Parcel Shelf",
        "PS00": "No Parcel Shelf",
        "RFFG": "Glass Roof",
        "S32C": "S32C",
        "DU01": "Drive Unit - Infineon",
        "DU00": "Drive Unit - IR",
        "S32P": "S32P",
        "SC05": "Free Supercharging",
        "S32W": "S32W",
        "BP00": "No Ludicrous",
        "BP01": "Ludicrous Speed Upgrade",
        "IVBSW": "Ultra White Interior",
        "BC0R": "Tesla Red Brake Calipers",
        "SU00": "Standard Suspension",
        "WTTC": "21\" Sonic Carbon Twin Turbine Wheels",
        "X040": "No DAB Radio",
        "RFP2": "Sunroof",
        "SU01": "Smart Air Suspension",
        "BTX6": "100 kWh",
        "LT3W": "LT3W",
        "BTX5": "75 kWh",
        "TIM3": "TIM3",
        "CDM0": "No CHAdeMO Charging Adaptor",
        "S31B": "S31B",
        "IDCF": "Carbon Fiber Décor",
        "AD02": "NEMA 14-50",
        "TR00": "No Third Row Seat",
        "FG02": "Exterior Lighting Package",
        "INBPP": "Black Premium",
        "YF01": "Matching Yacht Floor",
        "WXW5": "No 21\" 21\" Winter Tire Set",
        "IVBPP": "All Black Interior",
        "PX6D": "Zero to 60 in 2.5 sec",
        "TM0A": "ALPHA PRE-PRODUCTION NON-SALEABLE",
        "TM0C": "PRE-PRODUCTION SALEABLE",
        "TM0B": "BETA PRE-PRODUCTION NON-SALEABLE",
        "PK00": "LEGACY No Parking Sensors",
        "DV4W": "All-Wheel Drive",
        "HP00": "No Wall Connector",
        "HP01": "Wall Connector",
        "INBBW": "White Premium",
        "ST01": "Non-heated Leather Steering Wheel",
        "TIG4": "TIG4",
        "BTX4": "90 kWh",
        "TM02": "General Production Signature Trim",
        "TIMS": "TIMS",
        "X021": "No Spoiler",
        "QTPC": "Cream Premium Interior",
        "COL2": "Metallic",
        "COL3": "Tesla Multi-coat",
        "COL0": "Signature",
        "COL1": "Solid",
        "ME02": "Memory Seats",
        "X004": "Override: No Navigation",
        "LT5P": "LT5P",
        "SC04": "Pay Per Use Supercharging",
        "X003": "Maps & Navigation",
        "PF00": "No Performance Legacy Package",
        "PF01": "Performance Legacy Package",
        "APF1": "Autopilot Firmware 2.0 Enhanced",
        "APF0": "Autopilot Firmware 2.0 Base",
        "APF2": "Full Self-Driving Capability",
        "QVBM": "Black Textile Interior",
        "FMP6": "FMP6",
        "TM00": "General Production Trim",
        "QTBW": "White Premium Interior",
        "X014": "Override: No Satellite Radio",
        "X013": "Override: Satellite Radio",
        "APPB": "Enhanced Autopilot",
        "APPA": "Autopilot Hardware 1",
        "X010": "Base Mirrors",
        "WTAS": "19\" Silver Wheels",
        "X011": "Override: Homelink",
        "X019": "Carbon Fiber Spoiler",
        "CW02": "Subzero Weather Package",
        "CW00": "No Cold Weather Package",
        "YF00": "No Yacht Floor",
        "X043": "No Phone Dock Kit",
        "LT00": "Vegan interior",
        "DSH5": "PUR Dash Pad",
        "IDBO": "Figured Ash Wood Décor",
        "X007": "Daytime running lights",
        "IDBA": "Dark Ash Wood Décor",
        "X044": "Phone Dock Kit",
        "WTW4": "19\" Winter Tire Set",
        "WTW5": "21\" Winter Tire Set",
        "LT1B": "LT1B",
        "YFFC": "Integrated Center Console",
        "TIC6": "TIC6",
        "QVSW": "White Tesla Seats",
        "CH05": "CH05",
        "CH04": "High Amperage Charger",
        "PX00": "No Performance Plus Package",
        "PX01": "Performance Plus",
        "X012": "Override: No Homelink",
        "WXW4": "No 19\" 19\" Winter Tire Set",
        "LT5C": "LT5C",
        "X028": "Battery Badge",
        "X029": "Remove Battery Badge",
        "DCF0": "DCF0",
        "LT4W": "LT4W",
        "X027": "Lighted Door Handles",
        "X024": "Performance Package",
        "X025": "No Performance Package",
        "DRLH": "Left Hand Drive",
        "DRRH": "Right Hand Drive",
        "SP00": "No Security Package",
        "BS01": "Special Production Flag",
        "BS00": "General Production Flag",
        "FR04": "FR04",
        "X037": "Powerfolding Mirrors",
        "TR01": "Rear Facing Seats",
        "APH2": "Autopilot Hardware Version 2",
        "APH3": "Autopilot Hardware Version 3",
        "X030": "Override: No Passive Entry Pkg",
        "FR03": "FR03",
        "QVPP": "Vegan Cream Seats",
        "YFCC": "YFCC",
        "X039": "DAB Radio",
        "INBTB": "Black Textile Interior",
        "UTSB": "Dark Headliner",
        "LP01": "Premium Interior Lighting",
        "IVBTB": "All Black Interior",
        "QVPC": "Vegan Cream Seats",
        "UTPB": "Dark Headliner",
        "BCMB": "Black Brake Calipers",
        "SV00": "SV00",
        "AF00": "null",
        "AF02": "null",
        "LLP1": "LLP1I",
        "NLPP": "Black Premium / Light Headliner",
        "X031": "Keyless Entry",
        "MI00": "2015 production",
        "MI01": "null",
        "INLPC": "Cream Premium",
        "SR07": "Standard 2nd row",
        "QTPP": "Black Premium Interior",
        "PI01": "Premium Upgrades Package",
        "PI00": "No Premium Interior",
        "X001": "Override: Power Liftgate",
        "IVLPC": "Vegan Cream",
        "QTTB": "Black Textile Interior",
        "LT01": "Standard interior"
        };
        return options[option_code];
      };

    export default {
        name: 'Tesla',
        data () {
            return {
                vin: "",
                state: "",
                vehicleID: "",
                token: "",
                rawCodes: "",
                response: "",
                optionArray: [],
                option_codes: []
            }
        },
        mounted() {
            this.token = localStorage.getItem('token');
            if(localStorage.getItem('token')==undefined){
                axios({ method: "POST",
                    "url": "https://cors-anywhere.herokuapp.com/https://owner-api.teslamotors.com/oauth/token",
                    "data": {   "grant_type":"password",
                                "client_id":"81527cff06843c8634fdc09e8ac0abefb46ac849f38fe1e431c2ef2106796384",
                                "client_secret":"c7257eb71a564034f9419ee651c7d0e5f7aa6bfbd18bafb5c5c033b093bb2fa3",
                                "email":"",
                                "password":""
                            },
                    "headers": {
                                    "Access-Control-Allow-Origin": "*"
                                }
                }).then(result => {
                    this.token = result.data.access_token;
                    localStorage.setItem('token', result.data.access_token);
                }, error => {
                    console.error(error);
                });
            }
            axios({ method: "GET",
                "url": "https://cors-anywhere.herokuapp.com/https://owner-api.teslamotors.com/api/1/vehicles",
                "headers": {
                                "Authorization": "Bearer "+localStorage.getItem('token')
                            }
            }).then(result => {
                this.vin = result.data.response[0].vin;
                this.state = result.data.response[0].state;
                this.vehicleID = result.data.response[0].id;
                localStorage.setItem('vehicleID', this.vehicleID);
                this.rawCodes = result.data.response[0].option_codes;
                this.option_codes = result.data.response[0].option_codes.split(',');
                this.optionArray = [{'code':'code', 'label':'label'}];
                for (var i = 0; i < this.option_codes.length; i++) {
                this.optionArray.push({'code':this.option_codes[i],'label':convertOptionCodeToText(this.option_codes[i])});
                }
            }, error => {
                console.error(error);
            });
            // axios({ method: "GET", "url": "https://private-623898-modelsapi.apiary-mock.com/api/1/vehicles" }).then(result => {
            //     this.vin = result.data.response[0].vin;
            //     this.option_codes = result.data.response[0].option_codes.split(',');
            //     this.optionArray = [{'code':'code', 'label':'label'}];
            //     for (var i = 0; i < this.option_codes.length; i++) {
            //       this.optionArray.push({'code':this.option_codes[i],'label':convertOptionCodeToText(this.option_codes[i])});
            //     }
            // }, error => {
            //     console.error(error);
            // });
        },
        methods: {
            honk() {
                console.log("honk");
                axios({ method: "POST",
                    "url": "https://cors-anywhere.herokuapp.com/https://owner-api.teslamotors.com/api/1/vehicles/"+this.vehicleID+"/command/honk_horn",
                    "headers": {
                                "Authorization": "Bearer "+localStorage.getItem('token')
                                }
                }).then(result => {
                }, error => {
                    console.error(error);
                });
            },
            clearToken () {
                localStorage.removeItem('token')
                this.token = undefined
            },
            wake () {
///
                axios({ method: "POST",
                    "url": "https://cors-anywhere.herokuapp.com/https://owner-api.teslamotors.comapi/1/vehicles/"+this.vehicleID+"/wake_up",
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
    <div class="hello">
        <h1>Your Tesla VIN is {{ vin }}</h1>
        <h1>Your Tesla token is {{ token }}</h1>
        <h1>Your Tesla vehicle ID is {{ vehicleID }}</h1>
        <h2>Your vehicle state is {{ state }}</h2>
        <button v-if="this.state!='asleep'" v-on:click="honk()">Honk Horn</button>
        <button v-on:click="clearToken()">Clear Token</button>
        <button v-if="this.state=='asleep'" v-on:click="wake()">Wake</button>
        <br />
        <br />
        <table-component
           :data="optionArray"
           >
           <table-column show="code" label="code"></table-column>
           <table-column show="label" label="label"></table-column>
       </table-component>
    </div>
</template>
