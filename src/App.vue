<script setup>
import { ActionBar, ActionBarButton, ActionBarIcon, FloatingBubble } from 'vant';
import { ref } from 'vue';
</script>
<template>
    <div class="app-view-content">
        <div class="title">早上好！</div>
        <div class="description">今天想要记录什么？</div>
    </div>
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
.app-view-content {
    display: flex;
    flex-direction: column;
    flex: auto;
    margin: 15px;
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