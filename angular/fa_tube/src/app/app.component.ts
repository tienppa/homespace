import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VideoService } from './services/video.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  textContent: string = '';
  hasList$!: Observable<boolean>;
  filter = ['title', 'rating', 'viewCount', 'videoCount', 'data'];
  filtered: string = 'title';

  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    document.querySelector('.btn-none')?.classList.add('btn-primary');
  }

  ngAfterViewInit(): void {
    this.videoService.fakeData();
  }

  setFilter(param: string) {
    this.filtered = param;
  }

  searchVideo() {
    if (this.textContent.trim() === '') {
      return;
    }
    this.videoService.fetch(this.textContent, this.filtered);
    this.hasList$ = this.videoService.length$.pipe(
      map((length) => length >= 0)
    );
  }
}
