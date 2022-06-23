
import { ApolloClient, InMemoryCache } from "@apollo/client"; 

export const client = new ApolloClient({
    uri:'https://api-sa-east-1.graphcms.com/v2/cl4osrxwl14vq01xlg3pn7ksy/master', 
    cache: new InMemoryCache()
})