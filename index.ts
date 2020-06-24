const { app, BrowserWindow, App, screen } = require("electron");

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
        const display = screen.getPrimaryDisplay();
        const WIDTH: number = 300;
        const HEIGHT: number = 100;

        this.window = new BrowserWindow({
            width: WIDTH,
            height: HEIGHT,
            minWidth: WIDTH,
            minHeight: HEIGHT,
            maxWidth: WIDTH,
            maxHeight: HEIGHT,
            frame: false,
            hasShadow: false,
            useContentSize: true,
            x: display.bounds.width - WIDTH, 
            y: display.bounds.height - HEIGHT,
            alwaysOnTop: false
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