import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import ButtonCTA from '../components/button-cta'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container10">
      <Helmet>
        <title>Fourmakers - Landing Page</title>
      </Helmet>
      <div className="home-content">
        <div id="home" className="home-hero">
          <header data-thq="thq-navbar" className="home-navbar-interactive">
            <a href="#home" className="home-link10">
              <img
                alt="logo"
                src="/external/group409251181-cfgp.svg"
                className="home-image1"
              />
            </a>
            <div data-thq="thq-navbar-nav" className="home-desktop-menu">
              <nav className="home-links1">
                <a href="#conectar" className="home-link11">
                  Faça parte
                </a>
                <a href="#solucoes" className="home-link12">
                  Soluções
                </a>
                <a href="#sobre" className="home-link13">
                  Sobre nós
                </a>
                <a href="#planos" className="home-link14">
                  Planos
                </a>
                <a href="#depoimentos" className="home-link15">
                  Depoimentos
                </a>
                <a href="#faq" className="home-link16">
                  FAQ
                </a>
              </nav>
              <div className="home-buttons-md">
                <div className="home-button10">
                  <div
                    area="Dúvidas"
                    action="btn-form"
                    titulo="Dúvidas"
                    className="home-button-outlined1"
                  >
                    <div className="home-container11">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="home-icon10"
                      >
                        <path
                          d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <span className="home-text100">
                      <span>Dúvidas</span>
                    </span>
                  </div>
                </div>
                <div className="home-button11">
                  <a
                    href="https://app.fourmakers.io/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link17"
                  >
                    <div className="home-button-outlined2">
                      <div className="home-container12">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="home-icon12"
                        >
                          <path
                            d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7-.25c.22 0 .41.1.55.25c.12.13.2.31.2.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.19.08-.37.2-.5c.14-.15.33-.25.55-.25M19 19H5V5h14zM12 6c-1.65 0-3 1.35-3 3s1.35 3 3 3s3-1.35 3-3s-1.35-3-3-3m0 4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m-6 6.47V18h12v-1.53c0-2.5-3.97-3.58-6-3.58s-6 1.07-6 3.58M8.31 16c.69-.56 2.38-1.12 3.69-1.12s3.01.56 3.69 1.12z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                      <span className="home-text102">Cadastre-se</span>
                    </div>
                  </a>
                </div>
                <div className="home-button12">
                  <a
                    href="https://app.fourmakers.io/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link18"
                  >
                    <div className="home-button-outlined3">
                      <div className="home-container13">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="home-icon14"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                          >
                            <path
                              d="M13 4L20 4C20.5523 4 21 4.44772 21 5V19C21 19.5523 20.5523 20 20 20H13"
                              stroke-dasharray="32"
                              stroke-dashoffset="32"
                            >
                              <animate
                                dur="0.4s"
                                fill="freeze"
                                values="32;0"
                                attributeName="stroke-dashoffset"
                              ></animate>
                            </path>
                            <path
                              d="M3 12h11.5"
                              opacity="0"
                              stroke-dasharray="12"
                              stroke-dashoffset="12"
                            >
                              <set
                                to="1"
                                begin="0.5s"
                                attributeName="opacity"
                              ></set>
                              <animate
                                dur="0.2s"
                                fill="freeze"
                                begin="0.5s"
                                values="12;0"
                                attributeName="stroke-dashoffset"
                              ></animate>
                            </path>
                            <path
                              d="M14.5 12l-3.5 -3.5M14.5 12l-3.5 3.5"
                              opacity="0"
                              stroke-dasharray="6"
                              stroke-dashoffset="6"
                            >
                              <set
                                to="1"
                                begin="0.7s"
                                attributeName="opacity"
                              ></set>
                              <animate
                                dur="0.2s"
                                fill="freeze"
                                begin="0.7s"
                                values="6;0"
                                attributeName="stroke-dashoffset"
                              ></animate>
                            </path>
                          </g>
                        </svg>
                      </div>
                      <span className="home-text103">Login</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="home-buttons1">
                <div className="home-button13">
                  <div
                    area="Dúvidas"
                    action="btn-form"
                    titulo="Dúvidas"
                    className="home-button-outlined4"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="home-icon24"
                    >
                      <path
                        d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span className="home-text104">
                      <span>Dúvidas</span>
                    </span>
                  </div>
                </div>
                <div className="home-button14">
                  <a
                    href="https://app.fourmakers.io/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link19"
                  >
                    <div className="home-button-filled1">
                      <span className="home-text106">Cadastre-se</span>
                    </div>
                  </a>
                </div>
                <div className="home-button15">
                  <a
                    href="https://app.fourmakers.io/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link20"
                  >
                    <div className="home-button-filled2">
                      <span className="home-text107">
                        <span>Login</span>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div data-thq="thq-burger-menu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon26">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu">
              <div className="home-nav">
                <div className="home-top">
                  <img
                    alt="Group4092511680"
                    src="/external/group4092511680-4p4k.svg"
                    className="home-group4092511"
                  />
                  <div data-thq="thq-close-menu" className="home-close-menu1">
                    <svg viewBox="0 0 1024 1024" className="home-icon28">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav className="home-links2">
                  <a
                    href="#conectar"
                    data-thq="thq-close-menu"
                    className="home-link21"
                  >
                    Faça parte
                  </a>
                  <a href="#solucoes" className="home-link22">
                    Soluções
                  </a>
                  <a href="#sobre" className="home-link23">
                    Sobre nós
                  </a>
                  <a href="#planos" className="home-link24">
                    Planos
                  </a>
                  <a href="#depoimentos" className="home-link25">
                    Depoimentos
                  </a>
                  <a href="#faq" className="home-link26">
                    FAQ
                  </a>
                  <div data-thq="thq-close-menu" className="home-close-menu2">
                    <svg viewBox="0 0 1024 1024" className="home-icon30">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </nav>
                <div className="home-buttons2">
                  <div
                    area="Dúvidas"
                    action="btn-form"
                    titulo="Dúvidas"
                    className="home-button-outlined5"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <path
                        d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span className="home-text109">
                      <span>Dúvidas</span>
                    </span>
                  </div>
                  <div className="home-button16">
                    <a
                      href="https://app.fourmakers.io/foursys"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link27"
                    >
                      <div className="home-button-filled3">
                        <span className="home-text111">Cadastre-se</span>
                      </div>
                    </a>
                  </div>
                  <div className="home-button17">
                    <a
                      href="https://app.fourmakers.io/foursys"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link28"
                    >
                      <div className="home-button-filled4">
                        <span className="home-text112">
                          <span>Login</span>
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="home-column1">
                <a
                  href="https://www.linkedin.com/company/fourmakers/?viewAsMember=true"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link29"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    className="home-icon34"
                  >
                    <path
                      d="M26.2 4H5.8C4.8 4 4 4.8 4 5.7v20.5c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V5.7c0-.9-.8-1.7-1.8-1.7M11.1 24.4H7.6V13h3.5zm-1.7-13c-1.1 0-2.1-.9-2.1-2.1s.9-2.1 2.1-2.1c1.1 0 2.1.9 2.1 2.1s-1 2.1-2.1 2.1m15.1 12.9H21v-5.6c0-1.3 0-3.1-1.9-3.1S17 17.1 17 18.5v5.7h-3.5V13h3.3v1.5h.1c.5-.9 1.7-1.9 3.4-1.9c3.6 0 4.3 2.4 4.3 5.5v6.2z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/FoursysTI?mibextid=LQQJ4d"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link30"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    className="home-icon36"
                  >
                    <path
                      d="M26.67 4H5.33A1.34 1.34 0 0 0 4 5.33v21.34A1.34 1.34 0 0 0 5.33 28h11.49v-9.28H13.7v-3.63h3.12v-2.67c0-3.1 1.89-4.79 4.67-4.79c.93 0 1.86 0 2.79.14V11h-1.91c-1.51 0-1.8.72-1.8 1.77v2.31h3.6l-.47 3.63h-3.13V28h6.1A1.34 1.34 0 0 0 28 26.67V5.33A1.34 1.34 0 0 0 26.67 4"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
                <a
                  href="https://instagram.com/foursystecnologia?igshid=MzRlODBiNWFlZA=="
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link31"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    className="home-icon38"
                  >
                    <circle
                      r="1.44"
                      cx="22.406"
                      cy="9.594"
                      fill="currentColor"
                    ></circle>
                    <path
                      d="M16 9.838A6.162 6.162 0 1 0 22.162 16A6.16 6.16 0 0 0 16 9.838M16 20a4 4 0 1 1 4-4a4 4 0 0 1-4 4"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M16 6.162c3.204 0 3.584.012 4.849.07a6.6 6.6 0 0 1 2.228.413a3.98 3.98 0 0 1 2.278 2.278a6.6 6.6 0 0 1 .413 2.228c.058 1.265.07 1.645.07 4.85s-.012 3.583-.07 4.848a6.6 6.6 0 0 1-.413 2.228a3.98 3.98 0 0 1-2.278 2.278a6.6 6.6 0 0 1-2.228.413c-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07a6.6 6.6 0 0 1-2.228-.413a3.98 3.98 0 0 1-2.278-2.278a6.6 6.6 0 0 1-.413-2.228c-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849a6.6 6.6 0 0 1 .413-2.228a3.98 3.98 0 0 1 2.278-2.278a6.6 6.6 0 0 1 2.228-.413c1.265-.058 1.645-.07 4.849-.07M16 4c-3.259 0-3.668.014-4.948.072a8.8 8.8 0 0 0-2.912.558a6.14 6.14 0 0 0-3.51 3.51a8.8 8.8 0 0 0-.558 2.913C4.014 12.333 4 12.74 4 16s.014 3.668.072 4.948a8.8 8.8 0 0 0 .558 2.912a6.14 6.14 0 0 0 3.51 3.51a8.8 8.8 0 0 0 2.913.558c1.28.058 1.688.072 4.947.072s3.668-.014 4.948-.072a8.8 8.8 0 0 0 2.913-.558a6.14 6.14 0 0 0 3.51-3.51a8.8 8.8 0 0 0 .557-2.913C27.986 19.667 28 19.26 28 16s-.014-3.668-.072-4.948a8.8 8.8 0 0 0-.558-2.912a6.14 6.14 0 0 0-3.51-3.51a8.8 8.8 0 0 0-2.913-.557C19.667 4.013 19.26 4 16 4"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </header>
          <div className="home-container14">
            <img
              alt="image3164"
              src="https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/teams/tSBuz6sMYZEZ5mtSVNyg/assets/q3eajrxw3f0y/fourmakers_banner_header.jpg"
              className="home-image3"
            />
            <img
              alt="Rectangle34624267165"
              sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
              src="/external/rectangle34624267165-75m-1500h.webp"
              srcSet="external//rectangle34624267165-75m-1500h.webp 1200w, external/rectangle34624267165-75m-tablet.webp 800w, external/rectangle34624267165-75m-mobile.webp 480w"
              className="home-fade"
            />
            <img
              alt="Rectangle34624266166"
              sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
              src="/external/rectangle34624266166-fee-1500h.webp"
              srcSet="external//rectangle34624266166-fee-1500h.webp 1200w, external/rectangle34624266166-fee-tablet.webp 800w, external/rectangle34624266166-fee-mobile.webp 480w"
              className="home-color"
            />
          </div>
          <div className="home-container15">
            <div className="home-header-content">
              <div className="home-column2">
                <a
                  href="https://www.facebook.com/FoursysTI?mibextid=LQQJ4d"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link32"
                >
                  <img
                    alt="FacebookNegative169"
                    src="/external/facebooknegative169-ncni.svg"
                    className="home-facebook-negative"
                  />
                </a>
                <a
                  href="https://instagram.com/foursystecnologia?igshid=MzRlODBiNWFlZA=="
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link33"
                >
                  <div className="home-instagram-negative">
                    <div className="home-group1">
                      <img
                        alt="VectorI170"
                        src="/external/vectori170-1ial.svg"
                        className="home-vector1"
                      />
                      <img
                        alt="VectorI170"
                        src="/external/vectori170-e21l.svg"
                        className="home-vector2"
                      />
                      <img
                        alt="VectorI170"
                        src="/external/vectori170-lupg.svg"
                        className="home-vector3"
                      />
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/company/fourmakers/?viewAsMember=true"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link34"
                >
                  <div className="home-linked-in-negative">
                    <div className="home-group2">
                      <img
                        alt="VectorI171"
                        src="/external/vectori171-y9ed.svg"
                        className="home-vector4"
                      />
                    </div>
                  </div>
                </a>
              </div>
              <span data-aos="fade-up" className="home-text114">
                <span>Revolucione</span>
                <br></br>
                <span>a gestão de pessoas</span>
                <br></br>
                <span>com Fourmakers</span>
              </span>
              <div className="home-div1">
                <span className="home-text120">
                  <span>Scroll</span>
                </span>
                <div className="home-icon42">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="home-icon43"
                  >
                    <g fill="none">
                      <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                      <path
                        d="M13 2a6 6 0 0 1 5.996 5.775L19 8v8a6 6 0 0 1-5.775 5.996L13 22h-2a6 6 0 0 1-5.996-5.775L5 16V8a6 6 0 0 1 5.775-5.996L11 2zm0 2h-2a4 4 0 0 0-3.995 3.8L7 8v8a4 4 0 0 0 3.8 3.995L11 20h2a4 4 0 0 0 3.995-3.8L17 16V8a4 4 0 0 0-3.8-3.995zm-1 2a1 1 0 0 1 .993.883L13 7v4a1 1 0 0 1-1.993.117L11 11V7a1 1 0 0 1 1-1"
                        fill="currentColor"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div
              area="Banner - Demonstração"
              action="btn-form"
              titulo="Solicite uma demonstração"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-offset="0"
              className="home-container16"
            >
              <ButtonCTA
                text={
                  <Fragment>
                    <span className="home-text122">Solicite demonstração</span>
                  </Fragment>
                }
              ></ButtonCTA>
            </div>
          </div>
          <div type="line" className="home-line10"></div>
        </div>
        <div id="sobre" className="home-sobre">
          <div className="home-container17">
            <div className="home-column3">
              <div data-aos="fade-right" className="home-fourmakerssymbol">
                <img
                  alt="Ellipse961123"
                  src="/external/ellipse961123-lczh.svg"
                  className="home-ellipse961"
                />
                <img
                  alt="Ellipse981122"
                  src="/external/ellipse981122-96xr.svg"
                  className="home-ellipse981"
                />
              </div>
            </div>
            <div className="home-column4">
              <span data-aos="fade-up" className="home-text123">
                Sua solução completa em gestão de pessoas
              </span>
              <span data-aos="fade-up" className="home-text124">
                <span>
                  No
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text126">Fourmakers</span>
                <span>
                  , sabemos que o sucesso de uma empresa depende das pessoas que
                  a compõem. Nossa plataforma inovadora reúne todas as
                  ferramentas essenciais para você gerir, desenvolver e engajar
                  sua equipe de maneira eficaz.
                </span>
              </span>
              <div
                area="Sobre nós"
                action="btn-form"
                titulo="Solicite uma demonstração"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-offset="0"
                className="home-container18"
              >
                <ButtonCTA
                  text={
                    <Fragment>
                      <span className="home-text128">
                        Solicite demonstração
                      </span>
                    </Fragment>
                  }
                  className="home-component2"
                ></ButtonCTA>
              </div>
            </div>
          </div>
        </div>
        <div id="conectar" className="home-conectar">
          <div className="home-symbol">
            <img
              alt="Ellipse961147"
              src="/external/ellipse961147-dva.svg"
              className="home-ellipse962"
            />
            <img
              alt="Ellipse981148"
              src="/external/ellipse981148-ixut.svg"
              className="home-ellipse982"
            />
          </div>
          <div className="home-lines">
            <img
              alt="Rectangle346242651145"
              src="/external/rectangle346242651145-reqk-200h.webp"
              className="home-rectangle34624265"
            />
            <img
              alt="Rectangle346242651128"
              src="/external/rectangle346242651128-cta9-200h.webp"
              className="home-line11"
            />
          </div>
          <div className="home-column5">
            <div className="home-title10">
              <span className="home-text129">Faça parte</span>
              <div className="home-frame42732005910">
                <img
                  alt="Rectangle346242311547"
                  src="/external/rectangle346242311547-662m-200h.webp"
                  className="home-rectangle3462423110"
                />
              </div>
            </div>
            <div className="home-columns">
              <div
                data-aos="flip-left"
                className="home-atraoeretenodetalentos1"
              >
                <div className="home-title11">
                  <span className="home-text130">Para Empresas</span>
                </div>
                <div className="home-profissionais10">
                  <div className="home-image2">
                    <div className="home-div2">
                      <img
                        alt="womanmanarelaughinglaughing11160"
                        sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                        src="/external/womanmanarelaughinglaughing11160-jvy-1500h.webp"
                        srcSet="external//womanmanarelaughinglaughing11160-jvy-1500h.webp 1200w, external/womanmanarelaughinglaughing11160-jvy-tablet.webp 800w, external/womanmanarelaughinglaughing11160-jvy-mobile.webp 480w"
                        className="home-womanmanarelaughinglaughing11"
                      />
                      <div className="home-group40928">
                        <img
                          alt="Ellipse981162"
                          src="/external/ellipse981162-tc8e.svg"
                          className="home-ellipse983"
                        />
                        <img
                          alt="Ellipse961163"
                          src="/external/ellipse961163-9awa.svg"
                          className="home-ellipse963"
                        />
                      </div>
                    </div>
                  </div>
                  <span className="home-text131">
                    O Fourmakers personaliza a gestão de pessoas para atender às
                    necessidades específicas da empresa, melhorando a alocação
                    de talentos, aumentando o engajamento e promovendo o
                    desenvolvimento dos colaboradores.
                  </span>
                  <div className="home-box1">
                    <img
                      alt="check1168"
                      src="/external/check1168-m4es.svg"
                      className="home-check10"
                    />
                    <div className="home-frame4273200901">
                      <span className="home-text132">
                        <span>Eficiência Operacional</span>
                      </span>
                      <span className="home-text134">
                        <span>
                          Reduza o tempo gasto com tarefas administrativas por
                          meio de automações inteligentes e gestão centralizada.
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="home-box2">
                    <img
                      alt="check1173"
                      src="/external/check1173-i65v.svg"
                      className="home-check11"
                    />
                    <div className="home-frame4273200902">
                      <span className="home-text136">
                        <span>Decisões Informadas</span>
                      </span>
                      <span className="home-text138">
                        <span>
                          Utilize relatórios detalhados e insights estratégicos
                          para tomar decisões mais assertivas.
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="home-box3">
                    <img
                      alt="check1178"
                      src="/external/check1178-g7q.svg"
                      className="home-check12"
                    />
                    <div className="home-frame4273200903">
                      <span className="home-text140">
                        <span>Retenção de Talentos</span>
                      </span>
                      <span className="home-text142">
                        <span>
                          Aumente o engajamento e a satisfação dos
                          colaboradores, diminuindo a rotatividade e melhorando
                          a produtividade.
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  area="Faça parte"
                  action="btn-form"
                  titulo="Solicite uma demonstração"
                  className="home-button18"
                >
                  <ButtonCTA
                    text={
                      <Fragment>
                        <span className="home-text144">
                          Solicite demonstração
                        </span>
                      </Fragment>
                    }
                    rootClassName="button-ct-aroot-class-name3"
                    className="home-component3"
                  ></ButtonCTA>
                </div>
              </div>
              <div
                data-aos="flip-left"
                data-aos-delay="200"
                className="home-atraoeretenodetalentos2"
              >
                <div className="home-title12">
                  <span className="home-text145">
                    <span>Para Profissionais</span>
                  </span>
                </div>
                <div className="home-profissionais11">
                  <div className="home-image4">
                    <div className="home-div3">
                      <img
                        alt="womanmanarelaughinglaughing11190"
                        sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                        src="/external/womanmanarelaughinglaughing11190-5pps-1500h.webp"
                        srcSet="external//womanmanarelaughinglaughing11190-5pps-1500h.webp 1200w, external/womanmanarelaughinglaughing11190-5pps-tablet.webp 800w, external/womanmanarelaughinglaughing11190-5pps-mobile.webp 480w"
                        className="home-womanmanarelaughinglaughing12"
                      />
                      <div className="home-group40927">
                        <img
                          alt="Ellipse981192"
                          src="/external/ellipse981192-gz9g.svg"
                          className="home-ellipse984"
                        />
                        <img
                          alt="Ellipse961193"
                          src="/external/ellipse961193-jht.svg"
                          className="home-ellipse964"
                        />
                      </div>
                    </div>
                  </div>
                  <span className="home-text147">
                    O Fourmakers oferece desenvolvimento profissional contínuo,
                    feedbacks personalizados e maior engajamento, promovendo
                    crescimento na carreira e satisfação no trabalho ao alinhar
                    habilidades com as necessidades da empresa.
                  </span>
                  <div className="home-frame4273198801">
                    <img
                      alt="check1198"
                      src="/external/check1198-ub9f.svg"
                      className="home-check13"
                    />
                    <div className="home-frame4273200904">
                      <span className="home-text148">
                        <span>Crescimento Profissional</span>
                      </span>
                      <span className="home-text150">
                        <span>
                          Encontre as melhores oportunidades para o seu
                          desenvolvimento de acordo com o seu perfil e
                          aspirações.
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="home-frame4273198761">
                    <img
                      alt="check1203"
                      src="/external/check1203-zwt.svg"
                      className="home-check14"
                    />
                    <div className="home-frame4273200905">
                      <span className="home-text152">
                        <span>Feedback Contínuo</span>
                      </span>
                      <span className="home-text154">
                        <span>
                          Faça parte de uma cultura que valoriza e reconhece o
                          seu trabalho, promovendo o bem-estar.
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="home-frame4273198791">
                    <img
                      alt="check1208"
                      src="/external/check1208-j36.svg"
                      className="home-check15"
                    />
                    <div className="home-frame4273200906">
                      <span className="home-text156">
                        <span>Ambiente Positivo</span>
                      </span>
                      <span className="home-text158">
                        <span>
                          O Fourmakers identifica e recomenda as melhores
                          oportunidades para você, conectando seu perfil com os
                          projetos certos e as empresas ideais.
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <a
                  href="https://app.fourmakers.io/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link35"
                >
                  <div className="home-button19">
                    <ButtonCTA
                      text={
                        <Fragment>
                          <span className="home-text160">
                            <span>Cadastre-se</span>
                            <br></br>
                          </span>
                        </Fragment>
                      }
                      rootClassName="button-ct-aroot-class-name2"
                      className="home-component4"
                    ></ButtonCTA>
                  </div>
                </a>
              </div>
            </div>
            <div className="home-container19">
              <div data-aos="fade-right" className="home-container20">
                <span className="home-text163">CONECTAR</span>
              </div>
              <span data-aos="fade-left" className="home-text164">
                Empresas e Profissionais e por meio de desafios estratégicos
                para desenvolver o futuro
              </span>
            </div>
          </div>
        </div>
        <div id="solucoes" className="home-solucoes">
          <div className="home-title13">
            <div className="home-frame427320071">
              <span className="home-text165">Soluções</span>
              <div className="home-frame42732005911">
                <img
                  alt="Rectangle346242311219"
                  src="/external/rectangle346242311219-r7d3-200h.webp"
                  className="home-rectangle3462423111"
                />
              </div>
            </div>
          </div>
          <div className="home-cards1">
            <div
              data-thq="slider"
              data-navigation="true"
              data-pagination="true"
              className="home-slider1 swiper"
            >
              <div data-thq="slider-wrapper" className="swiper-wrapper">
                <div
                  data-thq="slider-slide"
                  className="home-slider-slide10 swiper-slide"
                >
                  <div
                    area="Mapa de Alocação"
                    action="btn-form"
                    titulo="Mapa de Alocação"
                    className="home-card10"
                  >
                    <div className="home-title14">
                      <div className="home-frame42731938710">
                        <span className="home-text166">
                          <span>Mapa de Alocação</span>
                        </span>
                      </div>
                    </div>
                    <div className="home-line12">
                      <img
                        alt="Rectangle346242311398"
                        src="/external/rectangle346242311398-7b4-200h.webp"
                        className="home-rectangle3462423112"
                      />
                    </div>
                    <div className="home-body1">
                      <span className="home-text168">
                        <span>
                          Visualize e gerencie a distribuição de seus
                          colaboradores em diferentes projetos e funções.
                        </span>
                      </span>
                    </div>
                    <div type="button" className="card-button">
                      <span className="home-text170">
                        <span>Conheça</span>
                      </span>
                      <img
                        alt="BsArrowRightShort1234"
                        src="/external/bsarrowrightshort1234-1t43.svg"
                        className="home-bs-arrow-right-short10"
                      />
                    </div>
                  </div>
                </div>
                <div
                  data-thq="slider-slide"
                  className="home-slider-slide11 swiper-slide"
                >
                  <div
                    area="Match de Competências"
                    action="btn-form"
                    titulo="Match de Competência"
                    className="home-card11"
                  >
                    <div className="home-title15">
                      <div className="home-frame42731938711">
                        <span className="home-text172">
                          <span>Match de Competência</span>
                        </span>
                      </div>
                    </div>
                    <div className="home-line13">
                      <img
                        alt="Rectangle346242311398"
                        src="/external/rectangle346242311398-7b4-200h.webp"
                        className="home-rectangle3462423113"
                      />
                    </div>
                    <div className="home-profissionais12">
                      <span className="home-text174">
                        <span>Garanta que cada tarefa</span>
                        <br></br>
                        <span>seja atribuída à pessoa com</span>
                        <br></br>
                        <span>as habilidades e competências ideais.</span>
                      </span>
                    </div>
                    <div className="home-frame42731938910 card-button">
                      <span className="home-text180">
                        <span>Conheça</span>
                      </span>
                      <img
                        alt="BsArrowRightShort1247"
                        src="/external/bsarrowrightshort1247-zfa9.svg"
                        className="home-bs-arrow-right-short11"
                      />
                    </div>
                  </div>
                </div>
                <div
                  data-thq="slider-slide"
                  className="home-slider-slide12 swiper-slide"
                >
                  <div
                    area="Timesheet"
                    action="btn-form"
                    titulo="Timesheet"
                    className="home-card12"
                  >
                    <div className="home-frame42731938810">
                      <div className="home-frame42731938712">
                        <span className="home-text182">
                          <span>Timesheet</span>
                        </span>
                      </div>
                    </div>
                    <div className="home-line14">
                      <img
                        alt="Rectangle346242311398"
                        src="/external/rectangle346242311398-7b4-200h.webp"
                        className="home-rectangle3462423114"
                      />
                    </div>
                    <div className="home-profissionais13">
                      <span className="home-text184">
                        <span>
                          Monitore e registre a presença e desempenho dos
                          colaboradores de forma eficaz.
                        </span>
                      </span>
                    </div>
                    <div className="home-frame42731938911">
                      <span className="home-text186">
                        <span>Conheça</span>
                      </span>
                      <img
                        alt="BsArrowRightShort1260"
                        src="/external/bsarrowrightshort1260-lrlh.svg"
                        className="home-bs-arrow-right-short12"
                      />
                    </div>
                  </div>
                </div>
                <div
                  data-thq="slider-slide"
                  className="home-slider-slide13 swiper-slide"
                >
                  <div
                    area="Mapa de Alocação"
                    action="btn-form"
                    titulo="Mapa de Alocação"
                    className="home-card13"
                  >
                    <div className="home-frame42731938811">
                      <div className="home-frame42731938713">
                        <span className="home-text188">
                          <span>Mapa de Alocação</span>
                        </span>
                      </div>
                    </div>
                    <div className="home-line15">
                      <img
                        alt="Rectangle346242311398"
                        src="/external/rectangle346242311398-7b4-200h.webp"
                        className="home-rectangle3462423115"
                      />
                    </div>
                    <div className="home-profissionais14">
                      <span className="home-text190">
                        <span>
                          Planeje e otimize a alocação de talentos em toda a
                          empresa.
                        </span>
                      </span>
                    </div>
                    <div className="home-frame42731938912">
                      <span className="home-text192">
                        <span>Conheça</span>
                      </span>
                      <img
                        alt="BsArrowRightShort1273"
                        src="/external/bsarrowrightshort1273-k5i7.svg"
                        className="home-bs-arrow-right-short13"
                      />
                    </div>
                  </div>
                </div>
                <div
                  data-thq="slider-slide"
                  className="home-slider-slide14 swiper-slide"
                >
                  <div
                    area="Match de Competências"
                    action="btn-form"
                    titulo="Match de Competências"
                    className="home-card14"
                  >
                    <div className="home-frame42731938812">
                      <div className="home-frame42731938714">
                        <span className="home-text194">
                          <span>Match de Competências</span>
                        </span>
                      </div>
                    </div>
                    <div className="home-line16">
                      <img
                        alt="Rectangle346242311398"
                        src="/external/rectangle346242311398-7b4-200h.webp"
                        className="home-rectangle3462423116"
                      />
                    </div>
                    <div className="home-profissionais15">
                      <span className="home-text196">
                        <span>Encontre o talento certo</span>
                        <br></br>
                        <span>para cada posição com base</span>
                        <br></br>
                        <span>em habilidades específicas.</span>
                      </span>
                    </div>
                    <div className="home-frame42731938913">
                      <span className="home-text202">
                        <span>Conheça</span>
                      </span>
                      <img
                        alt="BsArrowRightShort1286"
                        src="/external/bsarrowrightshort1286-gvaf.svg"
                        className="home-bs-arrow-right-short14"
                      />
                    </div>
                  </div>
                </div>
                <div
                  data-thq="slider-slide"
                  className="home-slider-slide15 swiper-slide"
                >
                  <div
                    area="PDI"
                    action="btn-form"
                    titulo="PDI"
                    className="home-card15"
                  >
                    <div className="home-frame42731938813">
                      <div className="home-frame42731938715">
                        <span className="home-text204">
                          PDI (Plano de Desenvolvimento Individual)
                        </span>
                      </div>
                    </div>
                    <div className="home-line17">
                      <img
                        alt="Rectangle346242311398"
                        src="/external/rectangle346242311398-7b4-200h.webp"
                        className="home-rectangle3462423117"
                      />
                    </div>
                    <div className="home-profissionais16">
                      <span className="home-text205">
                        <span>
                          Crie e acompanhe planos de desenvolvimento
                          personalizados para cada colaborador.
                        </span>
                      </span>
                    </div>
                    <div className="home-frame42731938914">
                      <span className="home-text207">
                        <span>Conheça</span>
                      </span>
                      <img
                        alt="BsArrowRightShort1286"
                        src="/external/bsarrowrightshort1286-gvaf.svg"
                        className="home-bs-arrow-right-short15"
                      />
                    </div>
                  </div>
                </div>
                <div
                  data-thq="slider-slide"
                  className="home-slider-slide16 swiper-slide"
                >
                  <div
                    area="Book do Colaborador"
                    action="btn-form"
                    titulo="Book do Colaborador"
                    className="home-card16"
                  >
                    <div className="home-frame42731938814">
                      <div className="home-frame42731938716">
                        <span className="home-text209">
                          <span>Book do Colaborador</span>
                        </span>
                      </div>
                    </div>
                    <div className="home-line18">
                      <img
                        alt="Rectangle346242311398"
                        src="/external/rectangle346242311398-7b4-200h.webp"
                        className="home-rectangle3462423118"
                      />
                    </div>
                    <div className="home-profissionais17">
                      <span className="home-text211">
                        <span>
                          Mantenha um histórico detalhado das realizações e
                          progresso de cada colaborador.
                        </span>
                      </span>
                    </div>
                    <div className="home-frame42731938915">
                      <span className="home-text213">
                        <span>Conheça</span>
                      </span>
                      <img
                        alt="BsArrowRightShort1286"
                        src="/external/bsarrowrightshort1286-gvaf.svg"
                        className="home-bs-arrow-right-short16"
                      />
                    </div>
                  </div>
                </div>
                <div
                  data-thq="slider-slide"
                  className="home-slider-slide17 swiper-slide"
                >
                  <div
                    area="Feedback 360º"
                    action="btn-form"
                    titulo="Feedbacks 360º"
                    className="home-card17"
                  >
                    <div className="home-frame42731938815">
                      <div className="home-frame42731938717">
                        <span className="home-text215">
                          <span>Feedbacks</span>
                          <br></br>
                          <span>360º</span>
                        </span>
                      </div>
                    </div>
                    <div className="home-frame4273200811">
                      <div className="home-profissionais18">
                        <span className="home-text219">
                          <span>Em breve</span>
                        </span>
                      </div>
                    </div>
                    <div className="home-profissionais19">
                      <span className="home-text221">
                        <span>
                          Receba e forneça feedbacks abrangentes para aprimorar
                          o desempenho e desenvolvimento dos colaboradores.
                        </span>
                      </span>
                    </div>
                    <div className="home-frame42731938916">
                      <span className="home-text223">
                        <span>Em breve</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  data-thq="slider-slide"
                  className="home-slider-slide18 swiper-slide"
                >
                  <div
                    area="Vitrine de Vagas"
                    action="btn-form"
                    titulo="Vitrine de Vagas"
                    className="home-card18"
                  >
                    <div className="home-frame42731938816">
                      <div className="home-frame42731938718">
                        <span className="home-text225">
                          <span>Vitrine</span>
                          <br></br>
                          <span>de Vagas</span>
                        </span>
                      </div>
                    </div>
                    <div className="home-frame4273200812">
                      <div className="home-profissionais20">
                        <span className="home-text229">
                          <span>Em breve</span>
                        </span>
                      </div>
                    </div>
                    <div className="home-profissionais21">
                      <span className="home-text231">
                        <span>
                          Divulgue oportunidades de emprego internamente para
                          promover a mobilidade e crescimento dos colaboradores.
                        </span>
                      </span>
                    </div>
                    <div className="home-frame42731938917">
                      <span className="home-text233">
                        <span>Em breve</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  data-thq="slider-slide"
                  className="home-slider-slide19 swiper-slide"
                >
                  <div
                    area="Holerite"
                    action="btn-form"
                    titulo="Holerite"
                    className="home-card19"
                  >
                    <div className="home-frame42731938817">
                      <div className="home-frame42731938719">
                        <span className="home-text235">
                          <span>Holerite</span>
                        </span>
                      </div>
                    </div>
                    <div className="home-frame4273200813">
                      <div className="home-profissionais22">
                        <span className="home-text237">
                          <span>Em breve</span>
                        </span>
                      </div>
                    </div>
                    <div className="home-profissionais23">
                      <span className="home-text239">
                        <span>Facilite o acesso aos comprovantes de</span>
                        <br></br>
                        <span>pagamento e informações</span>
                        <br></br>
                        <span>financeiras dos colaboradores.</span>
                      </span>
                    </div>
                    <div className="home-frame42731938918">
                      <span className="home-text245">
                        <span>Em breve</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  data-thq="slider-slide"
                  className="home-slider-slide20 swiper-slide"
                >
                  <div
                    area="Gamificacão"
                    action="btn-form"
                    titulo="Gamificacão"
                    className="home-card20"
                  >
                    <div className="home-frame42731938818">
                      <div className="home-frame42731938720">
                        <span className="home-text247">
                          <span>Gamificação</span>
                        </span>
                      </div>
                    </div>
                    <div className="home-frame4273200814">
                      <div className="home-profissionais24">
                        <span className="home-text249">
                          <span>Em breve</span>
                        </span>
                      </div>
                    </div>
                    <div className="home-profissionais25">
                      <span className="home-text251">
                        <span>
                          Incentive o engajamento e o desenvolvimento através de
                          elementos lúdicos e desafiadores.
                        </span>
                      </span>
                    </div>
                    <div className="home-frame42731938919">
                      <span className="home-text253">
                        <span>Em breve</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-thq="slider-pagination"
                className="home-slider-pagination1 swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
              ></div>
              <div
                data-thq="slider-button-prev"
                className="home-slider-button-prev1 swiper-button-prev"
              ></div>
              <div
                data-thq="slider-button-next"
                className="home-slider-button-next1 swiper-button-next"
              ></div>
            </div>
            <div
              data-thq="slider"
              data-loop="true"
              data-autoplay="true"
              data-navigation="false"
              data-pagination="false"
              data-reverse-direction="false"
              data-pause-autoplay-on-mouse-enter="true"
              data-disable-autoplay-on-interaction="false"
              className="home-slider2 swiper"
            >
              <div
                data-thq="slider-wrapper"
                className="home-slider-wrapper2 swiper-wrapper"
              >
                <div
                  data-thq="slider-slide"
                  className="home-slider-slide21 swiper-slide"
                >
                  <div
                    area="Mapa de Alocação"
                    action="btn-form"
                    titulo="Mapa de Alocação"
                    className="home-card21"
                  >
                    <div className="home-title16">
                      <div className="home-frame42731938721">
                        <span className="home-text255">
                          <span>Mapa de Alocação</span>
                        </span>
                      </div>
                    </div>
                    <div className="home-line19">
                      <img
                        alt="Rectangle346242311398"
                        src="/external/rectangle346242311398-7b4-200h.webp"
                        className="home-rectangle3462423119"
                      />
                    </div>
                    <div className="home-body2">
                      <span className="home-text257">
                        <span>
                          Visualize e gerencie a distribuição de seus
                          colaboradores em diferentes projetos e funções.
                        </span>
                      </span>
                    </div>
                    <div type="button" className="card-button">
                      <span className="home-text259">
                        <span>Conheça</span>
                      </span>
                      <img
                        alt="BsArrowRightShort1234"
                        src="/external/bsarrowrightshort1234-1t43.svg"
                        className="home-bs-arrow-right-short17"
                      />
                    </div>
                  </div>
                </div>
                <div
                  data-thq="slider-slide"
                  className="home-slider-slide22 swiper-slide"
                >
                  <div
                    area="Match de Competências"
                    action="btn-form"
                    titulo="Match de Competência"
                    className="home-card22"
                  >
                    <div className="home-title17">
                      <div className="home-frame42731938722">
                        <span className="home-text261">
                          <span>Match de Competência</span>
                        </span>
                      </div>
                    </div>
                    <div className="home-line20">
                      <img
                        alt="Rectangle346242311398"
                        src="/external/rectangle346242311398-7b4-200h.webp"
                        className="home-rectangle3462423120"
                      />
                    </div>
                    <div className="home-profissionais26">
                      <span className="home-text263">
                        <span>Garanta que cada tarefa</span>
                        <br></br>
                        <span>seja atribuída à pessoa com</span>
                        <br></br>
                        <span>as habilidades e competências ideais.</span>
                      </span>
                    </div>
                    <div className="home-frame42731938920 card-button">
                      <span className="home-text269">
                        <span>Conheça</span>
                      </span>
                      <img
                        alt="BsArrowRightShort1247"
                        src="/external/bsarrowrightshort1247-zfa9.svg"
                        className="home-bs-arrow-right-short18"
                      />
                    </div>
                  </div>
                </div>
                <div
                  data-thq="slider-slide"
                  className="home-slider-slide23 swiper-slide"
                >
                  <div
                    area="Timesheet"
                    action="btn-form"
                    titulo="Timesheet"
                    className="home-card23"
                  >
                    <div className="home-frame42731938819">
                      <div className="home-frame42731938723">
                        <span className="home-text271">
                          <span>Timesheet</span>
                        </span>
                      </div>
                    </div>
                    <div className="home-line21">
                      <img
                        alt="Rectangle346242311398"
                        src="/external/rectangle346242311398-7b4-200h.webp"
                        className="home-rectangle3462423121"
                      />
                    </div>
                    <div className="home-profissionais27">
                      <span className="home-text273">
                        <span>
                          Monitore e registre a presença e desempenho dos
                          colaboradores de forma eficaz.
                        </span>
                      </span>
                    </div>
                    <div className="home-frame42731938921">
                      <span className="home-text275">
                        <span>Conheça</span>
                      </span>
                      <img
                        alt="BsArrowRightShort1260"
                        src="/external/bsarrowrightshort1260-lrlh.svg"
                        className="home-bs-arrow-right-short19"
                      />
                    </div>
                  </div>
                </div>
                <div
                  data-thq="slider-slide"
                  className="home-slider-slide24 swiper-slide"
                >
                  <div
                    area="Mapa de Alocação"
                    action="btn-form"
                    titulo="Mapa de Alocação"
                    className="home-card24"
                  >
                    <div className="home-frame42731938820">
                      <div className="home-frame42731938724">
                        <span className="home-text277">
                          <span>Mapa de Alocação</span>
                        </span>
                      </div>
                    </div>
                    <div className="home-line22">
                      <img
                        alt="Rectangle346242311398"
                        src="/external/rectangle346242311398-7b4-200h.webp"
                        className="home-rectangle3462423122"
                      />
                    </div>
                    <div className="home-profissionais28">
                      <span className="home-text279">
                        <span>
                          Planeje e otimize a alocação de talentos em toda a
                          empresa.
                        </span>
                      </span>
                    </div>
                    <div className="home-frame42731938922">
                      <span className="home-text281">
                        <span>Conheça</span>
                      </span>
                      <img
                        alt="BsArrowRightShort1273"
                        src="/external/bsarrowrightshort1273-k5i7.svg"
                        className="home-bs-arrow-right-short20"
                      />
                    </div>
                  </div>
                </div>
                <div
                  data-thq="slider-slide"
                  className="home-slider-slide25 swiper-slide"
                >
                  <div
                    area="Match de Competências"
                    action="btn-form"
                    titulo="Match de Competências"
                    className="home-card25"
                  >
                    <div className="home-frame42731938821">
                      <div className="home-frame42731938725">
                        <span className="home-text283">
                          <span>Match de Competências</span>
                        </span>
                      </div>
                    </div>
                    <div className="home-line23">
                      <img
                        alt="Rectangle346242311398"
                        src="/external/rectangle346242311398-7b4-200h.webp"
                        className="home-rectangle3462423123"
                      />
                    </div>
                    <div className="home-profissionais29">
                      <span className="home-text285">
                        <span>Encontre o talento certo</span>
                        <br></br>
                        <span>para cada posição com base</span>
                        <br></br>
                        <span>em habilidades específicas.</span>
                      </span>
                    </div>
                    <div className="home-frame42731938923">
                      <span className="home-text291">
                        <span>Conheça</span>
                      </span>
                      <img
                        alt="BsArrowRightShort1286"
                        src="/external/bsarrowrightshort1286-gvaf.svg"
                        className="home-bs-arrow-right-short21"
                      />
                    </div>
                  </div>
                </div>
                <div
                  data-thq="slider-slide"
                  className="home-slider-slide26 swiper-slide"
                >
                  <div
                    area="PDI"
                    action="btn-form"
                    titulo="PDI"
                    className="home-card26"
                  >
                    <div className="home-frame42731938822">
                      <div className="home-frame42731938726">
                        <span className="home-text293">
                          PDI (Plano de Desenvolvimento Individual)
                        </span>
                      </div>
                    </div>
                    <div className="home-line24">
                      <img
                        alt="Rectangle346242311398"
                        src="/external/rectangle346242311398-7b4-200h.webp"
                        className="home-rectangle3462423124"
                      />
                    </div>
                    <div className="home-profissionais30">
                      <span className="home-text294">
                        <span>
                          Crie e acompanhe planos de desenvolvimento
                          personalizados para cada colaborador.
                        </span>
                      </span>
                    </div>
                    <div className="home-frame42731938924">
                      <span className="home-text296">
                        <span>Conheça</span>
                      </span>
                      <img
                        alt="BsArrowRightShort1286"
                        src="/external/bsarrowrightshort1286-gvaf.svg"
                        className="home-bs-arrow-right-short22"
                      />
                    </div>
                  </div>
                </div>
                <div
                  data-thq="slider-slide"
                  className="home-slider-slide27 swiper-slide"
                >
                  <div
                    area="Book do Colaborador"
                    action="btn-form"
                    titulo="Book do Colaborador"
                    className="home-card27"
                  >
                    <div className="home-frame42731938823">
                      <div className="home-frame42731938727">
                        <span className="home-text298">
                          <span>Book do Colaborador</span>
                        </span>
                      </div>
                    </div>
                    <div className="home-line25">
                      <img
                        alt="Rectangle346242311398"
                        src="/external/rectangle346242311398-7b4-200h.webp"
                        className="home-rectangle3462423125"
                      />
                    </div>
                    <div className="home-profissionais31">
                      <span className="home-text300">
                        <span>
                          Mantenha um histórico detalhado das realizações e
                          progresso de cada colaborador.
                        </span>
                      </span>
                    </div>
                    <div className="home-frame42731938925">
                      <span className="home-text302">
                        <span>Conheça</span>
                      </span>
                      <img
                        alt="BsArrowRightShort1286"
                        src="/external/bsarrowrightshort1286-gvaf.svg"
                        className="home-bs-arrow-right-short23"
                      />
                    </div>
                  </div>
                </div>
                <div
                  data-thq="slider-slide"
                  className="home-slider-slide28 swiper-slide"
                >
                  <div
                    area="Feedback 360º"
                    action="btn-form"
                    titulo="Feedbacks 360º"
                    className="home-card28"
                  >
                    <div className="home-frame42731938824">
                      <div className="home-frame42731938728">
                        <span className="home-text304">
                          <span>Feedbacks</span>
                          <br></br>
                          <span>360º</span>
                        </span>
                      </div>
                    </div>
                    <div className="home-frame4273200815">
                      <div className="home-profissionais32">
                        <span className="home-text308">
                          <span>Em breve</span>
                        </span>
                      </div>
                    </div>
                    <div className="home-profissionais33">
                      <span className="home-text310">
                        <span>
                          Receba e forneça feedbacks abrangentes para aprimorar
                          o desempenho e desenvolvimento dos colaboradores.
                        </span>
                      </span>
                    </div>
                    <div className="home-frame42731938926">
                      <span className="home-text312">
                        <span>Em breve</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  data-thq="slider-slide"
                  className="home-slider-slide29 swiper-slide"
                >
                  <div
                    area="Vitrine de Vagas"
                    action="btn-form"
                    titulo="Vitrine de Vagas"
                    className="home-card29"
                  >
                    <div className="home-frame42731938825">
                      <div className="home-frame42731938729">
                        <span className="home-text314">
                          <span>Vitrine</span>
                          <br></br>
                          <span>de Vagas</span>
                        </span>
                      </div>
                    </div>
                    <div className="home-frame4273200816">
                      <div className="home-profissionais34">
                        <span className="home-text318">
                          <span>Em breve</span>
                        </span>
                      </div>
                    </div>
                    <div className="home-profissionais35">
                      <span className="home-text320">
                        <span>
                          Divulgue oportunidades de emprego internamente para
                          promover a mobilidade e crescimento dos colaboradores.
                        </span>
                      </span>
                    </div>
                    <div className="home-frame42731938927">
                      <span className="home-text322">
                        <span>Em breve</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  data-thq="slider-slide"
                  className="home-slider-slide30 swiper-slide"
                >
                  <div
                    area="Holerite"
                    action="btn-form"
                    titulo="Holerite"
                    className="home-card30"
                  >
                    <div className="home-frame42731938826">
                      <div className="home-frame42731938730">
                        <span className="home-text324">
                          <span>Holerite</span>
                        </span>
                      </div>
                    </div>
                    <div className="home-frame4273200817">
                      <div className="home-profissionais36">
                        <span className="home-text326">
                          <span>Em breve</span>
                        </span>
                      </div>
                    </div>
                    <div className="home-profissionais37">
                      <span className="home-text328">
                        <span>Facilite o acesso aos comprovantes de</span>
                        <br></br>
                        <span>pagamento e informações</span>
                        <br></br>
                        <span>financeiras dos colaboradores.</span>
                      </span>
                    </div>
                    <div className="home-frame42731938928">
                      <span className="home-text334">
                        <span>Em breve</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  data-thq="slider-slide"
                  className="home-slider-slide31 swiper-slide"
                >
                  <div
                    area="Gamificacão"
                    action="btn-form"
                    titulo="Gamificacão"
                    className="home-card31"
                  >
                    <div className="home-frame42731938827">
                      <div className="home-frame42731938731">
                        <span className="home-text336">
                          <span>Gamificação</span>
                        </span>
                      </div>
                    </div>
                    <div className="home-frame4273200818">
                      <div className="home-profissionais38">
                        <span className="home-text338">
                          <span>Em breve</span>
                        </span>
                      </div>
                    </div>
                    <div className="home-profissionais39">
                      <span className="home-text340">
                        <span>
                          Incentive o engajamento e o desenvolvimento através de
                          elementos lúdicos e desafiadores.
                        </span>
                      </span>
                    </div>
                    <div className="home-frame42731938929">
                      <span className="home-text342">
                        <span>Em breve</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-thq="slider-pagination"
                className="home-slider-pagination2 swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
              >
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet swiper-pagination-bullet-active"
                ></div>
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet"
                ></div>
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet"
                ></div>
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet"
                ></div>
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet"
                ></div>
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet"
                ></div>
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet"
                ></div>
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet"
                ></div>
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet"
                ></div>
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet"
                ></div>
              </div>
              <div
                data-thq="slider-button-prev"
                className="home-slider-button-prev2 swiper-button-prev"
              ></div>
              <div
                data-thq="slider-button-next"
                className="home-slider-button-next2 swiper-button-next"
              ></div>
            </div>
          </div>
        </div>
        <div id="planos" className="home-planos">
          <div className="home-title18">
            <span className="home-text344">
              <span>Planos</span>
            </span>
            <div className="home-frame42732005912">
              <img
                alt="Rectangle346242311382"
                src="/external/rectangle346242311382-7icr-200h.webp"
                className="home-rectangle3462423126"
              />
            </div>
          </div>
          <div className="home-cards2">
            <img
              alt="Ellipse1221384"
              sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
              src="/external/ellipse1221384-yalm-1500w.webp"
              srcSet="external//ellipse1221384-yalm-1500w.webp 1200w, external/ellipse1221384-yalm-tablet.webp 800w, external/ellipse1221384-yalm-mobile.webp 480w"
              className="home-ellipse1221"
            />
            <div className="home-plans">
              <div
                data-aos="flip-left"
                className="home-alocaointeligentedeprofissionais"
              >
                <div className="home-frame427320100">
                  <img
                    alt="Star11388"
                    src="/external/star11388-fyq9.svg"
                    className="home-star1"
                  />
                  <span className="home-text346">
                    <span>Mais procurado!</span>
                  </span>
                </div>
                <div className="home-frame427320099">
                  <div className="home-frame427320097">
                    <div className="home-frame427320079">
                      <div className="home-profissionais40">
                        <span className="home-text348">
                          <span>Alocação Inteligente</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="home-frame42732005913">
                    <span className="home-text350">
                      <span>Alocação inteligente</span>
                      <br></br>
                      <span>de profissionais</span>
                    </span>
                    <div className="home-frame427320060">
                      <img
                        alt="Rectangle346242311398"
                        src="/external/rectangle346242311398-7b4-200h.webp"
                        className="home-rectangle3462423127"
                      />
                    </div>
                  </div>
                  <div className="home-profissionais41">
                    <div className="home-frame4273198731">
                      <img
                        alt="check1401"
                        src="/external/check1401-rwbo.svg"
                        className="home-check16"
                      />
                      <span className="home-text354">
                        <span>Timesheet</span>
                      </span>
                    </div>
                    <div className="home-frame4273198711">
                      <img
                        alt="check1405"
                        src="/external/check1405-i5cv.svg"
                        className="home-check17"
                      />
                      <span className="home-text356">
                        <span>Mapa de alocação</span>
                      </span>
                    </div>
                    <div className="home-frame4273198721">
                      <img
                        alt="check1409"
                        src="/external/check1409-gu2k.svg"
                        className="home-check18"
                      />
                      <span className="home-text358">
                        <span>Match de competências</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  area="Planos - Alocação inteligente"
                  type="button"
                  action="btn-form"
                  titulo="Planos - Alocação inteligente"
                  className="home-button22 card-button"
                >
                  <span className="home-text360">Saiba mais</span>
                  <img
                    alt="BsArrowRightShort1234"
                    src="/external/bsarrowrightshort1234-1t43.svg"
                    className="home-bs-arrow-right-short24"
                  />
                </div>
              </div>
              <div
                data-aos="flip-left"
                data-aos-delay="100"
                className="home-atraoeretenodetalentos3"
              >
                <div className="home-frame4273200819">
                  <div className="home-profissionais42">
                    <span className="home-text361">
                      <span>Atração e Retenção</span>
                    </span>
                  </div>
                </div>
                <div className="home-frame42732005914">
                  <span className="home-text363">
                    <span>Atração e retenção</span>
                    <br></br>
                    <span>de talentos</span>
                  </span>
                  <div className="home-frame42732005915">
                    <img
                      alt="Rectangle346242311426"
                      src="/external/rectangle346242311426-wo7l-200h.webp"
                      className="home-rectangle3462423128"
                    />
                  </div>
                </div>
                <div className="home-profissionais43">
                  <div className="home-frame4273198712">
                    <img
                      alt="check1429"
                      src="/external/check1429-klv.svg"
                      className="home-check19"
                    />
                    <span className="home-text367">
                      <span>Timesheet</span>
                    </span>
                  </div>
                  <div className="home-frame4273198722">
                    <img
                      alt="check1433"
                      src="/external/check1433-w4x.svg"
                      className="home-check20"
                    />
                    <span className="home-text369">
                      <span>Mapa de alocação</span>
                    </span>
                  </div>
                  <div className="home-frame4273198732">
                    <img
                      alt="check1437"
                      src="/external/check1437-n8um.svg"
                      className="home-check21"
                    />
                    <span className="home-text371">
                      <span>Match de competências</span>
                    </span>
                  </div>
                  <div className="home-frame4273198741">
                    <img
                      alt="check1441"
                      src="/external/check1441-jcee.svg"
                      className="home-check22"
                    />
                    <span className="home-text373">
                      <span>Vitrine de vagas</span>
                    </span>
                  </div>
                </div>
                <div
                  area="Planos - Atração e retenção"
                  type="button"
                  action="btn-form"
                  titulo="Planos - Atração e retenção"
                  className="home-button23 card-button"
                >
                  <span className="home-text375">Saiba mais</span>
                  <img
                    alt="BsArrowRightShort1234"
                    src="/external/bsarrowrightshort1234-1t43.svg"
                    className="home-bs-arrow-right-short25"
                  />
                </div>
              </div>
              <div
                data-aos="flip-left"
                data-aos-delay="200"
                className="home-engajamentoedesenvolvimento1"
              >
                <div className="home-frame427320080">
                  <div className="home-profissionais44">
                    <span className="home-text376">
                      <span>Engajamento</span>
                    </span>
                  </div>
                </div>
                <div className="home-frame42732005916">
                  <span className="home-text378">
                    <span>Engajamento</span>
                    <br></br>
                    <span>e desenvolvimento</span>
                  </span>
                  <div className="home-frame42732005917">
                    <img
                      alt="Rectangle346242311458"
                      src="/external/rectangle346242311458-eswk-200h.webp"
                      className="home-rectangle3462423129"
                    />
                  </div>
                </div>
                <div className="home-profissionais45">
                  <div className="home-frame4273198713">
                    <img
                      alt="check1461"
                      src="/external/check1461-amg.svg"
                      className="home-check23"
                    />
                    <span className="home-text382">
                      <span>PDI</span>
                    </span>
                  </div>
                  <div className="home-frame4273198723">
                    <img
                      alt="check1465"
                      src="/external/check1465-qblf.svg"
                      className="home-check24"
                    />
                    <span className="home-text384">
                      <span>Felizômetro</span>
                    </span>
                  </div>
                  <div className="home-frame4273198733">
                    <img
                      alt="check1469"
                      src="/external/check1469-4p09.svg"
                      className="home-check25"
                    />
                    <span className="home-text386">
                      <span>Book do colaborador</span>
                    </span>
                  </div>
                  <div className="home-frame4273198742">
                    <img
                      alt="check1473"
                      src="/external/check1473-vwm9.svg"
                      className="home-check26"
                    />
                    <span className="home-text388">
                      <span>Holerite</span>
                    </span>
                  </div>
                </div>
                <div
                  area="Planos - Engajamento"
                  type="button"
                  action="btn-form"
                  titulo="Planos - Engajamento e desenvolvimento"
                  className="home-button24 card-button"
                >
                  <span className="home-text390">Saiba mais</span>
                  <img
                    alt="BsArrowRightShort1234"
                    src="/external/bsarrowrightshort1234-1t43.svg"
                    className="home-bs-arrow-right-short26"
                  />
                </div>
              </div>
              <div
                data-aos="flip-left"
                data-aos-delay="300"
                className="home-engajamentoedesenvolvimento2"
              >
                <div className="home-frame42732005918">
                  <span className="home-text391">
                    <span>Personalizado</span>
                  </span>
                  <div className="home-frame42732005919">
                    <img
                      alt="Rectangle346242311487"
                      src="/external/rectangle346242311487-ssy-200h.webp"
                      className="home-rectangle3462423130"
                    />
                  </div>
                </div>
                <span className="home-text393">
                  <span>Monte um plano sob medida</span>
                  <br></br>
                  <span>para sua equipe!</span>
                </span>
                <div className="home-profissionais46">
                  <div className="home-frame4273198714">
                    <input type="checkbox" className="home-checkbox10" />
                    <span className="home-text397">
                      <span>PDI</span>
                    </span>
                  </div>
                  <div className="home-frame4273198715">
                    <input type="checkbox" className="home-checkbox11" />
                    <span className="home-text399">Felizômetro</span>
                  </div>
                  <div className="home-frame4273198734">
                    <input type="checkbox" className="home-checkbox12" />
                    <span className="home-text400">
                      <span>Book do colaborador</span>
                    </span>
                  </div>
                  <div className="home-frame4273198743">
                    <input type="checkbox" className="home-checkbox13" />
                    <span className="home-text402">
                      <span>Holerite</span>
                    </span>
                  </div>
                  <div className="home-frame427319875">
                    <input type="checkbox" className="home-checkbox14" />
                    <span className="home-text404">
                      <span>Timesheet</span>
                    </span>
                  </div>
                  <div className="home-frame4273198762">
                    <input type="checkbox" className="home-checkbox15" />
                    <span className="home-text406">
                      <span>Mapa de alocação</span>
                    </span>
                  </div>
                  <div className="home-frame427319877">
                    <input type="checkbox" className="home-checkbox16" />
                    <span className="home-text408">
                      <span>Match de competências</span>
                    </span>
                  </div>
                  <div className="home-frame427319878">
                    <input type="checkbox" className="home-checkbox17" />
                    <span className="home-text410">
                      <span>Timesheet</span>
                    </span>
                  </div>
                  <div className="home-frame4273198792">
                    <input type="checkbox" className="home-checkbox18" />
                    <span className="home-text412">
                      <span>Mapa de alocação</span>
                    </span>
                  </div>
                  <div className="home-frame4273198802">
                    <input type="checkbox" className="home-checkbox19" />
                    <span className="home-text414">
                      <span>Match de competências</span>
                    </span>
                  </div>
                  <div className="home-frame427319881">
                    <input type="checkbox" className="home-checkbox20" />
                    <span className="home-text416">
                      <span>Vitrine de vagas</span>
                    </span>
                  </div>
                </div>
                <div
                  area="Planos - Personalizado"
                  action="btn-form"
                  titulo="Planos - Personalizado"
                  className="home-bt"
                >
                  <span className="home-text418">
                    <span>Solicitar orçamento</span>
                  </span>
                  <img
                    alt="BsArrowRightShortI154"
                    src="/external/bsarrowrightshorti154-v2yl.svg"
                    className="home-bs-arrow-right-short27"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="depoimentos" className="home-depoimentos">
          <img
            alt="Ellipse1221543"
            sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
            src="/external/ellipse1221543-blwv-1500w.webp"
            srcSet="external//ellipse1221543-blwv-1500w.webp 1200w, external/ellipse1221543-blwv-tablet.webp 800w, external/ellipse1221543-blwv-mobile.webp 480w"
            className="home-ellipse1222"
          />
          <div className="home-title19">
            <span className="home-text420">
              <span>Veja o que nossos clientes estão dizendo:</span>
            </span>
            <div className="home-frame42732005920">
              <img
                alt="Rectangle346242311547"
                src="/external/rectangle346242311547-662m-200h.webp"
                className="home-rectangle3462423131"
              />
            </div>
          </div>
          <div className="home-cards3">
            <div data-aos="flip-left" className="home-card32">
              <div className="home-frame4273200721">
                <img
                  alt="image1271551"
                  src="/external/image1271551-w67g-200h.webp"
                  className="home-image127"
                />
                <div className="home-frame4273200741">
                  <div className="home-frame4010">
                    <img
                      alt="Frame411554"
                      src="/external/frame411554-4i8j.svg"
                      className="home-frame411"
                    />
                    <img
                      alt="Frame401556"
                      src="/external/frame401556-g9v.svg"
                      className="home-frame4011"
                    />
                  </div>
                  <div className="home-frame4273200731">
                    <span className="home-text422">
                      <span>Marcos</span>
                      <br></br>
                      <span>Abreu</span>
                    </span>
                    <span className="home-text426">
                      <span>Gerente de RH</span>
                    </span>
                    <span className="home-text428">
                      <span>
                        &quot;Implementar a Fourmakers foi uma das melhores
                        decisões que tomamos. A plataforma nos ajudou a aumentar
                        a produtividade e a satisfação da equipe.&quot;
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="flip-left"
              data-aos-delay="100"
              className="home-card33"
            >
              <div className="home-frame4273200722">
                <img
                  alt="image1261564"
                  src="/external/image1261564-tu6-200h.webp"
                  className="home-image126"
                />
                <div className="home-frame4273200742">
                  <div className="home-frame4012">
                    <img
                      alt="Frame411567"
                      src="/external/frame411567-crorj.svg"
                      className="home-frame412"
                    />
                    <img
                      alt="Frame401569"
                      src="/external/frame401569-zpqt.svg"
                      className="home-frame4013"
                    />
                  </div>
                  <div className="home-frame4273200732">
                    <span className="home-text430">
                      <span>Lucas Ferreira</span>
                    </span>
                    <span className="home-text432">
                      <span>Diretor de Operações</span>
                    </span>
                    <span className="home-text434">
                      <span>
                        &quot;Otimizou nosso recrutamento e retenção de
                        talentos. A ferramenta de match de competência é
                        excepcional.&quot;
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="flip-left"
              data-aos-delay="200"
              className="home-card34"
            >
              <div className="home-frame4273200723">
                <img
                  alt="image1251577"
                  src="/external/image1251577-fiqr-200h.webp"
                  className="home-image125"
                />
                <div className="home-frame4273200743">
                  <div className="home-frame4014">
                    <img
                      alt="Frame411580"
                      src="/external/frame411580-xroh.svg"
                      className="home-frame413"
                    />
                    <img
                      alt="Frame401582"
                      src="/external/frame401582-yg4.svg"
                      className="home-frame4015"
                    />
                  </div>
                  <div className="home-frame4273200733">
                    <span className="home-text436">
                      <span>Mariana Souza</span>
                    </span>
                    <span className="home-text438">
                      <span>Coordenadora</span>
                    </span>
                    <span className="home-text440">
                      <span>
                        &quot;Fourmakers nos deu uma visão clara do engajamento
                        e desenvolvimento dos colaboradores, criando um ambiente
                        mais colaborativo.&quot;
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="flip-left"
              data-aos-delay="300"
              className="home-card35"
            >
              <div className="home-frame4273200724">
                <div className="home-frame4273200744">
                  <div className="home-frame4016">
                    <img
                      alt="Frame411595"
                      src="/external/frame411595-k7zd.svg"
                      className="home-frame414"
                    />
                    <img
                      alt="Frame401597"
                      src="/external/frame401597-5kce.svg"
                      className="home-frame4017"
                    />
                  </div>
                  <div className="home-frame4273200734">
                    <span className="home-text442">
                      <span>Ricardo Lima</span>
                    </span>
                    <span className="home-text444">
                      <span>CEO</span>
                    </span>
                    <span className="home-text446">
                      <span>
                        &quot;A plataforma transformou nossa gestão de equipe. A
                        vitrine de vagas interna e a gamificação aumentaram o
                        engajamento e a motivação.&quot;
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-thq="slider"
            data-loop="true"
            data-autoplay="true"
            data-navigation="true"
            data-pagination="true"
            data-disable-autoplay-on-interaction="true"
            className="home-slider3 swiper"
          >
            <div data-thq="slider-wrapper" className="swiper-wrapper">
              <div
                data-thq="slider-slide"
                className="home-slider-slide32 swiper-slide"
              >
                <div className="home-card36">
                  <div className="home-frame4273200725">
                    <div className="home-frame4273200745">
                      <div className="home-frame4018">
                        <img
                          alt="Frame411554"
                          src="/external/frame411554-4i8j.svg"
                          className="home-frame415"
                        />
                        <img
                          alt="Frame401556"
                          src="/external/frame401556-g9v.svg"
                          className="home-frame4019"
                        />
                      </div>
                      <div className="home-frame4273200735">
                        <span className="home-text448">
                          <span>Marcos</span>
                          <br></br>
                          <span>Abreu</span>
                        </span>
                        <span className="home-text452">
                          <span>Gerente de RH</span>
                        </span>
                        <span className="home-text454">
                          <span>
                            &quot;Implementar a Fourmakers foi uma das melhores
                            decisões que tomamos. A plataforma nos ajudou a
                            aumentar a produtividade e a satisfação da
                            equipe.&quot;
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-thq="slider-slide"
                className="home-slider-slide33 swiper-slide"
              >
                <div className="home-card37">
                  <div className="home-frame4273200726">
                    <div className="home-frame4273200746">
                      <div className="home-frame4020">
                        <img
                          alt="Frame411567"
                          src="/external/frame411567-crorj.svg"
                          className="home-frame416"
                        />
                        <img
                          alt="Frame401569"
                          src="/external/frame401569-zpqt.svg"
                          className="home-frame4021"
                        />
                      </div>
                      <div className="home-frame4273200736">
                        <span className="home-text456">
                          <span>Lucas Ferreira</span>
                        </span>
                        <span className="home-text458">
                          <span>Diretor de Operações</span>
                        </span>
                        <span className="home-text460">
                          <span>
                            &quot;Otimizou nosso recrutamento e retenção de
                            talentos. A ferramenta de match de competência é
                            excepcional.&quot;
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-thq="slider-slide"
                className="home-slider-slide34 swiper-slide"
              >
                <div className="home-card38">
                  <div className="home-frame4273200727">
                    <div className="home-frame4273200747">
                      <div className="home-frame4022">
                        <img
                          alt="Frame411580"
                          src="/external/frame411580-xroh.svg"
                          className="home-frame417"
                        />
                        <img
                          alt="Frame401582"
                          src="/external/frame401582-yg4.svg"
                          className="home-frame4023"
                        />
                      </div>
                      <div className="home-frame4273200737">
                        <span className="home-text462">
                          <span>Mariana Souza</span>
                        </span>
                        <span className="home-text464">
                          <span>Coordenadora</span>
                        </span>
                        <span className="home-text466">
                          <span>
                            &quot;Fourmakers nos deu uma visão clara do
                            engajamento e desenvolvimento dos colaboradores,
                            criando um ambiente mais colaborativo.&quot;
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-thq="slider-slide"
                className="home-slider-slide35 swiper-slide"
              >
                <div className="home-card39">
                  <div className="home-frame4273200728">
                    <div className="home-frame4273200748">
                      <div className="home-frame4024">
                        <img
                          alt="Frame411595"
                          src="/external/frame411595-k7zd.svg"
                          className="home-frame418"
                        />
                        <img
                          alt="Frame401597"
                          src="/external/frame401597-5kce.svg"
                          className="home-frame4025"
                        />
                      </div>
                      <div className="home-frame4273200738">
                        <span className="home-text468">
                          <span>Ricardo Lima</span>
                        </span>
                        <span className="home-text470">
                          <span>CEO</span>
                        </span>
                        <span className="home-text472">
                          <span>
                            &quot;A plataforma transformou nossa gestão de
                            equipe. A vitrine de vagas interna e a gamificação
                            aumentaram o engajamento e a motivação.&quot;
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-pagination"
              className="home-slider-pagination3 swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
            >
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet swiper-pagination-bullet-active"
              ></div>
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet"
              ></div>
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet"
              ></div>
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet"
              ></div>
            </div>
            <div
              data-thq="slider-button-prev"
              className="home-slider-button-prev3 swiper-button-prev"
            ></div>
            <div
              data-thq="slider-button-next"
              className="home-slider-button-next3 swiper-button-next"
            ></div>
          </div>
        </div>
        <div className="home-misao">
          <div className="home-container21"></div>
          <div className="home-container22">
            <div className="home-container23">
              <div data-aos="fade-right" className="home-container24">
                <div className="home-frame4273199911">
                  <span className="home-text474">
                    <span>Missão</span>
                  </span>
                  <img
                    alt="Rectangle346242481609"
                    src="/external/rectangle346242481609-8763c-200h.webp"
                    className="home-rectangle346242481"
                  />
                </div>
                <span className="home-text476">
                  <span>
                    Conectar profissionais e organizações, para criar vínculos
                    de confiança mútua, com reconhecimento e valorização dos
                    talentos internos.
                  </span>
                </span>
              </div>
            </div>
            <div className="home-container25">
              <div data-aos="fade-left" className="home-container26">
                <div className="home-title20">
                  <span className="home-text478">
                    <span>Visão</span>
                  </span>
                  <img
                    alt="Rectangle346242481620"
                    src="/external/rectangle346242481620-g7x-200h.webp"
                    className="home-rectangle346242482"
                  />
                </div>
                <span className="home-text480">
                  <span>
                    Ser a principal plataforma para a evolução e reconhecimento
                    de talentos, criando elos significativos entre pessoas e
                    oportunidades, por meio de desafios que destacam
                    habilidades, alinham-se aos objetivos das empresas e geram
                    impacto real no mercado global.
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-valores">
          <div className="home-container27">
            <div data-aos="fade-up" className="home-container28">
              <div className="home-frame4273199912">
                <span className="home-text482">
                  <span>Valores</span>
                </span>
                <img
                  alt="Rectangle346242481614"
                  src="/external/rectangle346242481614-wo28-200h.webp"
                  className="home-rectangle346242483"
                />
              </div>
              <span className="home-text484">
                <span className="home-text485">Inovação:</span>
                <br></br>
                <span className="home-text487"></span>
                <span className="home-text488">
                  Conectar pessoas por meio de soluções criativas e tecnológicas
                  que antecipem tendências e atendam às necessidades emergentes
                  do mercado.
                </span>
                <br></br>
                <span className="home-text490"></span>
                <br></br>
                <span className="home-text492"></span>
                <span className="home-text493">Excelência:</span>
                <br></br>
                <span className="home-text495"></span>
                <span className="home-text496">
                  Identificar os melhores talentos para cada desafio.
                </span>
                <br></br>
                <span className="home-text498"></span>
                <br></br>
                <span className="home-text500"></span>
                <span className="home-text501">Empoderamento:</span>
                <br></br>
                <span className="home-text503"></span>
                <span className="home-text504">
                  Reconhecer e valorizar o desempenho de cada talento, abrindo
                  caminhos para seu crescimento.
                </span>
                <br></br>
                <span className="home-text506"></span>
                <br></br>
                <span className="home-text508"></span>
                <span className="home-text509">Conexão:</span>
                <br></br>
                <span className="home-text511"></span>
                <span className="home-text512">
                  Criar as melhores conexões entre desafios, profissionais e
                  soluções.
                </span>
                <br></br>
                <span className="home-text514"></span>
                <br></br>
                <span className="home-text516"></span>
                <span className="home-text517">Sustentabilidade:</span>
                <br></br>
                <span className="home-text519"></span>
                <span>
                  Promover práticas responsáveis, focadas no reconhecimento
                  contínuo e na evolução de talentos.
                </span>
              </span>
            </div>
            <div className="home-container29">
              <div className="home-container30"></div>
            </div>
          </div>
        </div>
        <div id="form" className="home-form1">
          <div className="home-container31">
            <div className="home-container32">
              <div className="home-group40926">
                <img
                  alt="Ellipse961625"
                  src="/external/ellipse961625-mtie.svg"
                  className="home-ellipse965"
                />
                <img
                  alt="Ellipse981626"
                  src="/external/ellipse981626-k50n.svg"
                  className="home-ellipse985"
                />
              </div>
            </div>
            <div className="home-container33">
              <div data-aos="fade-left" className="home-frame427320104">
                <form
                  enctype="application/x-www-form-urlencoded"
                  data-email-form="formulario"
                  className="home-form2"
                >
                  <span area="Site - Formulário" className="home-text521">
                    <span>Pronto para transformar sua gestão de pessoas?</span>
                  </span>
                  <span className="home-text523">
                    <span>
                      Deixe seus dados abaixo, entraremos em contado com você!
                    </span>
                  </span>
                  <input
                    type="text"
                    name="nome"
                    required="true"
                    placeholder="Seu nome..."
                    className="home-textinput10 input"
                  />
                  <input
                    type="tel"
                    name="telefone"
                    required="true"
                    placeholder="Telefone..."
                    className="home-textinput11 input"
                  />
                  <input
                    type="email"
                    name="email"
                    required="true"
                    placeholder="E-mail..."
                    className="home-textinput12 input"
                  />
                  <input
                    type="text"
                    name="empresa"
                    required="true"
                    placeholder="Nome da empresa..."
                    className="home-textinput13 input"
                  />
                  <span className="home-text525">
                    Quantidade de funcionários
                  </span>
                  <div className="home-container34">
                    <div className="home-container35">
                      <input
                        type="radio"
                        name="colaboradores"
                        value="19"
                        className="home-radiobutton1"
                      />
                      <span className="home-text526">até 19</span>
                    </div>
                    <div className="home-container36">
                      <input
                        type="radio"
                        name="colaboradores"
                        value="20-99"
                        className="home-radiobutton2"
                      />
                      <span className="home-text527">de 20 a 99</span>
                    </div>
                    <div className="home-container37">
                      <input
                        type="radio"
                        name="colaboradores"
                        value="100-499"
                        className="home-radiobutton3"
                      />
                      <span className="home-text528">de 100 a 499</span>
                    </div>
                    <div className="home-container38">
                      <input
                        type="radio"
                        name="colaboradores"
                        value="+500"
                        className="home-radiobutton4"
                      />
                      <span className="home-text529">acima de 500</span>
                    </div>
                  </div>
                  <button type="submit" className="home-button25">
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div id="faq" className="home-faq">
          <div className="home-column6">
            <div className="home-title21">
              <span className="home-text530">
                <span>Faq</span>
              </span>
              <div className="home-frame42732005921">
                <img
                  alt="Rectangle346242311656"
                  src="/external/rectangle346242311656-bx4-200h.webp"
                  className="home-rectangle3462423132"
                />
              </div>
            </div>
            <div
              faq="group"
              data-aos="fade-up"
              data-aos-offset="0"
              className="home-faq1"
            >
              <div faq="question" className="home-question1">
                <span className="home-text532">
                  Como o Fourmakers ajuda na alocação e retenção de talentos?
                </span>
                <div className="home-container39">
                  <svg faq="expand" width="32" height="32" viewBox="0 0 32 32">
                    <path
                      d="M16 22L6 12l1.4-1.4l8.6 8.6l8.6-8.6L26 12z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <svg faq="colapse" width="32" height="32" viewBox="0 0 32 32">
                    <path
                      d="m16 10l10 10l-1.4 1.4l-8.6-8.6l-8.6 8.6L6 20z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
              <div faq="answer" className="home-answer1">
                <span faq="answer" className="home-text533">
                  O Fourmakers ajuda na alocação e retenção de talentos ao
                  combinar as habilidades dos profissionais com as necessidades
                  dos projetos de forma estratégica. A plataforma permite
                  identificar e alocar os colaboradores certos para as funções
                  mais adequadas, maximizando o engajamento e a satisfação. Além
                  disso, o Fourmakers promove um ambiente de trabalho
                  colaborativo e motivador, contribuindo para o desenvolvimento
                  contínuo dos talentos e aumentando a retenção na empresa.
                </span>
              </div>
            </div>
            <div
              faq="group"
              data-aos="fade-up"
              data-aos-offset="0"
              className="home-faq2"
            >
              <div faq="question" className="home-question2">
                <span className="home-text534">
                  Posso ter um módulo sob medida?
                </span>
                <div className="home-container40">
                  <svg faq="expand" width="32" height="32" viewBox="0 0 32 32">
                    <path
                      d="M16 22L6 12l1.4-1.4l8.6 8.6l8.6-8.6L26 12z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <svg faq="colapse" width="32" height="32" viewBox="0 0 32 32">
                    <path
                      d="m16 10l10 10l-1.4 1.4l-8.6-8.6l-8.6 8.6L6 20z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
              <div faq="answer" className="home-answer2">
                <span className="home-text535">
                  Sim, o Fourmakers oferece a possibilidade de criar módulos sob
                  medida, totalmente adaptados às necessidades específicas da
                  sua empresa. Isso permite que você tenha uma solução
                  personalizada, alinhada aos seus processos e objetivos de
                  gestão de pessoas, garantindo mais eficiência e melhores
                  resultados.
                </span>
              </div>
            </div>
            <div
              faq="group"
              data-aos="fade-up"
              data-aos-offset="0"
              className="home-faq3"
            >
              <div faq="question" className="home-question3">
                <span className="home-text536">
                  Quais são as principais funcionalidades para gestão de
                  pessoas?
                </span>
                <div className="home-container41">
                  <svg faq="expand" width="32" height="32" viewBox="0 0 32 32">
                    <path
                      d="M16 22L6 12l1.4-1.4l8.6 8.6l8.6-8.6L26 12z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <svg faq="colapse" width="32" height="32" viewBox="0 0 32 32">
                    <path
                      d="m16 10l10 10l-1.4 1.4l-8.6-8.6l-8.6 8.6L6 20z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
              <div faq="answer" className="home-answer3">
                <span className="home-text537">
                  As principais funcionalidades do Fourmakers para gestão de
                  pessoas incluem a alocação estratégica de talentos, planos de
                  desenvolvimento individual (PDI), ferramentas de engajamento
                  como o felizômetro e o book do colaborador. Essas
                  funcionalidades ajudam a melhorar o desempenho, o engajamento
                  e a satisfação dos colaboradores.
                </span>
              </div>
            </div>
            <div
              faq="group"
              data-aos="fade-up"
              data-aos-offset="0"
              className="home-faq4"
            >
              <div faq="question" className="home-question4">
                <span className="home-text538">
                  Posso usar por um período de teste?
                </span>
                <div className="home-container42">
                  <svg faq="expand" width="32" height="32" viewBox="0 0 32 32">
                    <path
                      d="M16 22L6 12l1.4-1.4l8.6 8.6l8.6-8.6L26 12z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <svg faq="colapse" width="32" height="32" viewBox="0 0 32 32">
                    <path
                      d="m16 10l10 10l-1.4 1.4l-8.6-8.6l-8.6 8.6L6 20z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
              <div faq="answer" className="home-answer4">
                <span className="home-text539">
                  Sim, o Fourmakers oferece a opção de um período de teste,
                  permitindo que você explore as funcionalidades da plataforma e
                  veja como ela pode atender às necessidades da sua empresa
                  antes de tomar uma decisão final.
                </span>
              </div>
            </div>
            <div
              faq="group"
              data-aos="fade-up"
              data-aos-offset="0"
              className="home-faq5"
            >
              <div faq="question" className="home-question5">
                <span className="home-text540">
                  É possível personalizar o Fourmakers de acordo com as
                  necessidades da minha empresa?
                </span>
                <div className="home-container43">
                  <svg faq="expand" width="32" height="32" viewBox="0 0 32 32">
                    <path
                      d="M16 22L6 12l1.4-1.4l8.6 8.6l8.6-8.6L26 12z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <svg faq="colapse" width="32" height="32" viewBox="0 0 32 32">
                    <path
                      d="m16 10l10 10l-1.4 1.4l-8.6-8.6l-8.6 8.6L6 20z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
              <div faq="answer" className="home-answer5">
                <span className="home-text541">
                  Sim, o Fourmakers pode ser personalizado para atender às
                  necessidades específicas da sua empresa. A plataforma é
                  flexível e adaptável, garantindo que você tenha uma solução
                  sob medida para seus processos de gestão de pessoas.
                </span>
              </div>
            </div>
            <div
              faq="group"
              data-aos="fade-up"
              data-aos-offset="0"
              className="home-faq6"
            >
              <div faq="question" className="home-question6">
                <span className="home-text542">
                  Como o Fourmakers se integra aos sistemas já existentes na
                  minha empresa?
                </span>
                <div className="home-container44">
                  <svg faq="expand" width="32" height="32" viewBox="0 0 32 32">
                    <path
                      d="M16 22L6 12l1.4-1.4l8.6 8.6l8.6-8.6L26 12z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <svg faq="colapse" width="32" height="32" viewBox="0 0 32 32">
                    <path
                      d="m16 10l10 10l-1.4 1.4l-8.6-8.6l-8.6 8.6L6 20z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
              <div faq="answer" className="home-answer6">
                <span className="home-text543">
                  O Fourmakers se integra facilmente aos sistemas existentes na
                  sua empresa, permitindo uma conexão fluida com ferramentas de
                  RH, ERP, CRM e outros softwares utilizados. Essa integração
                  garante que todos os dados sejam sincronizados de maneira
                  eficiente, proporcionando uma experiência unificada e
                  otimizando a gestão de pessoas sem a necessidade de mudanças
                  drásticas nos processos já estabelecidos.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-footer1">
          <img
            alt="Group4092511680"
            src="/external/group4092511680-4p4k.svg"
            className="home-group4092512"
          />
          <div className="home-footer2">
            <div className="home-frame427319257">
              <div className="home-frame427319255">
                <a href="#home" className="home-text544">
                  <span>Início</span>
                </a>
                <a href="#sobre" className="home-text546">
                  <span>Sobre nós</span>
                </a>
                <a href="#conectar" className="home-text548">
                  Faça parte
                </a>
              </div>
              <div className="home-frame427319263">
                <a href="#solucoes" className="home-text549">
                  Soluções
                </a>
                <a href="#planos" className="home-text550">
                  Planos
                </a>
                <a href="#depoimentos" className="home-text551">
                  Depoimentos
                </a>
              </div>
              <div className="home-frame427319264">
                <a href="#sobre" className="home-text552">
                  DNA
                </a>
                <a href="#faq" className="home-text553">
                  FAQ
                </a>
                <a href="#form" className="home-text554">
                  <span>Contato</span>
                </a>
              </div>
            </div>
            <span className="home-text556">
              <span className="home-text557">
                © FourMakers - 2024 / All Rights Reserved.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>Política de privacidade</span>
            </span>
          </div>
        </div>
        <img
          alt="Linefooter1717"
          src="/external/linefooter1717-vm0a-200h.webp"
          className="home-linefooter"
        />
      </div>
      <div id="modal1" className="home-modal1">
        <div className="home-container45">
          <div className="home-modalcontent">
            <div className="home-frame427320103">
              <div className="home-frame427320088">
                <form
                  id="form-solucoes"
                  enctype="application/x-www-form-urlencoded"
                  data-email-form="formulario"
                  className="home-form3"
                >
                  <div className="home-container46">
                    <span
                      area="Formulário"
                      modal="title"
                      className="home-text559"
                    >
                      <span>
                        Pronto para transformar sua gestão de pessoas?
                      </span>
                    </span>
                    <svg
                      width="32"
                      action="close-modal"
                      height="32"
                      viewBox="0 0 32 32"
                      className="home-icon71"
                    >
                      <path
                        d="M17.414 16L26 7.414L24.586 6L16 14.586L7.414 6L6 7.414L14.586 16L6 24.586L7.414 26L16 17.414L24.586 26L26 24.586z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <span className="home-text561">
                    Quer saber mais sobre as nossas soluções?
                  </span>
                  <span className="home-text562">
                    <span>
                      Deixe seus dados abaixo, entraremos em contado com você!
                    </span>
                  </span>
                  <input
                    type="text"
                    name="nome"
                    required="true"
                    placeholder="Seu nome..."
                    className="home-textinput14 input"
                  />
                  <input
                    type="tel"
                    name="telefone"
                    required="true"
                    placeholder="Telefone..."
                    className="home-textinput15 input"
                  />
                  <input
                    type="email"
                    name="email"
                    required="true"
                    placeholder="E-mail..."
                    className="home-textinput16 input"
                  />
                  <input
                    type="text"
                    name="empresa"
                    required="true"
                    placeholder="Nome da empresa..."
                    className="home-textinput17 input"
                  />
                  <span className="home-text564">
                    Quantidade de funcionários
                  </span>
                  <div className="home-container47">
                    <div className="home-container48">
                      <input
                        type="radio"
                        name="colaboradores"
                        value="19"
                        className="home-radiobutton5"
                      />
                      <span className="home-text565">até 19</span>
                    </div>
                    <div className="home-container49">
                      <input
                        type="radio"
                        name="colaboradores"
                        value="20-99"
                        className="home-radiobutton6"
                      />
                      <span className="home-text566">de 20 a 99</span>
                    </div>
                    <div className="home-container50">
                      <input
                        type="radio"
                        name="colaboradores"
                        value="100-499"
                        className="home-radiobutton7"
                      />
                      <span className="home-text567">de 100 a 499</span>
                    </div>
                    <div className="home-container51">
                      <input
                        type="radio"
                        name="colaboradores"
                        value="+500"
                        className="home-radiobutton8"
                      />
                      <span className="home-text568">acima de 500</span>
                    </div>
                  </div>
                  <button type="submit" className="home-button26">
                    Enviar
                  </button>
                </form>
                <form
                  id="form-duvidas"
                  enctype="application/x-www-form-urlencoded"
                  data-email-form="formulario"
                  className="home-form4"
                >
                  <div className="home-container52">
                    <span area="Dúvidas" modal="title" className="home-text569">
                      Dúvidas
                    </span>
                    <svg
                      width="32"
                      action="close-modal"
                      height="32"
                      viewBox="0 0 32 32"
                      className="home-icon73"
                    >
                      <path
                        d="M17.414 16L26 7.414L24.586 6L16 14.586L7.414 6L6 7.414L14.586 16L6 24.586L7.414 26L16 17.414L24.586 26L26 24.586z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <span className="home-text570">
                    Deixe suas dúvidas, entraremos em contado com você!
                  </span>
                  <input
                    type="text"
                    name="nome"
                    required="true"
                    placeholder="Seu nome..."
                    className="home-textinput18 input"
                  />
                  <input
                    type="tel"
                    name="telefone"
                    required="true"
                    placeholder="Telefone..."
                    className="home-textinput19 input"
                  />
                  <input
                    type="email"
                    name="email"
                    required="true"
                    placeholder="E-mail..."
                    className="home-textinput20 input"
                  />
                  <textarea
                    name="mensagem"
                    rows="5"
                    type="text"
                    required
                    placeholder="Mensagem..."
                    className="home-textarea textarea input"
                  ></textarea>
                  <button type="submit" className="home-button27">
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
