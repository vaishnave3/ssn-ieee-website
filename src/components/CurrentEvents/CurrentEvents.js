import React from 'react';
import './currentevents.css';


export default function CurrentEvents(props) {
    return (
        <div className='card'>
            <h1>{props.title}</h1>
            <h4>{props.description}</h4>
            <div className='details'>
                <h6>{props.place}</h6>
                <h6>{props.date}</h6>
                <h6>{props.time}</h6>
            </div>
            <h4>{props.guest}</h4>
        </div>
    );
}
