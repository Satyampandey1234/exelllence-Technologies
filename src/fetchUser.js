import React, {useEffect, useState} from "react";
import axios from "axios";
let FetchUser=()=> {
    let [userState, setUserState] = useState([]);
    useEffect(async () => {
        let dataURL = "https://reqres.in/api/users?page=2";
        await axios.get(dataURL).then((response) => {
            setUserState(response.data)
        }).catch((error) => {
            console.log(error)
        })

    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table text-center">
                        <thead className="bg-primary text-white p-4">
                        <th>Id</th>
                        <th>image</th>
                        <th>name</th>
                        <th>email</th>

                        </thead>
                        <tbody>
                        {
                            userState?.data?.map((user)=>{
                                return(
                                    <tr key={user?.id}>
                                        <td>{user?.id}</td>
                                        <td><img src={user?.avatar} height={80} width={80}/></td>
                                        <td>{user?.first_name} { user?.last_name}</td>
                                        <td>{user?.email}</td>
                                    </tr>
                                )
                            })

                        }

                        </tbody>
                    </table>
                </div>
            </div>
            <pre>{JSON.stringify(userState)}</pre>

        </div>

    )
}
export default FetchUser;