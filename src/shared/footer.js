import React from 'react';
import '../assests/scss/footer.css';

class Footer extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="footer">
              <p>Copyright @ 2022 - Vivek M</p>
            </div>
        )
    };
}

export default Footer;