<script setup>
import { ActionBar, ActionBarButton, ActionBarIcon, FloatingBubble } from 'vant';
import { ref } from 'vue';
import {getConfig, setConfig, loadConfig} from "./js/ConfigManager.js"

const showFullText = ref(false);

function startUp() {
    loadConfig();
    showFullText.value = getConfig("showNotesFullContent");
}

startUp();
</script>
<template>
    <RouterView/>
    <ActionBar>
        <ActionBarButton icon="home-o" to="/">便签</ActionBarButton>
        <ActionBarButton icon="setting-o" to="/settings">更多</ActionBarButton>
    </ActionBar>
</template>
<style>
body {
    display: flex;
    flex-direction: column;
    background-color: rgb(239, 249, 255);
    color: black;
    margin: 10px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.title {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 5px;
    margin-top: 15px;
}
.description {
    margin-bottom: 15px;
}
</style>