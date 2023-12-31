import Messages from '../Message/Messages';

function Conversations (props) {
  const conversations = props.conversations;
  const handleClick = (conversation) => {
    props.setSelectedMenuItem(<Messages conversation={conversation} user={props.user}/>)
  };

  return (
  <div className='table-container'>
    <table>
      <thead>
        <tr>
          <th>Sujet</th>
          <th>Id de la demande</th>
          <th>Dernière mise à jour</th>
          <th>Statut</th>
        </tr>
      </thead>
      <tbody>
        {conversations.map((conversation) => {
          return (
            <tr key={conversation.id} onClick={() => handleClick(conversation)}>
              <td>{conversation.subject}</td>
              <td>{conversation.conversation_id}</td>
              <td>{conversation.last_activity}</td>
              <td>{displayStatus(conversation.status)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
  );
}

function displayStatus(status) {
  switch (status) {
    case 1:
      return 'En attente';
    case 2:
      return 'En cours';
    case 3:
      return 'Résolu';
    default:
      return null;
  }
}

export default Conversations;