import React from 'react';
import  {connect} from 'react-redux';
import {signIn, signOut} from '../actions';
class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:'937018686603-8supu9t0es468psljvcliguqpdcg61rv.apps.googleusercontent.com',
                scope:'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }
    onAuthChange = (isSignedIn) => {
        if(isSignedIn) {
            const userDetails = {
                userId: this.auth.currentUser.get().getId(),
                userName: this.auth.currentUser.get().w3.ig,
                imageUrl:this.auth.currentUser.get().w3.getImageUrl()
            }
             this.props.signIn(userDetails);
        }
        else {
            this.props.signOut()
        }
    }
    onSignInClick = () => {
        this.auth.signIn();
    }
    onSignOutClick = () => {
        this.auth.signOut();
    }
    renderAuthButton(){
        if(this.props.isSignedIn === null){
            return null;
        }
        else if(this.props.isSignedIn) {
            return (
                <div className = "left menu">
                    <div className= "left menu">
                        <img 
                        style={{borderRadius:"50%", width:"50px", 
                        position:"relative"}} 
                        src = {`${this.props.imageUrl.imageUrl}`} 
                        alt="Avatar" />
                    </div>
                    <div className= "right menu">
                    <button className = "ui red google button" onClick={this.onSignOutClick}>
                    <i className="google icon"/>
                    Sign out
                    </button>
                    </div>
                </div>
                
                )
        }
        else{
            return (
                <button className = "ui primary google button" onClick={this.onSignInClick}>
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
 const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn,
        imageUrl: state.auth.userDetails,
    }
 }
export default connect(
    mapStateToProps, 
    {signIn, signOut}
    )(GoogleAuth);