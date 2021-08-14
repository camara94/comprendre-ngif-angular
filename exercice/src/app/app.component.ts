import { Component } from '@angular/core';
import { MODULEONE } from './shared/moduleone';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  courses: any[] = MODULEONE;
  coursesList: any = this.courses;
  //noCourses: any;
  nom: string = 'CAMARA Laby Damaro';
}
