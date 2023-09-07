import "./friend.css"

export default function Friend({post}) {
  return (
    <div><li classname="sidebarFriend">
    <img className="sidebarFriendImg" src={post.image} alt=""/>
    <span className="sidebarFriendName">{post.name}</span>
</li></div>
  )
}
