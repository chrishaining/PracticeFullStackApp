import React, {Component, Fragment} from 'react'


class Article extends Component {

    render() {
        return(
        <Fragment>
            <li>{this.props.article.headline}</li>
        </Fragment>
        )
    }
}

export default Article