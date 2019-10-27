import React from 'react';
class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:'937018686603-8supu9t0es468psljvcliguqpdcg61rv.apps.googleusercontent.com',
                scope:'email'
            })
        })
    }
    render() { 
        return ( 
            <div>
              GoogleAuth
            </div>
             );
    }
}
 
export default GoogleAuth;