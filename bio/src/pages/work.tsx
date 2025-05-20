import Footer from "../assets/components/footer";
import Header from "../assets/components/header";
import picture from "../assets/images/e82148a6e16eb708165cce8eb116dd56.gif";

const Work = () => {
    return (
        <>
            <div>
                <Header />
                <div className="flex flex-col items-center justify-center min-h-screen font-mono text-zinc-500 text-center px-4">
                    <img src={picture} alt="work w me" className="mx-auto mb-8 rounded-lg" />
                    <h2 className="text-2xl font-bold">tell me interesting things</h2>
                    <div className="pt-8">
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Work;
