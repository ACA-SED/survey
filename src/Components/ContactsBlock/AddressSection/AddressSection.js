import React from 'react';

import addressIcon from '../../../assets/icons/address-240px.png';
import { ADDRESS_SECTION } from '../../../Globals/variables';
import emailIcon from '../../../assets/icons/email-240px.png';
import phoneIcon from '../../../assets/icons/phone-240px.png';
import { useStyles } from './AddressSection.style';

function AddressSection() {
  const classes = useStyles();

  return (
    <div className={classes.addressSection}>
      <div className={classes.address}>
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
      </div>
    </div>
  );
}

export default AddressSection;