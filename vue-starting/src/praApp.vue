<script setup lang="ts">
import Learnsample from './components/Learnsample.vue'
import WelcomeItem from './components/WelcomeItem.vue'
import DocumentationIcon from './components/icons/IconDocumentation.vue'
</script>

<template>
    <header>
        <h2 class="green">Hello, I am teen-ager.</h2>
    </header>
    <main>
        <div>
            Hi, everyone. I am a student at one of the schools in Japan.
            Today, I am studying Vue.js. Let's learn together!.
        </div>
        <div class="wrapper">
            <Learnsample msg="What is this msg? I guess this is message. "/>
        </div>
        <WelcomeItem>
            <template #icon>
                <DocumentationIcon />
            </template>
            <template #heading>Documentation</template>
            Many value!
        </WelcomeItem>
    </main>
</template>

<style scoped>
div {
    text-align: center;
    margin: 15%;
    margin-top: auto;
}

h2 {
    margin-top: 2%;
    margin-bottom: 5%;
}

</style>