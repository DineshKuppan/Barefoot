/*  eslint-disable */
import React from 'react';
import SearchResultListItem from './SearchResultListItem';

class SearchResultList extends React.Component {
  render() {  
    let listItems = this.props.results.map(result =>
      <SearchResultListItem key={result.id} result={result}/>
    );
    return(
      <tbody>
        {listItems}
      </tbody>
    );
  }
};

export default SearchResultList;
