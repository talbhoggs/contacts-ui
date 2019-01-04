import { Injectable } from '@angular/core';

declare let toastr:any

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor() { 
    
    toastr.options = {
      "closeButton": false,
      "debug": false,
      "newestOnTop": false,
      "progressBar": false,
      "positionClass": "toast-top-right",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "5000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }

  }

  

  success(message, title) {
    
    toastr.success(message, title);
    
  }

  error(message, title) {
    toastr.error(message, title);
  }
  info(message, title) {
    toastr.info(message, title);
  }
  warning(message, title) {
    toastr.success(message, title);
  }
  
}
