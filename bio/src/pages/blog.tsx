import BlogBox from "../assets/components/blogbox";
import Footer from "../assets/components/footer";
import Header from "../assets/components/header";

const Blog = () => {
    return (
        <>
        <Header />
        <div className="px-60 pt-8">
        <div className="flex flex-col flex-wrap 
        text-center
        ">
            <BlogBox 
             title="Messaging queues"
             dateWritten="Oct 12, 2023"
             description="An Introduction to Messaging queues"
             url="/MessagingQueue"
            />
        {/* 
            <BlogBox 
             title=""
             description=""
             dateWritten=""
            />

            <BlogBox 
             title=""
             description=""
             dateWritten=""
            /> */}
        </div>
        <Footer />
        </div>
        </>
    )
};


export default Blog;
