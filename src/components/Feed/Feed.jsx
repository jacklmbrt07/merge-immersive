import React from "react";
import "../Feed/Feed.css"
import { Link } from "react-router-dom";


const Feed = (props) => {
  return (
    <section className="feed">
      <div className="container">
        <div className="post-card">
          <div className="post-card__content">
            <div className="post-card__info">
              <h1>Merge Immersive</h1>
              <p>This project was built with the MERN stack.</p>
              <Link to="#">Read more</Link>
            </div>
          </div>
          <div className="post-card__img" id="post-card__img" >
          </div>
        </div>
        <div className="post-card">
          <div className="post-card__content">
            <div className="post-card__info">
              <h1>Merge Immersive</h1>
              <p>This project was built with the MERN stack.</p>
              <Link to="#">Read more</Link>
            </div>
          </div>
          <div className="post-card__img" id="post-card__img" >
          </div>
        </div>
        <div className="post-card">
          <div className="post-card__content">
            <div className="post-card__info">
              <h1>Merge Immersive</h1>
              <p>This project was built with the MERN stack.</p>
              <Link to="#">Read more</Link>
            </div>
          </div>
          <div className="post-card__img" id="post-card__img" >
          </div>
        </div>
      </div>
    </section>
  );
};

// const Feed = (props) => {
//   return (
//     <div>
//       <section className="feed container">
//         <div className="j-card">
//           <img src="https://avatars2.githubusercontent.com/u/25213510?s=460&u=ccd76bfb4349453011a6f276200dbcf087be71c2&v=4" alt="" />
//           <div className="j-card-content">
//             <h2>Johnathan</h2>
//             <p>github</p>
//           </div>
//         </div>
//         <div className="j-card">
//           <img src="https://avatars2.githubusercontent.com/u/61360118?s=460&v=4" alt="" />
//           <div className="j-card-content">
//             <h2>Jack</h2>
//             <p>github</p>
//           </div>
//         </div>
//         <div className="j-card">
//           <img src="https://avatars3.githubusercontent.com/u/66652422?s=460&u=b6b22e8cd504bb6eba9ad261afaa2e2d1269b0de&v=4" alt="" />
//           <div className="j-card-content">
//             <h2>Dominique</h2>
//             <p>github</p>
//           </div>
//         </div>
//         <div className="j-card">
//           <img src="https://avatars2.githubusercontent.com/u/25213510?s=460&u=ccd76bfb4349453011a6f276200dbcf087be71c2&v=4" alt="" />
//           <div className="j-card-content">
//             <h2>Johnathan</h2>
//             <p>github</p>
//           </div>
//         </div>
//         <div className="j-card">
//           <img src="https://avatars2.githubusercontent.com/u/61360118?s=460&v=4" alt="" />
//           <div className="j-card-content">
//             <h2>Jack</h2>
//             <p>github</p>
//           </div>
//         </div>
//         <div className="j-card">
//           <img src="https://avatars3.githubusercontent.com/u/66652422?s=460&u=b6b22e8cd504bb6eba9ad261afaa2e2d1269b0de&v=4" alt="" />
//           <div className="j-card-content">
//             <h2>Dominique</h2>
//             <p>github</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

export default Feed;