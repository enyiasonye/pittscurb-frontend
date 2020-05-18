import React from 'react';
import { Card, Chip } from '@material-ui/core';
import styled from 'styled-components';
import colors from '../../../common/constants/colors';

const CustomCard = styled(Card)`
    padding: 0 !important;
    position: relative !important;
    overflow: visible !important;
`
const CardContent = styled.div`
    padding: 0;
    display: flex;
    overflow: visible;
    flex-direction: column;
    height: 100%;
    font-family: Muli;
    color: #636363;

    .card-content-header {
        flex: 1 0 auto;
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
        padding: 1rem;
        background: #f9f6f6;
    }
`

const BestSpot = styled(Chip)`

    background-color: ${colors.primary} !important;
    color: ${colors.white} !important;
    border-radius: 0.3rem !important;
    padding: 0rem 0.75rem !important;
    position: absolute;
    right: 0.75rem;
    top: -0.9rem;  
    z-index: 2;
`;

export default ({ bestSpot, timesAvailable, maxDurationMinutes, spaces }) => {
    return (
        <CustomCard elevation={5}>
            {bestSpot && <BestSpot size="medium" label="BEST SPOT" />}
            <CardContent>
                <div className="card-content-header">
                    <div>Available from</div>
                    <div className="availability-time">
                        {timesAvailable.startTime}
                        {' '}
                        -
                        {' '}
                        {timesAvailable.endTime}
                    </div>
                </div>
                <div className="card-content-footer">
                    <span>
                        {maxDurationMinutes}
                        {' '}
                        min. max
                    </span>
                    <span>
                        {spaces}
                        {' '}
                        spots free
                    </span>
                </div>
            </CardContent>
        </CustomCard>

    );
};