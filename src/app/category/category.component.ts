import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  order = 1;
  constructor() {
    console.log('Inside Constructor and order is '+ this.order);
    this.order++;
  }

  ngOnChanges(): void {
    console.log('Inside ngOnChanges and order is '+ this.order);
    this.order++;
  }
  ngDoCheck(): void {
    console.log('Inside ngDoCheck and order is '+ this.order);
    this.order++;
  }
  ngAfterContentInit(): void {
    console.log('Inside ngAfterContentInit and order is '+ this.order);
    this.order++;
  }
  ngAfterContentChecked(): void {
    console.log('Inside ngAfterContentChecked and order is '+ this.order);
    this.order++;
  }
  ngAfterViewInit(): void {
    console.log('Inside ngAfterViewInit and order is '+ this.order);
    this.order++;
  }
  ngAfterViewChecked(): void {
    console.log('Inside ngAfterViewChecked and order is '+ this.order);
    this.order++;
  }
  ngOnDestroy(): void {
    console.log('Inside onDestroy and order is '+ this.order);
    this.order++;
  }

  ngOnInit(): void {
    console.log('Inside onInIt and order is '+ this.order);
    this.order++;
  }
  s = new Subscription();
  d = new Observable();
}
