import {useState} from "react";

//-------------------  Изменение значений через мутацию  --------------------------

const UseState2 = () => {
    const [counters, setCounters] = useState(
        {
            c1: 10,
            c2: 10
        }
    )
    return (
        <div>
            <div>
                <div>Alex</div>
                <div>{counters.c1}</div>
                <button onClick=
                            {
                                () => {
                                    setCounters((actual) => {
                                        return {...actual, c1: actual.c1 + 1}
                                        // actual.c1++
                                        // return actual
                                    })
                                }
                            }
                >+
                </button>
            </div>
            <hr/>
            <div>
                <div>Dima</div>
                <div>{counters.c2}</div>
                <button onClick={
                    () => {
                        setCounters((actual) => {
                            return {...actual, c2: actual.c2++}
                            // actual.c2++
                            // return actual
                        })
                    }
                }
                >+
                </button>
            </div>
            <hr/>
            <button onClick={
                () => {
                    setCounters((actual) => {
                        return {
                            ...actual,
                            c1: actual.c1 - 1,
                            c2: actual.c2 - 1
                        }
                        // actual.c1--
                        // actual.c2--
                        // return actual
                    })
                }
            }>-
            </button>
            <button onClick={
                () => {
                    setCounters((actual) => {

                        return {
                            ...actual,
                            c1: 10,
                            c2: 10
                        }

                        // actual.c1 = 10;
                        // actual.c2 = 10;
                        // return actual
                    })
                }
            }>reset
            </button>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
};

export default UseState2;