import AppClient from "../util/AppClient";
import gql from "graphql-tag";
import { GetUserRes } from "./data/GetUserRes";
import { ApolloQueryResult } from "apollo-boost";
import fetcher from "../util/Fetcher";

export async function getUser(loginUserId : String) {
    const query = gql`
    {
        user(login: "${loginUserId}") {
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
  `
  return await AppClient
  .query({
    query
  })
  .then(function (result :ApolloQueryResult<GetUserRes>){
      console.log(result.data)
      const endpoint = process.env.REACT_APP_BACKEND_ENDPOINT as string;
      const url = "/github-ranking/userentry";

    fetcher(endpoint + url,
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(result.data)
    });
    }
      );
}