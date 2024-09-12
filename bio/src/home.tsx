import './App.css';
import Header from './assets/components/header';
import Footer from './assets/components/footer';

function App() {

  return (
    <div>
    {/* The header  */}
    <Header />
    {/* The body content */}
    <div className='
    font-mono 
    flex flex-col items-center justify-center
    md:h-screen
    h-auto
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
      available for september, <br />
       <a href='/work' className='hover:text-purple-500 hover:underline'>work with me</a>
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
