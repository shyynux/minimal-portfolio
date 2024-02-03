import BlogBox from "../assets/components/blogbox";
import Footer from "../assets/components/footer";
import Header from "../assets/components/header";

const Blog = () => {
    return (
        <>
        <Header />
        <div className="px-60 pt-8">
            [WORK IN PROGRESS]
        <div className="flex flex-col flex-wrap 
        text-center
        ">
            <BlogBox />
            <BlogBox />
            <BlogBox />
            <BlogBox />

        </div>
        <Footer />
        </div>
        </>
    )
};


export default Blog;
