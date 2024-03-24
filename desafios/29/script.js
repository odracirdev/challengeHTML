const [firstSection, secondSection, thirdSection] = document.querySelectorAll("section");
const tab1 = document.querySelector("#tab-1");
const tab2 = document.querySelector("#tab-2");
const tab3 = document.querySelector("#tab-3");

tab1.addEventListener("click", function() {
  firstSection.removeAttribute("hidden")
  secondSection.setAttribute("hidden", "")
  thirdSection.setAttribute("hidden","")
});

tab2.addEventListener("click", function() {
  firstSection.setAttribute("hidden", "")
  secondSection.removeAttribute("hidden")
  thirdSection.setAttribute("hidden","")
});

tab3.addEventListener("click", function() {
  firstSection.setAttribute("hidden", "")
  secondSection.setAttribute("hidden", "")
  thirdSection.removeAttribute("hidden")
});
