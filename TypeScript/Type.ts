import { lstat } from "fs";

// Para ver el archivo por consola sin pasarlo a JS ejecutar en terminal el comando ts-node 'ubicaciondelarchivo' (revisar resumen//
let mensaje: string="COUT Mensaje"; // Forma corta//

let numero: number;                 // Forma larga//
numero = 21;

let condicion: boolean=false;

function suma(x:number , y:number):number     /*definimos 2 parametros(x,y) definimos los tipos de entrada de parametro
                                                y los tipos de salida de parametros en este caso todo tipo "number" */
{
    return (x+y); 
}
let Prueba : Number = suma(numero,4);        /* Tuvimos un problema que me tomaba el tipo "number" Revisar que los colores 
                                                sean distintos pq hay 2 formas de declarar number */
console.log(Prueba);

// Ahora empezamos con los objetos, si no definimos una clase no podemos crear un objeto//

class Datos {
  protected cantidad : number = 0;  // Haciendo private la cantidad solo se puede modificar dentro de la clase "Datos"

  constructor(x : number){
      this.cantidad = x;    // "this" se usa para hacer referencia a los atributos
  }

  CalculoCantidad(){
      return this.cantidad;
  }
}

let Juan = new Datos(19);  // Creamos el objeto Juan y los vinculamos a la clase "Datos", el 19 va a ser el parametro(x)
                           // del constructor de arriba.
//Juan.cantidad = 10;             podemos redefinir el valor de la cantidad del objeto "Juan" a 10, que pasa si queremos que
                               /* esto quede fijo, lo q debemos hacer es utilizar modificadores, por defecto todo es publico
                                  pero se puede cambiar agregando private en la linea 21. dejando sin funcion la linea 34 
                                  pero no nos dejaria acceder a ese valor en las clases hijas(extendidas), para ello usamos
                                  el modificador "protected" que funciona igual al private pero permite su modificacion en las
                                  sub clases */

const resto = Juan.CalculoCantidad();
console.log(resto);

// Ahroa vamos a estudiar el concepto de extenciones //
class Pedro extends Datos {
    private impuestos : number;

    constructor(cantidad : number, impuesto : number){  /* como tenemos un constructor dentro de la clase "Datos",
                                                           debemos mandar el valor de la cantidad que se encuentra
                                                           dentro del constructor, lo hacemos con el comando super() */
    super(cantidad);
    this.impuestos = impuesto;
    }
    CalculoCantidad(){
        return this.cantidad;
    }
} 

