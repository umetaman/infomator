var _a = require("electron"), contextBridge = _a.contextBridge, ipcRenderer = _a.ipcRenderer;
contextBridge.exposeInMainWorld("api", {
    log: function (message) { return ipcRenderer.send("log_render_to_main", message); }
});
console.log("setup ContextBridge.");
