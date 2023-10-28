import { Profile } from 'components/Profile/Profile';
import user from '../user.json';

import { Statistics } from './Statistics/Statistics';
import data from '../data.json';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
