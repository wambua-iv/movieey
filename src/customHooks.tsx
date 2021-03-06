import { useEffect, useState } from "react";


const getData = (nameInLocalStorage: string) => {
    const result = localStorage.getItem(nameInLocalStorage);
    return result && JSON.parse(result)
}

export const useFetchData = (nameInStorage: string) => {
    const [data, setData] = useState({ data: null, loading: true })

    useEffect(() => {
        const localResult = getData(nameInStorage);

        //if (localResult) setData(() => ({ data: localResult, loading: false }));
        (() => {
            fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`)
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem("movies10", JSON.stringify(data))
                    setData(() => ({ data: data, loading: false }))
                })
                .catch(e => console.log(e))
        })();
    }, [nameInStorage, setData])
    console.log(data)
    return data;
}