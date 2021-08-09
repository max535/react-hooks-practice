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
    following, public_repos, 
    public_gists
  } = user;

  console.log(match);
  return (
    <Fragment>
      <Link to="/" className="btn btn-link">На главную</Link>

      <div classname="card mb-4">
        <div className="row">
          <div className="col-sm-3 text-center">
            <img src={avatar_url} alt={name} />
            <h1>{name}</h1>
            {loaction && <p>Местоположение: {loaction}</p>}
          </div>
          <div className="col">
            {
              bio && <Fragment>
                <h3>BIO</h3>
                <p>{bio}</p>
              </Fragment>
            }
            <a 
              href={html_url} 
              target="_blank" 
              className="btn btn-dark"
            >Открыть профиль</a>
            <ul>
              {login && <li>
                <strong>Name: </strong> {login}
              </li>}

              {company && <li>
                <strong>Компания: </strong> {company}
              </li>}

              {blog && <li>
                <strong>Website: </strong> {blog}
              </li>}
            </ul>

            <div className="badge badge-primary">Подписчики: {followers}</div>
            <div className="badge badge-primary">Подписчики: {followers}</div>
            <div className="badge badge-primary">Подписчики: {followers}</div>
            <div className="badge badge-primary">Подписчики: {followers}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
