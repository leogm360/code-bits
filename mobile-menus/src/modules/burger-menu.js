const burguerMenuActiveDeactive = (event) => {
  const innerFrame = event.target;
  const innerFrameClasses = innerFrame.classList;

  const midFrame = innerFrame.children[0];
  const midFrameClasses = midFrame.classList;

  const navigator = document.querySelector(".navigator");
  const navigatorClasses = navigator.classList;

  const isActive =
    innerFrameClasses.contains("inner-frame__active") &&
    midFrameClasses.contains("mid-frame__active") &&
    navigatorClasses.contains("navigator__active");

  if (isActive) {
    innerFrameClasses.remove("inner-frame__active");
    midFrameClasses.remove("mid-frame__active");
    navigatorClasses.remove("navigator__active");
    navigatorClasses.add("hidden");
  } else {
    innerFrameClasses.add("inner-frame__active");
    midFrameClasses.add("mid-frame__active");
    navigatorClasses.add("navigator__active");
    navigatorClasses.remove("hidden");
  }
};

export default burguerMenuActiveDeactive;
