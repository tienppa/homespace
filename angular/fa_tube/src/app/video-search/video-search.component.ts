import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-video-search',
  templateUrl: './video-search.component.html',
  styleUrls: ['./video-search.component.scss'],
})
export class VideoSearchComponent implements OnInit {
  video$!: Observable<any[]>;

  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    this.video$ = this.videoService.video$;
  }
}
