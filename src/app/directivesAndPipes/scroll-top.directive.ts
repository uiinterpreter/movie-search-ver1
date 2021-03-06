import { Directive,HostListener,ElementRef} from '@angular/core';

@Directive({
  selector: '[appScrollTop]'
})
export class ScrollTopDirective {

  constructor(private elemen:ElementRef) { }

  @HostListener("window:scroll", [])

  onScroll() {
    let currentScroll = document.scrollingElement.scrollTop || document.body.scrollTop ;
    if(currentScroll > 400 && window.innerWidth > 650){
        this.elemen.nativeElement.style.display = 'block';
    }else if(currentScroll > 450 && window.innerWidth <= 650){
      this.elemen.nativeElement.style.display = 'block';
    }else{
        this.elemen.nativeElement.style.display = 'none';
    }
  }

  @HostListener("click")
  
  onClick() {
    let scrollEl = document.scrollingElement || document.body;
    scrollEl.scrollTop = 0;
  }


}
