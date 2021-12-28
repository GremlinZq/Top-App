// Core
import {useState} from "react";

// Svg
import StarIcon from './star.svg';

// Styles
import cn from 'classnames';
import styles from './Rating.module.scss';

export const Rating = () => {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0)

    const stars = Array(5).fill(null);

    const starsTSX = stars.map((star, index) => {
        return <li className={cn()} tabIndex={index + 1} key={index} onMouseLeave={(() => setHoverRating(rating))}
                   onClick={() => setRating(index + 1)} onMouseEnter={() => setHoverRating(index + 1)}>
            <StarIcon className={(cn(index < hoverRating && styles.selected))}/>
        </li>
    })

    return (
        <ul className={styles.ratingList}>
            {starsTSX}
        </ul>
    )
}