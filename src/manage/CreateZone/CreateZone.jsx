import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {  Button, Chip, TextField }  from '@material-ui/core';
import styled from 'styled-components';
import { mdiClose, mdiPlus } from '@mdi/js';
import Icon from '@mdi/react';

const StyledPanel = styled.div`
  width: 33vw;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  padding: 2rem;
  justify-content: space-between;
  height: 100%;
  h2 {
    margin: 0;
    line-height: 40px;
    font-family: Muli;
    font-style: normal;
    font-weight: bold;
    font-size 30px;
    color: #4D4D4D;
  }
`;

const StyledCard = styled.div`
  padding: 1rem;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  width: 100%;
  background-color: rgba(0,0,0, 0.05);
  h3 {
    font-family: Muli;
    font-style: normal;
    font-weight: bold;
    font-size 18px;
    color: #4D4D4D;
    width: 100%;
    margin: 0 0 .5rem 0;
  }
 
  button {
    font-family: Muli;
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    border: none;
    background: transparent;
    color: #8D1EF8;
    display: flex;
    flex-flow: row;
    height: 30px;
    align-items: center;
    cursor: pointer;
    outline: none;
    &:hover{
      color: #4D4D4D;
    }
  }
`;
const StyledLabel = styled.label`
  margin: .5rem 0;
  line-height: 10px;
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size 10px;
  color: #4D4D4D;
  width: 100%;
`;

const StyledBoundriesContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: .5rem;
  width: 100%;
  min-height: 42px;
`;

const StyledButton = styled(Button)`
  background-color: #8D1EF8;
`;

// purple: #8D1EF8;
export default () => {
  const dispatch = useDispatch();
  const handleDelete = (boundary) => {
    dispatch({
      type: 'TOGGLE_BOUNDARIES', value: boundary
    })
  };
  const boundaries = useSelector(state => state.boundaries)

  return (
    <StyledPanel>
      <h2>Create zone</h2>
      <TextField size="small" variant="outlined" label="Zone Name"></TextField>
      <StyledLabel htmlFor="">Boundaries</StyledLabel>
      <StyledBoundriesContainer>
      
        { boundaries.map(boundary => ( 
          <Chip
            size="small"
            key={boundary}
            label={boundary}
            onDelete={() => handleDelete(boundary)}
            deleteIcon={<Icon size="1rem" path={mdiClose} />}>
          </Chip> 
        ))}
      </StyledBoundriesContainer>
   
      <StyledCard>
        <h3>Editors</h3>
        <StyledLabel htmlFor="">Can do everything except edit zone boundaries.</StyledLabel>
        <TextField size="small" variant="outlined" type="email"></TextField>
        <button>
          <Icon size="1rem" path={mdiPlus} />
          Add an Editor
        </button>
      </StyledCard>
      <StyledCard>
        <h3>Viewers</h3>
        <StyledLabel htmlFor="">Can do everything except edit zone boundaries.</StyledLabel>
        <TextField size="small" variant="outlined" type="email"></TextField>
        <button>
          <Icon size="1rem" path={mdiPlus} />
          Add a viewer
        </button>
      </StyledCard>
      <div>
        <Button>Cancel</Button>
        <StyledButton color="primary">Create Zone</StyledButton>
      </div>
    </StyledPanel>
  )
}