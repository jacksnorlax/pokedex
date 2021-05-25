import React from 'react';
import Search from './Search'


export default function Team(props) {

  var myTeam= [];
  var first= {id:props.pokeinfo[0].id, name: props.pokeinfo[0].name};
  myTeam.push(first);

  localStorage.setItem('myTeam', JSON.stringify(myTeam));
  var output = JSON.parse(localStorage.getItem('myTeam'));

    return (

      <div>

      </div>

    )
}
