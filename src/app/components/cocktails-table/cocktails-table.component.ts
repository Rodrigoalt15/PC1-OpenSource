import { Component, OnInit, ViewChild } from '@angular/core';
import { CocktailsService } from 'src/app/services/cocktails.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cocktails-table',
  templateUrl: './cocktails-table.component.html',
  styleUrls: ['./cocktails-table.component.css']
})
export class CocktailsTableComponent {

  displayedColumns: string[] = ['name', 'instruction', 'date', 'glass'];
  data: any[] = [];
  dataSource = new MatTableDataSource<any>(this.data);

  cocktails = [];

  constructor(private cocktailsService: CocktailsService, private router: Router) {

  }

  ngOnInit(): void {
    this.getCocktails();
  }

  getCocktails(): void {
    this.cocktailsService.getCocktails().subscribe((response: any) => {
      this.cocktails = response.drinks;
      this.dataSource.data = this.cocktails;
    }, (error: any) => {
      console.error('Error fetching cocktails data:', error);
    });
  }


  getRow(row) {
    this.router.navigateByUrl(`/pokemonDetail/${row.position}`);
  }

}
