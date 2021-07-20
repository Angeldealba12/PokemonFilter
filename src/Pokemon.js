const Pokemon = ( { name, img } ) => {

    return(
        <div>
            <h3>{name}</h3>
        <img src={img} alt={name}/>
        </div>
    )

}

export default Pokemon;