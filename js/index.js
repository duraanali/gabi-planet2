// 1. Selectors - Single Selectors

// getElementById
// Ma u baahnid inaad "#" aad galiso markaad element-ga soo jiidaneyso

const logoTitle = document.getElementById('logo-title');

// console.log("logo", logoTitle)

// querySelector()
// waxay ku shaqeysaa CSS SELECTORS
// Waxay soo jiidataa elements-ka kan ugu horeeyo
// Waa inaa isticmaashaa '.' hadaad class soo jiidaneysid, '#' hadaa ID soo jiidaneysid.

const cardTitle = document.querySelector(".card-title")

// console.log(cardTitle)

// 2. Multiple Selectors

// getElementsByClassName

// Hadaa isticmaasho methods hoose, waxaa kuu soo baxaayo HTMLCollection oo ah wax u eg ARRAY, lakin aan array ahayn, waxay leedahay hal method oo ah 'length'
const menu = document.getElementsByClassName('menu-item')
const link = document.getElementsByTagName('a')


// querySelectorAll

// Markaan isticmaalno querySelectorAll, waxaa noo soo baxaayo "NodeList", NodeList wuxuu leeyahay 'length' iyo 'forEach' asagoon Array ahayn
const menuElements = document.querySelectorAll(".menu-item")


menuElements.forEach(element => {
    element.style.color = "orange"
})


// 3. U badal HTMLCollection iyo Nodelist array

// NodeList to Array
let nodeListArray = Array.from(menuElements)

//HTMLCollection to Array
let HTMLCollectionToArray = Array.from(menu)

console.log(HTMLCollectionToArray)

// 4. DOM Manipulation

// Wax ka badal HTMLCollection
const cardTitles = document.getElementsByClassName('card-title')

for (let i = 0; i < cardTitles.length; i++ ) {
    cardTitles[i].style.color = "blue"
}

const cardTitle2 = document.querySelectorAll(".card-title")

cardTitle2.forEach(element => {
    element.style.color = "orange"
})

const changeImage = document.querySelector('.card-img-top')

changeImage.src = "https://images.ctfassets.net/cnu0m8re1exe/7hQBr1Got3iOOxCn4yJqSy/8ac59ceb4d08d0474a2688ac976b1693/neptune1-1024x727.jpg?w=650&h=433&fit=fill"

changeImage.alt = "Uranus"

const title = document.querySelector(".card-title");

title.textContent = "Its the tilt for me!"

// ClassList
// Classlist waxaa loo isticmaalaa in 'class' lagu bixiyo, lagu daro ama wax looga badal, waxay leedahay 'classlist.add', 'classlist.remove', 'classlist.toggle'

const lastCard = document.querySelector(".extra-stuff")

console.log(lastCard)

lastCard.classList.remove("extra-stuff")

// Sida Element cusub loogu daro DOM-ka
// Waxaa isticmaaleysaa "createElement"

const newElement = document.createElement("footer")

newElement.textContent = "Website created by Duraan Ali"
newElement.style.color = "white"
newElement.classList.add("footer")
newElement.style.backgroundColor = "purple"

// Hadaa rabto inaa element cusub ku darto page horay u jiray, waa inaa isticmaasho "append" = Hoos ooga dar, ama "prepend" = Horay ooga dar

// Meeshii aa ku dari lahayd element-ga cusub waa inaa soo jiidato
const body = document.querySelector("body")

// Habka element cusub hoos loogu daro
body.append(newElement)