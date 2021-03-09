export async function getAddress(address){
    const response = await fetch(`https://nominatim.openstreetmap.org/search.php?q=${address}&format=jsonv2`)

    if(!response.ok){
        throw new Error('Failed to fetch address')
    }

    const data = await response.json()

    if(data.error_message){
        throw new Error(data.error_message)
    }

    if(data.length){
        const coordinates = {latitude: data[0].lat, longitude: data[0].lon}
        return coordinates
    }else{
        throw new Error({message: 'Data tidak ditemukan'})
    }
}