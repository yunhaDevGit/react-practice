import {useParams} from "react-router-dom";
import Word from "./Word";
import useFetch from "../hooks/useFetch";

export default function Day() {

    const {day} = useParams();
    // const [words, setWords] = useState([]);
    //
    // useEffect(() => {
    //     fetch(`http://localhost:3002/words?day=${day}`)
    //         .then(res => {
    //             return res.json()
    //         })
    //         .then(data => {
    //             setWords(data);
    //         });
    // }, [day]);
    const words = useFetch(`http://localhost:3002/words?day=${day}`);

    return (
        <>
            <h2>Day {day}</h2>
            {words.length === 0 && (<span>Loading...</span>)}
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