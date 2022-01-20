import { useState } from "react";
import Fab from '@mui/material/Fab';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const BooksCard = ({ author, book_image, description, rank, title, user, onPlus, book, userId, primary_isbn13, isItemAdded }) => {

    const [isAdded, setIsAdeed] = useState(false);

    const handleAddClick = () => {
        onPlus({ ...book, userId })
        setIsAdeed(!isAdded);
        console.log('added to cart')
    }

    return (
        <>
            <article key={rank} className="flex bg-gray-100 py-2 px-5 rounded-lg sm:px-5">
                <div className="relative mr-3">
                    <h3 className="font-bold my-2 text-2xl text-center">{title}</h3>
                    <p className="py-2 absolute -left-8 -top-8 h-10 w-10 bg-indigo-500 rounded-full flex text-white justify-center items-center	">{rank}</p>
                    <img src={book_image} alt={title} className="block mx-auto w-2/3" />
                </div>
                <div className="grid">
                    <p className="my-2">{description}</p>
                    <p><span className="font-bold">Author:</span> {author}</p>
                    <Fab variant="extended" color={isAdded ? 'secondary' : 'primary'} sx={{ marginLeft: '5px' }} onClick={handleAddClick} disabled={user == null ? true : false}>
                        {isItemAdded(primary_isbn13) ? <FavoriteIcon color='secondary' sx={{ mr: 1 }} /> : <FavoriteBorderOutlinedIcon sx={{ mr: 1 }} />}
                        Favourite
                    </Fab>
                </div>
            </article>
        </>
    )
}