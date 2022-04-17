import { useEffect, useState } from "react";
import members from "../development/members"
import Member from "./Member"


const Members = ({props}) => {
    const [data, setData] = useState([])
    const URL = props+"/members"

    useEffect(() => {
        fetch(URL)
        .then(res => res.json())
        .then(json => {
            handleData(json);
        })
        .catch(err => console.log(err));
    });

    const handleData = (
        json) => {
            setData(json)

    }


    return(
        <div className="members" id="members">
            {/* <h2 className="highlight allcaps"style={{textAlign:"center"}}>Members</h2> */}
            <div className="mx flex wrap">
            {
                // to be replace with  data.map(props)
                data.map(props => {
                    return (
                        <Member props={props} key={props.id}/>
                    )
                })
            }
            </div>
        </div>
        
    )
}

export default Members

