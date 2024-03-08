const getUserDataAndPosts = async (username: string) => {
  const ids = [];

  const userDataQuery = `
   {
  user(username:"${username}"){
    username,
   posts(pageSize:3,page:1,filter:{publications:["60d17a93a6a3a25dadf6268d"]}) {
       edges {
        node {
          id
        }
      }
    }
  }
}
  `;

  const userDataRes = await fetch('https://gql.hashnode.com/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ query: userDataQuery }),
  });

  const userData = await userDataRes.json();
  const edges = userData.data.user.posts.edges;
  for (let i = 0; i < edges.length; i++) {
    ids.push(edges[i].node.id);
  }

  const posts = await Promise.all(
    ids.map(async id => {
      const postQuery = `
       {
  post(id: "${id}") {
    id
    title
    title
    brief
    slug
    reactionCount
    replyCount
    responseCount
    brief
    coverImage{
      url
    }
    readTimeInMinutes
  }
}
      `;

      const postRes = await fetch('https://gql.hashnode.com/', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ query: postQuery }),
      });

      const postData = await postRes.json();
      return postData;
    }),
  );

  return posts;
};

export default getUserDataAndPosts;
