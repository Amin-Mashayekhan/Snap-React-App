import { useContext } from 'react';
import Body from '../components/Body';
import { UserContext } from '../contexts/UserProvider';

export default function SocialPage({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const { user } = useContext(UserContext);

  return (
    <>
      {user.username && <h3>Welcome {user.username}</h3>}
      <Body sidebar>{children}</Body>
    </>
  );
}
