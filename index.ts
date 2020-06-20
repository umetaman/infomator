const { app, BrowserWindow, App } = require("electron");

class AppMain{
    
    private window: BrowserWindow | null = null;
    private app: App;
    private mainUrl: string = `file://${__dirname}/index.html`;

    constructor(app: App){
        this.app = app;

        this.app.on("window-all-closed", this.onWindowAllClosed.bind(this));
        this.app.on("ready", this.create.bind(this));
        this.app.on("activate", this.onActivated.bind(this));
    }

    private onWindowAllClosed(){
        this.app.quit();
    }

    private create(){
        this.window = new BrowserWindow({
            width: 300,
            height: 100,
            minWidth: 300,
            minHeight: 100,
            maxWidth: 300,
            maxHeight: 100,
            frame: false,
            hasShadow: false,
            useContentSize: true,
            x: 0, 
            y: 0,
            alwaysOnTop: true
        });

        this.window.loadURL(this.mainUrl);
        // this.window.openDevTools();

        this.window.on("closed", () => {
            this.window = null;
        });
    }

    private onReady(){
        this.create();
    }

    private onActivated(){
        if(this.window == null){
            this.create();
        }
    }
}

const myApp: AppMain = new AppMain(app);