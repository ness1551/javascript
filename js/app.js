// Definicion de variables
var i = 0;  // Index para string valores
var y = 0;  // Index para string operadores
var resultado = 0;
var operadores = []; // string para almacenar los operadores que se van presionando
var valores = []; // string donde se van almacenando los valores a operar
var haypunto = false;  // bool que indica que hay un punto ya en el numero en pantalla
var continuaroper = true; // bool para indicar que hay un resultado en pantalla y que en caso de presionar nuevamente igual, se repita la última operación
//Object Calculadora donde se anidan todas las funciones
var calculadora = {
  init: function(){
    pantalla = document.getElementById('display');
    this.detectar_click();
    this.detectar_tecla();
    this.detectar_operacion();
    this.boton_on();
    this.tecla_igual();
    this.tecla_menos();
    var longitud;
  },
//  Detecta tecla presionada (numero o tecla de operacion). Solo para efecto de presion sobre la tecla
detectar_click : function(){
// asignacion de ID a variables
 teclauno = document.getElementById('1');
 teclados = document.getElementById('2');
 teclatres = document.getElementById('3');
 teclacuatro = document.getElementById('4');
 teclacinco = document.getElementById('5');
 teclaseis = document.getElementById('6');
 teclasiete = document.getElementById('7');
 teclaocho = document.getElementById('8');
 teclanueve = document.getElementById('9');
 teclacero = document.getElementById('0');
 teclaon = document.getElementById('on');
 teclasign = document.getElementById('sign');
 teclaraiz = document.getElementById('raiz');
 tecladivide = document.getElementById('dividido');
 tecladivide = document.getElementById('dividido');
 teclapunto = document.getElementById('punto');
 teclaigual = document.getElementById('igual');
 teclapor = document.getElementById('por');
 teclamenos = document.getElementById('menos');
// Deteccion de presionar tecla o soltar tecla.
//  cambiar_tamano_row se usa para las teclas que tienen clase row col1 img
//  cambiar_tamano_teclado se usa para las teclas que tienen clase teclado img

 teclauno.onmousedown = this.cambiar_tamano_row;
 teclauno.onmouseup = this.devolver_tamano_row;
 teclados.onmousedown = this.cambiar_tamano_row;
 teclados.onmouseup = this.devolver_tamano_row;
 teclatres.onmousedown = this.cambiar_tamano_row;
 teclatres.onmouseup = this.devolver_tamano_row;
 teclacuatro.onmousedown = this.cambiar_tamano_teclado;
 teclacuatro.onmouseup = this.devolver_tamano_teclado;
 teclacinco.onmousedown = this.cambiar_tamano_teclado;
 teclacinco.onmouseup = this.devolver_tamano_teclado;
 teclaseis.onmousedown = this.cambiar_tamano_teclado;
 teclaseis.onmouseup = this.devolver_tamano_teclado;
 teclasiete.onmousedown = this.cambiar_tamano_teclado;
 teclasiete.onmouseup = this.devolver_tamano_teclado;
 teclaocho.onmousedown = this.cambiar_tamano_teclado;
 teclaocho.onmouseup = this.devolver_tamano_teclado;
 teclanueve.onmousedown = this.cambiar_tamano_teclado;
 teclanueve.onmouseup = this.devolver_tamano_teclado;
 teclacero.onmousedown = this.cambiar_tamano_row;
 teclacero.onmouseup = this.devolver_tamano_row;
 teclaon.onmousedown = this.cambiar_tamano_teclado;
 teclaon.onmouseup = this.devolver_tamano_teclado;
 teclasign.onmousedown = this.cambiar_tamano_teclado;
 teclasign.onmouseup = this.devolver_tamano_teclado;
 teclaraiz.onmousedown = this.cambiar_tamano_teclado;
 teclaraiz.onmouseup = this.devolver_tamano_teclado;
 tecladivide.onmousedown = this.cambiar_tamano_teclado;
 tecladivide.onmouseup = this.devolver_tamano_teclado;
 teclapunto.onmousedown = this.cambiar_tamano_row;
 teclapunto.onmouseup = this.devolver_tamano_row;
 teclaigual.onmousedown = this.cambiar_tamano_row;
 teclaigual.onmouseup = this.devolver_tamano_row;
 teclapor.onmousedown = this.cambiar_tamano_teclado;
 teclapor.onmouseup = this.devolver_tamano_teclado;
 teclamenos.onmousedown = this.cambiar_tamano_teclado;
 teclamenos.onmouseup = this.devolver_tamano_teclado;
},
// Llama a la funcion de cambiar tamaño de tecla (Presionada)
cambiar_tamano_row: function(event){
  cambiartamano(event.target);
},
// Llama a la funcion de cambiar tamaño de tecla (Soltar)
devolver_tamano_row: function(event){
  devolvertamano(event.target);
},
// Llama a la funcion de cambiar tamaño de tecla (Presionada)
cambiar_tamano_teclado: function(event){
  cambiartamanoteclado(event.target);
},
// Llama a la funcion de cambiar tamaño de tecla (Soltar)
devolver_tamano_teclado: function(event){
  devolvertamanoteclado(event.target);
},

detectar_tecla: function(){
// Detectar que se escribe una tecla numerica o punto
  tecla1 = document.getElementById('1');
  tecla2 = document.getElementById('2');
  tecla3 = document.getElementById('3');
  tecla4 = document.getElementById('4');
  tecla5 = document.getElementById('5');
  tecla6 = document.getElementById('6');
  tecla7 = document.getElementById('7');
  tecla8 = document.getElementById('8');
  tecla9 = document.getElementById('9');
  tecla0 = document.getElementById('0');
  punto = document.getElementById('punto');
  var self = this;
// Dependiendo de la propiedad onclick, se llama a la funcion para escribir texto en la pantalla
  tecla1.onclick = function () {
    self.escribir(1);
  }
  tecla2.onclick = function () {
    self.escribir(2);
  }
  tecla3.onclick = function () {
    self.escribir(3);
  }
  tecla4.onclick = function () {
    self.escribir(4);
  }
  tecla5.onclick = function () {
    self.escribir(5);
  }
  tecla6.onclick = function () {
    self.escribir(6);
  }
  tecla7.onclick = function () {
    self.escribir(7);
  }
  tecla8.onclick = function () {
    self.escribir(8);
  }
  tecla9.onclick = function () {
    self.escribir(9);
  }
  tecla0.onclick = function () {
    self.escribir(0);
  }
  punto.onclick = function (){
    if(haypunto == false){
      self.escribir(".");
    }
  }
},
// Detecta si se presiona alguna de las teclas de operacion (+, -, *, /)
detectar_operacion: function(){
  suma = document.getElementById('mas');
  resta = document.getElementById('menos');
  multiplicacion = document.getElementById('por');
  division = document.getElementById('dividido');
  var self = this;
    suma.onclick = function(){
      // Operacion de suma onclick
      console.log(pantalla.innerHTML)
      if(pantalla.innerHTML!= 0){
        valores[i] = pantalla.innerHTML; //almacena en el string el numero que está en pantalla
        operadores[y] = "+"; // almacena en el string el operador, este operador luego será validado al momento de presionar la tecla igual (=)
        i = i + 1;  // incrementa i
        y = y + 1;  // incrementa y
        console.log ("entra en suma");
      }
      self.borrar(); // llama a la funcion para limpiar pantalla
    }
    resta.onclick = function(){
      // Operacion de resta onclick
      console.log(pantalla.innerHTML)
      if(pantalla.innerHTML!= 0){
        valores[i] = pantalla.innerHTML; //almacena en el string el numero que está en pantalla
        operadores[y] = "-"; // almacena en el string el operador, este operador luego será validado al momento de presionar la tecla igual (=)
        i = i + 1;
        y = y + 1;
        console.log ("entra en resta");
      }
      self.borrar(); // llama a la funcion para limpiar pantalla
    }
    multiplicacion.onclick = function(){
      // Operacion de multiplicacion onclick
      console.log(pantalla.innerHTML)
      if(pantalla.innerHTML!= 0){
        valores[i] = pantalla.innerHTML; //almacena en el string el numero que está en pantalla
        operadores[y] = "x"; // almacena en el string el operador, este operador luego será validado al momento de presionar la tecla igual (=)
        i = i + 1;
        y = y + 1;
        console.log ("entra en multiplicacion");
      }
      self.borrar(); // llama a la funcion para limpiar pantalla
    }
    division.onclick = function(){
      // Operacion de division onclick
      console.log(pantalla.innerHTML)
      if(pantalla.innerHTML!= 0){
        valores[i] = pantalla.innerHTML; //almacena en el string el numero que está en pantalla
        operadores[y] = "/"; // almacena en el string el operador, este operador luego será validado al momento de presionar la tecla igual (=)
        i = i + 1;
        y = y + 1;
        console.log ("entra en division");
      }
      self.borrar(); // llama a la funcion para limpiar pantalla
    }
},

tecla_menos: function(){
  // Detecta que se presiona la tecla de cambio de signo (+/-)
  menos = document.getElementById('sign');
  menos.onclick = function(){
  pantalla.innerHTML = pantalla.innerHTML * (-1);
  }
},

// Operaciones una vez presionada la tecla igual
tecla_igual: function(){
  igual = document.getElementById('igual');
  var self = this;
  var resultado = 0;
  igual.onclick = function() {
    if(operadores[y-1] == "+"){
      valores[i] = pantalla.innerHTML;
      resultado = parseFloat(valores[i-1], 10) + parseFloat(valores[i], 10);
      console.log(resultado);
      if(continuaroper == false){ //Solo incrementa i en el caso de que no se tenga que continuar la operacion
        i = i + 1;
      }
      valores[i] = resultado;
      self.resultado_oper(resultado);
    }
    if(operadores[y-1] == "-"){
      valores[i] = pantalla.innerHTML;
      resultado = parseFloat(valores[i-1], 10) - parseFloat(valores[i], 10);
      console.log(resultado);
      if(continuaroper == false){ //Solo incrementa i en el caso de que no se tenga que continuar la operacion
        i = i + 1;
      }
      valores[i] = resultado;
      self.resultado_oper(resultado);
    }
    if(operadores[y-1] == "x"){
      valores[i] = pantalla.innerHTML;
      resultado = parseFloat(valores[i-1], 10) * parseFloat(valores[i], 10);
      console.log(resultado);
      if(continuaroper == false){ //Solo incrementa i en el caso de que no se tenga que continuar la operacion
        i = i + 1;
      }
      valores[i] = resultado;
      self.resultado_oper(resultado);
    }
    if(operadores[y-1] == "/"){
      valores[i] = pantalla.innerHTML;
      resultado = parseFloat(valores[i-1], 10) / parseFloat(valores[i], 10);
      console.log(resultado);
      if(continuaroper == false){ //Solo incrementa i en el caso de que no se tenga que continuar la operacion
        i = i + 1;
      }
      valores[i] = resultado;
      self.resultado_oper(resultado);
    }
  }
},

boton_on: function() {
  var self = this;
  botonon = document.getElementById('on');
  botonon.onclick = function(){
    self.inicializar();
  }
},
// llama a la funcion de escribir pantalla
escribir: function(valor){
    escribirpantalla(valor);
},
// llama a la funcion de borrado de pantalla
borrar: function(){
    borrarpantalla();
},
// llama a la funcion de inicializacion de pantalla
inicializar: function(){
    inicializarpantalla();
},
// llama a la funcion que escribe el resultado de una operacion
resultado_oper: function(resultado){
    imprimir_resultado(resultado);
},

} // Cierre de llave de Objeto Calculadora


