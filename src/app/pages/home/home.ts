import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { AuthModalService } from '../../shared/components/auth-modal/auth-modal.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NzLayoutModule, NzCardModule, NzButtonModule, NzIconModule, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home {
  constructor(private authModalService: AuthModalService) {}

  protected openAuthModal() {
    this.authModalService.openAuthModal().subscribe((result) => {
      if (result) {
        console.log('Auth result:', result);
      }
    });
  }
}
