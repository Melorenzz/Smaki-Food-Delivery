import {Link} from "react-router";

interface CategoryCard {
    icon:  string;
    name: string;
    id: string;
}

const CategoryCard = ({icon, name, id}: CategoryCard) => {
    return (
        <Link to={`/categories/${id}`} className=' max-w-[220px] border-3 border-transparent hover:border-red-col transition bg-white-col p-[15px] shadow-md items-center justify-center w-full flex flex-col gap-[10px] rounded-[24px]'>
            <img className='w-[40px] aspect-square' src={icon} alt={name}/>
            <h3 className='text-[16px] font-semibold'>{name}</h3>
        </Link>
    );
};

export default CategoryCard;