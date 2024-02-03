import Box from "../assets/components/projectbox";
import Header from "../assets/components/header";
import Footer from "../assets/components/footer";

const Projects = () => {
    return (
        <>
        <Header />
        <div className="px-60 pt-8">
        <h1 className="
        font-mono text-left text-zinc-700
        "> projects made by me while exploring tech :) </h1>
        <div className="flex flex-row flex-wrap
        text-center
        ">
              <Box
            title="Taskbar"
            description="A simple browser based task management system
            which does not requires you to log-in"
            website="https://taskbar-gamma.vercel.app"
            github="https://github.com/shyynux/taskbar"
            techStack="React, JavaScript, TailwindCSS, Browser storage."
            />
            
            <Box
            title="Pixifie"
            description="Pixelate your images beautifully for free"
            website="https://pixifie.xyz"
            github="https://github.com/shyynux/pixify"
            techStack="React, TypeScript, Python, Firebase, TailwindCSS."
            />

            <Box
            title="Chatapp"
            description="a simple real time chat application using web sockets"
            website="https://github.com/shyynux/chatapp"
            github="https://github.com/shyynux/chatapp"
            techStack="React, TypeScript, TailwindCSS, WebSocket"
            />
           
             <Box
            title="CharmTopCLI"
            description="A CLI tool to organise your messy desktop."
            website="https://github.com/shyynux/CharmtopCLI"
            github="https://github.com/shyynux/CharmtopCLI"
            techStack="JavaScript, NodeJS."
            />
             <Box
            title="sonic"
            description="A directory for tech and business podcasts"
            website="https://github.com/shyynux/sonic"
            github="https://github.com/shyynux/sonicy"
            techStack="React, TypeScript, TailwindCSS, RapidAPI"
            />
             <Box
            title="Roommates"
            description="I built this in 
            less than 24 hours coz I was exploring Web3."
            website="https://roomates.vercel.app/"
            github="https://github.com/shyynux/roomates"
            techStack="React, TypeScript, Flow, TailwindCSS."
            />
        </div>
        <Footer />
        </div>
        </>
    )
};


export default Projects;
