import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const graph_component = ({data: { loading, error, notes }}) => {
  if (error) return <h1>This is crazy!</h1>
  if (!loading) {
    return (
      <div>
        {notes.map((note, index) => (
          <div key={index}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    )
  }
  return <h1>Loading...</h1>
}

export const query = gql`
  query notes {
    notes {
    title
    content
  }
}
`

export default graphql(query)(graph_component)
