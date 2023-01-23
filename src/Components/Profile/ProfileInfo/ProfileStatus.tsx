import React, {FC, useState} from 'react';

type ProfileStatusPropsType = {
    status:string
}

export const ProfileStatus:FC<ProfileStatusPropsType> = (props) => {

    const [editMode,setEditMode] = useState(false)

    return (
        <div>

        </div>
    );
};
