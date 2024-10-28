import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.scss'
})
export class HomeComponentComponent {

}
