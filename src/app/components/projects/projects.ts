import { Component } from '@angular/core';
import { Reveal } from '../../directives/reveal';

@Component({
  imports: [Reveal],
  selector: 'app-projects',
  styleUrl: './projects.scss',
  templateUrl: './projects.html',
})
export class Projects {}
