import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [ //expect array of recipe objects
  new Recipe('A Test Recipe', 'This is a test', 'https://www.glutenfreeandmore.com/wp-content/uploads/2018/07/15latkes.jpg'), 
  new Recipe('A Test Recipe #2', 'This is a test', 'https://www.glutenfreeandmore.com/wp-content/uploads/2018/07/15latkes.jpg')
  ];

  constructor(){}

  ngOnInit(): void {
  }

}
