export interface UserDetailRes {
  userName: string;
  userId: string;
  avatarUrl: string;
  githubUrl: string;
  tier: string;
  rank: Number;
  score: Number;
  currentNumber: Number;
  followersCount: Number;
  issuesCount: Number;
  pullRequestCount: Number;
  repositoriesCount: Number;
  forksCountTotal: Number;
  stargazerCountTotal: Number;
  watchersCountTotal: Number;
  mainLanguage: string;
  lastupdateDate: Date;
}
