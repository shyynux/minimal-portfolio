
interface BoxProps {
    title: string;
    description: string;
    dateWritten: string;
    url: string;
  }

  const BlogBox: React.FC<BoxProps> = ({ title, description, dateWritten, url}) => {
    return (
        <a href={url}>
        <div className="py-10 m-4 px-10
        border-2 border-black
        shadow-xl
        text-left
        hover:bg-zinc-100
        ">
        <h1 className="text-2xl
           font-serif text-purple-700
           font-bold
           ">{title}</h1> 
           <p className="text-sm">{dateWritten}</p>
           <h3 className="font-mono">{description}</h3>
        </div>
        </a>
    )
};

export default BlogBox;