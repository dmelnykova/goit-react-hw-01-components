import { Profile } from './Profile/Profile';
import user from '../user.json';
// import { Statistics } from './Statistics/Statistics';
// import

export const App = () => {
  return (
    <>
      <Profile user={user} />
    </>
  );
};