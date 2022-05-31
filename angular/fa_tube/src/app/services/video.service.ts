import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  private API_KEY = 'AIzaSyAN3kypgVXNLTkNZwH5uuY_ZYs5PPU9mZE';

  private video!: any[];
  private lengthSubject: BehaviorSubject<number> = new BehaviorSubject<number>(
    0
  );
  private displayList: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  video$: Observable<any[]> = this.displayList.asObservable();
  length$: Observable<number> = this.lengthSubject.asObservable();

  private detail!: any[];
  private displayDetail: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(
    []
  );
  detail$: Observable<any[]> = this.displayDetail.asObservable();

  constructor(private http: HttpClient) {}

  fetch(param: string, filter: string): void {
    this.http
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${param}&order=${
          filter || ''
        }&key=${this.API_KEY}`
      )
      .subscribe((data: any) => {
        this.video = data.items || [];
      });

    // this.displayList.next([...this.video]);
    this.displayList.next([...this.video.map((item) => ({ ...item }))]);
    this.lengthSubject.next(this.video.length);
  }

  fetchDetail(param: string): void {
    this.http
      .get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${param}&maxResults=1&key=${this.API_KEY}`
      )
      .subscribe((data: any) => {
        this.detail = data.items || [];
      });
    // this.displayDetail.next([...this.detail]);
    this.displayDetail.next([...this.detail.map((item) => ({ ...item }))]);
  }

  fakeData() {
    let arr = [
      {
        kind: 'youtube#searchResult',
        etag: 'a7SgJb2TmiwyOeMEp4N2wjDBWHU',
        id: {
          kind: 'youtube#video',
          videoId: 'fs1EKcWoFto',
        },
        snippet: {
          publishedAt: '2022-05-07T14:54:32Z',
          channelId: 'UCVIIa6OL-FautUqhHjAoz_A',
          title: 'CỨ THỞ ĐI - ĐỨC PHÚC X JUKY SAN | OFFICIAL LIVE PERFORMANCE',
          description:
            '"CỨ THỞ ĐI - ĐỨC PHÚC X JUKY SAN |OFFICIAL LIVE PERFORMANCE #ĐứcPhúc #JukySan #CứThởĐi CỨ THỞ ĐI vì còn thở ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/fs1EKcWoFto/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/fs1EKcWoFto/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/fs1EKcWoFto/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'ĐỨC PHÚC OFFICIAL',
          liveBroadcastContent: 'none',
          publishTime: '2022-05-07T14:54:32Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'bUZ5aXYa5iuXeOXdASBQYuaQdXI',
        id: {
          kind: 'youtube#video',
          videoId: 'AfNbehFKJ7o',
        },
        snippet: {
          publishedAt: '2022-02-18T12:30:02Z',
          channelId: 'UCVIIa6OL-FautUqhHjAoz_A',
          title: 'NGÀY ĐẦU TIÊN - ĐỨC PHÚC | DANCE PERFORMANCE',
          description:
            'NGÀY ĐẦU TIÊN - ĐỨC PHÚC | DANCE PERFORMANCE #ducphuc #ngaydautien Độc Quyền Phát Hành Nhạc Số: SONY ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/AfNbehFKJ7o/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/AfNbehFKJ7o/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/AfNbehFKJ7o/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'ĐỨC PHÚC OFFICIAL',
          liveBroadcastContent: 'none',
          publishTime: '2022-02-18T12:30:02Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'bjkn5qHOSB1pSAq8A-YWK9GOeOM',
        id: {
          kind: 'youtube#video',
          videoId: '7m8ek8D9me0',
        },
        snippet: {
          publishedAt: '2022-03-21T12:00:13Z',
          channelId: 'UCLFOZcEUPlwdc02FHkOpqkA',
          title: 'MIN - CÀ PHÊ | OFFICIAL MUSIC VIDEO',
          description:
            "Cà Phê - MIN Download/Stream: https://MIN.lnk.to/50-50 Buy 50/50's CD: https://MIN.lnk.to/5050CD #CaPhe #MIN #Album5050 ...",
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/7m8ek8D9me0/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/7m8ek8D9me0/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/7m8ek8D9me0/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'MIN OFFICIAL',
          liveBroadcastContent: 'none',
          publishTime: '2022-03-21T12:00:13Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: '6dKXXR00y8uqShvkjrn6ec8YO8s',
        id: {
          kind: 'youtube#video',
          videoId: 'ptSwuFTEYAo',
        },
        snippet: {
          publishedAt: '2022-02-06T12:00:13Z',
          channelId: 'UCSnVteUNlhr1SqCjTQx0PDQ',
          title:
            'AMEE x LOTTERIA - thay mọi cô gái yêu anh | Official Music Video',
          description:
            "'thay mọi cô gái yêu anh' - valentine project AMEE x LOTTERIA Zing Mp3: ...",
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/ptSwuFTEYAo/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/ptSwuFTEYAo/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/ptSwuFTEYAo/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'ST.319 Entertainment',
          liveBroadcastContent: 'none',
          publishTime: '2022-02-06T12:00:13Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: '-wbfRHLLXkpInQkbPu2aC_8jN0c',
        id: {
          kind: 'youtube#video',
          videoId: 'a7rRh0rzA_E',
        },
        snippet: {
          publishedAt: '2022-04-21T13:00:11Z',
          channelId: 'UCLOCzuU5ddDqvd_e3qpomZQ',
          title: 'Sunkissed - Chillies (Official Music Video) ft. Châu Bùi',
          description:
            'Sunkissed - Chillies (Official Music Video) ft. Châu Bùi - Spotify: https://wmvn.lnk.to/sunkissed/spotify - Apple Music: ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/a7rRh0rzA_E/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/a7rRh0rzA_E/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/a7rRh0rzA_E/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Chillies',
          liveBroadcastContent: 'none',
          publishTime: '2022-04-21T13:00:11Z',
        },
      },
    ];

    this.video = arr;
    this.displayList.next([...this.video.map((item) => ({ ...item }))]);
  }
}
