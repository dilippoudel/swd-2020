import React from 'react';
class GoogleAuth extends React.Component {
    state = { isSignedIn: null, currentUser: null};
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:'937018686603-8supu9t0es468psljvcliguqpdcg61rv.apps.googleusercontent.com',
                scope:'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn : this.auth.isSignedIn.get() });
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }
    
    onAuthChange = () => {
        this.setState({ 
            isSignedIn: this.auth.isSignedIn.get()
        });
        if(this.state.isSignedIn) 
        return this.setState({currentUser: this.auth.currentUser.get().w3.ig});
        else { this.setState({currentUser: null})}
    }
    onSignIn = () => {
        this.auth.signIn();
    }
    onSignOut = () => {
        this.auth.signOut();
    }
    renderAuthButton(){
        if(this.state.isSignedIn === null){
            return null;
        }
        else if(this.state.isSignedIn) {
            return (
                <div className= "ui relaxed divided list">
                <i className="large middle aligned user icon "/>
                
                <button className = "ui red google button" onClick={this.onSignOut}>
                <i className="google icon"/>
                Sign out
                </button>
                
                </div>
                )
        }
        else{
            return (
                <button className = "ui primary google button" onClick={this.onSignIn}>
                <i className="google icon"/>
                Sign In with Google
            </button>
            )
        }
    }
    render() { 
       
        return ( 
            <div>
              {this.renderAuthButton()}
            </div>
             );
    }
}
 
export default GoogleAuth;