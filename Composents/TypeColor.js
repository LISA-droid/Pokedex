import React from "react";

export function TypeColor(typeName) {
  if (typeName !== null) {
    switch (typeName) {
      case 'bug':
        return "#92c22b"
      case 'dark':
        return "#5a5365"
      case 'dragon':
        return "#036dc4"
      case 'electric':
        return "#f4d339"
      case 'fairy':
        return "#ed90e7"
      case 'fighting':
        return "#cf3f6b"
      case 'fire':
        return "#ff9e54"
      case 'flying':
        return "#90abdf"
      case 'ghost':
        return "#5169ae"
      case 'grass':
        return "#63bd5a"
      case 'ground':
        return "#da7943"
      case 'ice':
        return "#74cfc1"
      case 'normal':
        return "#929ba3"
      case 'poison':
        return "#ac6bc9"
      case 'psychic':
        return "#fa727a"
      case 'rock':
        return "#c6b88d"
      case 'steel':
        return "#5a8fa3"
      case 'water':
        return "#4f91d7"
    }
  }
}