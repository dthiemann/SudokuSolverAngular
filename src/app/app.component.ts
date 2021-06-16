import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SudokuSolver';

  @Input() size_x: string = "";
  @Input() size_y: string = "";
}
