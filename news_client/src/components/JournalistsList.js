import React, {Component, Fragment} from 'react'
import Journalist from './Journalist'

class JournalistsList extends Component {

    render() {

        const journalistsNodes = this.props.journalists.map((journalist) => {
            return (
              <Journalist key={journalist.id} journalist={journalist}></Journalist>
            )
          })


        return(
            <Fragment>
            <h3>Hier ist die List der Journalisten:</h3>
            <ul>{journalistsNodes}</ul>
            </Fragment>
        )
    }
}

export default JournalistsList