import * as API from './repository'

export function getNewReleases({ token, limit }) {
  return API.getNewReleases({ token, limit })
}

export function getAlbumById(id, { token }) {
  return API.getAlbumById(id, { token }).then(response => {
    console.log(response)
    return {
      ...response,
      title: response.name,
      subTitle: response.artists
        .map(artist => {
          return artist.name
        })
        .join(','),
      image: response.images[0].url,
      tracks: response.tracks.items.map(track => {
        return {
          ...track,
          artist: track.artists
            .map(artist => {
              return artist.name
            })
            .join(','),
          album: track.name,
          previewUrl: track.preview_url,
          durationMs: track.duration_ms,
          image: response.images[0].url,
        }
      }),
    }
  })
}
