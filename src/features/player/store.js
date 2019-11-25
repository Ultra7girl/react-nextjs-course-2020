import { observable, action } from 'mobx'
export default class PlayerStore {
  @observable
  // nowPlaying = {
  //   playing: true,
  //   title: 'ไกลแค่ไหน คือ ใกล้',
  //   subTitle: 'Getsunova',
  //   image: 'https://i.scdn.co/image/ab67616d0000b273e76e64aa449965dd5e439c53',
  //   url:
  //     'https://p.scdn.co/mp3-preview/f0521c21357ae522872b59cf4dd082ad65880fe8?cid=e4abb1ea8fdf4926a463960abd146fcb',
  // }
  nowPlaying = {}
  @observable
  progressing = {}

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
    this.progressing.timeElapsed = progress.playedSeconds.toFixed(2)
    this.progressing.progress = progress.played.toFixed(2)
    this.progressing.duration = progress.loadedSeconds.toFixed(2)
    console.log('Now Progress:', this.progressing.progress)
  }
}
