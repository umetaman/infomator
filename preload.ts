const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld(
    "api", {
        log: (message: any) => ipcRenderer.send("log_render_to_main", message)
    }
);

console.log("setup ContextBridge.");