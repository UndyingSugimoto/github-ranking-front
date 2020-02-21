import AppClient from "../util/AppClient";
import gql from "graphql-tag";
import { GetUserRes } from "./data/GetUserRes";
import { ApolloQueryResult } from "apollo-boost";
import fetcher from "../util/Fetcher";
import { UserDetailRes } from "./data/UserDetailRes";
import { UserExistsRes } from "./data/UserExistsRes";

export async function getUser(loginUserId: String) {
  const query = gql`
    {
        user(login: "${loginUserId}") {
          avatarUrl
          repositories(first:100,ownerAffiliations:OWNER,orderBy:{field: STARGAZERS,direction:DESC}) {
            nodes {
              id
              name
              url
              primaryLanguage{
                name
              }
              forks{
                totalCount
              }
              watchers{
                totalCount
              }
              viewerHasStarred
              stargazers {
                totalCount
              }
            }
            totalCount
          }
          followers{
            totalCount
          }
          pullRequests{
            totalCount
          }
          issues{
            totalCount
          }
        }
      }
  `;
  return await AppClient.query({
    query
  }).then(function(result: ApolloQueryResult<GetUserRes>) {
    result.data.user.userId = loginUserId;
    return result.data;
  });
}

export async function entryUser(user: GetUserRes) {
  const endpoint = process.env.REACT_APP_BACKEND_ENDPOINT as string;
  const url = "/github-ranking/userentry";

  await fetcher(endpoint + url, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(user)
  });
}

async function getUserDetail(userId: string) {
  const endpoint = process.env.REACT_APP_BACKEND_ENDPOINT as string;
  const url = "/github-ranking/user/detail?";
  let params = new URLSearchParams();
  params.set("userId", userId);
  return await fetcher<UserDetailRes>(endpoint + url + params.toString(), {
    headers: {
      Accept: "application/json"
    },
    method: "GET"
  });
}

export async function existsUser(userId: string) {
  const endpoint = process.env.REACT_APP_BACKEND_ENDPOINT as string;
  const url = "/github-ranking/user/exists?";
  let params = new URLSearchParams();
  params.set("userId", userId);
  return await fetcher<UserExistsRes>(endpoint + url + params.toString(), {
    method: "GET"
  });
}

export async function getUserData(userId: string) {
  const exists = await existsUser(userId);

  if (exists.exists) {
    const detail = await getUserDetail(userId);
    return detail;
  } else {
    const userRes = await getUser(userId);
    await entryUser(userRes);
    const detail = await getUserDetail(userId);
    return detail;
  }
}
