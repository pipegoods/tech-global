---
title: "Eliminar items duplicados de un array en JavaScript"
description: "En este post vamos a ver como eliminar items duplicados de un array en JavaScript."
pubDate: "Mar 03 2022"
heroImage: "https://res.cloudinary.com/pipegoods/image/upload/v1677891129/Miniatura_de_YouTube_Tutorial_Aprender_a_programar_Atrevido_Tecnolo%CC%81gico_bpawb1.png"
author: {
    name: "Andrés Vizcaino",
    photo: "https://www.andresvizcaino.me/img/photo-andres-vizcaino.jpg"
}
timeToRead: 10
---

Cuando trabajamos con arreglos en JavaScript, a veces nos encontramos con la necesidad de eliminar los elementos repetidos para poder procesar los datos de forma más efectiva. Afortunadamente, en JavaScript hay varias formas de hacer esto, y en este post te presentamos algunas de ellas.

## Método Set

Una de las formas más sencillas de eliminar elementos repetidos en un arreglo es utilizando el método Set, que es una estructura de datos que solo permite valores únicos. Podemos convertir nuestro arreglo en un Set utilizando la siguiente sintaxis:

```javascript
const arr = [1, 2, 2, 3, 3, 4, 5];
const uniqueArr = [...new Set(arr)];
```

En este ejemplo, creamos un arreglo con elementos repetidos y luego lo convertimos en un Set utilizando el operador spread (...) y la clase Set. Finalmente, convertimos el Set de nuevo en un arreglo para obtener el resultado final. Con este método, obtenemos un nuevo arreglo que contiene solo los valores únicos del arreglo original.

## Método filter()

Otra forma de eliminar elementos repetidos es utilizando el método filter() junto con indexOf(). El método indexOf() nos permite encontrar el índice de un elemento en un arreglo, y filter() nos permite filtrar los elementos que cumplan una condición. Utilizando estos métodos, podemos escribir el siguiente código:

```javascript
const arr = [1, 2, 2, 3, 3, 4, 5];
const uniqueArr = arr.filter((elem, index) => {
  return arr.indexOf(elem) === index;
});
```

En este ejemplo, creamos un nuevo arreglo que solo contiene los elementos que cumplen la condición de que el índice del elemento en el arreglo sea igual a su índice en la primera aparición. De esta manera, obtenemos un arreglo que contiene solo los valores únicos del arreglo original.

## Método reduce()

Otra forma de eliminar elementos repetidos es utilizando el método reduce(). Este método nos permite reducir un arreglo a un solo valor, y podemos utilizarlo para obtener un arreglo con valores únicos de la siguiente manera:

```javascript
const arr = [1, 2, 2, 3, 3, 4, 5];
const uniqueArr = arr.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);
```

En este ejemplo, inicializamos un arreglo vacío como valor inicial para el acumulador acc, y luego iteramos sobre cada elemento del arreglo original. Si el elemento no está incluido en el acumulador, lo agregamos con el método push(). Finalmente, retornamos el acumulador como resultado. Con este método, obtenemos un nuevo arreglo que contiene solo los valores únicos del arreglo original.

## Conclusión

En este post, hemos presentado tres formas diferentes de eliminar elementos repetidos en un arreglo en JavaScript: utilizando el método Set, utilizando el método filter() junto con indexOf(), y utilizando el método reduce(). Cada método tiene sus ventajas y desventajas, y la elección dependerá del caso específico. Sin embargo, con estas opciones ya tienes las herramientas necesarias para trabajar con arreglos con elementos únicos en JavaScript. ¡Espero que te haya sido útil!
