import React from 'react';

export const Repos = ({repos}) => (
    <React.Fragment>
        {repos.map(repo => (
            <div className="card mb-3" key={repo.key}></div>
        ))}
    </React.Fragment>
);