const ScrollToTop = () => {
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

export default ScrollToTop;