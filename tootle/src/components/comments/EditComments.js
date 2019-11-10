import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import {fetchComment, editComment} from '../../actions';
import CommentForm from './CommentForm';
class  EditComments extends React.Component  {
    componentDidMount() {
        this.props.fetchComment(this.props.match.params.id);
    }
    onSubmit = (formValues) => {
        this.props.editComment(this.props.match.params.id, formValues);
    }
    render(){
        if(!this.props.comment){
            return <div>loading...</div>
        }
        return(
            <div>
                <h3>Edit Comment</h3>
                <CommentForm 
                initialValues={_.pick(this.props.comment, 'title','description')}
                onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return { comment: state.comments[ownProps.match.params.id]};
}
export default connect(mapStateToProps, {fetchComment, editComment})(EditComments);