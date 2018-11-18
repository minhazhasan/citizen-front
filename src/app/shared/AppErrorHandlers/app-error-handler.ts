import { ErrorHandler } from "@angular/core";
import {MatSnackBar} from '@angular/material';



export class AppErrorHandler implements ErrorHandler{

    constructor(public snackBar: MatSnackBar){}
    
    handleError(error){
        this.snackBar.open('An Unexpected Error Occured!!!', 'Dismiss', {
            duration: 3000
          });
        
          console.log(error);
    }
}