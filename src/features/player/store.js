import { observable, action } from 'mobx'
import { convertSecondsToMinutes } from '@features/player/utilities'
export default class PlayerStore {
  @observable
  nowPlaying = {
    playing: false,
    title: '',
    subTitle: '',
    image: '',
    url: '',
  }
  @observable
  progressing = {}

  @observable
  queue = {
    tracks: [],
  }

  @action
  play(track) {
    const { previewUrl, name, artist, image } = track

    this.nowPlaying.playing = true
    this.nowPlaying.title = name
    this.nowPlaying.subTitle = artist
    this.nowPlaying.image = image
    this.nowPlaying.url = previewUrl

    console.log('Now Playing:', this.nowPlaying.title)
  }

  @action
  pause(status) {
    this.nowPlaying.playing = status
  }

  @action
  progress(progress) {
    console.log(progress)
    this.progressing.timeElapsed = convertSecondsToMinutes(
      progress.playedSeconds,
    )
    this.progressing.progress = progress.played
    this.progressing.duration = convertSecondsToMinutes(progress.loadedSeconds)

    console.log('Now Progress:', this.progressing.progress)
  }

  @action
  addToQueue(track) {
    console.log(track)
    this.queue.tracks.push(track)
    console.log(this.queue.tracks)
  }
}
