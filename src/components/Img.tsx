
const Img = ({className, src='https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png?20210521171500', alt='image'}: {className?: string; src?: string; alt?: string}) => {
    return (
        <img className={className} onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png?20210521171500";
        }} src={src} alt={alt}/>
    );
};

export default Img;