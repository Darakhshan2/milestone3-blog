interface MainType {
    id:string,
    h4: string;
    h2: string;
    p: string;
    button: string;
    image: string;
  }

export const main: MainType[] = [
    
    {
            id:"6",
            h4: "Front-End vs Back-End",
            h2: "What is difference between Front-End & Back-End",
            p: "In the world of web development, front-end and back-end development play equally crucial yet distinct roles",
            image: "/frontvsback.png",
            button: "Read More",
    },
    {
        id:"4",
        h4: "AI-Powered Databases: How Machine Learning is Enhancing Data Management",
        p: "How machine learning algorithms are being used in databases to optimize data storage, retrieval, and analysis, providing smarter, more efficient databases for web applications",
        h2: "AI can play a crucial role in improving database management and maintenance.",
        image: "/id-5.jpg",
        button:"Read More"
    },
    {
        id:"2",
        h4: "Best Website to research for your next project",
        p: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs",
        h2: "In today's fast-paced digital era, finding the right resources for your project is crucial.",
        image: "/id-4.jpg",
        button:"Read More"
    }
   
]
