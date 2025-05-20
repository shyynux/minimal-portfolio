import Footer from "../assets/components/footer";
import Header from "../assets/components/header";

const About = () => {
  return (
    <>
      <Header />
      <div className="font-mono text-zinc-500 flex flex-col items-center justify-center min-h-screen">
        <div className="w-1/2 text-center">
          <p>I like building things on the internet.</p>
          <p>
            dm or email me at <a href="mailto:shyynux@gmail.com">shyynux@gmail.com</a>.
          </p>
        </div>
        <div className="pt-8">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default About;
