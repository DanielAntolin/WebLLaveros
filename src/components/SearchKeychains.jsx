function ListOfKeyChains({keychains}){
  return (
    <ul className='keychains'>
    {
      keychains.map(keychain =>(
        <li className='keychain' key= {keychain.id}>
          <h3>{keychain.name}</h3>
          <p>{keychain.descripcion}</p>
          <image src={keychain.image} alt={keychain.name}/>
        </li>
      ))
    }
  </ul>
  )
}

function NoKeyChainsResults(){
  return(
    <p>No se encontraron llaveros para esta busqueda</p>
  )
}

export function KeychainsSearch({keychains}){
  const hasKeychains = keychains?.length > 0

  return (
    hasKeychains
    ? <ListOfKeyChains keychains={keychains}/>
    : <NoKeyChainsResults/>
  )
}