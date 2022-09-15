import { useEffect } from "react";
import { useState } from "react";
import {
  OverViewContainer,
  Post,
  PostBar,
  PostedImage,
  UserPost,
} from "./style";
import InfiniteScroll from "../../components/infinityScroll/index";
import { BiLike, BiCommentDetail, BiShare } from "react-icons/bi";
import { songs } from "../../utils/importsongs";
import { useNavigate } from "react-router-dom";

const OverView = () => {
  const [page, setPage] = useState(1);
  const [feed, setFeed] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClickSong = (id) => {
    navigate(`/player/${id}`);
  };

  const loadPage = () => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((res) => res.json())
      .then((res) => setFeed([...feed, ...res.results]))
      .then((res) => setPage(page + 1))
      .then((res) => setLoading(false));
  };

  useEffect(() => {
    loadPage();
  }, []);

  return (
    <OverViewContainer>
      {songs.map((element, i) => (
        <Post
          className={element.id}
          onClick={(e) => handleClickSong(e.target.className)}
        >
          <UserPost>
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg"
              }
              key={i}
              alt={element.img}
            />
            <p>Lorenzo Marques</p>
          </UserPost>

          <PostedImage>
            <img
              src={element.img}
              key={i}
              alt={element.img}
              className={element.id}
            />
          </PostedImage>

          <PostBar>
            <button>
              <BiLike size={25} color="white" /> Like
            </button>
            <button>
              <BiCommentDetail size={25} color="white" /> Comment
            </button>
            <button>
              <BiShare size={25} color="white" /> Share
            </button>
          </PostBar>
        </Post>
      ))}
      <InfiniteScroll fetchMore={() => setLoading(true)} />
      {loading && <InfiniteScroll fetchMore={loadPage} />}
    </OverViewContainer>
  );
};

export default OverView;
