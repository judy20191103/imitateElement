(function (doc, win) {
  var docEl = doc.documentElement
  var resizeEvt = 'oritationchange' in window ? 'oritationchange' : 'resize'
  var recalc = function () {
    var clientWidth = doc.clientWidth
    if (!clientWidth) return
    docEl.style.fontSize = 20 * (clientWidth / 320) + 'px' // 自己定义
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)
