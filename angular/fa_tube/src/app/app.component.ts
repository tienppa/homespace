import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VideoService } from './services/video.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  textContent: string = '';
  hasList$!: Observable<boolean>;

  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    this.videoService.fetch('');
  }

  searchVideo() {
    if (this.textContent.trim() === '') {
      return;
    }
    this.videoService.fetch(this.textContent);
    this.hasList$ = this.videoService.length$.pipe(map((length) => length > 0));
  }
}
