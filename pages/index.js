import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

// Styles for highlighted code blocks.
import 'css/zenburn.css'

export default class Index extends React.Component {
  render () {
    return (
      <DocumentTitle title={config.siteTitle}>
        <div>
          <h1>
            Pokemon Go New Trainers Guide
          </h1>
          <p>Welcome to the pokemon new trainers guide, we are trying to provide good documentation for new players if
            you would like to contribute please check out <Link to={prefixLink("/contributing/")}> Contributing</Link>
            &nbsp;as we are a site by the trainers for the trainers we welcome anyone to contribute!
          </p>

        </div>
      </DocumentTitle>
    )
  }
}
