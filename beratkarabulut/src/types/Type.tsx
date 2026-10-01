export interface TechCategory {
    label: string
    items: string[]
    variant: 'amber' | 'blue' | 'green' | 'purple' | 'red'
}

export interface githubRepoState {
    repos: [];
}

export interface repoType {
    id: number,
    description: string,
    name: string,
    topics: string[],
    html_url: string
}


export interface GithubRepo {
    id: number;
    name: string;
    html_url: string;
    description: string | null;
    topics: string[];
    homepage: string | null;
}

export interface GithubRepoState {
    projects: GithubRepo[];
    loading: boolean;
    error: string | null;
}

export interface ProjectMeta {
    image: string;
    technologies: string[];
    category?: string;
    liveUrl?: string;
    order: number
}

export interface ContactFormValues {
    name: string;
    surname: string;
    email: string;
    message: string;
}

export interface ContactState {
    loading: boolean;
    success: boolean;
    error: string | null;
}