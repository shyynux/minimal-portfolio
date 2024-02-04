import './App.css';
import Header from './assets/components/header';
import Footer from './assets/components/footer';

function App() {

  return (
    <div className=''>
    {/* The header  */}
    <Header />
    {/* The body content */}
    <div className='
    font-mono 
    flex flex-col items-center justify-center
    h-screen

    '>
      <div className='text-zinc-500'>
      Hi, I am shyynux,
      <br />
      a software developer. 
      <br />
      I love building and exploring
      <br />
       interesting things. 
      <br />
      <p className='justify-content'>
      <br />
      Passionate about web development,
      <br />
       I also enjoy filming videos and reading books, 
      <br />
       especially those with unique perspectives.
      </p>
     

      </div>
      <div className='pt-8'>
      <Footer/>
      </div>
    {/* The footer  */}
    </div>
    </div>
  )
}

export default App
