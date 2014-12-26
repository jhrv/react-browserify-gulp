var React = require('react');
var FilterTest = require('./components/filtertest.jsx');

var myItems = [ 
    { name: "jens", age: "13" },
    { name: "kaare", age: "13" },
    { name: "pippi", age: "133" },
    { name: "pippikun", age: "133" },
    { name: "pippisan", age: "133" },
    { name: "assertsen", age: "113" },
    { name: "tarzon", age: "113" }   
];

React.render(<FilterTest items={myItems} />, document.getElementById('content'));
        

