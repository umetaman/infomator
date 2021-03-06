var _a = require("electron"), app = _a.app, BrowserWindow = _a.BrowserWindow, App = _a.App;
var AppMain = /** @class */ (function () {
    function AppMain(app) {
        this.window = null;
        this.mainUrl = "file://" + __dirname + "/index.html";
        this.app = app;
        this.app.on("window-all-closed", this.onWindowAllClosed.bind(this));
        this.app.on("ready", this.create.bind(this));
        this.app.on("activate", this.onActivated.bind(this));
    }
    AppMain.prototype.onWindowAllClosed = function () {
        this.app.quit();
    };
    AppMain.prototype.create = function () {
        var _this = this;
        // const display = screen.getPrimaryDisplay();
        var WIDTH = 300;
        var HEIGHT = 100;
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
            x: 0,
            y: 0,
            alwaysOnTop: false
        });
        this.window.loadURL(this.mainUrl);
        // this.window.openDevTools();
        this.window.on("closed", function () {
            _this.window = null;
        });
    };
    AppMain.prototype.onReady = function () {
        this.create();
    };
    AppMain.prototype.onActivated = function () {
        if (this.window == null) {
            this.create();
        }
    };
    return AppMain;
}());
var myApp = new AppMain(app);
