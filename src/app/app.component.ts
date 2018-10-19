import {Component, ElementRef, HostListener, ViewChild, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('componentDiv') componentDiv: ElementRef;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const element = this.componentDiv.nativeElement;
    const viewportOffset = element.getBoundingClientRect();
    const top = viewportOffset.top;
    if (top <= 0) {
      element.classList.add('black');
    }
    else
      element.classList.remove('black');
  }
}
