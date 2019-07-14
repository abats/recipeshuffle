<template>
  <div class="mt-5 ml-5">
    <div  v-if="authorisedUser">Welcome {{ getUserName() }} {{ isUserLoggedIn() }} </div>
    <div class="mt-5">
      <button
        @click="socialLogin"
        class="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded rounded-lg border border-gray-400 inline-flex items-center"
      >
        <img alt="google logo" src="../assets/image/google-logo.png" />
        <span class="ml-3">Login with google</span>
      </button>
      <button @click="logOut()">Logout</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { dbRS } from "@/main";
import firebase from "firebase";
import { userLoggedIn } from '@/main';

@Component({})
export default class Login extends Vue {
    private authorisedUser;

    private created() {
        this.authorisedUser = firebase.auth().currentUser;
    }

    private isUserLoggedIn(){
        return userLoggedIn;
    }

    private getUserName() {
        return this.authorisedUser.displayName;
    }

    private logOut() {
        firebase.auth().signOut();
    }

    private socialLogin() {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase
        .auth()
        .signInWithRedirect(provider)
        .then(result => {
            console.log(result);
            this.$router.replace("home");
        })
        .catch(error => {
            alert("Oops, " + error.message);
        });
    }
}
</script

<style lang="sass" >

</style>
