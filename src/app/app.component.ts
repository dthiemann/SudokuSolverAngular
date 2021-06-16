import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SudokuSolver';

  size_x: number = 0;
  size_y: number = 0;

  testLabel : string = "";

  onSizeXChange(value : string) {
    this.size_x = parseInt(value);
  }

  onSizeYChange(value : string) {
    this.size_y = parseInt(value);
  }

  generate() {
    this.testLabel = this.size_x + " x " + this.size_y;    
  }
}
