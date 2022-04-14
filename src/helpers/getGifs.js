
export const getGifs = async (category)=>{

    const url =`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=RHtXAHzujB5WfZMqvxEswDePdweGsBp9`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    //recorro el json para obtener los datos que quiero
    const gifs = data.map(img=>{
        return {
            id:img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    console.log(gifs);
    //setimages(gifs);

    return gifs;

}
