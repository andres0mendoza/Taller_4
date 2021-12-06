//Async-Await

const getImagen = async () => {

    try {

        const apikey = "GI00ilAn8jvR8CWf48LYb2yFuIfiwEUW";
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apikey }`)
        const { data } = await resp.json()
        const { url } = data.images.original;

        const img = document.createElement("img");
        img.src = url;
        document.body.append( img )

    }catch (error){
        //Manejo de error
        console.log("Ocurrio un error")
       // alert("Ocurrio un error")
    }

    
}

getImagen();
