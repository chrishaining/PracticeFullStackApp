import React, {Component, Fragment} from 'react'
import Article from './Article'

class ArticlesList extends Component {

    render() {

        const articlesNodes = this.props.articles.map((article) => {
            return (
              <Article key={article.id} article={article}></Article>
            )
          })


        return(
            <Fragment>
            <h3>Das ist der NewsList</h3>
            {articlesNodes}
            </Fragment>
        )
    }
}

export default ArticlesList