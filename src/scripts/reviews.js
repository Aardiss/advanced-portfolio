import Vue from "vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";

new Vue({
  el: "#slider-component",
  template: "#slider-container",
  components: { Swiper, SwiperSlide },
  data() {
    return {
      reviews: [],
      sliderOptions: {
        slidesPerView: null,
      },
    };
  },
  methods: {
    requireImagesToArray(data) {
      return data.map((item) => {
        const requiredImage = require(`../images/content/${item.pic}`).default;
        item.pic = requiredImage;
        return item;
      });
    },
    slide(direction) {
      const slider = this.$refs["slider"].$swiper;
      const reviewsCount = this.reviews.length -1;
      switch (direction) {
        case "next":
          if (slider.activeIndex <= reviewsCount) slider.slideNext();
          break;
        case "prev":
          if (slider.activeIndex > 0) slider.slidePrev();
          break;
      }
    },
    defineSliderOptions() {
      if (window.innerWidth <= 900) {this.sliderOptions.slidesPerView = 1}
      else if (window.innerWidth > 900) {this.sliderOptions.slidesPerView = 2};
    },
  },
  created() {
    const data = require("../data/reviews.json");
    this.reviews = this.requireImagesToArray(data);
    this.defineSliderOptions();
  },
});
