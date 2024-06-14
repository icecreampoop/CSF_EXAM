import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CameraService } from '../camera.service';
import { dataToImage } from '../utils';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrl: './picture.component.css'
})
export class PictureComponent {

  // TODO: Task 2
  imageData = ""
  form!: FormGroup;
  file!: File;

  constructor(private router: Router, private fb: FormBuilder,
    private cameraSvc: CameraService) {

  }
  ngOnInit(): void {
    if (!this.cameraSvc.imageData) {
      this.router.navigate(['/'])
      return;
    }
    this.imageData = this.cameraSvc.imageData;
    this.form = this.fb.group(
      {
        title: this.fb.control<string>('', [Validators.required, Validators.minLength(5)]),
        comments: this.fb.control<string>(''),
      }
    );
    this.file = this.dataURItoFile(this.imageData);
    console.log(this.file);
  }

  upload() {
    const formVal = this.form.value;
    this.cameraSvc.upload(formVal, this.file).then((result) => {
      this.router.navigate(['/']);
    }).catch(error => {
      console.error(error);
    })
  }

  dataURItoFile(dataURI: string) {
    // var byteString = atob(dataURI.split(',')[1]);
    // let mimeString = dataURI.split(',')[0].split(';')[0];
    // var ab = new ArrayBuffer(byteString.length)
    // var ia = new Uint8Array(ab)
    // for (var i = 0; i < byteString.length; i++) {
    //   ia[i] = byteString.charCodeAt(i);
    // }
    // return new Blob([ab], { type: mimeString });

    return dataToImage(dataURI)
  }
  // TODO: Task 3

  backConfirm() {
    if (confirm("Are you sure you want to discard image?")) {
      this.router.navigate(['/'])
    }
  }
}
