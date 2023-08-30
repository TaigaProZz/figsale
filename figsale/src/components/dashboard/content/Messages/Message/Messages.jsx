import './Messages.scss';
import { IoMdSend } from 'react-icons/io';
import { useEffect, useRef, useState } from "react";
import RecipientMessageBox from './MessageBox/RecipientMessageBox/RecipientMessageBox';
import UserMessageBox from './MessageBox/UserMessageBox.jsx/UserMessageBox';
import axios from "axios";

function Messages (props) {
  const [messages, setMessages] = useState([]);
  const conversation = props.conversation;
  const user = props.user.user;
  
  const form = useRef(null);
  const inputValue = useRef('');

  useEffect(() => {
    const fetchMessages = async () => {
      const res = await axios.get(`http://localhost:3307/message/${conversation.conversation_id}`);
      setMessages(res.data);
    }
    
    fetchMessages();
  }, [conversation]);

  const handleClick = async () => {
    const message = inputValue.current;
    if (message.trim().length === 0) return;
    axios.put('http://localhost:3307/message', {
      conversation_id: conversation.conversation_id,
      message_content: message,
      sender_id: user.id,
      sender_status: user.grade,
      send_date: new Date()
    })
    .then(() => {
      form.current.reset();
      const newMessage = {
        conversation_id: conversation.conversation_id,
        message_content: message,
        sender_id: user.id,
        sender_status: user.grade,
        send_date: new Date()
      }
      setMessages([...messages, newMessage]);
    }, (error) => {
      console.log(error);
    });
  }

  return (
    <div className="dashboard-messages-container">
      <div className='dashboard-messages-content'>
        {messages.map((message) => {
          return (
            <div key={message.id}>
              {(message.sender_status === user.grade) ? 
                <UserMessageBox className={'dashboard-user-message-box-container'} message={message} />
              : 
              <RecipientMessageBox className={'dashboard-recipient-message-box-container'} message={message} /> 
              }
            </div>
          )
        })}
      </div>
      <form className='dashboard-messages-input' ref={form}>
        <input placeholder='Votre message' onChange={(e) => (inputValue.current = e.target.value)}></input>
        <IoMdSend className='dashboard-messages-send-ico' onClick={handleClick}/>
      </form>
    </div>
  )
}

export default Messages;