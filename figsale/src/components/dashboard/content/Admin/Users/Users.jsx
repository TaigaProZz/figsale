import './Users.scss';

const users = [
  {
    id: 1,
    name: 'Nom prenom',
    email: 't@gmail.com',
    grade: 1,
  },
  {
    id: 2,
    name: 'Nom prenom',
    email: 'a@gmail.com',
    grade: 2,
  },
  {
    id: 3,
    name: 'Naom prenom',
    email: 'f@gmail.com',
    grade: 0,
  },
];

const grade = [
  {
    value: 0,
    label: 'User',
  },
  {
    value: 1,
    label: 'Employe',
  },
  {
    value: 2,
    label: 'Admin',
  },
];

function Users() {
  const handleClick = (message) => {
    console.log(message);
  };

  return (
  <div className='table-container'>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nom</th>
          <th>Permissions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr key={user.id} onClick={() => handleClick(user)}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{checkGrade(user.grade)}</td>
              <td>
                <select defaultValue={user.grade}>
                  {grade.map((grade) => {
                    return (
                      <option key={grade.value} value={grade.value}>{grade.label}</option>
                    );
                  })}
                </select>
              </td>
              <td><button>Sauvegarder</button></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
  );
}

function checkGrade (props) {
  switch (props) {
    case 0:
      return 'User';
    case 1:
      return 'Employe';
    case 2:
      return 'Admin';
    default:
      return null;
  }
}

export default Users;