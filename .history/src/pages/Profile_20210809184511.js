import React from 'react';
import { GithubContext } from '../context/github/githubContext';

export const Profile = ({match}) => {
  const github = useContext(GithubContext);


  console.log(match);
  return (
    <div>
      <h1>Profile page</h1>
    </div>
  );
}
