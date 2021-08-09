import React, {Fragment, useContext} from 'react';
import {Search} from '../components/Search';
import {Card} from '../components/Card';

export const Home = () => {
  const context = useContext(contextValue)

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
