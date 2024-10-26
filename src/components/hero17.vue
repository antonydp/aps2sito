<template>
  <div class="hero17-header78">
    <div class="hero17-column thq-section-max-width thq-section-padding">
      <div class="hero17-content1">
        <h1>
          <slot name="heading1">
            <!--Default content for heading1-->
            <div class="hero17-fragment4">
              <h1 class="hero17-text8 thq-heading-1">
                Medium length hero headline goes here
              </h1>
            </div>
          </slot>
        </h1>
        <p>
          <slot name="content1">
            <!--Default content for content1-->
            <div class="hero17-fragment1">
              <p class="hero17-text5 thq-body-large">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis cursus,
                mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
                libero vitae erat.
              </p>
            </div>
          </slot>
        </p>
      </div>
      <div class="hero17-actions">
        <button class="thq-button-filled hero17-button1">
          <span>
            <slot name="action1">
              <!--Default content for action1-->
              <div class="hero17-fragment3">
                <span class="hero17-text7 thq-body-small">Main action</span>
              </div>
            </slot>
          </span>
        </button>
        <button class="thq-button-outline hero17-button2">
          <span>
            <slot name="action2">
              <!--Default content for action2-->
              <div class="hero17-fragment2">
                <span class="hero17-text6 thq-body-small">Secondary action</span>
              </div>
            </slot>
          </span>
        </button>
      </div>
    </div>
    <div class="hero17-content2">
      <div
        class="hero17-row-container1 thq-mask-image-horizontal thq-animated-group-container-horizontal"
      >
        <div class="thq-animated-group-horizontal">
          <img
            :alt="image1Alt"
            :src="image1Src"
            class="hero17-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image2Alt"
            :src="image2Src"
            class="hero17-placeholder-image11 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image3Alt"
            :src="image3Src"
            class="hero17-placeholder-image12 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image4Alt"
            :src="image4Src"
            class="hero17-placeholder-image13 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image5Alt"
            :src="image5Src"
            class="hero17-placeholder-image14 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image6Alt"
            :src="image6Src"
            class="hero17-placeholder-image15 thq-img-scale thq-img-ratio-1-1"
          />
        </div>
        <div class="thq-animated-group-horizontal">
          <img
            :alt="image1Alt"
            :src="image1Src"
            class="hero17-placeholder-image16 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image2Alt"
            :src="image2Src"
            class="hero17-placeholder-image17 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image3Alt"
            :src="image3Src"
            class="hero17-placeholder-image18 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image4Alt"
            :src="image4Src"
            class="hero17-placeholder-image19 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image5Alt"
            :src="image5Src"
            class="hero17-placeholder-image20 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            alt="Hero Image"
            src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
            class="hero17-placeholder-image21 thq-img-scale thq-img-ratio-1-1"
          />
        </div>
      </div>
      <div
        class="hero17-row-container2 thq-mask-image-horizontal thq-animated-group-container-horizontal"
      >
        <div class="thq-animated-group-horizontal-reverse">
          <img
            :alt="image7Alt"
            :src="image7Src"
            class="hero17-placeholder-image22 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image8Alt"
            :src="image8Src"
            class="hero17-placeholder-image23 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image9Alt"
            :src="image9Src"
            class="hero17-placeholder-image24 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image10Alt"
            :src="image10Src"
            class="hero17-placeholder-image25 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image11Alt"
            :src="image11Src"
            class="hero17-placeholder-image26 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image12Alt"
            :src="image12Src"
            class="hero17-placeholder-image27 thq-img-scale thq-img-ratio-1-1"
          />
        </div>
        <div class="thq-animated-group-horizontal-reverse">
          <img
            :alt="image7Alt"
            :src="image7Src"
            class="hero17-placeholder-image28 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image8Alt"
            :src="image8Src"
            class="hero17-placeholder-image29 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image9Alt"
            :src="image9Src"
            class="hero17-placeholder-image30 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image10Alt"
            :src="image10Src"
            class="hero17-placeholder-image31 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            :alt="image11Alt"
            :src="image11Src"
            class="hero17-placeholder-image32 thq-img-scale thq-img-ratio-1-1"
          />
          <img
            alt="Hero Image"
            src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
            class="hero17-placeholder-image33 thq-img-scale thq-img-ratio-1-1"
          />
        </div>
      </div>
    </div>
    <div>
      <div class="hero17-container2">
        <DangerousHTML
          html="<style>
    @keyframes scroll-x {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(calc(-100% - 16px));
      }
    }
  
    @keyframes scroll-y {
      from {
        transform: translateY(0);
      }
      to {
        transform: translateY(calc(-100% - 16px));
      }
    }
  </style>
  "
        ></DangerousHTML>
      </div>
    </div>
  </div>
</template>

<script>
import DangerousHTML from 'dangerous-html/vue'

