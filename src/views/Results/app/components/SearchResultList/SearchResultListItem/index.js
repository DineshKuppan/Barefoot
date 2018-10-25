/* eslint-disable */
import React from "react";

class SearchResultListItem extends React.Component {
  render() {
    console.log((this.props.result))
    console.log('Trying to find the solution !!!');
    return (
      <tr key={this.props.result.id}>
        <td>{this.props.result.name}</td>
        <td>{this.props.result.brewery}</td>
        <td>{this.props.result.alcohol}</td>
        <td>{this.props.result.image}</td>
      </tr>
    );
  }
}

export default SearchResultListItem;
