export interface ICourse {
    readonly bgColor: string;
    readonly id: string;
    readonly image: string;
    readonly name: string;
    readonly tags: string[];
}

export interface ITags {
    readonly selectedTag: string;
    readonly tags: string[];
}