<template>
    <div>
      <div
        id="g_id_onload"
        :data-client_id="clientId"
        data-context="signin"
        data-ux_mode="popup"
        data-callback="onSuccess"
        data-auto_prompt="false"
      ></div>
  
      <div
        class="g_id_signin"
        data-type="standard"
        data-shape="rectangular"
        data-theme="outline"
        data-text="signin_with"
        data-size="large"
        data-logo_alignment="left"
      ></div>
    </div>
  </template>
  
  <script>
  export default ({
    props: {
      label: {
        type: String,
        default: "Sign in with Google",
      },
    },
    data(){
      return {
        clientId: '',
      }
    },
    created () {
      this.clientId = process.env.VUE_APP_GOOGLE_AUTH_CLIENT_ID;
      window.onSuccess = this.onSuccess;
      const script = document.createElement("script");
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      document.head.appendChild(script);
    },
    methods: {
      onSuccess(credentials) {
        this.$emit("success", credentials.credential);
      },
    },
  });
  </script>