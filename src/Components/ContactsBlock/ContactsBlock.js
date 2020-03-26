import React from "react";
import PropTypes from "prop-types";

function ContactsBlock ({ classes }) {
  return (
    <div className={classes.mapContainer}>
      ContactsBlock
    </div>
  )
}

ContactsBlock.propTypes = {
  classes: PropTypes.object.isRequired
}

export default ContactsBlock;