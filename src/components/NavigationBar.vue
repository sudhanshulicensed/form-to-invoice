<template>
    <nav class="holder">
        <img src="../assets/logo-invoice.png" alt="Page Logo">
        <div class="holder-items">
            <router-link v-for="(nav, index) in navItems" :key="index" :to="`${nav.route}`">{{ nav.name }}</router-link>
            <GoogleAuth @success="onSuccess"/>
        </div>
    </nav>
</template>

<script>
import GoogleAuth from '../components/GoogleAuth.vue';
export default ({
    components: {GoogleAuth},
    props: {
    navItems: {
      type: Array,
      default: () => [],
    },
    },
    methods: {
        onSuccess(token) {
            this.$store.dispatch('getToken', token)
        }
    }
}
)
</script>

<style lang="scss">
.holder {
    background-color: black;
    height: 60px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    
    img {
        height: 50px;
    }
    .holder-items {
        display: flex;
        align-items: center;
        a {
            padding-right: 1rem;
            color: aquamarine;
            font-size: 1.5rem;
            text-decoration: none;
        }
        button {
            padding: 0.5rem;
            font-size: 1.5rem;
            color: black;
            background-color: #74b9ff;
            opacity: 0.8;
        }
    }
}
</style>