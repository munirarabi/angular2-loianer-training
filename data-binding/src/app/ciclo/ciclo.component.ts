import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css'],
})
export class CicloComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() valorInicial: number = 10;

  constructor() {
    this.log('constructor');
  }

  ngOnChanges(): void {
    this.log('ngOnChanges');
  }

  ngOnInit(): void {
    this.log('ngOnInit');
  }

  ngDoCheck(): void {
    this.log('ngDoCheck');
  }

  ngAfterContentChecked(): void {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    this.log('ngOnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }
}
