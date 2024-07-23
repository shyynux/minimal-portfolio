import Footer from "../assets/components/footer";
import Header from "../assets/components/header";

const WorkSamples = () => {
    const projects = [
        {
            title: "frontend projects",
            description: "skincare, simple website",
            techStack: "React, TypeScript, TailwindCSS, Firebase"
        },
        {
            title: "fullstack",
            techStack: "React, NodeJS, Express, TypeScript, TailwindCSS, Firebase"
        },
        {
            title: "backend - admin dashboards",
            techStack: "Django, Python, React, Prisma ORM"
        },
        {
            title: "landing pages",
            techStack: "ReactJS, TypeScript, TailwindCSS, vite"
        },
        {
            title: "social-media canva templates",
            techStack: "Canva"
        }
    ];

    return (
        <>
            <div className="">
                <Header />
                <div className='font-mono text-zinc-500 flex flex-col items-center justify-center min-h-screen'>
                    <div className="w-3/4">
                        <h2 className="text-2xl font-bold mb-8 text-center">Work Samples - August </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                    <p className="mb-2">{project.description}</p>
                                    <p className="text-sm text-gray-600">{project.techStack}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="pt-8 w-full">
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
};

export default WorkSamples;
