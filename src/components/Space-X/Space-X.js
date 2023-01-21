import React, {useEffect, useState} from 'react';
import {spaceXService} from "../../services/serviceForSpaceX/space-xService";

const SpaceX = () => {

    const [launches, setLaunches] = useState([]);

    useEffect(()=> {
spaceXService.getAll()
    .then(value => value.data)
    .then(value => setLaunches([...value]))
    }, [])

    return (
        <div>
            {launches.filter(value => value.launch_year !== '2020').map(value => {
                return (
                    <div className={'Card'} key={value.flight_number}>
                        <div>#{value.flight_number}--<b>"{value.mission_name}"</b></div>
                        <img className={'Img'} src={value.links.mission_patch_small} alt={value.mission_name}/>
                    </div>

                )
            })}
        </div>
    );
};

export default SpaceX;