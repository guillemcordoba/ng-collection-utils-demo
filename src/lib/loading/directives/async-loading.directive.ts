import {
  Directive,
  Input,
  ElementRef,
  TemplateRef,
  ViewContainerRef,
  ComponentFactoryResolver,
  Type,
  OnInit
} from '@angular/core';
import { Observable } from 'rxjs';
import { BaseLoading } from './base-loading';

@Directive({
  selector: '[asyncLoading]'
})
export class AsyncLoadingDirective extends BaseLoading implements OnInit {
  @Input('asyncLoading') asyncLoading: Observable<any>;
  @Input() asyncLoadingError: TemplateRef<any> | Type<any> | string;
  @Input() asyncLoadingEmpty: TemplateRef<any> | Type<any> | string;

  constructor(
    protected elementRef: ElementRef,
    protected templateRef: TemplateRef<any>,
    protected viewContainer: ViewContainerRef,
    protected componentFactoryResolver: ComponentFactoryResolver
  ) {
    super(elementRef, templateRef, viewContainer, componentFactoryResolver);
  }

  getCustomEmpty() {
    return this.asyncLoadingEmpty;
  }

  getCustomError() {
    return this.asyncLoadingError;
  }

  ngOnInit() {
    this.bindObservable(this.asyncLoading);
  }
}
