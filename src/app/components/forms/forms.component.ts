import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  inputPlaceholder: String = '';
  onFocus: boolean = false;
  // hideDropdown: boolean = true;
  customForm: FormGroup;
  _dummy_drop_data = [
    { name: 'One' },
    { name: 'Two' },
    { name: 'Three' },
    { name: 'Four' },
    { name: 'Five' },
    { name: 'Six' },
    { name: 'Seven' },
    { name: 'Eight' },
  ]
  constructor(
    private fBuilder: FormBuilder
  ) {
    this.customForm = this.fBuilder.group({
      mySelect: '',
      myInput: '',
      myTextarea: ''
    })
  }

  ngOnInit(): void {
  }

  // filterValue(value: string) {
  //   this._dummy_drop_data = this._dummy_drop_data.filter(res => res.name === value);
  // }

  checkFocus() {
    this.onFocus = !this.onFocus;
    console.log('focus ->', this.onFocus)
  }

  selectOption(optionValue: string) {
    this.inputPlaceholder = optionValue;
    console.log(this.inputPlaceholder)
  }

  clickFormData() {
    console.log(this.customForm.value);
  }
}
