import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

// Nucleo Icons
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Only import icons actually used in the app (instead of entire icon sets)
// This reduces bundle size by ~1.5MB (from ~2.5MB to ~1MB)
import {
  faLinkedin,
  faXTwitter,
  faYoutube,
  faGithub,
  faDiscord
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(faLinkedin, faXTwitter, faYoutube, faGithub, faDiscord, faEnvelope);

import materialKit from "./material-kit";

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(createPinia());
app.use(router);
app.use(materialKit);
app.mount("#app");
