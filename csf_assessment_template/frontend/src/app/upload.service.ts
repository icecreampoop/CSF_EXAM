import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";
import { UploadResult } from "./models";
import { Injectable } from "@angular/core";
import { DatePipe } from "@angular/common";

@Injectable()
export class UploadService {
  constructor(private httpClient: HttpClient, private datePipe: DatePipe) { }

  // TODO: Task 3.
  // You may add add parameters to the method
  upload(form: any, imageFile: File) {

    const formData = new FormData();
    formData.set("title", form['title']);
    formData.set("comment", form['comment']);
    formData.set("imageFile", imageFile);
    const currentDateAndTime = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss') || "date error";
    formData.set("dateTime", currentDateAndTime);

    return firstValueFrom(this.httpClient.post<UploadResult>("/api/image/upload", formData));
  }
}
