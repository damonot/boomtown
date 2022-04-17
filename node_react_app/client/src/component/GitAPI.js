import { useEffect, useState } from "react"
import Members from "./Members"
import Repos from "./Repos"
import Events from "./Events"
import Hooks from "./Hooks"
import Issues from "./Issues"
import verified from '../static/verified.png'
import unverified from '../static/unverified.png'
import moment from 'moment'
const API = 'https://api.github.com/orgs/'

const GitAPI = ({props}) => {
    const [valid, setValidity] = useState();
    const [id, setId] = useState ();
    const [name, setName] = useState ();
    const [html_url, setHtml_url] = useState ();
    const [avatar_url, setAvatar_url] = useState ();
    const [is_verified, setIs_verified] = useState ();
    const [created_at, setCreated_at] = useState ();
    const [updated_at, setUpdated_at] = useState ();
    const friendlyCreate = moment(created_at).fromNow();
    const friendlyUpdate = moment(updated_at).fromNow();
    const URL = API+props;

    useEffect(() => {
            console.log("URL "+ URL +"Valid? Requesting "+ props )
            fetch(URL)
                .then(res => res.json())
                .then(data => {
                    if(data.hasOwnProperty('id')) {
                        setData(data);
                    }
                }).catch(err => {
                    console.log(err);
                    setValidity(false);
                });
    });

    const setData = ({
        id,
        name,
        html_url,
        avatar_url,
        is_verified,
        created_at,
        updated_at}) => {
        setId(id);
        setName(name);
        setHtml_url(html_url);
        setAvatar_url(avatar_url);
        setIs_verified(is_verified);
        setCreated_at(created_at);
        setUpdated_at(updated_at);
        setValidity(true);
    }

    // console.log(URL + "\tValid: " + valid + "\tProps:" + props);
    if(valid && props !== '') {
        return(
            <div>
                {/* Organization Info */}
                <section className="container org">
                    <div className="flex align highlight mx">
                        <a href={html_url}><img src={avatar_url} alt="No Image Found"></img></a>
                        <h2><a href={html_url}>{name}</a></h2>
                        {is_verified ? 
                            <img className="verify safe" src={verified} alt="verified" title="Verifed"></img> 
                            : <img className="verify danger" src={unverified} alt="unverified" title="Unverifed"></img>}
                    </div>
                    <div className="flex wrap">
                        <h4 title="ID">#{id}</h4>

                        {/* Has Updated? */}
                        { created_at < updated_at ? 
                            <div className="flex wrap">
                                <h4 className="highlight">Modified: {friendlyUpdate}</h4>
                                <h4>Made: {friendlyCreate}</h4>
                            </div>
                            : <div className="flex wrap">
                                <h4>Modified: {friendlyUpdate}</h4>
                                <h4 className="highlight">Made: {friendlyCreate}</h4>
                            </div>
                        }
                    </div>
                </section>
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