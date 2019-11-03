import React, {Component, Fragment} from 'react'


class Journalist extends Component {

    render() {
        return(
        <Fragment>
            <li>{this.props.journalist.firstName} {this.props.journalist.lastName}</li>
        </Fragment>
        )
    }
}

export default Journalist