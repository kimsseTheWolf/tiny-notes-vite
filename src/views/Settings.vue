<script setup>
import {CellGroup, Cell, Switch} from "vant"
import { ref } from 'vue';

const showFullText = ref(false);
</script>
<template>
    <div class="title-container">
        <div class="title">设置</div>
    </div>
    <CellGroup inset style="margin-bottom: 10px;">
        <Cell title="首页视图展示全文信息" label="在首页直接展示便签所有的内容，不隐藏信息">
            <template #right-icon>
                <Switch v-model="showFullText"></Switch>
            </template>
        </Cell>
    </CellGroup>
    <CellGroup inset style="margin-bottom: 10px;">
        <Cell title="设置称呼" value="默认" label="您希望我们如何称呼您？"></Cell>
        <Cell title="导出所有数据" label="将所有的便签信息下载并保存在本地"></Cell>
        <Cell title="设置颜色与标签"></Cell>
    </CellGroup>
    <CellGroup inset>
        <Cell title="清除Cookies" label="若遇到问题请根据指示使用此选项"></Cell>
        <Cell title="关于"></Cell>
    </CellGroup>
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
</style>