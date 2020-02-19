import ApolloClient from "apollo-boost";

export default new ApolloClient({
    uri: 'https://api.github.com/graphql',
    request: operation => {
      operation.setContext({
        headers: {
          authorization: `Bearer ${
            process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
          }`
        }
      });
    }
  });