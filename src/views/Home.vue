<script setup>
import { FloatingBubble } from 'vant';
import { ref } from 'vue';

const addBubbleOffset = ref({ x: 350, y: 600 });
</script>
<template>
    <div class="title-container">
        <div class="title">早上好！</div>
        <div class="description">今天想要记录什么？</div>
    </div>
    This is the Home
    <FloatingBubble icon="add" axis="y" magnetic="x"></FloatingBubble>
</template>
<style>
body {
    display: flex;
    flex-direction: column;
    background-color: rgb(25, 25, 25);
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.title {
    font-size: larger;
    font-weight: bold;
    margin-bottom: 5px;
}
.title-container {
    display: flex;
    flex-direction: column;
    flex: auto;
    margin: 15px;
}
</style>