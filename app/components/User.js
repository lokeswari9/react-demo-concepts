import React from 'react';

const User = (props) => {
    return (
        <div>
            {props.user.map((user, i) => {
                return <div key={i} onClick = {()=>{props.selectedUser(user)}}> {user.first_name} {user.sapId} </div>
            })}
            
        </div>
    )
}

export default User; 