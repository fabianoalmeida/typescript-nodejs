import React from 'react';
import IUser from '../interfaces/IUser';

interface Props {
  user: IUser;
}

const User: React.FC<Props> = ({ user }) => {
  return (
    <div>
      <strong>Nome: </strong> { user.name } <br />
      <strong>Email: </strong> { user.email } <br /><br />
    </div>
  );
};

export default User;