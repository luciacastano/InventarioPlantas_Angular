import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Data } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-choice',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './choice.component.html',
  styleUrl: './choice.component.css'
})

export class ChoiceComponent {
  input: string = '';
  selected: string = '';
  saveData: Data[] = [];

  constructor(
    private dataService: DataService
  ) {}

  // SELECCION DE PLANTA (ARBUSTO | ARBOL)
  public select(option: string) {
    this.selected = option;
    
    console.log(this.input);
  }
  
  // VACIAR FORMULARIO
  public deleteForm() {
    this.input = '';
    this.selected = '';
  }

  // GUARDAR LAS PLANTAS CREADAS EN ARRAY EN data.service
  public arrayPlants() {
    if (this.input && this.selected) {
      const newElement: Data = {
        name: this.input,
        type: this.selected,
      };

      this.dataService.newData(newElement);

      console.log('Array Plants:', this.dataService.getarrayPlants());
      this.deleteForm();
    }
  }
}