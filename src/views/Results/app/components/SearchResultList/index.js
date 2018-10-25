/*  eslint-disable */
import React from "react";
import SearchResultListItem from "./SearchResultListItem";

class SearchResultList extends React.Component {
  render() {
    console.log(this.props.results);
    let listItemsActual = this.props.results.map(result =>
      <SearchResultListItem key={result.id} result={result} />
    );
    return <tbody>{listItemsActual}</tbody>;
  }
}

export default SearchResultList;
