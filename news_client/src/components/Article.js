import React, {Component, Fragment} from 'react'


class Article extends Component {

    render() {
        return(
        <Fragment>
            {this.props.article.name}
        </Fragment>
        )
    }
}

export default Article