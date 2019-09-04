import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'swal';
  openConfirm(){
    Swal.fire({
      title:'Are you sure?',
      text:'Do you want to submit the grooup course?',
      type:'warning',
      showCancelButton:true,
      confirmButtonText:'Yes, add it',
      cancelButtonText:'Cancel'

    }).then((result)=>{
      if(result.value){       
            Swal.fire({
              text:'Successfull Add it.',
              type:'success'
            })     
      }
      else if(
        result.dismiss === Swal.DismissReason.cancel
      ){
        Swal.fire({
          text:'Cancel add the course',
          type:'warning',
                 })

    
       }   
  


    })
  }

}
