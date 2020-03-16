import React, {Component} from 'react';
import { bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import SimpleSlider from '../components/SimpleSlider';
import Comment from '../components/Comment';

// Actions
import * as CommentAction from '../actions';

class App extends Component {
  render() {
    const {dispatch} = this.props
    const boundActionCreators = bindActionCreators(CommentAction, dispatch);

    return(
      <div>
        <SimpleSlider />
        <Comment newChatMessage={boundActionCreators.newChatMessage} comment={this.props.comment}/>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
