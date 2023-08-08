<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
    <h1 class="green">
        {{ msg }}
    </h1>
    <div>
        This area is one of the components.
        Messaeg can pass value. So If you use button or input form, we can change text.
    </div>
</template>

<style scoped>
h1 {
    font-size: 500;
    text-align: center;
}
div {
    text-align: center;
    margin: 15%;
    margin-top: auto;
}
</style>