import React, { useEffect, useState } from "react";
import issues from "../development/issues";

const Issues = ({props}) => {
    const [data, setData] = useState([])
    const [valid, setValidity] = useState()
    const URL = props+"/issues"

    useEffect(() => {
        fetch(URL)
        .then(res => res.json())
        .then(json => {
            if(json !== undefined && json[0].hasOwnProperty('id')) {
                setValidity(true);
                setData(json);
            } else setValidity(false);
        })
        .catch(err => console.log(err));
    });

    if(valid) {
        return(
            <div className="shrink" id="issues">
                <div className="mx flex wrap box">
                    <h3 className="stretch">Issues</h3>
                    <div className="scrollable-wrapper">
                    <table className="table">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>User</th>
                        <th>Number</th>
                        <th>State</th>
                        <th>Title</th>
                        <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(i => { return (
                        <tr key={i.id}>
                            <td data-label="ID">{i.id}</td>
                            <td data-label="User"> <a href={i.user.url}> <img src={i.avatar_url}alt={i.user.login}></img> </a></td>
                            <td data-label="Number"><a href={i.url}>{i.number}</a></td>
                            <td data-label="State">{i.state}</td>
                            <td data-label="Title">{i.title}</td>
                            <td data-label="Body">{i.body}</td>
                        </tr>)})}
                    </tbody>
                    </table>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="box mx fitcontent">
                <h3>Issues</h3>
                <p>none found :(</p>
                <h4>(you may have reached the request limit)</h4>
            </div>
        )
    }
    
}

export default Issues

