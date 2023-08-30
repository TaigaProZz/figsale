import '../MessagesBox.scss';

function AdminMessageBox (props) {
  return (
    <div className="message-box dashboard-recipient-message-box-container">
      {props.message.message_content}
    </div>
  )
}

export default AdminMessageBox;