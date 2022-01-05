import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductService } from '../services/Product.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent{


 

  formulario = this.formBuilder.group({
    codigo: ''
  });

  items:any = []
  showinput = false// true

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
  ) {}

  onSubmit(): void {
    // Process checkout data here
    
    console.warn('Your order has been submitted', this.formulario.value);
    
    this.productService.getProducts(this.formulario.value.codigo).subscribe((data : any) =>{
      
      //console.log(data)

      this.items = data.lista
      
     // this.showinput = false
      
    })
    
  }
 

}
