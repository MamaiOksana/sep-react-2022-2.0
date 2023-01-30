import React, {useEffect, useState} from 'react';

import {usersService} from "../../services";
import {User} from "../User/User";

const Users = ({users}) => {

    return (
        <div>
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};
