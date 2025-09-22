import { Injectable } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AuthModalComponent } from './auth-modal';

@Injectable({
  providedIn: 'root',
})
export class AuthModalService {
  constructor(private modalService: NzModalService) {}

  openAuthModal() {
    const modalRef = this.modalService.create({
      nzContent: AuthModalComponent,
      nzFooter: null,
      nzClosable: false,
      nzMaskClosable: true,
      nzStyle: { top: '20px' },
      nzBodyStyle: { padding: '0' },
      nzWidth: 400,
      nzCentered: true,
    });

    return modalRef.afterClose;
  }
}
