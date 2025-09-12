import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalModule, NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-auth-modal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzModalModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule,
  ],
  templateUrl: './auth-modal.html',
  styleUrls: ['./auth-modal.scss'],
})
export class AuthModal {
  isLoginMode: boolean = true;
  isLoading: boolean = false;

  loginData = {
    email: '',
    password: '',
    remember: false,
  };

  registerData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  };

  constructor(private modalRef: NzModalRef, private message: NzMessageService) {}

  // Переключение между логином и регистрацией
  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onLogin() {
    this.isLoading = true;

    // Заглушка для демонстрации
    setTimeout(() => {
      this.isLoading = false;
      this.message.success('Вход выполнен успешно!');
      this.modalRef.close({ success: true, mode: 'login' });
    }, 1500);
  }

  // Регистрация
  onRegister() {
    if (this.registerData.password !== this.registerData.confirmPassword) {
      this.message.error('Пароли не совпадают');
      return;
    }

    if (!this.registerData.agreeTerms) {
      this.message.warning('Необходимо принять условия использования');
      return;
    }

    this.isLoading = true;

    // Заглушка для демонстрации
    setTimeout(() => {
      this.isLoading = false;
      this.message.success('Регистрация прошла успешно!');
      this.modalRef.close({ success: true, mode: 'register' });
    }, 1500);
  }

  close() {
    this.modalRef.close();
  }
}
