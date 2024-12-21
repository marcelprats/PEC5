# PEC5 - Ejercicio 1: Respuestas teóricas sobre formularios en Angular

## a) ¿Cuáles son las principales diferencias entre formularios basados en plantillas y formularios reactivos?

1. **Formularios basados en plantillas**:
   - Se enfocan en el código HTML (`template-driven`).
   - Usan la directiva `ngModel` para vincular datos ("two-way data binding").
   - Las validaciones se definen directamente en el HTML utilizando atributos como `required`, `minlength`, etc.
   - Son más simples y adecuados para formularios pequeños.

2. **Formularios reactivos**:
   - Se centran en el código TypeScript (`model-driven`).
   - Utilizan clases como `FormControl`, `FormGroup` y `FormBuilder`.
   - Las validaciones se gestionan desde el componente, ofreciendo más control.
   - Son más robustos y adecuados para formularios grandes o complejos.

---

## b) ¿Qué son, para qué sirven y cómo se usan las directivas `ngModel` y `ngModelChange`?

1. **`ngModel`**:
   - Es una directiva que permite el "two-way data binding" en formularios basados en plantillas.
   - Vincula un campo del formulario a una propiedad del componente.
   - Ejemplo:
     ```html
     <input [(ngModel)]="nombre" />
     ```

2. **`ngModelChange`**:
   - Es un evento que se dispara cuando el valor de un campo cambia.
   - Permite ejecutar una función en el componente cada vez que el usuario modifica el campo.
   - Ejemplo:
     ```html
     <input [ngModel]="nombre" (ngModelChange)="onNombreChange($event)" />
     ```

---

## c) ¿Qué son, cuáles son y para qué sirven los estados en los formularios basados en plantillas?

Los estados son propiedades que Angular asigna a los campos de un formulario para reflejar su estado actual. Sirven para proporcionar retroalimentación visual y manejar la lógica del formulario.

- **`touched`**: El campo fue visitado por el cursor.
- **`untouched`**: El campo no fue visitado.
- **`dirty`**: El valor del campo cambió respecto al inicial.
- **`pristine`**: El valor del campo no ha cambiado.
- **`valid` / `invalid`**: Indican si el campo cumple o no con las validaciones.

---

## d) ¿Qué ventajas aporta `FormGroup` a la composición de formularios?

- Permite agrupar múltiples controles (`FormControl`) en una estructura lógica.
- Facilita la validación conjunta de varios campos.
- Ofrece una forma estructurada de gestionar formularios grandes o complejos.
- Ejemplo:
  ```typescript
  const formulario = new FormGroup({
    nombre: new FormControl(''),
    precio: new FormControl(0)
  });
