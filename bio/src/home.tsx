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
