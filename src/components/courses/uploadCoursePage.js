import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseAction';

class UploadCoursePage extends React.Component{
    constructor(props, state){
        super(props, state);
        this.state = {
            course: {
                title: ''
            }
        };
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }
    onTitleChange(event){
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course:course});
    }

    onClickSave(){
        this.props.actions.createCourse(this.state.course);
    }
    courseRow(course, index){
        return <div key={index}>{course.title}</div>;
    }
    render(){
        return(
            <div>
                <h1>Add Course</h1>
                <div className="upload_form">
                    <input type="text" value={this.state.course.title} onChange={this.onTitleChange}/>
                    <input type="submit" value="Add" onClick={this.onClickSave}/>
                </div>
                {this.props.courses.map(this.courseRow)}
            </div>
        );
    }
}
UploadCoursePage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};
function mapStateToProps(state, ownProps){
    return {courses: state.courses};    
}
function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(courseActions,dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(UploadCoursePage);