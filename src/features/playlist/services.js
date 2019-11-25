import * as API from './repository'

export function getPlaylistById(id, { token }) {
  return API.getPlaylistById(id, { token }).then(response => {
    return {
      // ...response,
      title: response.name,
      subTitle: response.owner.display_name,
      image: response.images[0].url,
      bottomLine: response.tracks.items.length + ' Tracks',
      tracks: response.tracks.items.map(item => {
        return {
          name: item.track.name,
          artist: item.track.artists
            .map(artist => {
              return artist.name
            })
            .join(','),
          album: item.track.album.name,
          image: item.track.album.images[0].url,
          previewUrl: item.track.preview_url,
          durationMs: item.track.duration_ms,
        }
      }),
    }
  })
}

export function getMyPlaylist({ token }) {
  return API.getMyPlaylist({ token }).then(response => {
    return {
      ...response,
    }
  })
}
