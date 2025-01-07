import { Cart } from './Cart';
import './Header.css'
import { KeychainsSearch } from './SearchKeychains';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useKeychains } from '../hooks/useKeychains';
import debounce from 'just-debounce-it'

function useSearch (){
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirsInput = useRef(true)

  useEffect(() =>{
    if(isFirsInput.current){
      isFirsInput.current = search === ''
      return
    }
    if(search === ''){
      setError('No se puede bucar in llavero vacio')
      return
    }
    
    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número')
      return
    }
    if(search.length <3){
      setError('La busqueda debe de tener al menos 3 caracteres')
    }

    setError(null)
  }, [search])
  return {search, updateSearch, error}
}
export function Header() {
  const [sort,setShort] = useState(false)
  const {search,updateSearch,error} = useSearch()
  const {keychains,loading,getKeychains} = useKeychains({search,sort})


  const debouncedGetKeychains = useCallback(
    debounce(search => {
      console.log('search', search);
      getKeychains({ search });
    }, 300),
    [getKeychains]
  );
  
  const handleSubmit = (event) => {
    event.preventDefault()
    getKeychains({search})
  
  }

  const handleSort = () => {
    setShort(!sort)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debouncedGetKeychains(newSearch)
  }

  return (
    <div id="webcrumbs">
      <header className="Header">
        <div>
          <img
            src="https://tools-api.webcrumbs.org/image-placeholder/50/50/shapes/1"
            alt="logo"
            className="h-[50px] w-[50px] object-contain"
          />
        </div>
        <nav className="flex justify-center gap-6 text-neutral-950">
          <p className="text-sm">Primera División</p>
          <p className="text-sm">Segunda División</p>
        </nav>
        <div className="relative mt-4 w-full">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Buscar"
              className="w-full border border-gray-400 rounded-md px-3 py-2 text-sm"
              onChange={handleChange}
              value={search}
              name="query"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <label>
              Ordenar
              <input type="checkbox" onChange={handleSort} checked={sort} />
            </label>
          </form>
        </div>
        <aside className="result">
          <KeychainsSearch keychains={keychains} />
        </aside>
      </header>
      <Cart />
    </div>
  );
}



