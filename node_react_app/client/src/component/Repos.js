import React, { useEffect, useState } from "react";
import moment from "moment";

const Repos = ({props}) => {
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
            <div className="shrink" id="repos">
                <div className="mx flex wrap box">
                    <h3 className="stretch">Repositorites</h3>
                    <div className="scrollable-wrapper">
                    <table className="table">
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Language</th>
                            <th>Pushed</th>
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
                                            <td data-label="Name"> <a href={i.html_url}>{i.name}</a></td>
                                            <td data-label="Description">{i.description}</td>
                                            <td data-label="Language">{i.language}</td>
                                            <td data-label="Pushed">{friendlyPush}</td>
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
                <h3>Repositorites</h3>
                <p>none found :(</p>
            </div>
        )
    }
    
}

export default Repos

