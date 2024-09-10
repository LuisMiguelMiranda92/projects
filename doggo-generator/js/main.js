
const breedsListUrl = `https://dog.ceo/api/breeds/list/all`

const select = document.querySelector('.breeds')


fetch(breedsListUrl)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        const breedsObject = data.message
        const breedsArray = Object.keys(breedsObject)
       
        breedsArray.forEach((option) => {
            const optionElement = document.createElement('option')
            optionElement.value = option
            optionElement.text = option
            select.appendChild(optionElement)
        })
    })

select.addEventListener('change', event => {
    let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`
    getDoggoImg(url)
        })
       
        const img = document.querySelector('.dog-img')

        const getDoggoImg = url => {
            fetch(url)
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    img.src = data.message
                })
        }


      

      


