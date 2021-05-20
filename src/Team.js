import React from 'react';
import Search from './Search'

export default function Team() {

    var team = localStorage.getItem("team");

    if (team == null) {
        localStorage.setItem("team", JSON.stringify([]));
        return [];

    } else {
        return JSON.parse(team);
    }

}
