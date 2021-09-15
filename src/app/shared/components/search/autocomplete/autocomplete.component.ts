import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'media-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AutocompleteComponent),
    multi: true
  }]
})
export class AutocompleteComponent implements OnInit, ControlValueAccessor {
  form = new FormControl(null, [Validators.required, Validators.minLength(2)]);;

  // tslint:disable-next-line:ban-types
  onChange: Function;

  constructor() { }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(value => {
      if(this.onChange){
        this.onChange(value);
      }

    });
  }

  writeValue(obj: any): void {
    this.form.setValue(obj);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.form.markAsTouched();
  }
  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled){
      this.form.disable();
    }
    else {
      this.form.enable();
    }

  }


}
