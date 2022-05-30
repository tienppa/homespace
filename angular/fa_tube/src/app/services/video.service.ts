import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  private video: any[] = [];
  private filterList!: any[];
  private lengthSubject: BehaviorSubject<number> = new BehaviorSubject<number>(
    0
  );
  private displayList: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private currentFilter!: string;

  video$: Observable<any[]> = this.displayList.asObservable();
  length$: Observable<number> = this.lengthSubject.asObservable();

  private API_KEY = 'AIzaSyC1f6v2BAlITPcFtkVq-la1znRbt_Vo6oo';

  private URL = 'https://youtube.googleapis.com/youtube/v3/search';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.API_KEY,
    }),
  };

  constructor(private http: HttpClient) {}

  fetch(param: string): void {
    this.http
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${param}&key=${this.API_KEY}`
      )
      .subscribe((data: any) => {
        // console.log('api call', data.items);
        this.video = data.items || [];
      });
    this.filterList = [...this.video];
    this.displayList.next(this.filterList);
    this.lengthSubject.next(this.video.length);
  }
}
