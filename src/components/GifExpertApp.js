import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {

    //const categories=['One Punch', 'Samurai X', 'Dragon Ball']

    
    const [categories, setCategories] = useState(['One Punch']);


 /*   const handleAdd =()=>{
        //setCategories(cats=>[...cats,'HunterXHunter']);

        setCategories([...categories,'Hunter X Hunter']);
    }
*/

//es recomendable que el key sea un String.
  return (
    <>
      <h2>GifExpertApp kaldusi</h2>
      <AddCategory setCategories={setCategories}/>
      <hr/>  

      <ol>
          
            {
                categories.map((category)=>(
                    <GifGrid 
                      key={category}
                      category={category} 
                    
                    />
                ))


            }
      </ol>
    </>
  )
}

