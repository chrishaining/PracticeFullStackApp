import React, { Component, Fragment } from 'react'
import ArticlesList from '../components/ArticlesList'
import JournalistsList from '../components/JournalistsList'


class NewsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: [
                {
                    id: 1,
                    date: "31/10/2019",
                    headline: "Nuns in shoot-em-up drama",
                    summary: "Some nuns were involved in a video game incident.",
                    story: "Yesterday in Kuala Lumpur, some nuns on vacation from Lima were caught playing a violent video game.",
                    journalist: "Nelly Mangod"
                },
                {
                    id: 2,
                    date: "01/11/2019",
                    headline: "Soup-reme Court goes pot-ty!",
                    summary: "USA's top judges ban soup.",
                    story: "The Supreme Court today banned all forms of soup, following a spate of soup-related crime. Since July, there have been 43 separate soup-related crimes across the United States. It all began with the Battle of Minestrone in Seattle, in which 12 people were killed. According to a government spokesperson, 'America has declared a war on soup. Soup is destroying our communities, and today's decision will lead to a safer world.",
                    journalist: "Ishmael Kantosa"
                }
            ],
            journalists: [
                {
                    id: 1,
                    firstName: "Nelly",
                    lastName: "Mangod",
                    phoneNumber: "7890123",
                    articles: [{
                        id: 1,
                        date: "31/10/2019",
                        headline: "Nuns in shoot-em-up drama",
                        summary: "Some nuns were involved in a video game incident.",
                        story: "Yesterday in Kuala Lumpur, some nuns on vacation from Lima were caught playing a violent video game.",
                        journalist: "Nelly Mangod"
                    }]
                },

                {
                    id: 2,
                    firstName: "Ishmael",
                    lastName: "Kantosa",
                    phoneNumber: "0123456",
                    articles: [{
                        id: 2,
                        date: "01/11/2019",
                        headline: "Soup-reme Court goes pot-ty!",
                        summary: "USA's top judges ban soup.",
                        story: "The Supreme Court today banned all forms of soup, following a spate of soup-related crime. Since July, there have been 43 separate soup-related crimes across the United States. It all began with the Battle of Minestrone in Seattle, in which 12 people were killed. According to a government spokesperson, 'America has declared a war on soup. Soup is destroying our communities, and today's decision will lead to a safer world.",
                        journalist: "Ishmael Kantosa"
                    }]
                }
            ]


        }
    }

    render() {
        return (
            <Fragment>
            <h2>Wilkommen in unserer App</h2>
            <ArticlesList articles={this.state.articles}/>
            <JournalistsList journalists={this.state.journalists}/>

            </Fragment>
        )
    }
}

export default NewsContainer