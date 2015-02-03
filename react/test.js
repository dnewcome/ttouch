/** @jsx React.DOM */
var people = [
    {name: 'Dan'},
    {name: 'Elaine'},
    {name: 'Chris'}
];

var Hello = React.createClass({
    getInitialState: function() {
        return {
            people: this.props.people.splice(0)
        };
    },
    deletePerson: function(person) {
        console.log(person.name);
    },
    render: function() {
        var that = this;
        return (
            <ul>
                {this.state.people.map(function(person) {
                    return <li onClick={that.deletePerson.bind(null, person)}>{person.name}</li>;}
                )}
            </ul>
        );
    }
});

React.render(<Hello people={people}></Hello>, document.body);

