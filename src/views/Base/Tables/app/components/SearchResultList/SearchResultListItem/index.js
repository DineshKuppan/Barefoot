/* eslint-disable */
import React from 'react';

class SearchResultListItem extends React.Component {

    render() {
        let pills;
        if (this.props.product.tags) {
            let tags = this.props.product.tags.split(', ');
            pills = tags.map(tag =>
            <tr>
                <td>{this.props.result.id}</td> 
                <td>{this.props.result.alcohol}</td> 
                <td>{this.props.result.alcohol}</td>
                <td>{this.props.result.alcohol}</td>
            </tr>
            );
        }
        return (
            <span>
                {pills}
            </span>
        );
    }
};

export default SearchResultListItem;