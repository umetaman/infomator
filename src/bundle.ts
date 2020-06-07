import { NewsAgent } from "./NewsAgent"

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
    private newsHost: NewsAgent;

    constructor(){
        this.newsHost = new NewsAgent();
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

    public SetNewsContent(title: string, category: string[], description: string): void{
        this.newsTitle?.innerText = title;
        this.newsDescription?.innerText = description;
    }
}

window.onload = () => {
    const renderMain: RenderMain = new RenderMain();
    renderMain.SetupDOMs();
    renderMain.StartClock();

    const newsAgent: NewsAgent = new NewsAgent();
    newsAgent.GetHeadlines((headlines) => {
        const first = headlines[0];

        renderMain.SetNewsContent(first.Title, [], first.Title);
    });
};