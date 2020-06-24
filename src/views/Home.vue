<template>
 <div class="home">
 <p>{{$store.state.user}}</p>
 <button @click="changeUser">変更</button>
 </div>
 </template>
 <script>
 export default {
 methods: {
 changeUser() {
 this.$store.dispatch("changeUserAction", {
 user: "りん"
 });
 }
 }
 };
 </script>
