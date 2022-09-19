import headerImg from './assets/heroImage.jpg';

import pencil from './assets/icons/pencil.svg';
import brackets from './assets/icons/brackets.svg';
import data from './assets/icons/storage.svg';

import img1 from './assets/smarthome.jpg';
import img2 from './assets/onboard.png';
import img3 from './assets/booking.png';
import img4 from './assets/juice-product.png';

import person1 from './assets/person1.png';
import person2 from './assets/person2.png';
import person3 from './assets/person3.png';

import author from './assets/person4.png';

import instagram from './assets/instagram.svg';
import linkedin from './assets/linkedin.svg';
import twitter from './assets/twitter.svg';

function App() {
  return (
    <div className="page">
      <header className="header page--margin">
        <div className="wrapper">
          <div className="header__content">
            <div className="menu">
              <a href="/" className="logo">
                Edie
              </a>

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
                <p className="search__title">Want us to contact you?</p>

                <div className="input">
                  <input type="text" className="input__field" placeholder="Email" />
                  <button className="input__button">Join</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="content">
        <div className="wrapper wrapper--content">
          <div className="services page--margin">
            <h2 className="content__title">
              We offer high <br /> demand services{' '}
            </h2>

            <div className="services__content">
              <div className="services__block">
                <div className="services__block-icon services__block-icon--first">
                  <img src={pencil} alt="" className="services__icon" />
                </div>

                <h3 className="services__block__title">UI/UX Design</h3>

                <p className="services__block__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla
                  consequat aliquet id quis turpis.
                </p>

                <button className="services__block__button">Get started</button>
              </div>
              <div className="services__block">
                <div className="services__block-icon services__block-icon--second">
                  <img src={brackets} alt="" className="services__icon" />
                </div>

                <h3 className="services__block__title">UI/UX Design</h3>

                <p className="services__block__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla
                  consequat aliquet id quis turpis.
                </p>

                <button className="services__block__button">Get started</button>
              </div>
              <div className="services__block">
                <div className="services__block-icon services__block-icon--third">
                  <img src={data} alt="" className="services__icon" />
                </div>

                <h3 className="services__block__title">UI/UX Design</h3>

                <p className="services__block__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla
                  consequat aliquet id quis turpis.
                </p>

                <button className="services__block__button">Get started</button>
              </div>
            </div>
          </div>

          <div className="out-works page--margin">
            <h2 className="content__title">
              Good design means <br /> good business
            </h2>

            <div className="out-works__works">
              <div className="out-works__block out-works__block--margin">
                <img src={img1} alt="" className="out-works__img" />

                <p className="out-works__subtitle">Full stack application</p>

                <h3 className="out-works__title">Smart home dashboard</h3>
              </div>
              <div className="out-works__block out-works__block--last">
                <img src={img2} alt="" className="out-works__img" />

                <p className="out-works__subtitle">UX/UI design</p>

                <h3 className="out-works__title">Onboard application</h3>
              </div>
              <div className="out-works__block out-works__block--margin">
                <img src={img3} alt="" className="out-works__img" />

                <p className="out-works__subtitle">Mobile application</p>

                <h3 className="out-works__title">Booking system</h3>
              </div>
              <div className="out-works__block out-works__block--last">
                <img src={img4} alt="" className="out-works__img" />

                <p className="out-works__subtitle">Front End applicati on</p>

                <h3 className="out-works__title">Juice product homepage</h3>
              </div>
            </div>

            <button className="out-works__button">see more &rarr;</button>
          </div>

          <div className="clients page--margin">
            <div className="clients__info">
              <p className="clients__subtitle">Meet the team</p>

              <h2 className="content__title content__title--clients">
                We are chilled <br /> and a laidback <br /> team
              </h2>

              <p className="clients__text">
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              </p>
            </div>

            <div className="clients__block-img">
              <div className="clients__img--first">
                <img src={person3} alt="" className="clients__img" />
              </div>
              <div className="clients__flex">
                <div className="clients__img--second">
                  <img src={person1} alt="" className="clients__img" />
                </div>
                <div className="">
                  <img src={person2} alt="" className="clients__img" />
                </div>
              </div>
            </div>
          </div>

          <div className="quote page--margin">
            <h2 className="content__title  quote__title">
              “Fast and outstanding resutls. Edie understands their customer’s needs. They have a
              young and talented team.”
            </h2>

            <div className="quote__author">
              <div className="quote__img-block">
                <img src={author} alt="" className="quote__img" />
              </div>

              <div className="quote__info">
                <h4 className="quote__name">Carlos Tran</h4>

                <p className="quote__position">The Decorate Gatsby</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="wrapper wrapper--content">
          <div className="footer__body">
            <div className="footer__nav">
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="/" className="footer__link">
                    Home
                  </a>
                </li>
                <li className="footer__item">
                  <a href="/" className="footer__link">
                    Services
                  </a>
                </li>
                <li className="footer__item">
                  <a href="/" className="footer__link">
                    OutWorks
                  </a>
                </li>
                <li className="footer__item">
                  <a href="/" className="footer__link">
                    Clients
                  </a>
                </li>
                <li className="footer__item">
                  <a href="/" className="footer__link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__logo">
              <a href="/" className="logo logo--footer">
                Edie
              </a>

              <div className="footer__social">
                <a href="https://www.instagram.com/" target="_blanck">
                  <img src={instagram} alt="" className="footer__icon" />
                </a>
                <a href="https://www.linkedin.com/" target="_blanck">
                  <img src={linkedin} alt="" className="footer__icon" />
                </a>
                <a href="https://twitter.com/" target="_blanck">
                  <img src={twitter} alt="" className="footer__icon" />
                </a>
              </div>
            </div>

            <div className="footer__search footer--input">
              <p className="footer__question">Want us to contact you?</p>

              <div className="input">
                <input type="text" className="input__field" placeholder="Email" />
                <button className="input__button">Join</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
