import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { WorkInProgressDirective } from '../../shared/directives/work-in-progress.directive';

@Component({
  selector: 'app-dictionary',
  standalone: true,
  imports: [NzEmptyModule, NzButtonModule, NzCardModule, WorkInProgressDirective],
  styleUrl: './dictionary.scss',
  templateUrl: './dictionary.html',
})
export class Dictionary {}
