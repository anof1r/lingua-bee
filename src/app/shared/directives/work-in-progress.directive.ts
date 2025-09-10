import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appWorkInProgress]',
  standalone: true,
})
export class WorkInProgressDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const wrapper = this.renderer.createElement('div');
    this.renderer.addClass(wrapper, 'work-in-progress-wrapper');

    const overlay = this.renderer.createElement('div');
    this.renderer.addClass(overlay, 'work-in-progress-overlay');

    const text = this.renderer.createElement('div');
    this.renderer.addClass(text, 'work-in-progress-text');
    this.renderer.setProperty(text, 'innerHTML', '🚧 Work in Progress');

    this.renderer.appendChild(overlay, text);
    this.renderer.appendChild(wrapper, overlay);

    const parent = this.el.nativeElement.parentNode;
    const originalContent = this.el.nativeElement;

    this.renderer.insertBefore(parent, wrapper, originalContent);
    this.renderer.appendChild(wrapper, originalContent);

    this.renderer.addClass(originalContent, 'work-in-progress-card');
  }
}
