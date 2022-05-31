import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-video-result',
  templateUrl: './video-result.component.html',
  styleUrls: ['./video-result.component.scss'],
})
export class VideoResultComponent implements OnInit {
  video$!: Observable<any[]>;
  url = 'https://www.youtube.com/watch?v=';

  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    this.video$ = this.videoService.video$;
  }

  mergeUrl(param: string): string {
    return 'https://www.youtube.com/watch?v=' + param;
  }

  searchDetail(param: string): void {
    this.videoService.fetchDetail(param);
  }
}
