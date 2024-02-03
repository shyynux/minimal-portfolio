import './App.css';
import Footer from './assets/components/footer';

function App() {

  return (
    <div className=''>
    {/* The header  */}
    <div className='flex flex-row'>
      <h1 className='flex-1 text-left
      hover:text-purple-900 hover:font-bold'>
        <a href='/'>shyynux</a>
        </h1>
      <div className='text-right flex '>
        <h1 className='px-4 hover:text-purple-500 hover:underline'>projects</h1>
        <h1 className='px-4 hover:text-purple-500 hover:underline'>blog</h1>
        <h1 className='px-4 hover:text-purple-500 hover:underline'>
        <a href='https://shyynux.github.io/reading-list/'>reading-list</a>
         </h1>
      </div>
    </div>

    {/* The body content */}
    <div className='
    font-mono 
    flex flex-col items-center justify-center h-screen
    '>
      <div className=''>
      Hi, I am shyynux,
      <br />
       a software developer. 
      <br />
      I am something, something, something.
      <br />

      I do something, something, something.
      <br />
      I live somewhere.
      <br />
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
