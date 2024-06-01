export interface File {
    id: string;
    title: string;
    url: string;
    downloadUrl: string;
    createdAt: Date;
    type?: string;
}