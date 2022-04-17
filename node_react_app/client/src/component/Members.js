import { useEffect, useState } from "react";
import members from "../development/members"
import Member from "./Member"


const Members = ({props}) => {
    const URL = props+"/members"
    const [data, setData] = useState();

    // useEffect(() => {
    //     fetch(URL)
    //     .then(res => res.json())
    //     .then(data => setData(data))
    //     .catch(err => console.log(err));
    // });

    return(
        <div className="members" id="members">
            {/* <h2 className="highlight allcaps"style={{textAlign:"center"}}>Members</h2> */}
            <div className="mx flex wrap">
            {
                // to be replace with  data.map(props)
                members.map(member => {
                    return (
                        <Member props={member} key={member.id}/>
                    )
                })
            }
            </div>
        </div>
        
    )
}

export default Members