calculadora.init();  // Inicializacion de objeto calculadora mediante la funcion init

// Da efecto de presionado a la tecla con clase row col1 img
function cambiartamano(elemento){
  elemento.style.width = "28.3%";
  elemento.style.height = "62px";
}
// Da efecto de presionado a la tecla con clase row col1 img
function devolvertamano(elemento){
  elemento.style.width = "29%";
  elemento.style.height = "62.91px";
}
// Da efecto de presionado a la tecla con clase teclado
function cambiartamanoteclado(elemento){
  elemento.style.width = "21.3%";
  elemento.style.height = "62px";
}
// Devuelve el tamaño original de la tecla con clase teclado
function devolvertamanoteclado(elemento){
  elemento.style.width = "22%";
  elemento.style.height = "62.91px";
}
// Escribe en pantalla un numero escrito directamente a traves de las teclas de la calculadora
function escribirpantalla(valor){
  continuaroper = false;
  longitud = pantalla.innerHTML.toString().length;
  if(pantalla.innerHTML == 0){
    pantalla.innerHTML = valor;
  }else {
    if(longitud < 8){
      if(valor == "."){
        haypunto = true;
      }
    pantalla.innerHTML = pantalla.innerHTML + valor;
    }
  }
}
// Borra cualquier digito de la pantalla, solo cuando se ha presionado alguna tecla de operacion y se espera el siguiente digito a operar
function borrarpantalla(){
  pantalla.innerHTML = null;
  haypunto = false;
}
// pone 0 en pantalla cuando se presiona la tecla on/c
function inicializarpantalla(){
  pantalla.innerHTML = 0;
  valores = [];
  operadores = [];
  resultado = 0;
  i = 0;
  y = 0;
  haypunto = false;
}
// imprime en pantalla el resultado de una operacion, verifica que el resultado no tenga mas de 8 digitos
function imprimir_resultado(resultado){
  continuaroper = true;
  if(resultado.toString().length <= 8){
  pantalla.innerHTML = resultado;
  } else {
  pantalla.innerHTML = String(resultado).substr(0,8);
  console.log("muy largo el numero")
}

}
