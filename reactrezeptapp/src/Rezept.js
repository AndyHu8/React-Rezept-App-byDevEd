import React from 'react';
import Style from './rezept.module.css'

const Rezept = ({title, calories, img, ingredients}) => {
    return(
        <div className={Style.rezept}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingre => (
                    <li>{ingre.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img className={Style.image} src={img} alt="" />
        </div>
    );
}

export default Rezept;