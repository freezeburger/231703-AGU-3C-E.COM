type AuthorName = string;
type Title = string;
type Description = string;
type PublicationTimeStamp = string;

export interface AppInfo {
    author:AuthorName;
    title:Title;
    description:Description;
    url:string;
    urlToImage:string;
    publishedAt:PublicationTimeStamp;
}
