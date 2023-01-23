import React, {FC, useState} from 'react';

type ProfileStatusPropsType = {
    status: string
}

export const ProfileStatus: FC<ProfileStatusPropsType> = (props) => {

    const [editMode, setEditMode] = useState(false)
const activateEditeMode = () => {
        setEditMode(true)
}

    const deactivateEditeMode = () => {
        setEditMode(false)
    }
    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditeMode}>{props.status}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input value={props.status} onBlur={deactivateEditeMode} autoFocus/>
                </div>
            }

        </div>
    );
};
