const enablePhotoUpload = () => {
  const imageInput = document.querySelector('#image-input')
  imageInput.addEventListener('change', function () {
    const reader = new FileReader()
    reader.addEventListener('load', () => {
      const uploadImage = reader.result
      changeMemePicture(uploadImage)
      // document.querySelector(
      //   '#display-image'
      // ).style.backgroundImage = `url(${uploadImage})`
    })
    reader.readAsDataURL(this.files[0])
  })
}

const mapImageList = async () => {
  const memesObject = [
    {
      name: 'joelma',
      path: 'images/meme-joelma.webp'
    },
    {
      name: 'chloe',
      path: 'images/meme2.webp'
    },
    {
      name: 'gavin',
      path: 'images/meme-gavin-gritando.webp'
    },
    {
      name: 'meninafogo',
      path: 'images/mememeninafogo.jpg'
    }
  ]
  return memesObject
}
const createGallery = async imageList => {
  const memeSelector = document.querySelector('#meme-list')

  imageList.forEach(picture => {
    let newOption = document.createElement('option')
    newOption.text = picture.name.toUpperCase()
    newOption.value = picture.path
    memeSelector.appendChild(newOption)
  })
}
const changeMemePicture = async photo => {
  let displayImage = document.querySelector('#display-image')
  displayImage.style.backgroundImage = `url('${photo}')`
}

const main = async () => {
  const memesImageList = await mapImageList()
  enablePhotoUpload()
  await createGallery(memesImageList)
  await changeMemePicture(memesImageList[0].path)
}
main()
