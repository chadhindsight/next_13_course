import React from 'react';
import Repo from '@/app/components/Repo';

const RepoPage = ({params}) => {
    const {name} = params

    return (
        <div className="card">
           <Repo name={name}/>
        </div>
    );
};

export default RepoPage;