/**
 * Created by chenjianhui on 16/9/12.
 */
var React = require('react');
var ReactDOM = require("react-dom");

var AutoCompleteTypeahead = require('./components/autocomplete.react').Tokenizer;

ReactDOM.render(
    <AutoCompleteTypeahead
        options={[{name:'chen'}, {name:'Paul'},{name:'George'},{name:'Ringo'}]}
        className="topcoat-list"
        displayOption="name"
        filterOption="name"
        customClasses={{
            input: "topcoat-text-input",
            results: "topcoat-list__container",
            listItem: "topcoat-list__item"
      }}
    />,
    document.getElementById('pageWrap')
);

