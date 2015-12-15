var people = [
    {name: 'Dan', key: '1'},
    {name: 'Elaine', key: '2'},
    {name: 'Chris', key: '3'}
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
                    return <li key={person.key} onClick={that.deletePerson.bind(null, person)}>{person.name}</li>;}
                )}
            </ul>
        );
    }
});

React.render(<Hello people={people}></Hello>, document.body);
