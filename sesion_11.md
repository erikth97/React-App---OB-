// Estructuracion de Proyectos, mejores practicas para mantener un proyecto limpio.

//MVC en React - MVCV
Controller: Interactua entre el Modelo (datos) y la vista.
En el MVCV tenemos un controller para las vistas de cada componente.
Modell: El cntrolador recibe datos del modelo y a su ves actualiza el modelo.
Los archivos JSX estan compuestos de controller (que es la clase o la funcion), la vista es el el JSX (return)
El Modell (el estado de los datos que puede ser una clase o la informacion). es el estado del compontente o de la aplicacion.
El controller envia los datos a la vista atraves de Hooks, funciones , etc. Es el JS puro que tenemos dentro de la funcion. 
