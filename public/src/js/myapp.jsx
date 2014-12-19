var React = require('react');


var MyComponent = React.createClass({   
    render: function() {
        return (
            <h1>Heisann, gikk automatisk detta</h1>
        );
    }
});

React.render(<MyComponent />, 
    document.getElementById('content'));
