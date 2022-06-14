import {useParams} from "react-router-dom";
import Word from "./Word";
import {useEffect, useState} from "react";

export default function Day() {

    const {day} = useParams();
    const [words, setWords] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3002/words?day=${day}`)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setWords(data);
            });
    }, [day]);

    return (
        <>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                {words.map(word => (
                    <Word word={word} key={word.id}/>
                ))}
                </tbody>
            </table>
        </>
    );
}