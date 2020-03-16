import React, {Component} from 'react';
import _ from 'lodash';

//import CommentFlow from './CommentFlow';

export default class Comment extends Component {

  submitMessageButton() {
    const text = this.refs.chatText.value
    this.props.newChatMessage({text: text})
  }

  getMessages() {
    return _.map(this.props.comment, (value, key, object) => {
      
      return (
        <tr key={key}>
          <td>{value}</td>
        </tr>
      )
    })
  }

  componentDidUpdate() {
    console.log(this.props.comment[0])
  }
  
  render() {
    const comments = this.getMessages();
    return (
      <div className="panel-body">
        <div className="comment-body">
          <table>
            <tbody>
              {comments}
            </tbody>
          </table>
        </div>
        <input type='text' id='chat' ref='chatText' />
        <button className="btn btn-primary" onClick={this.submitMessageButton.bind(this)}>コメント</button>
      </div>
    )
  }
}
