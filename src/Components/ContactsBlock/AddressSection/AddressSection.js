import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import { ADDRESS_SECTION } from '../../../Globals/variables';
import { useStyles } from './AddressSection.style';

function AddressSection() {
  const classes = useStyles();

  return (
    <div className={classes.addressSection}>
      <List component="div" className={classes.info}>
        <ListItem>
          <ListItemIcon className={classes.locationIcon}>
            <RoomIcon />
          </ListItemIcon>
          <ListItemText primary={ADDRESS_SECTION.address} />
        </ListItem>
        <ListItem>
          <ListItemIcon className={classes.phoneIcon}>
            <PhoneIcon />
          </ListItemIcon>
          <ListItemText primary={ADDRESS_SECTION.phone} />
        </ListItem>
        <ListItem>
          <ListItemIcon className={classes.emailIcon}>
            <MailOutlineIcon />
          </ListItemIcon>
          <ListItemText primary={ADDRESS_SECTION.email} />
        </ListItem>
      </List>


      {/* <div className={classes.address}>
        <div className={classes.iconContainer}>
          <img alt="address-icon" className={classes.icon} src={addressIcon} />
        </div>
        <div>
          <span>{ADDRESS_SECTION.address}</span>
        </div>
      </div>
      <div className={classes.phone}>
        <div className={classes.iconContainer}>
          <img alt="address-icon" className={classes.icon} src={phoneIcon} />
        </div>
        <div>
          <span>{ADDRESS_SECTION.phone}</span>
        </div>
      </div>
      <div className={classes.email}>
        <div className={classes.iconContainer}>
          <img alt="address-icon" className={classes.icon} src={emailIcon} />
        </div>
        <div>
          <span>{ADDRESS_SECTION.email}</span>
        </div>
      </div> */}
    </div>
  );
}

export default AddressSection;
