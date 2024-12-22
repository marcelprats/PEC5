# PEC5 - Ejercicio 4: Respuestas teóricas sobre formularios reactivos en Angular

## a) ¿Qué son, para qué sirven y cómo se usan FormControl, FormGroup y FormBuilder?

1. **FormControl**:
   - **¿Qué es?**  
     Es una unidad básica de gestión de formularios reactivos en Angular. Representa un solo campo o elemento del formulario (como un campo de texto, checkbox, etc.).
   - **¿Para qué sirve?**  
     Permite controlar el valor, estado y validaciones de un campo individual del formulario.
   - **¿Cómo se usa?**  
     Se crea una instancia de `FormControl` y se asocia a un campo del formulario. Ejemplo:
     ```typescript
     import { FormControl } from '@angular/forms';

     const nombre = new FormControl(''); // Inicializa el campo con un valor vacío
     nombre.valueChanges.subscribe(valor => console.log(valor)); // Escucha los cambios de valor
     ```

2. **FormGroup**:
   - **¿Qué es?**  
     Es una agrupación lógica de varios `FormControl` que representa una estructura de formulario.
   - **¿Para qué sirve?**  
     Permite gestionar varios controles juntos, controlando el valor y el estado del grupo completo y de cada campo individualmente.
   - **¿Cómo se usa?**  
     Se crea una instancia de `FormGroup` con un objeto que define sus controles. Ejemplo:
     ```typescript
     import { FormGroup, FormControl } from '@angular/forms';

     const perfilFormulario = new FormGroup({
       nombre: new FormControl(''),
       apellido: new FormControl('')
     });

     console.log(perfilFormulario.value); // Muestra { nombre: '', apellido: '' }
     ```

3. **FormBuilder**:
   - **¿Qué es?**  
     Es un servicio que simplifica la creación de `FormControl` y `FormGroup`.
   - **¿Para qué sirve?**  
     Permite construir formularios complejos de manera más clara y concisa, especialmente cuando hay muchos controles o validaciones.
   - **¿Cómo se usa?**  
     Se utiliza el método `group` del servicio `FormBuilder` para crear un formulario. Ejemplo:
     ```typescript
     import { FormBuilder } from '@angular/forms';

     constructor(private fb: FormBuilder) {}

     const perfilFormulario = this.fb.group({
       nombre: [''],
       apellido: ['']
     });

     console.log(perfilFormulario.value); // Muestra { nombre: '', apellido: '' }
     ```

---

## b) ¿Qué validadores incluye Angular para los formularios reactivos?

### Tabla de validadores disponibles:
| Validador              | Descripción                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| **required**           | El campo es obligatorio.                                                   |
| **min**                | El valor del campo debe ser igual o superior a un valor mínimo.            |
| **max**                | El valor del campo debe ser igual o inferior a un valor máximo.            |
| **minLength**          | El valor del campo debe tener un número mínimo de caracteres.              |
| **maxLength**          | El valor del campo debe tener un número máximo de caracteres.              |
| **email**              | El valor debe ser un correo electrónico válido.                           |
| **pattern**            | El valor debe coincidir con una expresión regular proporcionada.           |
| **nullValidator**      | Siempre retorna un campo válido (no aplica ninguna validación).            |
| **compose**            | Permite combinar múltiples validadores.                                    |
| **composeAsync**       | Permite combinar múltiples validadores asíncronos.                         |
| **asyncValidator**     | Validador asíncrono para realizar comprobaciones, como consultar un servidor externo.|

---

## c) ¿Qué son, cuáles son y para qué sirven los estados en los formularios reactivos?

1. **¿Qué son los estados?**  
   Los estados de los formularios reactivos reflejan el comportamiento y la interacción de un campo o grupo dentro de un formulario. Ayudan a conocer el progreso de validación y la interacción de los usuarios.

2. **¿Cuáles son los estados?**
   - **`valid`**: Indica si el campo o grupo cumple todas las validaciones.  
   - **`invalid`**: Indica si el campo o grupo no cumple alguna validación.  
   - **`pristine`**: El campo no ha sido modificado por el usuario desde que se cargó.  
   - **`dirty`**: El campo ha sido modificado por el usuario.  
   - **`touched`**: El usuario ha interactuado con el campo (por ejemplo, ha hecho focus y blur).  
   - **`untouched`**: El campo no ha sido interactuado por el usuario.

3. **¿Para qué sirven los estados?**
   Los estados permiten:
   - Determinar si un campo es válido o inválido.
   - Mostrar mensajes de error dinámicamente basados en la interacción del usuario.
   - Saber si el usuario ha modificado o interactuado con un campo para implementar lógica condicional.

4. **Ejemplo de uso de los estados**:
   ```typescript
   const nombre = new FormControl('', [Validators.required, Validators.minLength(3)]);
   console.log(nombre.valid); // Retorna false si el campo no es válido
   console.log(nombre.pristine); // Retorna true si el usuario no ha modificado el campo
   console.log(nombre.touched); // Retorna true si el usuario ha interactuado con el campo
   ```

