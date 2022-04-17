import { useEffect, useState } from "react";
import Member from "./Member"


const Members = ({props}) => {
    const [data, setData] = useState([])
    const URL = props+"/members"

    useEffect(() => {
        fetch(URL)
        .then(res => res.json())
        .then(json => {
            setData(json);
        })
        .catch(err => console.log(err));
    });
    
    return(
        <div className="members" id="members">
            <div className="mx flex wrap">
                {data.map(i => { return (
                <Member props={i} key={i.id}/>)})}
            </div>
        </div>
    )
}

export default Members

