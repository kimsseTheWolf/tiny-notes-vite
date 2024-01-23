<script setup>
import {CellGroup, Cell, Switch, Popup, Field, Button, showSuccessToast} from "vant"
import { ref } from 'vue';
import {getConfig, setConfig, loadConfig} from "../js/ConfigManager.js"
import {getAllMoodTag} from "../js/MoodTagManager.js"
import ColorCircle from "../components/ColorCircle.vue";

const settingsPreferences = ref({
    username: "",
    showFullText: false,
})

const windowController = ref({
    showUsernamePopup: false,
    showColorPopup: false,
})

const moodTagList = ref(getAllMoodTag())

function getSettingsPreferences() {
    loadConfig()
    settingsPreferences.value.username = getConfig("username")
    settingsPreferences.value.showFullText = getConfig("showNotesFullContent")
    console.log(settingsPreferences.value.username)
    console.log(settingsPreferences.value.showFullText)
}

function triggerShowFullContent() {
    setConfig("showNotesFullContent", settingsPreferences.value.showFullText)
}

function setUsernameAndHide() {
    setConfig("username", settingsPreferences.value.username)
    windowController.value.showUsernamePopup = false
    showSuccessToast("设置成功")
}

getSettingsPreferences()
const showFullText = ref(false);
</script>
<template>
    <div class="title-container">
        <div class="title">设置</div>
    </div>
    <CellGroup inset style="margin-bottom: 10px;">
        <Cell title="首页视图展示全文信息" label="在首页直接展示便签所有的内容，不隐藏信息">
            <template #right-icon>
                <Switch v-model="settingsPreferences.showFullText" @change="triggerShowFullContent()"></Switch>
            </template>
        </Cell>
    </CellGroup>
    <CellGroup inset style="margin-bottom: 10px;">
        <Cell title="设置称呼" :value="settingsPreferences.username" label="您希望我们如何称呼您？" @click="windowController.showUsernamePopup = true"></Cell>
        <Cell title="设置颜色与标签" @click="windowController.showColorPopup = true"></Cell>
        <Cell title="导出所有数据" label="将所有的便签信息下载并保存在本地"></Cell>
    </CellGroup>
    <CellGroup inset>
        <Cell title="清除Cookies" label="若遇到问题请根据指示使用此选项"></Cell>
        <Cell title="关于"></Cell>
    </CellGroup>
    <Popup v-model:show="windowController.showUsernamePopup" round position="bottom" style="height: 60%; background-color: rgb(250,250,250)">
        <div class="popupView">
            <div class="title">设置称呼</div>
            <div style="margin-bottom: 10px;">您希望我们如何称呼您？</div>
        </div>
        <CellGroup inset>
            <Field label="称呼" v-model="settingsPreferences.username" placeholder="请输入您的称呼"></Field>
        </CellGroup>
        <div class="popupView">
            <Button type="primary" style="margin-top: 10px;" @click="setUsernameAndHide()">确定</Button>
        </div>
    </Popup>
    <Popup v-model:show="windowController.showColorPopup" round position="bottom" style="height: 80%; background-color: rgb(250,250,250)">
        <div class="popupView">
            <div class="title">管理颜色与标签</div>
            <div style="margin-bottom: 10px;">添加，删除，管理所有颜色标签</div>
        </div>
        <CellGroup inset>
            <Cell :title="i.name" v-for="i in moodTagList">
                <template #right-icon>
                    <ColorCircle :color="i.color"></ColorCircle>
                </template>
            </Cell>
        </CellGroup>
    </Popup>
</template>
<style>
.title-container {
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
.popupView {
    display: flex;
    flex-direction: column;
    margin: 10px;
    padding: 10px;
}
</style>