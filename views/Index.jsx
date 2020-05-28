const React = require('react')

class Index extends React.Component {
    render(){
        const {toDos} = this.props
        return(
            <div>
                <h1>To Do List</h1>
                <ul>
                    {toDos[0]
                    ? toDos.map((entry, index) => {
                        return(
                            <li key={index}>
                                <p>{entry.todo}</p> 
                                <p>{entry.done? 'Completed' : 'Not done yet'}</p>
                                <form action={`/todo/${entry.id}?_method=delete`} method="post">
                                    <input type="submit" value="Delete"/>
                                </form>
                            </li>
                        )
                    })
                    
                    : <p>There are no to dos yet!</p>}
                </ul>
                <form action="/todo" method="POST">
                    To Do: <input type="text" name="todo"/> <br/>
                    Done yet: <input type="checkbox" name="done" /><br/>
                    <input type="submit" value="Create Entry"/>
                </form>
            </div>
        )
    }
}
module.exports = Index