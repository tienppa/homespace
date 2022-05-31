import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VideoService } from '../services/video.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss'],
})
export class VideoDetailComponent implements OnInit {
  detail$!: Observable<any[]>;
  url!: SafeResourceUrl;
  constructor(
    private videoService: VideoService,
    public sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.detail$ = this.videoService.detail$;
  }

  // ngAfterViewInit(): void {
  //   this.detail$ = this.videoService.detail$;
  // }

  mergeUrl(param: string): any {
    let result = `https://www.youtube.com/embed/${param}`;
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(result);
    return this.url;
  }
}
