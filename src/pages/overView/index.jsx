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

const OverView = () => {
  const [page, setPage] = useState(1);
  const [feed, setFeed] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadPage = () => {
    console.log(page);
    console.log(loading);
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
      {feed.map((element, i) => (
        <Post>
          <UserPost>
            <img src={element.image} key={i} alt={element.image} />
            <p>Rick Morty</p>
          </UserPost>

          <PostedImage>
            <img src={element.image} key={i} alt={element.image} />
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
