import { Link } from 'react-router-dom';

const Header = () => {


    return (
    <div className='flex flex-row'>
      <h1 className='flex-1 text-left
      hover:text-purple-900 hover:font-bold'>
        <a href='/'>shyynux</a>
        </h1>
      <div className='text-right flex '>

  <h1 className='px-4 hover:text-purple-500 hover:underline'>
    <Link to="/projects">projects</Link>
  </h1>
    
<h1 className='px-4 hover:text-purple-500 hover:underline'>
<Link to="/blog">blog</Link></h1>

<h1 className='px-4 hover:text-purple-500 hover:underline'>
<Link to="/about">about</Link></h1>

<h1 className='px-4 hover:text-purple-500 hover:underline'>
<a href='https://shyynux.github.io/reading-list/'>reading-list</a>
         </h1>
      </div>
    </div>
    );
}

export default Header;