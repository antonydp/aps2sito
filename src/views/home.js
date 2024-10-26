import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Vivid Other Manatee</title>
        <meta property="og:title" content="Vivid Other Manatee" />
      </Helmet>
      <Navbar8
        page4Description={
          <Fragment>
            <span className="home-text100 thq-body-small">
              Contattaci per ulteriori informazioni
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text101">Iscriviti ora</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text102 thq-link thq-body-small">
              #chi-siamo
            </span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text103 thq-body-large">Home</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text104 thq-link thq-body-small">#</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text105 thq-body-large">Contatti</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text106 thq-body-large">Chi Siamo</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text107 thq-link thq-body-small">
              #contatti
            </span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text108 thq-body-small">
              Pagina principale dell&apos;APS Pietra Maiella
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text109 thq-body-small">
              Scopri di più su chi siamo e la nostra storia
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text110 thq-link thq-body-small">
              #progetti
            </span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text111 thq-body-large">Progetti</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112 thq-body-small">
              Esplora i nostri progetti passati e presenti
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text113">Fai una donazione</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action2={
          <Fragment>
            <span className="home-text114 thq-body-small">
              Secondary action
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text115 thq-body-small">Main action</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text116 thq-heading-1">
              Medium length hero headline goes here
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text117 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature3Description={
          <Fragment>
            <span className="home-text118 thq-body-small">
              Descrizione per la caratteristica 3
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text119 thq-heading-2">
              Titolo per la caratteristica 3
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text120 thq-body-small">
              Descrizione per la caratteristica 2
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text121 thq-heading-2">
              Titolo per la caratteristica 1
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text122 thq-body-small">
              Descrizione per la caratteristica 1
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text123 thq-heading-2">
              Titolo per la caratteristica 2
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        heading1={
          <Fragment>
            <span className="home-text124 thq-heading-2">
              Unisciti a noi nella conservazione della pietra
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125 thq-body-large">
              Scopri come puoi contribuire alla nostra missione e diventare
              parte della nostra comunità di scalpellini.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text126">Iscriviti ora</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature3Description={
          <Fragment>
            <span className="home-text127 thq-body-small">
              Ci impegniamo a utilizzare materiali naturali in modo sostenibile,
              rispettando l&apos;ambiente e promuovendo la conservazione delle
              risorse.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text128 thq-body-small">
              I nostri maestri artigiani creano opere d&apos;arte uniche
              utilizzando antiche tecniche di lavorazione della pietra.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text129 thq-heading-2">Tradizione</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text130 thq-heading-2">
              Lavoro Artigianale
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131 thq-body-small">
              La nostra organizzazione ha radici profonde nella tradizione dei
              maestri scalpellini italiani, tramandata da generazioni.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text132 thq-heading-2">Sostenibilità</span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan3Price={
          <Fragment>
            <span className="home-text133 thq-heading-3">€200 al mese</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text134 thq-body-small">Iscriviti ora</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text135 thq-body-large">Basic plan</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text136 thq-body-small">Iscriviti ora</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text137 thq-body-large">Enterprise plan</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text138 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text139 thq-body-small">
              Supporto via email
            </span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text140 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text141 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text142 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text143 thq-body-small">
              Supporto telefonico dedicato
            </span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text144 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text145 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text146 thq-body-large">or $299 yearly</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text147 thq-body-small">Get started</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148 thq-body-small">Iscriviti ora</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text149 thq-body-small">
              Tutte le funzionalità del Piano Avanzato
            </span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text150 thq-body-small">
              Sessioni di formazione mensili
            </span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text151 thq-heading-3">$200/yr</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text152 thq-body-large">Piano Avanzato</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text153 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text154 thq-body-small">Get started</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text155 thq-body-small">
              Assistenza tecnica prioritaria
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text156 thq-body-small">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text157 thq-body-small">
              Tutte le funzionalità del Piano Base
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text158 thq-heading-2">Pricing plan</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text159 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1={
          <Fragment>
            <span className="home-text160 thq-body-large">Piano Base</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text161 thq-body-large">Business plan</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text162 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text163 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text164 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text165 thq-body-large">or $29 monthly</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text166 thq-heading-3">€100 al mese</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text167 thq-body-large">or $49 monthly</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text168 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text169 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text170 thq-body-large">or $20 monthly</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text171 thq-heading-3">$299/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text172 thq-body-large">or $499 yearly</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text173 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text174 thq-heading-3">$499/yr</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text175 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text176 thq-body-small">
              Aggiornamenti mensili
            </span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text177 thq-body-large">or $200 yearly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text178 thq-body-small">
              Accesso a risorse online
            </span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text179 thq-body-small">
              Personalizzazione avanzata
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text180 thq-body-large">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
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
        plan3Action1={
          <Fragment>
            <span className="home-text183 thq-body-small">Get started</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text184 thq-heading-3">€50 al mese</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text185 thq-body-large">Piano Premium</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Description={
          <Fragment>
            <span className="home-text186 thq-body-small">
              Compila il modulo di contatto sul nostro sito web o inviaci
              un&apos;email per richiedere ulteriori informazioni.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text187 thq-body-small">
              Fai una donazione o diventa un membro sostenitore per aiutarci a
              preservare il patrimonio culturale legato alla lavorazione della
              pietra in Italia.
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text188 thq-heading-2">
              Partecipa alle nostre attività
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text189 thq-body-small">
              Scopri i nostri progetti e eventi in corso e unisciti a noi per
              contribuire alla conservazione della tradizione della lavorazione
              della pietra.
            </span>
          </Fragment>
        }
        step1Title={
          <Fragment>
            <span className="home-text190 thq-heading-2">
              Contatta APS Pietra Maiella
            </span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text191 thq-heading-2">
              Sostieni la nostra causa
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text192 thq-body-small">
              Se sei appassionato di pietra e desideri mettere le tue competenze
              al servizio della comunità, contattaci per diventare un volontario
              APS Pietra Maiella.
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text193 thq-heading-2">
              Diventa un volontario
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        author2Position={
          <Fragment>
            <span className="home-text194 thq-body-small">
              Interior Designer
            </span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text195 thq-body-small">Architetto</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text196 thq-body-large">Giovanni Rossi</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text197 thq-body-large">Luca Verdi</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text198 thq-body-small">
              Il team di APS Pietra Maiella ha realizzato un progetto su misura
              per le mie esigenze. Professionali e puntuali, li consiglio
              vivamente.
            </span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text199 thq-body-large">Maria Bianchi</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text200 thq-body-small">Restauratrice</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text201 thq-body-large">Elena Rossetti</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text202 thq-body-small">
              Sono rimasto estremamente soddisfatto del lavoro svolto da APS
              Pietra Maiella. La loro attenzione ai dettagli e la maestria nel
              lavorare la pietra sono davvero impressionanti.
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text203 thq-body-small">Imprenditore</span>
          </Fragment>
        }
        review1={
          <Fragment>
            <span className="home-text204 thq-body-small">5 stelle</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text205 thq-heading-2">Testimonianze</span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text206 thq-body-small">
              Servizio impeccabile e risultati sorprendenti. APS Pietra Maiella
              ha trasformato la mia idea in realtà con competenza e passione.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text207 thq-body-small">
              Professionisti eccezionali nel settore della lavorazione della
              pietra. Consiglio vivamente il loro lavoro.
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text208 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text209 thq-body-large">
              Via Roma, 123 - 00100, Roma, Italia
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text210 thq-heading-2">Contatti</span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text211 thq-body-large">
              Via Milano, 456 - 00100, Milano, Italia
            </span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text212 thq-heading-3">Sede Principale</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text213 thq-heading-3">Sede Secondaria</span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link5={
          <Fragment>
            <span className="home-text214 thq-body-small">Donazioni</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text215 thq-body-small">Progetti</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text216 thq-body-small">Home</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text217 thq-body-small">
              Termini e condizioni
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text218 thq-body-small">Chi siamo</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text219 thq-body-small">Contatti</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text220 thq-body-small">
              Informativa sui cookie
            </span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text221 thq-body-small">
              Informativa sulla privacy
            </span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
