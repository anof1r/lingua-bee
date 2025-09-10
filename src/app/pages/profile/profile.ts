import { Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { WorkInProgressDirective } from '../../shared/directives/work-in-progress.directive';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    NzCardModule,
    NzAvatarModule,
    NzDividerModule,
    NzInputModule,
    NzButtonModule,
    NzProgressModule,
    NzIconModule,
    WorkInProgressDirective,
  ],
  templateUrl: './profile.html',
  styleUrls: ['./profile.scss'],
})
export class Profile {
  activityData = [
    { height: 20 },
    { height: 35 },
    { height: 45 },
    { height: 30 },
    { height: 55 },
    { height: 40 },
    { height: 60 },
    { height: 50 },
    { height: 70 },
    { height: 65 },
    { height: 75 },
    { height: 80 },
    { height: 70 },
    { height: 85 },
    { height: 90 },
  ];

  copyLink() {
    navigator.clipboard.writeText('https://linguabee.com/anna-teacher');
  }
}
