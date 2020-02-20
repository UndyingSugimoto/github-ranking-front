export interface GetUserRes {
  user: User;
}
export interface User {
  userId: String;
  avatarUrl: String;
  repositories: Repositories;
  followers: Followers;
  pullRequests: PullRequests;
  issues: Issues;
}

interface Repositories {
  nodes: Node[];
  totalCount: Number;
}

interface Node {
  id: String;
  name: String;
  url: String;
  primaryLanguage: Language;
  forks: Forks;
  watchers: Wachers;
  viewerHasStarred: false;
  stargazers: Stargazers;
}

interface Language {
  name: String;
}
interface Forks {
  totalCount: 0;
}
interface Wachers {
  totalCount: 0;
}
interface Stargazers {
  totalCount: 0;
}

interface Followers {
  totalCount: Number;
}

interface PullRequests {
  totalCount: Number;
}

interface Issues {
  totalCount: Number;
}
