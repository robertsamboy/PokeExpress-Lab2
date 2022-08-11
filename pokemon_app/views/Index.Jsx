const React = require('react');


 class Index extends React.Component{
    render(){
        const design = {
            color: 'black',
            backgroundColor: 'green'
        };
        
        const { pokemons } = this.props;
       function caps(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
       }

        return(
            <body style={design}>
            <div > 
                <h1>See All The Pokemon!</h1>
                <ul> 
                    {pokemons.map((pokemon, i) =>{
                        return(
                            <li> 
                                This{' '}
                               <a href ={`/pokemon/x/${i}`} >
                               {caps(pokemon.name)}
                               </a>
                                {' '}
                                is{' '}
                                a{' '}
                                pokemon!
                               
                            </li>
                        )
                        
                
                    })}
                </ul>
                
            </div>
           
            </body>
        )
    }
 }

 module.exports = Index;