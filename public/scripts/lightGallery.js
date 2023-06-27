document?.addEventListener('click', (e) => {
  const images = Array.prototype.slice
    .call(document.querySelectorAll('#wl-edit .vcontent img'))
    .filter(img => img.width > 20)

  if (!images.includes(e.target))
    return

  if (!e.target?.gallery)
    e.target.gallery = window.lightGallery(e.target.parentNode)

  e.target.gallery.openGallery(0)
})
