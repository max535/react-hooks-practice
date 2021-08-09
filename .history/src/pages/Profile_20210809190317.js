import React, {useContext, useEffect, Fragment} from 'react';
import {GithubContext} from '../context/github/githubContext';
import {Link} from 'react-router-dom';

export const Profile = ({match}) => {
  const {getUser, getRepos, loading, user, repos} = useContext(GithubContext);
  const urlName = match.params.name;

  useEffect(() => {
    getUser(urlName);
    getRepos(urlName);
  }, []);

  if (loading) {
    return <p className="text-center">Загрузка...</p>
  }

  const {
    name, company, avatar_url,
    loaction, bio, blog,
    login, html_url, followers,
    public_repos, public_gists
  } = user;

  console.log(match);
  return (
    <Fragment>
      <Link to="/" className="btn btn-link">На главную</Link>

      <div classname="card mb-4">
        <div className="row">
          <div className="col-sm-3 text-center">
            <img src={avatar_url} alt="" />
            <h1>Name</h1>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
