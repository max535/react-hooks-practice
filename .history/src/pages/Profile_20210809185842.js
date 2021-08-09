import React, {useContext, useEffect, Fragment} from 'react';
import {GithubContext} from '../context/github/githubContext';

export const Profile = ({match}) => {
  const {getUser, getRepos, loading, user, repos} = useContext(GithubContext);
  const name = match.params.name;

  useEffect(() => {
    getUser(name);
    getRepos(name);
  }, []);

  if (loading) {
    return <p className="text-center">Загрузка...</p>
  }

  console.log(match);
  return (
    <Fragment>
      <Link></Link>
    </Fragment>
  );
}
