import React, { useEffect, useState } from "react"
import "../style/style.css"
function Weaapp() {
   
    const [city, setcity] = useState("");
    const [search, setsearch] = useState("")
    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=542bfb7f582cfb9351de5236dc483d48`;
            const res = await fetch(url);

            return res.json()
        }
        fetchApi().then((data) => {
            setcity(data.main)

        })
            .catch((err) => {
                console.log(err)
            })
    }, [search])

    return (
        <div className="main">
            <div className="search">
                <h2>enter the city name</h2>
                <input type="search"
                placeholder="Search"
                    onChange={(event) => {
                        setsearch(event.target.value)
                    }} />
                     {!city ? (
                <h2>no data found</h2>
            ) : (
                <div>
                    <h2>
                        {(parseFloat(city.temp) - 273.15).toFixed(2) + " Celcius"}
                    </h2>
                </div>
            )
            }
            <div>
                <h2>{search.toLocaleUpperCase()}</h2>
            </div>
            </div>
            
           


        </div>
    )
}
export default Weaapp; 