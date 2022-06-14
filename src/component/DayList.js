import {Link} from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function DayList() {

    const days = useFetch(" http://localhost:3002/days");
    // const [days, setDays] = useState([]);
    //
    // useEffect(() => {
    //     fetch('http://localhost:3002/days')
    //         .then(res => {
    //             return res.json()
    //         })
    //         .then(data => {
    //             setDays(data);
    //         });
    // }, []);

    if(days.length === 0 ) {
        return <span>loading...</span>
    }
    return (
        <ul className="list_day">
            {days.map(day => (
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                </li>
            ))}
        </ul>
    );
}