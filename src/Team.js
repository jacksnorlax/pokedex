import React from 'react';
import Search from './Search'


export default function Team(props) {

  var existingEntries = JSON.parse(localStorage.getItem("team"));
  var entryTitle = props.pokeinfo[0].name
  var entryText = props.pokeinfo[0].id;
  console.log(entryTitle);
  console.log(entryText);
  var entry = {
      "name": entryTitle,
      "id": entryText
  };
  console.log(entry);
  localStorage.setItem("entry", JSON.stringify(entry));
  // Save allEntries back to local storage
  existingEntries.push(entry);
  localStorage.setItem("allEntries", JSON.stringify(existingEntries));

    return (

      <div>

      </div>

    )
}
