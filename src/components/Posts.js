import React, { Component } from 'react';
import Post from './Post';
import gql from "graphql-tag";
import { Query } from "react-apollo";

const Posts = () => (
  <Query
    query={gql`
      {
        posts {
          nodes {
            id
            title
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.posts.nodes.map(({ id, title }) => (
        <Post key={id} postTitle={title} />
      ));
    }}
  </Query>
);


export default Posts;
