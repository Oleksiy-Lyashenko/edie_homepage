import headerImg from './assets/heroImage.jpg';

function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="wrapper">
          <div className="header__content">
            <div className="menu">
              <div className="logo">Edie</div>

              <ul className="menu__list">
                <li className="menu__item">
                  <a href="/" className="menu__link">
                    Home
                  </a>
                </li>
                <li className="menu__item">
                  <a href="/" className="menu__link">
                    Services
                  </a>
                </li>
                <li className="menu__item">
                  <a href="/" className="menu__link">
                    Out Works
                  </a>
                </li>
                <li className="menu__item">
                  <a href="/" className="menu__link">
                    Clients
                  </a>
                </li>
                <li className="menu__item">
                  <a href="/" className="menu__link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="header__margin">
              <p className="header__question">Unhappy with your website?</p>

              <h2 className="header__title">
                We create beautiful <br /> and fast web services
              </h2>
            </div>

            <div className="header__block-img">
              <img src={headerImg} alt="" className="header__img" />
            </div>

            <div className="header__margin">
              <h2 className="header__title">
                Story, emotion <br /> and purpose
              </h2>

              <p className="header__text">
                We help transform your ideas into real world applications that will outperform your
                toughest competition and help you achieve your strategic goals in short period of
                time.
              </p>

              <div className="search">
                <p className='search__title'>Want us to contact you?</p>

                <div className="input">
                  <input type="text" className='input__field' placeholder='Email'/>
                  <button className='input__button'>Join</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
