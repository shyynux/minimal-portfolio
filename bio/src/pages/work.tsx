import Footer from "../assets/components/footer";
import Header from "../assets/components/header";
import picture from "../assets/images/e82148a6e16eb708165cce8eb116dd56.gif"

const Work = () => {
    return (
        <>
            <div className="">
                <Header />
                <div className='mt-6 sm:pt-10 font-mono text-zinc-500 flex flex-col items-center justify-center min-h-screen'>
                    <div className="w-1/2">
                        <h2 className="text-2xl font-bold mb-4">How to work with me?</h2>
                        <p className="mb-4">
                            I am <strong>taking</strong> a few <strong>clients for</strong> the month of <strong>August</strong>, please e-mail me 
                            <a href="mailto:shyynux@gmail.com" className="text-blue-500"> here </a> 
                            on how I can help you with your product or you can <u className="font-bold"> book a call</u> directly with me 
                            <a href="https://calendar.app.google/uDf6g4Ncq994n7Q69" className="text-blue-500"> here</a>. 
                        </p>
                        <img src={picture} alt="work w me" className="mx-auto mb-8 rounded-lg" />
                        <h3 className="text-xl font-semibold mt-8 mb-4">✿ Services ✿</h3>
                        <div className="flex flex-row gap-x-6 text-left my-4">
                            <div className="w-1/2 rounded-lg shadow-lg p-6 border-2 border-gray-200 hover:shadow-xl  ">
                                <h2 className="font-semibold underline">Subscription</h2>
                                <p className="text-sm">For a minimal monthly subscription fee you get:</p>
                                <br />
                                <ul className="list-disc pl-5 space-y-2 text-left text-sm">
                                    <li>a fully custom coded website (no no-code tools)</li>
                                    <li>hosting for your website</li>
                                    <li>domain for your website</li>
                                    <li>unlimited revisions</li>
                                </ul>
                            </div>

                            <div className="w-1/2 rounded-lg shadow-lg p-6 border-2 border-gray-200 hover:shadow-xl ">
                                <h2 className="font-semibold underline">One time</h2>
                                <p className="text-sm">For one time project requirements:</p>
                                <br />
                                <ul className="list-disc pl-5 space-y-2 text-left text-sm">
                                    <li>a fully custom coded website (no no-code tools)</li>
                                    <li>a fully responsive website</li>
                                    <li>assistance in making the website live</li>
                                    <li>unlimited revisions until the decided time-frame</li>
                                </ul>
                            </div>
                        </div>

                        <p>
                            My main goal is to always create something that aligns with your vision.
                        </p>
                        <p className="mt-2 font-bold">
                            email - shyynux@gmail.com 
                        </p>
                        <h3 className="text-xl font-semibold mt-8 mb-4">✿ Skills ✿</h3>
                        <ul className="list-disc pl-5 space-y-2 text-left">
                            <li>Web Dev: HTML/CSS, Vite, React, TypeScript, JavaScript, TailwindCSS</li>
                            <li>Backend Development: NodeJS, Express, Django, Python, Kotlin</li>
                            <li>more: tRPC, Firebase, Supabase, Appwrite, SQL and NO-SQL based databases</li>
                            <li>Cloud: AWS</li>
                        </ul>
{/*                         
                        <h3 className="text-xl font-semibold mt-8 mb-4">Check out a few projects to see my work:</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="border rounded-lg shadow-lg p-4">
                                <h4 className="font-bold">frontend</h4>
                                <p>Project: <a href="https://www.arlo.com" className="text-blue-500">arlo.com</a></p>
                                <p>Tech-stack: React, TypeScript, TailwindCSS, Firebase</p>
                            </div>
                            <div className="border rounded-lg shadow-lg p-4">
                                <h4 className="font-bold">fullstack</h4>
                                <p>Project: <a href="https://www.starbucks.com" className="text-blue-500">starbucks.com</a></p>
                                <p>Tech-stack: React, NodeJS, Express, TypeScript, TailwindCSS, Firebase</p>
                            </div>
                            <div className="border rounded-lg shadow-lg p-4">
                                <h4 className="font-bold">fullstack</h4>
                                <p>Project: <a href="https://skincare.skin" className="text-blue-500">skincare.skin</a></p>
                                <p>Tech-stack: Django, Python, React, Prisma ORM</p>
                            </div>
                            <div className="border rounded-lg shadow-lg p-4">
                                <h4 className="font-bold">landing pages</h4>
                                <p>Project: Landing pages</p>
                                <p>Tech-stack: ReactJS, TypeScript, TailwindCSS</p>
                            </div>
                        </div>
                        <p className="mt-4">
                            More of my work is <a href="/seemywork" className='text-left hover:text-purple-500 hover:underline'>here</a>
                        </p>
                        <p className="mt-8">
                            Currently I am offering services like the ones above. If you have another requirement, 
                            I am open to collaborating on that as well. As a software engineer, I am excited to solve new problems. :)
                        </p> */}
                        <p className="mt-8">
                            Excited to work with you and bring your vision to life via code. 
                        </p>
                    </div>
                    <div className="pt-8">
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Work;
