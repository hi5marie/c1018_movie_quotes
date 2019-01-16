import React, {Component} from 'react';


class MovieList extends Component {
    isPrivate = this.props.match.params.type === 'private';

    render(){
        console.log('Is Private:', this.isPrivate);

        return (
            <div>
                <h1 className="center">
                    <small className="grey-text">
                        {this.isPrivate && 'Private '}
                    </small>
                    Movie List</h1>
            </div>
        );
    }

}

export default (MovieList);