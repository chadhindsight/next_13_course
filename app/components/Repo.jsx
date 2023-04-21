import { FaCodeBranch, FaEye, FaStar } from 'react-icons/fa';

const fetchRepo = async function (name) {
    const response = await fetch(`https://api.github.com/repos/chadhindsight/${name}`, {
      // The number of seconds to wait before new data is fetched
      next: {
        revalidate: 60,
      },
    })

    const repoTing = await response.json()
    return repoTing
}

const Repo = async ({name}) => {
    const repo = await fetchRepo(name)

    return (
        <div>
            <h2>{repo.name}</h2>
            <p>{repo.description}</p>
            <div className='card-stats'>
                <div className='card-stat'>
                    <FaStar />
                    <span>{repo.stargazers_count}</span>
                </div>
                 <div className='card-stat'>
                    <FaCodeBranch />
                    <span>{repo.forks_count}</span>
                </div>
                 <div className='card-stat'>
                    <FaEye />
                    <span>{repo.watchers_count}</span>
                </div>
            </div>
        </div>
    );
};

export default Repo;