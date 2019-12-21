import React from 'react';
import CentralLayout from './CentralLayout';
import styles from '../static/css/MainLayout.module.css';
import { 
    Grid,
    GridList,
    GridListTile,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const MainLayout = (props) => {
    return (
        <CentralLayout/>
    );
};

export default MainLayout;
