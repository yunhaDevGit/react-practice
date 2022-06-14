import useFetch from "../hooks/useFetch";
import {useRef} from "react";
import {useHistory} from "react-router-dom";

export default function CreateWord() {
    const days = useFetch("http://localhost:3002/days");
    const history = useHistory();

    function onSubmit(e) {
        e.preventDefault();

        fetch(`http://localhost:3002/words`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                day: dayRef.current.value,
                eng: endRef.current.value,
                kor: korRef.current.value,
                isDone: false
            }),
        }).then(res => {
            if(res.ok) {
                alert("생성이 완료 되었습니다.");
                // 해당 페이지로 이동
                history.push(`/day/${dayRef.current.value}`)
            }
        })
    }

    const endRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    return (
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>Eng</label>
                <input type="text" placeholder="computer" ref={endRef}/>
            </div>
            <div className="input_area">
                <label>Kor</label>
                <input type="text" placeholder="컴퓨터" ref={korRef}/>
            </div>
            <div className="input_area">
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map(day => (
                        <option key={day.id} value={day.day}>
                            {day.day}
                        </option>
                        ))}
                </select>
            </div>
            <button>저장</button>
        </form>
    );
}