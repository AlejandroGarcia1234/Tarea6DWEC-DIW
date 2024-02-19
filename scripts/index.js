/**
 * @author Alejandro García Álvarez;
 * @github @AlejandroGarcia1234
 */

const formulario = document.querySelector('#formulario');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const telefono = document.querySelector('#telefono');
const correo = document.querySelector('#correo');
const mensaje = document.querySelector('#mensaje');
const enviar = document.querySelector('#enviar');
const errores = document.querySelector('#errores');

let mensajesErrores = [];

const validar = (event) => {

  event.preventDefault();
  mensajesErrores = [];

  nombre.value.trim().length === 0 && mensajesErrores.push('Este es un campo obligatorio');
  !/^[A-Z]{1}[a-zA-Z]*$/.test(nombre.value.trim()) && mensajesErrores.push('Caracteres no válidos. Además, la primera letra debe ser mayúscula');

  apellido.value.trim().length === 0 && mensajesErrores.push('Este es un campo obligatorio');
  !/^[A-Z][a-zA-Z]*\s?[A-Z]?[a-zA-Z]*$/.test(apellido.value.trim()) && mensajesErrores.push('Caracteres no válidos. Además, la primera letra debe ser mayúscula');

  telefono.value.trim().length === 0 && mensajesErrores.push('Este es un campo obligatorio');
  !/^[0-9]*$/.test(telefono.value.trim()) && mensajesErrores.push('Caracteres no válidos');
  telefono.value.trim().length < 9 && mensajesErrores.push('Introduzca un número de teléfono de al menos 9 dígitos');

  correo.value.trim().length === 0 && mensajesErrores.push('Este es un campo obligatorio');
  !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(correo.value.trim()) 
  && mensajesErrores.push('Dirección de correo electrónico no válida');

  mensaje.value.trim().length === 0 && mensajesErrores.push('Este es un campo obligatorio');
  mensaje.value.trim().length < 10 && mensajesErrores.push('Por favor, introduzca un mensaje más largo');

  if (mensajesErrores.length === 0 && confirm('¿Quiere hacerle llegar este formulario a Samos el Sabio?')) {
    formulario.submit();
  } else if (mensajesErrores.length > 0) {
    errores.textContent = "";
    mensajesErrores.forEach(function (mensaje) {
      const miLi = document.createElement('li');
      miLi.textContent = mensaje;
      errores.appendChild(miLi);
    });

  }

};

formulario.addEventListener('submit', validar);