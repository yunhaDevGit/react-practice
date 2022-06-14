import {useState, useEffect} from "react";

// 커스텀 hooks
export default function useFetch(url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setData(data);
            });
    }, [url]);

    return data;
}