import React from 'react';
import ReactDom from 'react-dom';
import AuthorQuiz from './AuthorQuiz';

describe("Author Quiz", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<AuthorQuiz/>, div);
  });
});