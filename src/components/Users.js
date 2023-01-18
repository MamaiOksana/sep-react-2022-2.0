export default function UserComponent (props) {
    let {item:{id, name, email}} = props;
    return(
        <div>
            <div>{id}</div><h4>{name}</h4><p>{email}</p>
        </div>
    )
}