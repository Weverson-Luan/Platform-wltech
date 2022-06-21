import { ApolloClient, InMemoryCache } from "@apollo/client";


//fazendo instância apollo
export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o6xr410xg801xmgnyxbm03/master',
  cache: new InMemoryCache()
});