import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { MaterialModule } from './material';
import {
  MatSnackBar,
  MatSnackBarAction,
  MatSnackBarActions,
  MatSnackBarLabel,
  MatSnackBarRef,
} from '@angular/material/snack-bar';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AutocompleteComponent,
    MaterialModule,
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'MaterialDesignEX';
  items = ['Elemento 1', 'Elemento 2', 'Elemento 3'];

  private _snackBar = inject(MatSnackBar);

  durationInSeconds = 5;

  openSnackBar() {
    this._snackBar.openFromComponent(PizzaPartyAnnotatedComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

}
