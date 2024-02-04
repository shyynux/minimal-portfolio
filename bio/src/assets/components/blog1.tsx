import Footer from "./footer";
import Header from "./header";

const MessagingQueue = () => {
    return (
        <>
        <Header />
        <div className="py-10 m-4
        px-10
        border-2 border-black
        shadow-xl
        items-center
        justify-center
        h-64
        ">
        <div className="px-20 font-mono
        justify-content">
        One day a team-mate told me during a call to poll some messages from SQS, I was like ‘What’s SQS or polling’, they told me it is an asynchronous queue. I was like whaaat (in my mind), I was a new joinee(shy), I felt so dumb. But i hope you don’t (and you shouldn’t), so today we are going to understand -

What is a messaging queue?
An exploration of some popular messaging queues.
Common terms related to messaging queues (SQS), yes polling as well.
 <h6 className="underline text-red-500"> this will be updated </h6>
        </div>
        <Footer />
        </div>
        </>
    )
};

export default MessagingQueue;