export namespace TrackModel {
  export interface ITrack {}
}

const a = {
  artists: {
    href: 'https://api.spotify.com/v1/search?query=Muse&type=artist&locale=en-US%2Cen%3Bq%3D0.9&offset=0&limit=2',
    items: [
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/12Chz98pHFMPJEknJQMWvI',
        },
        followers: {
          href: null,
          total: 7015055,
        },
        genres: ['modern rock', 'permanent wave', 'rock'],
        href: 'https://api.spotify.com/v1/artists/12Chz98pHFMPJEknJQMWvI',
        id: '12Chz98pHFMPJEknJQMWvI',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab6761610000e5eb02fffd59f8dd3d45b2e7ef30',
            width: 640,
          },
          {
            height: 320,
            url: 'https://i.scdn.co/image/ab6761610000517402fffd59f8dd3d45b2e7ef30',
            width: 320,
          },
          {
            height: 160,
            url: 'https://i.scdn.co/image/ab6761610000f17802fffd59f8dd3d45b2e7ef30',
            width: 160,
          },
        ],
        name: 'Muse',
        popularity: 74,
        type: 'artist',
        uri: 'spotify:artist:12Chz98pHFMPJEknJQMWvI',
      },
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/6UdKtISMXYKSR8jcgtFePo',
        },
        followers: {
          href: null,
          total: 127079,
        },
        genres: ['korean r&b'],
        href: 'https://api.spotify.com/v1/artists/6UdKtISMXYKSR8jcgtFePo',
        id: '6UdKtISMXYKSR8jcgtFePo',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab6761610000e5eb1b1f8d9e160952bd437210a2',
            width: 640,
          },
          {
            height: 320,
            url: 'https://i.scdn.co/image/ab676161000051741b1f8d9e160952bd437210a2',
            width: 320,
          },
          {
            height: 160,
            url: 'https://i.scdn.co/image/ab6761610000f1781b1f8d9e160952bd437210a2',
            width: 160,
          },
        ],
        name: 'Rad Museum',
        popularity: 51,
        type: 'artist',
        uri: 'spotify:artist:6UdKtISMXYKSR8jcgtFePo',
      },
    ],
    limit: 2,
    next: 'https://api.spotify.com/v1/search?query=Muse&type=artist&locale=en-US%2Cen%3Bq%3D0.9&offset=2&limit=2',
    offset: 0,
    previous: null,
    total: 1298,
  },
};
