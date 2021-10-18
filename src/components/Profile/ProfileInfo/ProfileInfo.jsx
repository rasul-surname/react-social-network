import React from 'react';

const ProfileInfo = (props) => {
    if(!props.profile) {
        return (
            <div>No Data</div>
        )
    }

    return (
        <div>
            <div>
                <img src="" alt=""/>
            </div>
            <div>
                <img src={props.profile.photos.large} alt=""/>
                Ava + Description
            </div>
        </div>
    )
}

export default ProfileInfo;