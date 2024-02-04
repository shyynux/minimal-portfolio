import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      <h1 className='md:flex-1 text-left mb-4 md:mb-0'>
        <a href='/'>shyynux</a>
      </h1>
      <div className='
      flex flex-col 
      text-right
      md:text-right 
      md:flex-row'>
        <h1 className='md:px-4 hover:text-purple-500 hover:underline'>
          <Link to="/projects">projects</Link>
        </h1>

        <h1 className='md:px-4 hover:text-purple-500 hover:underline'>
          <Link to="/blog">blog</Link>
        </h1>

        <h1 className='md:px-4 hover:text-purple-500 hover:underline'>
          <Link to="/about">about</Link>
        </h1>

        <h1 className='md:px-4 hover:text-purple-500 hover:underline'>
          <a href='https://shyynux.github.io/reading-list/'>reading-list</a>
        </h1>
      </div>
    </div>
  );
}

export default Header;
