import AOS from "aos";

import "aos/dist/aos.css";

export default function initializeAOS() {
  AOS.init({
    once: false,
    // Customize AOS options here
  });
}
