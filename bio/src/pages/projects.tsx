import Box from "../assets/components/projectbox";
import Header from "../assets/components/header";
import Footer from "../assets/components/footer";

const Projects = () => {
    return (
        <>
        <Header />
        <div className="md:px-60 pt-8">
        <h1 className="
        font-mono text-left text-zinc-700
        "> projects made by me while exploring tech :) </h1>
        <div className="flex md:flex-row flex-wrap
        text-center
        ">
            <Box
            title="Taskbar"
            description="A simple browser based task management system
            which does not requires you to log-in"
            website="https://taskbar-gamma.vercel.app"
            github="https://github.com/shyynux/taskbar"
            techStack="React, JavaScript, TailwindCSS, Browser storage."
            url="https://firebasestorage.googleapis.com/v0/b/pixifie-2f67b.appspot.com/o/do-not-delete%2Fproject-covers-do-not-delete%2F2.png?alt=media&token=8cdf8bf6-1703-498a-bbf9-a42b869758ac"
            />

            <Box
            title="Pixifie"
            description="Pixelate your images beautifully for free"
            website="https://pixifie.xyz"
            github="https://github.com/shyynux/pixify"
            techStack="React, TypeScript, Python, Firebase, TailwindCSS."
            url="https://firebasestorage.googleapis.com/v0/b/pixifie-2f67b.appspot.com/o/do-not-delete%2Fproject-covers-do-not-delete%2F1.png?alt=media&token=3b831841-3596-4b81-929b-7e527d71bb32"
            />

            <Box
            title="Chatapp"
            description="a simple real time chat application using web sockets"
            website="https://github.com/shyynux/chatapp"
            github="https://github.com/shyynux/chatapp"
            techStack="React, TypeScript, TailwindCSS, WebSocket"
            url="https://firebasestorage.googleapis.com/v0/b/pixifie-2f67b.appspot.com/o/do-not-delete%2Fproject-covers-do-not-delete%2F3.png?alt=media&token=4fd262e5-edc2-4f17-81c1-8600856a74c6"
            />
           
             <Box
            title="CharmTopCLI"
            description="A CLI tool to organise your messy desktop."
            website="https://github.com/shyynux/CharmtopCLI"
            github="https://github.com/shyynux/CharmtopCLI"
            techStack="JavaScript, NodeJS."
            url="https://firebasestorage.googleapis.com/v0/b/pixifie-2f67b.appspot.com/o/do-not-delete%2Fproject-covers-do-not-delete%2F4.png?alt=media&token=6e32848a-c786-4220-b257-0b5e65e1b2ad"

            />
             <Box
            title="sonic"
            description="A directory for tech and business podcasts"
            website="https://github.com/shyynux/sonic"
            github="https://github.com/shyynux/sonicy"
            techStack="React, TypeScript, TailwindCSS, RapidAPI"
            url="https://firebasestorage.googleapis.com/v0/b/pixifie-2f67b.appspot.com/o/do-not-delete%2Fproject-covers-do-not-delete%2F5.png?alt=media&token=e00ba81e-e4e3-450f-91cb-ab4eb9bc8bf7"

            />
             <Box
            title="Roommates"
            description="I built this in 
            less than 24 hours coz I was exploring Web3."
            website="https://roomates.vercel.app/"
            github="https://github.com/shyynux/roomates"
            techStack="React, TypeScript, Flow, TailwindCSS."
            url="https://firebasestorage.googleapis.com/v0/b/pixifie-2f67b.appspot.com/o/do-not-delete%2Fproject-covers-do-not-delete%2F6.png?alt=media&token=5697e971-e5a1-49c1-ba17-251af614505b"

            />
        </div>
        <Footer />
        </div>
        </>
    )
};


export default Projects;
