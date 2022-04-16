import { useEffect, useState } from "react"

const API = 'https://api.github.com/orgs/'

const GitAPI = ({props}) => {
    const [valid, setValidity] = useState('');
    const [id, setId] = useState ('');
    const [name, setName] = useState ('');
    const [html_url, setHtml_url] = useState ('');
    const [is_verified, setIs_verified] = useState ('');
    const [created_at, setCreated_at] = useState ('');
    const [updated_at, setUpdated_at] = useState ('');
    const url = API+props;

    useEffect(() => {
        console.log("Requested "+ props )
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if(data.hasOwnProperty('id')) {
                    setValidity(true)
                    setData(data)
                } else setValidity(false)
            }).catch(err => {
                console.log(err);
            });
    });

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
            <div>{name} {id}</div>
        )
    } else {
        return(
            <div>
                <div>We couldn't find that org :/</div>
                <h2>(note: you may have reached the Github API request limit)</h2>
            </div>
        )
    }

}

export default GitAPI