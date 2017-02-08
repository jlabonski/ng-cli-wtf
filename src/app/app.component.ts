import { Component } from '@angular/core';
import { Dog } from './model/dog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  public ngOnInit(): void {

    const foo: any = {
      name: 'Rover',
      age: 4,
      hasShots: true
    };

    var bar = foo as Dog;

    console.log(bar.age);
  }

}
