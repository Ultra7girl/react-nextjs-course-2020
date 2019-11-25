import React from 'react'
import { Flex } from '@grid'
import SongListItem from './SongListItem'

export default function SongList({ tracks }) {
  // console.log(tracks)
  return (
    <Flex
      flexWrap="wrap"
      width={1}
      css={{ padding: '10px 0', borderRadius: '5px' }}>
      {tracks.map((track, i) => (
        <SongListItem key={i} track={track} />
      ))}
    </Flex>
  )
}
