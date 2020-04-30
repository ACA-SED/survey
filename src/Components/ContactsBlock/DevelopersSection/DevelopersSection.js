import React from 'react';

import DeveloperInfo from '../DeveloperInfo';
import { useStyles } from './DevelopersSection.style';

const DEVELOPERS = [
  {
    firstName: 'Sose',
    lastName: 'Ghadyan',
    email: 'karnosose@gmail.com',
    phone: '+37493212564',
    githubPageURL: process.env.REACT_APP_SOSE_GITHUB_URL,
    linkedInPageURL: process.env.REACT_APP_SOSE_LINKEDIN_URL
  },
  {
    firstName: 'Yervand',
    lastName: 'Stepanyan',
    email: 'yervand.stepanyan@gmail.com',
    phone: '+37498772777',
    githubPageURL: process.env.REACT_APP_YERVAND_GITHUB_URL,
    linkedInPageURL: process.env.REACT_APP_YERVAND_LINKEDIN_URL
  },
  {
    firstName: 'Davit',
    lastName: 'Sahakyan',
    email: 'sahakyandavit92@gmail.com',
    phone: '+37498000065',
    githubPageURL: process.env.REACT_APP_DAVIT_GITHUB_URL,
    linkedInPageURL: process.env.REACT_APP_DAVIT_LINKEDIN_URL
  }
];

function DevelopersSection() {
  const classes = useStyles();

  return (
    <div className={classes.developersSection}>
      {DEVELOPERS.map(developer => (
        <DeveloperInfo developer={developer} key={developer.email} />
      ))}
    </div>
  );
}

export default DevelopersSection;