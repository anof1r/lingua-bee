import { Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { WorkInProgressDirective } from '../../shared/directives/work-in-progress.directive';

@Component({
  selector: 'app-quiz',
  imports: [NzCardModule, NzProgressModule, WorkInProgressDirective],
  templateUrl: './quiz.html',
  styleUrl: './quiz.scss',
})
export class Quiz {}
