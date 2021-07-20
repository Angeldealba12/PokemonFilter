import { useEffect, useState } from "react";
import Result from "./Result";

const SearchBox = () => {

    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [onClick, setOnClick] = useState('')


    useEffect(() => {
        const logic = async () => {
            const url = 'https://pokeapi.co/api/v2/pokemon/?offset=1&limit=1118'
            const res = await fetch(url).then(response => response.json())
            setData(res.results)
        }

        logic();

    }, [])

    return (
        <div className="search">
            <div className="searchInputs">
                <input value={searchTerm} className="input" type="text" placeholder="Search..." onChange={(e) => { 
                    setSearchTerm(e.target.value)
                    }} />
            </div>
            {searchTerm.length !== 0 && (
                <div className="dataResult">
                    {data.filter((value) => {
                        if (searchTerm === "") {
                            return value
                        } else if (value.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return value
                        } else {
                            return null
                        }
                    }).map((val, key) => {
                        return <div onClick={() => { 
                            setOnClick(val.name)
                        }} className="dataItem" key={key}>
                            <p>{val.name}</p>
                        </div>
                    })}
                </div>
            )}
            <div>
                <Result  pokemon={onClick}/>
            </div>
        </div>
    )
}

export default SearchBox;

