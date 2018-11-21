import React from 'react';

const Footer = (props) => {
    return (
      <div id="footer" className="row offset-1">
        <div className="col-12">
          <p className="text-muted credit">
            All images are from <a href="http://commons.wikimedia.org/wiki/">Wikimedia</a>
          </p>
        </div>
      </div>
    );
}

export default Footer;