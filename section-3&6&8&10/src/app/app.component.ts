import { Component} from '@angular/core';

@Component({
  // standalone: true,
  selector: 'app-root',
  // imports: [RouterOutlet, RouterLink, RouterLinkActive, RecipesComponent, ShoppingListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  selectedRoute= "recipes";

  onTargetChanged(target: string){
    console.log(target)
    this.selectedRoute = target;
  }
}