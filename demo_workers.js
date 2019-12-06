var i = 0;

function timedCount() {
  i = i + 1;
  postMessage(i);
  setTimeout("timedCount()",500);
}

timedCount();

//La parte importante del código es el postMessage()método, que se utiliza para publicar un mensaje en la página HTML.//


//Nota: Normalmente, los trabajadores web no se usan para scripts tan simples, sino para tareas más intensivas de CPU.