---
title: "Uso de la pseudo-clase :has de CSS"
description: "La pseudo-clase :has es una característica relativamente nueva en CSS que permite seleccionar elementos basados en los elementos que contienen."
pubDate: "April 29 2023"
heroImage: "https://res.cloudinary.com/pipegoods/image/upload/v1682820239/uso-de-la-pseudo-clase-has-de-css_uhcrlm.jpg"
author: {
    name: "Andrés Vizcaino",
    photo: "https://www.andresvizcaino.me/img/photo-andres-vizcaino.jpg"
}
timeToRead: 15
---

La pseudo-clase `:has` es una característica relativamente nueva en CSS que permite seleccionar elementos basados en los elementos que contienen. Esta pseudo-clase es muy útil para seleccionar elementos que son difíciles de alcanzar mediante las pseudo-clases tradicionales, como `:first-child`, `:last-child` o `:nth-child`.

## Sintaxis

La sintaxis básica de `:has` es la siguiente:

```css
selector-padre:has(selector-hijo) {
  /* Estilos */
}
```

El selector padre se refiere al elemento que contiene al elemento seleccionado, mientras que el selector hijo es el elemento que se está buscando. Por ejemplo, si queremos seleccionar un elemento `p` que está dentro de un elemento `div`, podemos usar la siguiente sintaxis:

```css
div:has(p) {
  /* Estilos */
}
```

## Ejemplos de uso

La pseudo-clase `:has` se puede utilizar de varias maneras, aquí se muestran algunos ejemplos:

### Selección de elementos anidados

La pseudo-clase `:has` es útil cuando queremos seleccionar elementos que están anidados dentro de otros elementos. Por ejemplo, si queremos seleccionar todos los elementos `a` que están dentro de un elemento `li`, podemos usar el siguiente código:

```css
li:has(a) {
  /* Estilos */
}
```

### Selección de elementos basados en su contenido

También podemos utilizar `:has` para seleccionar elementos basados en su contenido. Por ejemplo, si queremos seleccionar todos los elementos `div` que contienen un elemento `p` con el texto "Lorem ipsum", podemos usar el siguiente código:

```css
div:has(p:contains("Lorem ipsum")) {
  /* Estilos */
}
```

### Selección de elementos basados en atributos

La pseudo-clase `:has` también se puede utilizar para seleccionar elementos basados en sus atributos. Por ejemplo, si queremos seleccionar todos los elementos `a` que tienen un atributo `href` que comienza con "http", podemos usar el siguiente código:

```css
a:has([href^="http"]) {
  /* Estilos */
}
```

### Selección de elementos basados en la existencia de ciertos elementos

También podemos utilizar `:has` para seleccionar elementos que contienen ciertos elementos específicos, independientemente de su contenido. Por ejemplo, si queremos seleccionar todos los elementos `div` que contienen un elemento `span`, podemos usar el siguiente código:

```css
div:has(> span) {
  /* Estilos */
}
```

En este ejemplo, `>` se utiliza para seleccionar los elementos span que son hijos directos del elemento `div`.

## Conclusión

La pseudo-clase `:has` es una característica muy útil de CSS que nos permite seleccionar elementos basados en los elementos que contienen. Su sintaxis es bastante sencilla, y se puede utilizar de varias maneras para seleccionar elementos anidados, basados en su contenido o atributos, o basados en la existencia de ciertos elementos. A medida que se vaya adoptando por los navegadores, se convertirá en una herramienta más importante para los desarrolladores web.



