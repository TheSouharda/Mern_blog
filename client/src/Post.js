import React from "react";

function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk="
          alt=""
        />
      </div>
      <div className="texts">
        <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h2>
        <p className="info">
          <a className="author">Sudipta Biswas</a>
          <time>29-01-2023 16:45</time>
        </p>
        <p className="summary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi odit id
          consequatur sint laudantium cum. In iure sed minima aut.
        </p>
      </div>
    </div>
  );
}

export default Post;
