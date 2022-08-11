const React = require('react');


class New extends React.Component{
    render() {
        return(
            <div>
                <h1>Create your own Pokémon!</h1>
                <form action = '/pokemon/' method='POST'>
                Name: <input type="text" name="name" /><br/>
                 Type: <input type="text" name="color" /><br/>
                 <input type="submit" name="" value="Birth Pokemon"/> 
                </form>
            </div>
            
        )
    }
}



module.exports = New