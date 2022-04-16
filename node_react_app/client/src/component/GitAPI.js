import { useEffect, useState } from "react"
import verified from '../static/verified.png'
import unverified from '../static/unverified.png'
import moment from 'moment'
const API = 'https://api.github.com/orgs/'

const GitAPI = ({props}) => {
    const [valid, setValidity] = useState(true);
    const [id, setId] = useState (6969696);
    const [name, setName] = useState ('Amazon Web Services');
    const [html_url, setHtml_url] = useState ('https://github.com/aws');
    const [avatar_url, setAvatar_url] = useState ('https://avatars.githubusercontent.com/u/2232217?v=4');
    const [is_verified, setIs_verified] = useState (true);
    const [created_at, setCreated_at] = useState ('2012-08-28T05:37:55Z');
    const [updated_at, setUpdated_at] = useState ('2022-03-18T18:37:08Z');
    const friendlyCreate = moment(created_at).fromNow();
    const friendlyUpdate = moment(updated_at).fromNow();
    const url = API+props;

    // useEffect(() => {
    //     console.log("Requested "+ props )
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => {
    //             if(data.hasOwnProperty('id')) {
    //                 setValidity(true)
    //                 setData(data)
    //             } else setValidity(false)
    //         }).catch(err => {
    //             console.log(err);
    //         });
    // });

    const setData = ({
        id,
        name,
        html_url,
        is_verified,
        created_at,
        updated_at}) => {
        setId(id);
        setName(name);
        setHtml_url(html_url);
        setIs_verified(is_verified);
        setCreated_at(created_at);
        setUpdated_at(updated_at);
    }


    if(valid) {
        return(
            <section className="container org">
                <div className="flex align">
                    <a href={html_url}><img src={avatar_url}></img></a>
                    <h2><a href={html_url}>{name}</a></h2>
                    {is_verified ? 
                        <img className="verify safe" src={verified} alt="verified" title="Verifed"></img> 
                        : <img className="verify danger" src={unverified} alt="unverified" title="Unverifed"></img>}
                </div>
                <div className="flex wrap push-up">
                    <h3 title="ID">#{id}</h3>

                    {/* Has Updated? */}
                    { created_at < updated_at ? 
                        <div className="flex wrap">
                            <h3 className="highlight">Modified: {friendlyUpdate}</h3>
                            <h3>Made: {friendlyCreate}</h3>
                        </div>
                        : <div className="flex wrap">
                            <h3>Modified: {friendlyUpdate}</h3>
                            <h3 className="highlight">Made: {friendlyCreate}</h3>
                        </div>
                    }
                </div>
            </section>
        )
    } else {
        return(
            <div>
                <h1>We couldn't find that org :/</h1>
                <h3>(note: you may have reached the Github API request limit)</h3>
            </div>
        )
    }

}

export default GitAPI