import { Component } from '@angular/core';
import { Reveal } from '../../directives/reveal';

@Component({
  imports: [Reveal],
  selector: 'app-stack',
  styleUrl: './stack.scss',
  templateUrl: './stack.html',
})
export class Stack {}
