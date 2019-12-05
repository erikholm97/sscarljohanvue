<template>
    <div >
        <div id="login">
        <h1>Logga in</h1>
        <input type="text" name="username" placeholder="Användarnamn" v-model="input.username" />
        <input
            type="password"
            name="password"
            v-model="input.password"
            placeholder="Password"
        />
        <button type="button" v-on:click="login()">Login</button>
        
        <div><p id="login-message"></p></div>
        </div>
    </div>
    
</template>

<script>
export default {
        name: "Login",
        data(){
            return{

                input:{
                    username: "",
                    password: ""
                }
            }
        },
        methods:{
            login(){ // Todo slå mot databas. Förhindra otillåtna bokstäver. 
            
            if(this.input.username == "admin" && this.input.password == "admin"){
                document.getElementById("login-message").innerHTML = "Du lyckades"; // Byter ut p elementet mot denna text. 
            }
            else if(this.input.username != "admin" && this.input.password  == "admin"){
                document.getElementById("login-message").innerHTML = "Fel användarnamn";
            }
            else if(this.input.username == "admin" && this.input.password != "admin"){
                document.getElementById("login-message").innerHTML = "Fel lösenord";
            }
            else{
                document.getElementById("login-message").innerHTML = "Användaren existerar inte";
            }
            
            

        }
    }
}
</script>

<style scoped lang="scss">
.login{
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
}
</style>
