import {useState} from "react";

export default function Word({word: w}) {
    const [word, setWord] = useState(w);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    function toggleShow() {
        setIsShow(!isShow);
    }

    function toggleDone() {
        // setIsDone(!isDone);
        // 체크 박스 선택 된 값 기억,,, -> isDone 값 변경
        fetch(`http://localhost:3002/words/${word.id}`, {
            method: 'PUT',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                ...word,
                isDone: !isDone,
            }),
        }).then(res => {
            if(res.ok) {
                setIsDone(!isDone);
            }
        });
    }

    // 단어 삭제 버튼 클릭 시 확인 후 삭제
    function del() {
        if(window.confirm('삭제 하시겠습니가?')) {
            fetch(`http://localhost:3002/words/${word.id}`, {
                method: 'DELETE',
            }).then(res => {
                if(res.ok) {
                    setWord({id:0});
                }
            });
        }
    }

    if(word.id === 0) {
        return null;
    }

    return (
        <tr className={isDone ? "off" : ""}>
            <td>
                <input type="checkbox" checked={isDone} onChange={toggleDone}/>
            </td>
            <td>{word.eng}</td>
            <td>{isShow && word.kor}</td>
            <td>
                <button onClick={toggleShow}>
                    뜻 {isShow ? "숨기기" : "보기"}
                </button>
                <button onClick={del} className="btn_del">삭제</button>
            </td>
        </tr>
    )
}