import AppClient from "../util/AppClient";
import gql from "graphql-tag";
import { GetUserRes } from "./data/GetUserRes";
import { ApolloQueryResult } from "apollo-boost";


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
      return result.data;
    }
      );
}