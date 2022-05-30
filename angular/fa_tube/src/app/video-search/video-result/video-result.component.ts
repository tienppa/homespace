import { Component, OnInit, Input } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-video-result',
  templateUrl: './video-result.component.html',
  styleUrls: ['./video-result.component.scss'],
})
export class VideoResultComponent implements OnInit {
  @Input() item!: any[];

  title: string = '';

  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    console.log(typeof this.item);
  }
}
