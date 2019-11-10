import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchComments} from '../../actions'
class ListComments extends React.Component {
    componentDidMount() {
        this.props.fetchComments();
        
    }
    renderAdmin(comment){
        if(comment.userId === this.props.currentUserId) {
            return (
            <div className="right floated content">
                <Link to={`/comments/edit/${comment.id}`} className="ui button primary">Edit</Link>
                <button className="ui button negative">Delete</button>
            </div>)
        } 
    }
    renderList() {
        return this.props.comments.map(comment => {
            return(
                <div className="item" key={comment.id}>
                 {this.renderAdmin(comment)}
                 <div className="content">
                     <b>{comment.title}</b>
                 <div className="description">{comment.description}</div>  
                 </div> 
                </div>
            )
        })
    }

    renderCreate(){
        if(this.props.isSignedIn){
            return(
                <div style={{textAlign: 'right'}}>
                    <Link to="/comments/new" className="ui button primary">
                        Create Comment
                    </Link>
                </div>
            )
        }
    }
    render() { 
        return (<div>
            <h2>Comments</h2>
            <div className="ui celled list">{this.renderList()}</div>
            {this.renderCreate()}
        </div>  );
    }
}
 const mapStateToProps = (state) => {
     return{
        comments: Object.values(state.comments),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
        }
 }
export default connect(mapStateToProps, {
    fetchComments
})(ListComments);