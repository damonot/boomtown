import moment from 'moment'
import verified from '../static/verified.png'
import unverified from '../static/unverified.png'
const Organization = ({props}) => {
    const friendlyCreate = moment(props.created_at).fromNow();
    const friendlyUpdate = moment(props.updated_at).fromNow();
    console.log(props);
    return (
        <section className="container org">
                    <div className="flex align highlight mx">
                        <a href={props.html_url}><img src={props.avatar_url} alt="No Image Found"></img></a>
                        <h2><a href={props.html_url}>{props.name}</a></h2>
                        {props.is_verified ? 
                            <img className="verify safe" src={verified} alt="verified" title="Verifed"></img> 
                            : <img className="verify danger" src={unverified} alt="unverified" title="Unverifed"></img>}
                    </div>
                    <div className="flex wrap">
                        <h4 title="ID">#{props.id}</h4>
                        {/* Has Updated? */}
                        { props.created_at < props.updated_at ? 
                         <div className="flex wrap">
                            <h4 className="highlight">Modified: {friendlyUpdate}</h4>
                            <h4>Made: {friendlyCreate}</h4></div>
                        : <div className="flex wrap">
                            <h4>Modified: {friendlyUpdate}</h4>
                            <h4 className="highlight">Made: {friendlyCreate}</h4></div>
                        }
                    </div>
        </section>
    )
}

export default Organization