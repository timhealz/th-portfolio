import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import './style.css'

import MarkdownRender from '../MarkdownRender'

class Article extends Component {
    constructor() {
        super();
        this.state = { markdown: '' };
    }

    componentWillMount() {
        const mdPath = require('../../articles/' + this.props.markdown)
        fetch(mdPath)
            .then(res => res.text())
            .then(text => this.setState({ markdown: text }));
    }

    render() {
        const { markdown } = this.state;
        return (
            <div className="article">
                <MarkdownRender source={markdown} />
            </div>
        )
    }
}

export default Article;
