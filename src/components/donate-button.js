import React from 'react';
import '../style/donate-button.css'

const Donate = (props) => {
  console.log('react app paypal', process.env.REACT_APP_PAYPAL)
  return (
    <div id="donateButton">
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value={`${process.env.REACT_APP_PAYPAL}`} />
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
        <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
      </form>
    </div>
  )
}
export default Donate;