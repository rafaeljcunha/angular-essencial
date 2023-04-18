import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[colorRed]",
})
export class RedDirective {
  constructor(private element: ElementRef) {
    element.nativeElement.style.color = "#e35e6b";
  }
}
