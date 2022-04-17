const Member = ({props}) => {

    return(
        <div className="member">
            <div id="item-0"><img src={props.avatar_url}></img></div>
            <h3 className="allcaps">{props.login}</h3>
            <h4>#{props.id}</h4>
            <div className="flex">
                {props.site_admin ?
                    <div className="bubble safe">Admin</div>
                    : <div className="danger bubble">Non-Admin</div>
                }
                <div className="bubble blue">{props.type}</div>
            </div>
            <div id="item-5"><a href={props.html_url}>Visit Me!</a></div>
        </div>
        
    )
}

export default Member

