import React from 'react';

const fetchRepo = async function (name) {
    const response = await fetch(`https://api.github.com/repos/chadhindsight/${name}`)

    const repo = await response.json()
    console.log(repo)
    return repo
}

const Repo = async ({name}) => {
    const repo = await fetchRepo(name)

    return (
        <div>
            {repo.name}
        </div>
    );
};

export default Repo;