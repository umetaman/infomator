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
            width: 500,
            height: 500,
            minWidth: 300,
            minHeight: 300
        });

        this.window.loadURL(this.mainUrl);
        this.window.openDevTools();

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