export default {
  name: 'Hero17',
  props: {
    image6Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1634821180452-03804764326f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTk0ODU3Mnw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image8Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1501556466850-7c9fa1fccb4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTk0ODU3M3w&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image2Alt: {
      type: String,
      default: 'Hero Image',
    },
    image9Alt: {
      type: String,
      default: 'Hero Image',
    },
    image4Alt: {
      type: String,
      default: 'Hero Image',
    },
    image5Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1597700733632-29d7bea3dfb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTk0ODU3M3w&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image2Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1609278967816-694c3e39aaf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTk0ODU3Mnw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image3Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1559226747-74d0ca875bea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTk0ODU3MXw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image7Alt: {
      type: String,
      default: 'Hero Image',
    },
    image4Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1556159744-c62529f4ffdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTk0ODU3M3w&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image9Src: {
      type: String,
      default:
        'https://images.unsplash.com/flagged/photo-1573832453578-107b87e7afde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTk0ODU3M3w&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image6Alt: {
      type: String,
      default: 'Hero Image',
    },
    image5Alt: {
      type: String,
      default: 'Hero Image',
    },
    image10Alt: {
      type: String,
      default: 'Hero Image',
    },
    image7Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1583855604333-8981393dfde5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTk0ODU3Mnw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image1Alt: {
      type: String,
      default: 'Hero Image',
    },
    image12Alt: {
      type: String,
      default: 'Hero Image',
    },
    image10Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1613399421095-41f5c68e9f8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTk0ODU3NHw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image11Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1542108339-4d5af99020f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTk0ODU3Mnw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image8Alt: {
      type: String,
      default: 'Hero Image',
    },
    image1Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1667498607634-8536249cd291?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTk0ODU3NHw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image3Alt: {
      type: String,
      default: 'Hero Image',
    },
    image12Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1640257846267-9db046ffe896?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTk0ODU3Mnw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    image11Alt: {
      type: String,
      default: 'Hero Image',
    },
  },
  components: {
    DangerousHTML,
  },
}
</script>

<style scoped>
.hero17-header78 {
  gap: var(--dl-space-space-threeunits);
  width: 100%;
  height: auto;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
.hero17-column {
  gap: var(--dl-space-space-oneandhalfunits);
  width: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: var(--dl-space-space-unit);
}
.hero17-content1 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-self: stretch;
  align-items: center;
  flex-direction: column;
}
.hero17-actions {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: flex-start;
  padding-top: var(--dl-space-space-unit);
}
.hero17-content2 {
  gap: var(--dl-space-space-oneandhalfunits);
  width: 100%;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.hero17-row-container1 {
  width: 100%;
}
.hero17-placeholder-image10 {
  width: 400px;
  height: 400px;
}
.hero17-placeholder-image11 {
  width: 400px;
  height: 400px;
}
.hero17-placeholder-image12 {
  width: 400px;
  height: 400px;
}
.hero17-placeholder-image13 {
  width: 400px;
  height: 400px;
}
.hero17-placeholder-image14 {
  width: 400px;
  height: 400px;
}
.hero17-placeholder-image15 {
  width: 400px;
  height: 400px;
}
.hero17-placeholder-image16 {
  width: 400px;
  height: 400px;
}
.hero17-placeholder-image17 {
  width: 400px;
  height: 400px;
}
.hero17-placeholder-image18 {
  width: 400px;
  height: 400px;
}
.hero17-placeholder-image19 {
  width: 400px;
  height: 400px;
}
.hero17-placeholder-image20 {
  width: 400px;
  height: 400px;
}
.hero17-placeholder-image21 {
  width: 400px;
  height: 400px;
}
.hero17-row-container2 {
  width: 100%;
}
.hero17-placeholder-image22 {
  width: 400px;
  height: 400px;
}
.hero17-placeholder-image23 {
  width: 400px;
  height: 400px;
}
.hero17-placeholder-image24 {
  width: 400px;
  height: 400px;
}
.hero17-placeholder-image25 {
  width: 400px;
  height: 400px;
}
.hero17-placeholder-image26 {
  width: 400px;
  height: 400px;
}
.hero17-placeholder-image27 {
  width: 400px;
  height: 400px;
}
.hero17-placeholder-image28 {
  width: 400px;
  height: 400px;
}
.hero17-placeholder-image29 {
  width: 400px;
  height: 400px;
}
.hero17-placeholder-image30 {
  width: 400px;
  height: 400px;
}
.hero17-placeholder-image31 {
  width: 400px;
  height: 400px;
}
.hero17-placeholder-image32 {
  width: 400px;
  height: 400px;
}
.hero17-placeholder-image33 {
  width: 400px;
  height: 400px;
}
.hero17-container2 {
  display: contents;
}
.hero17-fragment1 {
  display: contents;
}
.hero17-text5 {
  display: inline-block;
  text-align: center;
}
.hero17-fragment2 {
  display: contents;
}
.hero17-text6 {
  display: inline-block;
}
.hero17-fragment3 {
  display: contents;
}
.hero17-text7 {
  display: inline-block;
}
.hero17-fragment4 {
  display: contents;
}
.hero17-text8 {
  display: inline-block;
  text-align: center;
}
@media(max-width: 767px) {
  .hero17-content2 {
    width: 100%;
  }
}
@media(max-width: 479px) {
  .hero17-actions {
    width: 100%;
    flex-direction: column;
  }
  .hero17-button1 {
    width: 100%;
  }
  .hero17-button2 {
    width: 100%;
  }
}
</style>
