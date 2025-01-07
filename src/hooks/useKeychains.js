import { useRef, useState, useMemo, useCallback} from 'react'
import { searchKeychains } from '../services/keychains.js'

export function useKeychains ({search, sort}) {
const [keychains, setKeychains] = useState([])
const [loading, setLoading] = useState(false)

const [,setError] = useState(null)

const previousSearch = useRef(search);


const getKeychains = useCallback(async ({ search}) =>{
    if(search === previousSearch.current) return
    // search es ''

    try{
        setLoading(true)
        setError(null)
        previousSearch.current = search
        const newKeychains = await searchKeychains({search})
        setMovies(newKeychains)
    }catch(e){
        setError(e.message)
    }finally{
        setLoading(false)
    }
}, [])
 const sortedKeychains = useMemo(() => {
    if(!keychains) return;
    return sort
    ? [...keychains].sort((a,b) => a.name.localCompare(b.name))
    : keychains
 }, [sort, keychains])

 return{keychains: sortedKeychains, getKeychains,loading}

}