<template>
  <div class="thq-section-padding">
    <div class="testimonial17-max-width thq-section-max-width">
      <div class="testimonial17-container10">
        <h2>
          <slot name="heading1">
            <!--Default content for heading1-->
            <div class="testimonial17-fragment15">
              <h2 class="testimonial17-text29 thq-heading-2">Testimonianze</h2>
            </div>
          </slot>
        </h2>
        <span>
          <slot name="content1">
            <!--Default content for content1-->
            <div class="testimonial17-fragment13">
              <span class="testimonial17-text27 thq-body-small">
                Sono rimasto estremamente soddisfatto del lavoro svolto da APS
                Pietra Maiella. La loro attenzione ai dettagli e la maestria nel
                lavorare la pietra sono davvero impressionanti.
              </span>
            </div>
          </slot>
        </span>
      </div>
      <div class="thq-grid-2">
        <div class="thq-animated-card-bg-2">
          <div class="thq-animated-card-bg-1">
            <div data-animated="true" class="thq-card testimonial17-card1">
              <div class="testimonial17-container12">
                <img
                  :alt="author1Alt"
                  :src="author1Src"
                  class="testimonial17-image1"
                />
                <div class="testimonial17-container13">
                  <strong>
                    <slot name="author1Name">
                      <!--Default content for author1Name-->
                      <div class="testimonial17-fragment12">
                        <strong class="testimonial17-text26 thq-body-large">
                          Giovanni Rossi
                        </strong>
                      </div>
                    </slot>
                  </strong>
                  <span>
                    <slot name="author1Position">
                      <!--Default content for author1Position-->
                      <div class="testimonial17-fragment17">
                        <span class="testimonial17-text31 thq-body-small">
                          Architetto
                        </span>
                      </div>
                    </slot>
                  </span>
                </div>
              </div>
              <span>
                <slot name="review1">
                  <!--Default content for review1-->
                  <div class="testimonial17-fragment22">
                    <span class="testimonial17-text36 thq-body-small">
                      5 stelle
                    </span>
                  </div>
                </slot>
              </span>
            </div>
          </div>
        </div>
        <div class="thq-animated-card-bg-2">
          <div class="thq-animated-card-bg-1">
            <div data-animated="true" class="thq-card testimonial17-card2">
              <div class="testimonial17-container14">
                <img
                  :alt="author2Alt"
                  :src="author2Src"
                  class="testimonial17-image2"
                />
                <div class="testimonial17-container15">
                  <strong>
                    <slot name="author2Name">
                      <!--Default content for author2Name-->
                      <div class="testimonial17-fragment10">
                        <strong class="testimonial17-text24 thq-body-large">
                          Maria Bianchi
                        </strong>
                      </div>
                    </slot>
                  </strong>
                  <span>
                    <slot name="author2Position">
                      <!--Default content for author2Position-->
                      <div class="testimonial17-fragment16">
                        <span class="testimonial17-text30 thq-body-small">
                          Interior Designer
                        </span>
                      </div>
                    </slot>
                  </span>
                </div>
              </div>
              <span>
                <slot name="review2">
                  <!--Default content for review2-->
                  <div class="testimonial17-fragment19">
                    <span class="testimonial17-text33 thq-body-small">
                      Il team di APS Pietra Maiella ha realizzato un progetto su
                      misura per le mie esigenze. Professionali e puntuali, li
                      consiglio vivamente.
                    </span>
                  </div>
                </slot>
              </span>
            </div>
          </div>
        </div>
        <div class="thq-animated-card-bg-2">
          <div class="thq-animated-card-bg-1">
            <div data-animated="true" class="thq-card testimonial17-card3">
              <div class="testimonial17-container16">
                <img
                  :alt="author3Alt"
                  :src="author3Src"
                  class="testimonial17-image3"
                />
                <div class="testimonial17-container17">
                  <strong>
                    <slot name="author3Name">
                      <!--Default content for author3Name-->
                      <div class="testimonial17-fragment14">
                        <strong class="testimonial17-text28 thq-body-large">
                          Luca Verdi
                        </strong>
                      </div>
                    </slot>
                  </strong>
                  <span>
                    <slot name="author3Position">
                      <!--Default content for author3Position-->
                      <div class="testimonial17-fragment20">
                        <span class="testimonial17-text34 thq-body-small">
                          Imprenditore
                        </span>
                      </div>
                    </slot>
                  </span>
                </div>
              </div>
              <span>
                <slot name="review3">
                  <!--Default content for review3-->
                  <div class="testimonial17-fragment23">
                    <span class="testimonial17-text37 thq-body-small">
                      Servizio impeccabile e risultati sorprendenti. APS Pietra
                      Maiella ha trasformato la mia idea in realtà con competenza
                      e passione.
                    </span>
                  </div>
                </slot>
              </span>
            </div>
          </div>
        </div>
        <div class="thq-animated-card-bg-2">
          <div class="thq-animated-card-bg-1">
            <div data-animated="true" class="thq-card testimonial17-card4">
              <div class="testimonial17-container18">
                <img
                  :alt="author4Alt"
                  :src="author4Src"
                  class="testimonial17-image4"
                />
                <div class="testimonial17-container19">
                  <strong>
                    <slot name="author4Name">
                      <!--Default content for author4Name-->
                      <div class="testimonial17-fragment18">
                        <strong class="testimonial17-text32 thq-body-large">
                          Elena Rossetti
                        </strong>
                      </div>
                    </slot>
                  </strong>
                  <span>
                    <slot name="author4Position">
                      <!--Default content for author4Position-->
                      <div class="testimonial17-fragment21">
                        <span class="testimonial17-text35 thq-body-small">
                          Restauratrice
                        </span>
                      </div>
                    </slot>
                  </span>
                </div>
              </div>
              <span>
                <slot name="review4">
                  <!--Default content for review4-->
                  <div class="testimonial17-fragment11">
                    <span class="testimonial17-text25 thq-body-small">
                      Professionisti eccezionali nel settore della lavorazione
                      della pietra. Consiglio vivamente il loro lavoro.
                    </span>
                  </div>
                </slot>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Testimonial17',
  props: {
    author4Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1620853724625-4715441de25d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTk0ODU3MXw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    author3Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1533939141733-63078e139c4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTk0ODU3Mnw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    author1Alt: {
      type: String,
      default: 'Immagine di Giovanni Rossi',
    },
    author1Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1632324343640-86af9827dbeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTk0ODU3MXw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    author2Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTk0ODU3Mnw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    author2Alt: {
      type: String,
      default: 'Immagine di Maria Bianchi',
    },
    author4Alt: {
      type: String,
      default: 'Immagine di Elena Rossetti',
    },
    author3Alt: {
      type: String,
      default: 'Immagine di Luca Verdi',
    },
  },
}
</script>

