import './Messages.scss';

function Messages() {
  const message = [
    {
      id: 1,
      senderEmail: 'test@gmail.com',
      productId: 1,
      subject: 'ub long sujet pour tester la taille du tablau',
      lastUpdate: '01/01/2021',
      sendDate: '01/01/2021',
      status: '2',
    },
    {
      id: 2,
      senderEmail: 'test@gmail.com',
      productId: 1,
      subject: 'ub long sujet pour tester la taille du tablau',
      lastUpdate: '01/01/2021',
      sendDate: '01/01/2021',
      status: '2',
    },
    {
      id: 3,
      senderEmail: 'test@gmail.com',
      productId: 1,
      subject: 'ub long sujet pour tester la taille du tablau',
      lastUpdate: '01/01/2021',
      sendDate: '01/01/2021',
      status: '2',
    },
    {
      id: 4,
      senderEmail: 'test@gmail.com',
      productId: 1,
      subject: 'ub long sujet pour tester la taille du tablau',
      lastUpdate: '01/01/2021',
      sendDate: '01/01/2021',
      status: '2',
    },
    {
      id: 5,
      senderEmail: 'test@gmail.com',
      productId: 1,
      subject: 'ub long sujet pour tester la taille du tablau',
      lastUpdate: '01/01/2021',
      sendDate: '01/01/2021',
      status: '2',
    },
    {
      id: 6,
      senderEmail: 'test@gmail.com',
      productId: 1,
      subject: 'ub long sujet pour tester la taille du tablau',
      lastUpdate: '02/01/2021',
      sendDate: '01/01/2021',
      status: '2',
    },
  ]

  const handleClick = (message) => {
    console.log(message);
  };

  return (
  <div className='table-container'>
    <table>
      <thead>
        <tr>
          <th>Sujet</th>
          <th>Demandeur</th>
          <th>Id de la demande</th>
          <th>Dernière mise à jour</th>
          <th>Date de création</th>
          <th>Statut</th>
        </tr>
      </thead>
      <tbody>
        {message.map((message) => {
          return (
            <tr key={message.id} onClick={() => handleClick(message)}>
              <td>{message.subject}</td>
              <td>{message.senderEmail}</td>
              <td>{message.id}</td>
              <td>{message.lastUpdate}</td>
              <td>{message.sendDate}</td>
              <td>{displayStatus(message.status)}</td>
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
    case '1':
      return 'En attente';
    case '2':
      return 'En cours';
    case '3':
      return 'Résolu';
    default:
      return null;
  }
}

export default Messages;