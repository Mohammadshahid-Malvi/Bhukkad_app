const User = (props) => {
    const { name, address } = props;
    return (
        <div className="user-detail">
            <h3>Function component</h3>
            <h3>Name : {name}</h3>
            <h3>Address : {address}</h3>
        </div>
    )
}

export default User;