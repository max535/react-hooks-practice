import React, {useContext, useEffect} from 'react';
import {GithubContext} from '../context/github/githubContext';

export const Profile = ({match}) => {
  const github = useContext(GithubContext);
  const name = match.params.name;

  useEffect(() => {
    github.getUser(name);
    github.getRepos(name);
  })

  github.getUser();
  github.getRepos(name);

  console.log(match);
  return (
    <div>
      <h1>Profile page</h1>
    </div>
  );
}
