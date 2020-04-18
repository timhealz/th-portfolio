import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

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
        return <ReactMarkdown source={markdown} />;
    }
}

export default Article;