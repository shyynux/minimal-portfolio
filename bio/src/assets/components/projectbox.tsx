import React from 'react';

interface BoxProps {
  title: string;
  description: string;
  website: string;
  github: string;
  techStack: string;
  url: string;
}

const Box: React.FC<BoxProps> = ({ title, description, website, github, techStack, url }) => {

  return (
    <div className='flex flex-row
    m-2 
    shadow-xl rounded-xl
    hover:shadow-2xl
    hover:bg-zinc-50
    border-2 border-black
    hover:text-black
    md:h-64
    md:w-full
    h-fit
    '>
    <div className="md:p-6 md:m-4 p-2
        h-1/3
        w-2/3
        text-left
        ">
      <h1 className='
      font-serif text-xl text-purple-800 underline
      '>{title}</h1>
      <p className='
      font-mono
      text-zinc-500'>{description}</p>
      <p>
      <a href={github} className='
      font-mono
      hover:text-purple-400'>github</a>
      </p>
      <p className='font-mono text-sm bg-zinc-100 '>
       {techStack}</p>

    <p>
      <a href={website} className='
      font-mono
      hover:text-red-400
      hover:underline
      '>📍 live </a>
      </p>
      <h2></h2>
    </div>
    <img src={url} alt={title} className='hidden md:block md:m-6 items-center
    border-2 border-black
    rounded-md' />
    </div>
  );
};

export default Box;
