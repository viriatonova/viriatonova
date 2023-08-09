import type { Commit } from '../types';


/**
 * Fetches the commits from a GitHub repository.
 * 
 * @param owner - The owner of the repository.
 * @param repo - The name of the repository.
 * @param token - The optional access token for authentication.
 * @returns - A promise that resolves to an array of commits.
 */
export async function getRepositoryCommits(owner: string, repo: string, token?: string): Promise<Object> {
    const url: string = `https://api.github.com/repos/${owner}/${repo}/commits`;

    const headers: { [key: string]: string } = token ? { Authorization: `token ${token}` } : {};

    try {
        const response: Response = await fetch(url, { headers });
        if (!response.ok) {
            throw new Error('Failed to fetch commits');
        }
        const data: any[] = await response.json();
        const commitCount: number = data.length;
        const commitAuthors: object = data.map((commit: any): Commit => ({
            author: commit.commit.author.name,
            date: commit.commit.author.date,
            // Extract other fields as needed
        }));;

        return {"commits": commitAuthors, "count": commitCount};
    } catch (error) {
        console.error('An error occurred while fetching the commits:', error);
        throw error;
    }
}
