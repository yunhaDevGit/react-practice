import useFetch from "../hooks/useFetch";
import {useHistory} from "react-router-dom";

export default function CreateDay() {
    const days = useFetch("http://localhost:3002/days");
    console.log(days)
    const history = useHistory();

    function addDay() {
        fetch(`http://localhost:3002/days/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                day: days.length + 1
            }),
        }).then(res => {
            if(res.ok) {
                alert("생성이 완료 되었습니다.");
                // 해당 페이지로 이동
                history.push(`/`)
            }
        })
    }

    return (
        <div>
            <h3>현재 일수: {days.length}일</h3>
            <button onClick={addDay}>Day 추가</button>
        </div>
    );
}