import React, { useEffect, useState } from "react";
import moment from "moment";

const Events = ({props}) => {
    const [data, setData] = useState([])
    const [valid, setValidity] = useState()
    const URL = props+"/events"
    let friendlyCreate;

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
            <div className="events" id="events">
                {/* <h2 className=" allcaps"style={{textAlign:"center"}}>repos</h2> */}
                <div className="mx flex wrap box">
                    <h3 className="stretch">Events</h3>
                    <div className="scrollable-wrapper">
                    <table className="table">
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Made</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(i => {
                                    friendlyCreate = moment(i.created_at).fromNow();
                                    return (
                                        <tr key={i.id}>
                                            <td data-label="ID">{i.id}</td>
                                            <td data-label="Name"> <a href={i.repo.url}>{i.repo.name}</a></td>
                                            <td data-label="Type">{i.type}</td>
                                            <td data-label="Made">{friendlyCreate}</td>
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
                <h3>Events</h3>
                <p>none found :(</p>
            </div>
        )
    }
    
}

export default Events

