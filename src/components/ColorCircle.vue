<script setup>

import {getColor} from "../js/ColorManager.js"
import { computed } from "vue";

const props = defineProps(["color"])
const backgroundColor = computed(() => {
    return getColor(props.color, 1)
})
const borderColor = computed(() => {
    return getColor(props.color, 10)
})

</script>
<template>
<div class="circleObject">
    &nbsp;
</div>
</template>
<style>
.circleObject {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border-style: solid;
    border-width: 1px;
    border-color: v-bind("borderColor");
    background-color: v-bind("backgroundColor");
    margin: 10px;
}
</style>