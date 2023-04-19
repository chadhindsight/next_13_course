import Link from "next/link";

async function fetchRepoContents(name) {

}

const RepoDirs = async ({name}) => {
    const repoContents = await fetchRepoContents(name)

    return (
        <div>
            
        </div>
    );
};

export default RepoDirs;