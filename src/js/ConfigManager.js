
import {keys, getStorage, setStorage} from "./StorageManager.js"

const template = {
    username: "default",
    greetings: [],
    showNotesFullContent: true,
}

let config = {
    username: "default",
    greetings: [],
    showNotesFullContent: true,
}

function resetConfig() {
    setStorage(keys.config, template)
}

function loadConfig() {
    config = getStorage(keys.config)
    if (config === null) {
        resetConfig()
        config = getStorage(keys.config)
    }
}

function saveConfig() {
    setStorage(keys.config, config)
}

function getConfig(key) {
    return config[key]
}

function setConfig(key, value) {
    config[key] = value
    saveConfig()
}

export {loadConfig, getConfig, setConfig, resetConfig}