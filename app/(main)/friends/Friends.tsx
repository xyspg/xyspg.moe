import { FriendCard } from '~/app/(main)/friends/FriendCard'
import { getSettings } from '~/sanity/queries'

export async function Friends() {
  const placeholder = (await getSettings()).projects || []

  const friends = [
    {
      description: '雨になって何分か後に行く',
      icon: { _type: 'image', asset: {
          _ref: 'image-aa9a5ea0c800f5b8a098076373cfe25f0ef4de29-787x787-jpg',
          _type: 'reference'
        } },
      _id: '',
      name: 'cloramiStation',
      url: 'https://clorami.cc'
    },
  ]


  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
    >
      {friends.map((friend) => (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        <FriendCard project={friend} key={friend._id} />
      ))}
    </ul>
  )
}
