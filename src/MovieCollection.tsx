import React from 'react';
import data from './MovieData.json';
import { Container, Table } from 'react-bootstrap';

const mds = data.MovieData;

function MovieList() {
  //can use this in the future to filter the movies
  // Filter the movies by the "Edited" property
  // const editedMovies = mds.filter((m) => m.Edited === "Yes");

  // Sort the resulting array alphabetically by title
  //editedMovies.sort((a, b) => a.Title.localeCompare(b.Title));

  const editedMovies = mds;
  

  return (
    <Container>
      <div className="my-4">
        <h3>Joel Hilton's Movie Collection</h3>
      </div>
      <div>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {editedMovies.map((m) => {
              return (
                <tr key={m.Title}>
                  <td>{m.Title}</td>
                  <td>{m.Year}</td>
                  <td>{m.Director}</td>
                  <td>{m.Rating}</td>
                  <td>{m.Category}</td>
                  <td>{m.Edited}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default MovieList;
