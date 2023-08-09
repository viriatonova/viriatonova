export type Commit = {
    author: string;
    date: string;
}

export type CommitDisplay = {
    commmit: Commit[]
    count: number
}