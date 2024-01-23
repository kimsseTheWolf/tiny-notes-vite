
import {keys, setStorage, getStorage} from "./StorageManager.js"

function resetAllMood() {
    setStorage(keys.moods, [
        {color: "blue", name: "Calm"},
        {color: "yellow", name: "Energetic"},
        {color: "green", name: "Peaceful"},
        {color: "pink", name: "Care and love"},
        {color: "orange", name: "Anxious"},
    ]);
}

function getAllMoodTag() {
    if (getStorage(keys.moods) == null) {
        resetAllMood();
    }
    return getStorage(keys.moods);
}

function addMoodTag(color, mood) {
    let currentList = getStorage(keys.moods);
    currentList.push({color: color, name: mood});
    setStorage(keys.moods, currentList);
}

function deleteMoodTag(index) {
    let currentList = getStorage(keys.moods);
    currentList.splice(index, 1);
    setStorage(keys.moods, currentList);
}

function updateMoodTag(index, color, mood) {
    let currentList = getStorage(keys.moods);
    currentList[index] = {color: color, name: mood};
    setStorage(keys.moods, currentList);
}

export {resetAllMood, getAllMoodTag, addMoodTag, deleteMoodTag, updateMoodTag}