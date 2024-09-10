import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Contact2 from '../components/contact2'
import Logos1 from '../components/logos1'
import Stats2 from '../components/stats2'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>contact - Fourmakers - Landing Page</title>
        <meta
          name="description"
          content="Uma plataforma inovadora e inteligente que reúne todas as ferramentas essenciais para você gerir, desenvolver e engajar sua equipe de maneira eficaz."
        />
        <meta
          property="og:title"
          content="contact - Fourmakers - Landing Page"
        />
        <meta
          property="og:description"
          content="Uma plataforma inovadora e inteligente que reúne todas as ferramentas essenciais para você gerir, desenvolver e engajar sua equipe de maneira eficaz.\n"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/03b860ca-e82c-4c00-9cf1-3101526a1f43/17bb0337-82b4-4970-9134-fa7938b7a3ca?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <div className="contact-header1">
        <div className="contact-header2">
          <img
            alt="Group409251181"
            src="/external/group409251181-cfgp.svg"
            className="contact-logo"
          />
          <div className="contact-links">
            <a href="#sobre" className="contact-text10">
              <span>Sobre nós</span>
            </a>
            <a href="#funcionalidade" className="contact-text12">
              <span>Funcionalidades</span>
            </a>
            <a href="#vantagens" className="contact-text14">
              <span>Vantagens</span>
            </a>
            <a href="#planos" className="contact-text16">
              <span>Planos</span>
            </a>
            <a href="#depoimentos" className="contact-text18">
              <span>Depoimentos</span>
            </a>
            <a href="#faq" className="contact-text20">
              <span>Faq</span>
            </a>
          </div>
          <div className="contact-butons">
            <div className="contact-button1">
              <a href="#form" className="contact-link1">
                <div className="contact-button-outlined">
                  <img
                    alt="IconsaxLinearsms1104"
                    src="/external/iconsaxlinearsms1104-55qi.svg"
                    className="contact-iconsax-linearsms"
                  />
                  <span className="contact-text22">
                    <span>Dúvidas</span>
                  </span>
                </div>
              </a>
            </div>
            <div className="contact-button2">
              <a
                href="https://app.fourmakers.io/foursys"
                target="_blank"
                rel="noreferrer noopener"
                className="contact-link2"
              >
                <div className="contact-button-filled">
                  <span className="contact-text24">
                    <span>Login</span>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Contact2
        email1={
          <Fragment>
            <span className="contact-text26 thq-body-small">
              contato@fourmakers.com
            </span>
          </Fragment>
        }
        phone1={
          <Fragment>
            <span className="contact-text27 thq-body-small">
              +55 11 1234-5678
            </span>
          </Fragment>
        }
        address1={
          <Fragment>
            <span className="contact-text28 thq-body-small">
              Av. Exemplo, 123 - São Paulo, Brasil
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="contact-text29 thq-body-large">
              <span>
                Estamos aqui para ajudar. Entre em contato conosco para saber
                mais sobre como o Fourmakers pode impulsionar o desenvolvimento
                de talentos na sua organização.
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="contact-text32 thq-body-small">
              Get in touch with us today!
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="contact-text33 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        content4={
          <Fragment>
            <span className="contact-text34 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        content5={
          <Fragment>
            <span className="contact-text35 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contact-text36 thq-heading-2">
              Entre em contato conosco
            </span>
          </Fragment>
        }
      ></Contact2>
      <Logos1
        heading1={
          <Fragment>
            <span className="contact-text37 thq-heading-2">
              Trusted by the world&apos;s best companies social proof to build
              credibility
            </span>
          </Fragment>
        }
      ></Logos1>
      <Stats2
        stat1={
          <Fragment>
            <span className="contact-text38 thq-heading-2">
              Conexões significativas
            </span>
          </Fragment>
        }
        stat2={
          <Fragment>
            <span className="contact-text39 thq-heading-2">
              Desafios estratégicos
            </span>
          </Fragment>
        }
        stat3={
          <Fragment>
            <span className="contact-text40 thq-heading-2">
              Impacto no mercado global
            </span>
          </Fragment>
        }
        stat4={
          <Fragment>
            <span className="contact-text41 thq-heading-2">
              Inovação e crescimento contínuo
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="contact-text42 thq-body-small">
              Desenvolva talentos por meio de desafios estratégicos
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="contact-text43 thq-body-large">
              Engaje, reconheça e valorize os colaboradores
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contact-text44 thq-heading-2">
              Estatísticas do Fourmakers
            </span>
          </Fragment>
        }
        stat1Description={
          <Fragment>
            <span className="contact-text45 thq-body-small">
              Promoção de conexões significativas
            </span>
          </Fragment>
        }
        stat2Description={
          <Fragment>
            <span className="contact-text46 thq-body-small">
              Desenvolvimento de talentos
            </span>
          </Fragment>
        }
        stat3Description={
          <Fragment>
            <span className="contact-text47 thq-body-small">
              Geração de impacto no mercado global
            </span>
          </Fragment>
        }
        stat4Description={
          <Fragment>
            <span className="contact-text48 thq-body-small">
              Promoção da inovação e crescimento dos profissionais
            </span>
          </Fragment>
        }
      ></Stats2>
      <div className="contact-footer1">
        <img
          alt="Group4092511680"
          src="/external/group4092511680-4p4k.svg"
          className="contact-group409251"
        />
        <div className="contact-footer2">
          <div className="contact-frame427319257">
            <div className="contact-frame427319255">
              <span className="contact-text49">
                <span>Início</span>
              </span>
              <span className="contact-text51">
                <span>Sobre nós</span>
              </span>
              <span className="contact-text53">
                <span>Nossos números</span>
              </span>
            </div>
            <div className="contact-frame427319263">
              <span className="contact-text55">
                <span>Apresentação</span>
              </span>
              <span className="contact-text57">
                <span>Funcionalidades</span>
              </span>
              <span className="contact-text59">
                <span>Planos</span>
              </span>
            </div>
            <div className="contact-frame427319264">
              <span className="contact-text61">
                <span>Depoimentos</span>
              </span>
              <span className="contact-text63">
                <span>Faq</span>
              </span>
              <span className="contact-text65">
                <span>Contato</span>
              </span>
            </div>
          </div>
          <span className="contact-text67">
            <span className="contact-text68">
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
    </div>
  )
}

export default Contact
