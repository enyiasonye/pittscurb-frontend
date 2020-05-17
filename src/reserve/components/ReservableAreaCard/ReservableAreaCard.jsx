import React from 'react';
import { Card } from '@material-ui/core';
import styled from 'styled-components';

const CardContent = styled.div`
    padding: 0;
    display: flex;
    overflow: visible;
    flex-direction: column;
    font-family: Muli;

    .card-content-header {
        /* flex: 1 0 auto; */
        padding: 1rem;
        padding-bottom: 0rem;
        padding-top: 0.5rem;
    }

    .availability-time {
        font-weight: 800;
        font-size: 1.5rem;
        margin: 0.5rem 0;
    }

    .card-content-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-shrink: 0;
        padding: 0rem 1rem;
        background: #f9f6f6;
    }
`


export default (props) => {

    return (

        <CardContent>
            <Card elevation={5}>
                <div className="card-content-header">
                    <div>Available from</div>
                    <div className="availability-time">
                        {props.timesAvailable.startTime}
                        {' '}
                        -
                        {' '}
                        {props.timesAvailable.endTime}
                    </div>
                </div>
                <div className="card-content-footer">
                    <span>
                        {props.maxDurationMinutes}
                        {' '}
                        min. max
                    </span>
                    <span>
                        {props.spaces}
                        {' '}
                        spots free
                    </span>
                </div>
            </Card>
        </CardContent>
    );
};