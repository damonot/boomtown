import React, { useEffect, useState } from "react";
import moment from "moment";
import hooks from "../development/hooks";

const Hooks = ({props}) => {
    const [data, setData] = useState([])
    const [valid, setValidity] = useState()
    const URL = props+"/repos"
    let friendlyCreate;
    let friendlyUpdate;
    let friendlyPush;

    useEffect(() => {
        fetch(URL)
        .then(res => res.json())
        .then(json => {
            // console.log(json[0]);
            if(json[0] !== undefined && json[0].hasOwnProperty('id')) {
                setValidity(true);
                handleData(json);
            } else setValidity(false);
        })
        .catch(err => console.log(err));
    });

    const handleData = (json) => {
        setData(json)
    }

    if(valid) {
        return(
            <div className="shrink" id="hooks">
                <div className="mx flex wrap box">
                    <h3 className="stretch">Hooks</h3>
                    <div className="scrollable-wrapper">
                    <table className="table">
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Active</th>
                            <th>Type</th>
                            <th>Made</th>
                            <th>Modified</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(i => {
                                    friendlyCreate = moment(i.created_at).fromNow();
                                    friendlyUpdate = moment(i.updated_at).fromNow();
                                    friendlyPush = moment(i.pushed_at).fromNow();
                                    return (
                                        <tr key={i.id}>
                                            <td data-label="ID">{i.id}</td>
                                            <td data-label="Name"> <a href={i.url}>{i.name}</a></td>
                                            <td data-label="Active">{i.active}</td>
                                            <td data-label="Type">{i.type}</td>
                                            <td data-label="Made">{friendlyCreate}</td>
                                            <td data-label="Modified">{friendlyUpdate}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
            
        )
    } else {
        return (
            <div className="box mx fitcontent">
                <h3>Hooks</h3>
                <p>none found :(</p>
            </div>
        )
    }
    
}

export default Hooks

