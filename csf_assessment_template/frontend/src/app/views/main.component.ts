import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { WebcamComponent, WebcamImage } from 'ngx-webcam';
import { Subject, Subscription } from 'rxjs';
import { CameraService } from '../camera.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit, OnDestroy, AfterViewInit{
  @ViewChild(WebcamComponent)
  webcam! : WebcamComponent;
  width =  500;
  height = 282;
  pics: string[] = []
  mimeType: string = "image/png";
  sub$!: Subscription
  trigger = new  Subject<void>;
  constructor(private router: Router, private cameraSvc: CameraService){
  }

  ngOnInit(): void {
      console.log("init ... " + this.webcam);
  }

  ngOnDestroy(): void {
      this.sub$.unsubscribe();
  }

  ngAfterViewInit(): void {
      this.webcam.trigger = this.trigger;
      this.sub$ = this.webcam.imageCapture.subscribe(
        this.snapshot.bind(this)
      )
  }

  snap(){
    this.trigger.next();
  }

  snapshot(webcamImg: WebcamImage){
    this.cameraSvc.imageData = webcamImg.imageAsDataUrl;
    this.pics.push(webcamImg.imageAsDataUrl);
  }

  onChange(e: any) {
    this.height= e.target.value;
 }
}
