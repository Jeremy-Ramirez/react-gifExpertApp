import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

import { useFetchGifs } from '../hooks/useFetchGifs';

import {GifGridItem} from '../components/GifGridItem'


export const GifGrid = ({category}) => {
    
   // const { data, loading }= useFetchGifs(category);

    const [images, setimages] = useState([]);

    useEffect(() => {

        getGifs(category)
           .then(imgs=> setimages(imgs));

    }, [category])
    
    
return (
    <>
        <h3 >{category}</h3>

         {<div className='card-grid'>
        
                {
                    images.map( (img)=>(

                        <GifGridItem
                        
                            key={img.id}
                            { ...img }
                        />
                        
                    ))
                    
                }

        </div>}
    </>
  )
}

