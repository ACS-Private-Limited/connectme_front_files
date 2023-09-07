import "./online.css"

export default function Online({post}) {
  return (
    <div>
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src={post.image} alt=""/>
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{post.name}</span>
          </li>
    </div>
  )
}
