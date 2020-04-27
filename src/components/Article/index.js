import React, { Component } from 'react';
import './style.css'

import ReactMarkdown from 'react-markdown';
import MathJax from 'react-mathjax';
import RemarkMathPlugin from 'remark-math';
import Highlight from 'react-highlight';


class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: '',
            newProps: {
                plugins: [ RemarkMathPlugin ],
                renderers: {
                    ...props.renderers,
                    math: (props) =>
                        <MathJax.Node formula={props.value} />,
                            inlineMath: (props) =>
                        <MathJax.Node inline formula={props.value} />
                }
            }
        }
    }

    componentWillMount() {
        const mdPath = require('../../articles/' + this.props.markdown)
        fetch(mdPath)
            .then(res => res.text())
            .then(text => this.setState({ markdown: text }));
    }

    render() {
        return (
            <div className="article">
                <MathJax.Provider input="tex">
                <ReactMarkdown
                    {...this.state.newProps}
                    source = {this.state.markdown} />
                </MathJax.Provider>
            </div>
        )
    }
}

export default Article;
