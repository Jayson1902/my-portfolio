import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Stack } from './components/stack/stack';
import { Projects } from './components/projects/projects';
import { About } from './components/about/about';
import { Footer } from './components/footer/footer';

@Component({
  imports: [Navbar, Hero, Stack, Projects, About, Footer],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('my-portfolio');
}