<style scoped>
.testimonial17-max-width {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.testimonial17-container10 {
  gap: var(--dl-space-space-unit);
  display: flex;
  max-width: 600px;
  align-items: center;
  margin-bottom: var(--dl-space-space-fourunits);
  flex-direction: column;
}
.testimonial17-container12 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: flex-start;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.testimonial17-image1 {
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
}
.testimonial17-container13 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.testimonial17-container14 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: flex-start;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.testimonial17-image2 {
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
}
.testimonial17-container15 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.testimonial17-container16 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: flex-start;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.testimonial17-image3 {
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
}
.testimonial17-container17 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.testimonial17-container18 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: flex-start;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.testimonial17-image4 {
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
}
.testimonial17-container19 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.testimonial17-fragment10 {
  display: contents;
}
.testimonial17-text24 {
  display: inline-block;
}
.testimonial17-fragment11 {
  display: contents;
}
.testimonial17-text25 {
  display: inline-block;
  text-align: left;
}
.testimonial17-fragment12 {
  display: contents;
}
.testimonial17-text26 {
  display: inline-block;
}
.testimonial17-fragment13 {
  display: contents;
}
.testimonial17-text27 {
  display: inline-block;
  text-align: center;
}
.testimonial17-fragment14 {
  display: contents;
}
.testimonial17-text28 {
  display: inline-block;
}
.testimonial17-fragment15 {
  display: contents;
}
.testimonial17-text29 {
  display: inline-block;
}
.testimonial17-fragment16 {
  display: contents;
}
.testimonial17-text30 {
  display: inline-block;
}
.testimonial17-fragment17 {
  display: contents;
}
.testimonial17-text31 {
  display: inline-block;
}
.testimonial17-fragment18 {
  display: contents;
}
.testimonial17-text32 {
  display: inline-block;
}
.testimonial17-fragment19 {
  display: contents;
}
.testimonial17-text33 {
  display: inline-block;
  text-align: left;
}
.testimonial17-fragment20 {
  display: contents;
}
.testimonial17-text34 {
  display: inline-block;
}
.testimonial17-fragment21 {
  display: contents;
}
.testimonial17-text35 {
  display: inline-block;
}
.testimonial17-fragment22 {
  display: contents;
}
.testimonial17-text36 {
  display: inline-block;
  text-align: left;
}
.testimonial17-fragment23 {
  display: contents;
}
.testimonial17-text37 {
  display: inline-block;
  text-align: left;
}
@media(max-width: 991px) {
  .testimonial17-container10 {
    margin-bottom: var(--dl-space-space-threeunits);
  }
}
@media(max-width: 767px) {
  .testimonial17-container10 {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .testimonial17-card1 {
    width: 100%;
  }
  .testimonial17-card2 {
    width: 100%;
  }
  .testimonial17-card3 {
    width: 100%;
  }
  .testimonial17-card4 {
    width: 100%;
  }
}
</style>
