import { Button, createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CityItemProps {
  name: string;
  region?: string;
  province?: string;
  area?: string;
}

const StyledCityItem = styled.div`
  display:flex;
  height:"100%";
`;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      display:"flex",
      minWidth:"100%",
      flexDirection:"column",
      margin: "1.2ch 0 0 0"
    },
    layout: {
      display:"flex",
      width:"100%",
    },
    nameStyle:{
      display:"flex",
      flexGrow: 1,
      width:"100%",
      justifyContent:"center"
      
    },
    details:{
      display:"flex",
      flexGrow: 1,
      width:"100%",
      color:"black-gray",
      fontSize:"0.9ch",
      justifyContent:"flex-end",
      alignItems:"flex-end",
    }
  })
);

export function CityItem({name,region,province,area}: CityItemProps) {
  const classes = useStyles()
  return (
    <StyledCityItem>
      <Button variant="outlined" color="primary" className={clsx(classes.button)} >
        <div className={classes.layout}>
          <div className={classes.nameStyle}>{name}</div>
          <div className={classes.details}>{region+"-"+province+"-"+area}</div>
        </div>
      </Button>
    </StyledCityItem>
  );
}

export default CityItem;
