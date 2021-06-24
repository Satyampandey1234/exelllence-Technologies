import React, {useState} from "react";


let TodoList=()=>{
    let [input,setInput]=useState("");
    let [item,setItem]=useState([]);
    let changeInput=(event)=>{
        setInput(event.target.value)
    }

    let onSubmit=()=>{
        setItem((oldItem)=>{
            return [...oldItem,input]
        })
    }
    return (
        <>
            {/*<pre>{JSON.stringify(item)}</pre>*/}

            <div className="container">
                <div className="row">
                    <div className="col">
                        <div >
                            <input required type="text" name="data" onChange={changeInput} className="form-control" placeholder="Add Item"/>
                            <button onClick={onSubmit} value="submit" className="btn btn-success">Add Item</button>

                        </div>
                    </div>
                    <div className="row">
                        {
                            item?.map(item=>{
                                return (
                                <ul className="list-group">
                                    <li className="list-group-item">{item}</li>
                                </ul>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default TodoList;