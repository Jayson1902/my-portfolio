import { Component } from '@angular/core';
import { Reveal } from '../../directives/reveal';

@Component({
  imports: [Reveal],
  selector: 'app-about',
  styleUrl: './about.scss',
  templateUrl: './about.html',
})
export class About {}
