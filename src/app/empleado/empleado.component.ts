import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template:"<p>Aqui irira un empleado</p>",
  styleUrls: ['./empleado.component.css']
  //styles:["p{background:red};"]
})
export class EmpleadoComponent {

  nombre="Juan";
  
  apellido="Diaz";

  edad=28;

empresa="Google";

// cambiaEmpresa(event:Event){

//   this.empresa=(<HTMLInputElement>event.target).value;

// }

habilitacionCuadro=false;

usuRegistrado=false;

textoDeRegistro="No hay nadie registrado";


getRegistroUusario(){
  this.usuRegistrado=false
}

setUsuarioRegistrado(event:Event){
 // alert ("El usuario se acaba de registrar");
 //this.textoDeRegistro="El usuario se acada de registrar";

if((<HTMLInputElement>event.target).value=="si"){
  this.textoDeRegistro="El usuario se acada de registrar";
}else{
  this.textoDeRegistro="No hay nadie registrado";
}


}
 // empresa="Pildoras Informaticas";
//llamaEmpresa(value:String){

//}
 
}
