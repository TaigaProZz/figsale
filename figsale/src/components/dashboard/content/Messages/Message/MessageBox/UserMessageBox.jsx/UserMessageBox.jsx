import '../MessagesBox.scss';

function UserMessageBox (props) {
  return (
    <div className="message-box dashboard-user-message-box-container">
      {props.message.message_content}
    </div>
  )
}

export default UserMessageBox;