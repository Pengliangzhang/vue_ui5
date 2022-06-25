<template>
  <div class="home-container">
    <ui5-page id="page" class="ui5Page" background-design="List" floating-footer show-footer>
        <ui5-bar design="Header" slot="header">
            <ui5-label>Title</ui5-label>
            <ui5-button icon="action-settings" tooltip="Go to settings" slot="endContent"></ui5-button>
        </ui5-bar>
        <div class="carousel-container">
          <ui5-carousel arrows-placement="Navigation" cyclic>
            <img src="static/Image1.png" alt="pic.alt">
            <img src="static/Image2.png" alt="pic.alt">
          </ui5-carousel>
        </div>
        <div>
            <h1>INTERACTIVE CONCERT EXPERIENCES</h1>
            <h3>Experience your favourite artists like never before and from the comfort of your own home.</h3>
            <ui5-button design="Emphasized">Try it now</ui5-button>
        </div>
        <div slot="footer" class="footer">
            <ui5-bar design="FloatingFooter">
                <ui5-icon name="home" slot="startContent"></ui5-icon>
                <ui5-button design="Positive" slot="endContent">Agree</ui5-button>
                <ui5-button design="Negative" slot="endContent">Decline</ui5-button>
                <ui5-button design="Transparent" slot="endContent">Cancel</ui5-button>
            </ui5-bar>
        </div>
    </ui5-page>
  </div>
</template>

<script>
import "@ui5/webcomponents/dist/Button";
import "@ui5/webcomponents-fiori/dist/Page.js";
import "@ui5/webcomponents-fiori/dist/Bar.js";
import "@ui5/webcomponents/dist/Label";
import "@ui5/webcomponents-icons/dist/AllIcons.js"
import "@ui5/webcomponents/dist/Carousel.js";
export default {
  name: 'Home',
  data() {
      return {
        picList: [
          {
            id: 1,
            path: "static/Image1.png",
            alt: "Picture 1"
          },
          {
            id: 2,
            path: "static/Image2.png",
            alt: "Picture 1"
          }
        ],
        cardList: [
            {
                id: "card1",
                title: "Card 1"
            },
            {
                id: "card2",
                title: "Card 2"
            },
            {
                id: "card3",
                title: "Card 3"
            },
            {
                id: "card4",
                title: "Card 4"
            },
            {
                id: "card5",
                title: "Card 5"
            }
        ]
      }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style>
.ui5Page {
  /* background-color: blueviolet; */
  height: 100vh;
  /* padding: 0; */
}
.footer {
  widows: 100vw;
}
</style>
