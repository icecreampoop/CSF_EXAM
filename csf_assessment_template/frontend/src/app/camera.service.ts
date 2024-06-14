import { Injectable } from '@angular/core';
import { UploadService } from './upload.service';

@Injectable({
  providedIn: 'root'
})
export class CameraService {
  imageData = ""

  constructor(private uploadsvc: UploadService){
  }

  upload(form: any, picture: File){
    return this.uploadsvc.upload(form,picture)
  }
}
