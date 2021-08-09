import React, {Fragment, useContext} from 'react';
import {Search} from '../components/Search';
import {Card} from '../components/Card';
import { GithubContext } from '../context/github/githubContext';

export const Home = () => {
  const useContext(GithubContext)

  return (
    <Fragment>
      <Search />

      <div className="row">

        {cards.map(card => {
          return (
            <div className="col-sm-4 mb-4" key={card}>
              <Card />
            </div>
          )
        })}

      </div>

    </Fragment>
  );
}
