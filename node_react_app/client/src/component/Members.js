import { useEffect, useState } from "react";
import Member from "./Member"


const Members = ({props}) => {
    const [data, setData] = useState([])
    const [valid, setValidity] = useState()
    const URL = props+"/members"

    useEffect(() => {
        fetch(URL)
        .then(res => res.json())
        .then(json => {
            if(json !== undefined && json[0].hasOwnProperty('id')) {
                setData(json);
                setValidity(true);
            }
        })
        .catch(err => console.log(err));
    });
    

    if(valid) {
        return(
            <div className="members" id="members">
                <div className="mx flex wrap">
                    {data.map(i => { return (
                    <Member props={i} key={i.id}/>)})}
                </div>
            </div>
        )
    } else {
        return (
            <div className="box mx fitcontent">
                <h3>Members</h3>
                <p>none found :(</p>
            </div>
        )
    }

}

export default Members

