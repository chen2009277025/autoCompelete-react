/**
 * Created by chenjianhui on 16/9/12.
 */
var React = require('react');
var ReactDOM = require("react-dom");

var AutoCompleteTypeahead = require('./components/autocomplete.react').Tokenizer;

ReactDOM.render(
    <AutoCompleteTypeahead
        options={['chen','lili','chenjianhui']}/>,
    document.getElementById('pageWrap')
);

