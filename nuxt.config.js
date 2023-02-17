export default {
  // 글로벌 페이지 헤더
  head: {
    title: "heojungwon",
    htmlAttrs: {
      lang: "ko",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.cdnfonts.com/css/pt-sans-2?styles=29388,29389,29390,29395,29391,29393,29392,29394",
      },
    ],
  },

  // 글로벌 css
  css: [],

  // 페이지를 렌더링하기 전에 실행할 플러그인
  plugins: [
    '~plugins/bus'
  ],

  // 구성 요소 자동 가져오기
  components: true,

  // 개발 및 빌드용 모듈(권장)
  buildModules: [
    "@nuxtjs/style-resources",
    "@nuxt/postcss8",
    'nuxt-gsap',
    "nuxt-gsap-module",
  ],
  nuxtGsap:{
    imports: ['Back', 'Circ', "Expo", "Power0", "Power2"] 
  },
  //global css 설정
  styleResources: {
    scss: [
      "@/assets/scss/_reset.scss",
      "@/assets/scss/_mixin.scss",
      "@/assets/scss/normalize.scss",
      // '@/assets/styles/_colors.scss',
    ],
  },
  loading: '~/components/Loading.vue',
  // 모듈
  modules: [],
  //gsap 설정
  gsap: {
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true,
      cssPlugin: true,
      motionPath: true,
      cssRule: true,
    },

    extraEases: {
      expoScaleEase: false,
      roughEase: false,
      slowMo: false,
    },
  },
  // Global page transition
  pageTransition: {
    name: "page",
    mode: "out-in",
    css: false,

    beforeEnter(el) {
      this.$gsap.set(el, {
        opacity: 0,
      });
    },

    enter(el, done) {
      this.$gsap.to(el, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.inOut",
        onComplete: done,
      });
    },

    leave(el, done) {
      this.$gsap.to(el, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
        onComplete: done,
      });
    },
  },

  // 빌드
  build: {},
};
