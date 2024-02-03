import React from 'react';

interface BoxProps {
  title: string;
  description: string;
  website: string;
  github: string;
  techStack: string;
}

const Box: React.FC<BoxProps> = ({ title, description, website, github, techStack }) => {
  return (
    <div className="p-6 m-4
        rounded-md
        shadow-md
        hover:shadow-2xl
        hover:bg-slate-50
        w-2/3
        text-left
        border-2 border-black
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
  );
};

export default Box;
