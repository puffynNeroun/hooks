import {useState} from "react";


const UseState = () => {
    const [player1Counter, setPlayer1Counter] = useState(10);
    const [player2Counter, setPlayer2Counter] = useState(10);

    return (
        <div>
            <div>
                <div>Alex</div>
                <div>{player1Counter}</div>
                <button onClick=
                            {
                                () => {
                                    setPlayer1Counter((actual) => actual + 1)
                                }
                            }
                >+
                </button>
            </div>
            <hr/>
            <div>
                <div>Dima</div>
                <div>{player2Counter}</div>
                <button onClick={
                    () => {
                        setPlayer2Counter((actual) => actual + 1)
                    }
                }
                >+</button>
            </div>
            <hr/>
            <button onClick={() => {
              setPlayer1Counter((actual) => actual - 1)
              setPlayer2Counter((actual) => actual - 1)
            }}>-</button>
            <button onClick={() => {
                setPlayer1Counter(10)
                setPlayer2Counter(10)
            }}>reset</button>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
};

export default UseState;