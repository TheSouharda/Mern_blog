import "./App.css";

function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">
          MyBlog
        </a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>
      <div className="post">
        <div className="image">
          <img
            src="https://techcrunch.com/wp-content/uploads/2023/01/Screen-Shot-2023-01-27-at-10.53.23-PM.png?w=1390&crop=1"
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi odit
            id consequatur sint laudantium cum. In iure sed minima aut.
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
