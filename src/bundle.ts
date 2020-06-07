export class RenderMain{

    // date
    private year: HTMLElement | null;
    private month: HTMLElement | null;
    private day: HTMLElement | null;

    // time
    private hour: HTMLElement | null;
    private minute: HTMLElement | null;
    private second: HTMLElement | null;

    // news
    private newsTitle: HTMLElement | null;
    private newsCategory: HTMLElement | null;
    private newsDescription: HTMLElement | null;

    // http request for Google news
    private request: XMLHttpRequest;

    constructor(){
        this.request = new XMLHttpRequest();
    }

    public SetupDOMs(): void{
        this.year = document.getElementById("year");
        this.month = document.getElementById("month");
        this.day = document.getElementById("day");

        this.hour = document.getElementById("hour");
        this.minute = document.getElementById("minute");
        this.second = document.getElementById("second");

        this.newsTitle = document.getElementById("news_title");
        this.newsCategory = document.getElementById("news_category");
        this.newsDescription = document.getElementById("news_description");
    
        this.setNewsContent("", [], "");
    }

    public StartClock(): void{
        setInterval(() => this.tickClock(), 1000);
    }

    private tickClock(): void{
        const date = new Date();

        this.year?.innerText = date.getFullYear();
        this.month?.innerText = date.getMonth() + 1;
        this.day?.innerText = date.getDate();

        this.hour?.innerText = ( "00" + date.getHours()).slice(-2);
        this.minute?.innerText = ( "00" + date.getMinutes()).slice(-2);
        this.second?.innerText = ( "00" + date.getSeconds()).slice(-2);
    }

    private setNewsContent(title: string, category: string[], description: string): void{
        this.newsTitle?.innerText = "Unity2019 LTS　リリース開始。";
        this.newsDescription?.innerText = "Unityテクノロジーズは、本日、同社が開発するゲームエンジン「Unity」の2019LTSのリリースを発表。";
    }

    public GetNewsHeadLines(): void{
        this.request.open("GET", "https://news.google.com/news/rss/headlines/section/topic/TECHNOLOGY?hl=ja&gl=JP&ceid=JP:ja");
        this.request.onreadystatechange = () =>{
            if(this.request.readyState != 4){
                // requesting
            }else if(this.request.status != 200){
                // failed
                console.log("request is failed.");
            }
            else{
                const response = this.request.response;
                const parser: DOMParser = new DOMParser();

                const doms = parser.parseFromString(response, "application/xml");
                const titles = doms.documentElement.getElementsByTagName("title");
                for(let i = 0; i < titles.length; i++){
                    console.log(titles[i].textContent);
                }
            }
        }

        this.request.send(null);
    }
}

window.onload = () => {
    const renderMain: RenderMain = new RenderMain();
    renderMain.SetupDOMs();
    renderMain.StartClock();
    renderMain.GetNewsHeadLines();
};