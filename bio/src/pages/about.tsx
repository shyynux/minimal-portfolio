import Footer from "../assets/components/footer";
import Header from "../assets/components/header";

const About = () => {
    return (
        <>
        <div className="">
        <Header />
        <div className='
    font-mono text-zinc-500
    flex flex-col items-center justify-center h-screen
    '>
        <div className="w-1/2">
        <p className='justify-content'>
      <br />
      Passionate about web development,
      I get obessessed with things and then drown
           myself in it, currently it is building more and
           more. <br />
       I also enjoy filming videos and reading books, 
      <br />
       especially those with unique perspectives.
       <br />
      </p>
      <br />
      Currently I am exploring Golang, I usually work with
      react, typescript, javascript, NodeJS and TailwindCSS.
      <br />
      <br />
      I am open for freelance projects, dm or email me
      (shyynux@gmail.com) with your work.
        </div>
        <div className="pt-8">
        <Footer />
        </div>
        </div>
        </div>
        </>
    )
};


export default About;
