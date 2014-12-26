var React = require('react');

module.exports = React.createClass({   
    getInitialState: function(){
        return { searchString: '' };
    },

    handleChange: function(e){
        this.setState({ searchString: e.target.value });
    },

    render: function() {
        var searchString  = this.state.searchString.trim().toLowerCase();
        var createListElement = function(elem){return <h1>{elem.name}</h1>} 
        var searchFilter = function(elem){
                             return elem.name.indexOf(searchString) > -1;
                           }

        return (
            <div>
                <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Type here" />
                {
                    this.props.items.filter(searchFilter).map(createListElement)
                }
            </div>
        );
    }
});

