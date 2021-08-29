import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/sky.css";
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

new Reveal().initialize({
  hash: true,
  slideNumber: true,
  plugins: [Markdown],
});
