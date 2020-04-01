import React, {Component} from 'react';
import _ from 'lodash';

export default class Comment extends Component {

  submitMessageButton() {
    const text = this.refs.chatText.value
    this.props.newChatMessage({text: text, user: this.props.user})
  }

  getMessages() {
    return _.map(this.props.comment, (value, key, object) => {
      return (
        <tr key={key}>
          <td className="user">{value.user} </td>
          <td>{value.text}</td>
        </tr>
      )
    })
  }

  submitenter(e) {
    if(e.keyCode === 13) {
      this.submitMessageButton()
    }
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
        <input type='text' id='chat' ref='chatText' onKeyDown={(e) => this.submitenter(e)} />
        <button type="button" className="btn btn-primary" onClick={this.submitMessageButton.bind(this)}>コメント</button>
      </div>
    )
  }
}
