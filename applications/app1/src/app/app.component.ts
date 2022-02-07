import { Component } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app1';

  a = Apollo;
  g = gql;
}
