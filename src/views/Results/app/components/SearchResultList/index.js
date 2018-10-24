/*  eslint-disable */
import React from 'react';
import SearchResultListItem from './SearchResultListItem';

class SearchResultList extends React.Component {
  render() {
    let listItemsActual = this.props.results.forEach(([key, value]) =>
      <SearchResultListItem key={key} result={value}/>
    );
    return(
      <tbody>
      {listItemsActual}
      </tbody>
    );
  }
};

export default SearchResultList;
