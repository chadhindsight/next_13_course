import Link from "next/link";

async function fetchRepoContents(name) {
    await new Promise ((resovle) => setTimeout(resovle, 2000))

    const response = await fetch(`https://api.github.com/users/chadhindsight/repos${name}/contents`,
    {
        next: {
            revalidate: 60,
        },
    }
    );
    const contents = await response.json();
    return contents
}

const RepoDirs = async ({name}) => {
    const repoContents = await fetchRepoContents(name)

     return (
    <>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RepoDirs;