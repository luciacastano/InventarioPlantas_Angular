import { Component, Input } from '@angular/core';
import { Data } from '../interface/data';
import { DataService } from '../service/data.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {
  @Input() saveData: Data[] = [];

  constructor(
    private dataService: DataService
  ) {}

  // MOSTRAR LAS PLANTAS CREADAS
  public ngOnInit(): void {
    this.saveData = this.dataService.getarrayPlants();
  }

  // ELIMINAR PLANTA DE LA LISTA Y DEL ARRAY
  public deletePlant(index: number): void {
    this.saveData.splice(index, 1); // splice - elimina 1 elemento en la posición del index

    console.log('Array Plants after deleting:', this.saveData);
  }

  // RESALTAR PLANTA
  public favorite(index: number): void {
    const plant = this.saveData[index];

    plant.favorite = !plant.favorite;
  }
}
