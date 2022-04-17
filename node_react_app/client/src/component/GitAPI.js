import { useEffect, useState } from "react"
import Organization from "./Organization"
import Members from "./Members"
import Repos from "./Repos"
import Events from "./Events"
import Hooks from "./Hooks"
import Issues from "./Issues"
import moment from 'moment'
const API = 'https://api.github.com/orgs/'

const GitAPI = ({props}) => {
    const [data, setData] = useState()
    const [valid, setValidity] = useState();
    const URL = API+props;

    useEffect(() => {
            console.log("URL "+ URL +"Valid?"+ valid +"Requesting "+ props)
            fetch(URL)
                .then(res => res.json())
                .then(data => {
                    if(data.hasOwnProperty('id')) {
                        console.log(data);
                        setData(data);
                        setValidity(true);
                    }
                }).catch(err => {
                    console.log(err);
                    setValidity(false);
                });
    });

    if(valid && props !== '') {
        return(
            <div>
                <Organization props={data}/>
                <Repos props={URL}/>
                    <Events props={URL}/>
                <div className="flex wrap">
                    <Hooks props={URL}/>
                    <Issues props={URL}/>
                </div>
                <Members props={URL}/>
            </div>

        )
    } else if(!valid && props !== '') { // Bad non-empty input
        return(
            <div>
                <h2>We couldn't find that org :/</h2>
                <h4>(note: you may have reached the Github API request limit)</h4>
            </div>
        )
    } else { // No input i.e. default state
        return(
            <></>
        )
    }

}

export default GitAPI