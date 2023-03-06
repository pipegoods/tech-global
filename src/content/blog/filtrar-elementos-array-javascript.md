---
title: "Cómo filtrar elementos de un array con JavaScript"
description: "Filtra elementos de un array en JavaScript utilizando el método filter() y otros métodos."
pubDate: "Mar 05 2022"
heroImage: "https://res.cloudinary.com/pipegoods/image/upload/v1678061627/miniatura-filtrar-elementos-array-javascript_czopep.jpg"
author: {
    name: "Andrés Vizcaino",
    photo: "https://www.andresvizcaino.me/img/photo-andres-vizcaino.jpg"
}
timeToRead: 5
---

Los arrays son una estructura de datos muy útil en JavaScript, y a menudo necesitamos filtrar elementos de un array en función de ciertos criterios. Afortunadamente, JavaScript proporciona una función integrada de filtro que nos permite filtrar elementos de un array de manera eficiente. En este artículo, te mostraremos cómo filtrar elementos de un array con JavaScript.

## La función de filtro en JavaScript

La función de filtro en JavaScript es una función integrada que se utiliza para filtrar elementos de un array en función de un criterio específico. La sintaxis de la función de filtro es la siguiente:

```javascript
var newArray = array.filter(function(element) {
  // Criterio de filtro
});
```

Esta función crea un nuevo array "newArray" que contiene los elementos que cumplen el criterio de filtro. La función de filtro toma un argumento de función que especifica el criterio de filtro.

## Método filter()

Otra forma de eliminar elementos repetidos es utilizando el método filter() junto con indexOf(). El método indexOf() nos permite encontrar el índice de un elemento en un arreglo, y filter() nos permite filtrar los elementos que cumplan una condición. Utilizando estos métodos, podemos escribir el siguiente código:

```javascript
const arr = [1, 2, 2, 3, 3, 4, 5];
const uniqueArr = arr.filter((elem, index) => {
  return arr.indexOf(elem) === index;
});
```

En este ejemplo, creamos un nuevo arreglo que solo contiene los elementos que cumplen la condición de que el índice del elemento en el arreglo sea igual a su índice en la primera aparición. De esta manera, obtenemos un arreglo que contiene solo los valores únicos del arreglo original.

## Ejemplo de uso de la función de filtro

Supongamos que tenemos un array de números y queremos filtrar solo los números pares. Podemos utilizar la función de filtro de la siguiente manera:

```javascript
var numbers = [1, 2, 3, 4, 5, 6];
var evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});
```

En este ejemplo, hemos creado un nuevo array `evenNumbers` que contiene solo los números pares del array `numbers`. La función de filtro utiliza la expresión `number % 2 === 0` como criterio de filtro para seleccionar solo los números pares.


## Filtrar elementos de un array de objetos

También es posible utilizar la función de filtro para filtrar elementos de un array de objetos. Supongamos que tenemos un array de objetos que representan personas y queremos filtrar solo las personas que tienen más de 18 años. Podemos utilizar la función de filtro de la siguiente manera:

```javascript
var people = [
  {name: "Juan", age: 25},
  {name: "María", age: 16},
  {name: "Pedro", age: 20},
  {name: "Ana", age: 17},
];
var adults = people.filter(function(person) {
  return person.age > 18;
});
```

En este ejemplo, hemos creado un nuevo array "adults" que contiene solo los objetos del array "people" que representan a personas mayores de 18 años. La función de filtro utiliza la expresión "person.age > 18" como criterio de filtro para seleccionar solo los objetos que representan a personas mayores de 18 años.
