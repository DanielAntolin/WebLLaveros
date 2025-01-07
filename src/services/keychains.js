export const searchKeychains = async({search}) => {
    if (search === '') return null

    try{
        const response = await fetch('https://apillaveros.onrender.com/keychains/?search=${search}')
        const json = await response.json()

        const keychains = json.search

        return keychains?.map(keychain => ({
            id: keychain.id,
            name: keychain.name,
            description: keychain.description,
            image: keychain.image,
            price: parseFloat(keychain.price)
        }))
    } catch(e){
        throw new Error(" Error search keychains");
        
    }
}