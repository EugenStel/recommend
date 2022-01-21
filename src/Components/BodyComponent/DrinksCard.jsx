import { useState } from "react";
import Fab from '@mui/material/Fab';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const DrinksCard = ({ name, image_url, tagline, first_brewed, id, abv, food_pairing, user, onPlus, drink, userId, isItemAdded }) => {

    const [isAdded, setIsAdeed] = useState(false);

    const handleAddClick = () => {
        onPlus({ ...drink, userId })
        setIsAdeed(!isAdded);
        console.log('added to cart')
    }
    return (
        <>
            <article key={id} className="grid grid-cols-2 gap-4 relative bg-gray-100 py-2 px-5 rounded-lg sm:px-5">
                <div className="mr-3">
                    <h3 className="font-bold my-2 text-2xl text-center">{name}</h3>

                    <img src={image_url} alt={name} className="block mx-auto overflow-hidden w-1/5" />
                </div>
                <div className="grid content-between">
                    <p className="py-1">{tagline}</p>
                    <div>
                        <p className="font-bold">Food Pairing:</p>
                        <ul>
                            {food_pairing.map((food) => {
                                return (<li>{food}</li>)
                            })}
                        </ul>
                    </div>
                    <p><span className="font-bold">First brewed:</span> {first_brewed}</p>
                    <Fab variant="extended" color={isAdded ? 'secondary' : 'primary'} sx={{ marginLeft: '5px' }} onClick={handleAddClick} disabled={user == null ? true : false}>
                        {isItemAdded(id) ? <FavoriteIcon color='secondary' sx={{ mr: 1 }} /> : <FavoriteBorderOutlinedIcon sx={{ mr: 1 }} />}
                        Favourite
                    </Fab>
                </div>
                <p className="p-2 absolute -left-5 -top-5 h-15 w-15 bg-indigo-500 rounded-full flex text-white justify-center items-center">{`${abv}%`}</p>
            </article>
        </>
    )
}