import { gsap } from "gsap";

// TweenLite.to("#test", 5, {delay:1.5, scrambleText:{text:"I sure hope this works for you.", rightToLeft:true, chars:"lowercase"}})

gsap.to("#test", {duration: 1, scrambleText: "THIS IS NEW TEXT"});
