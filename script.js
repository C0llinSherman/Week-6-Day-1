const storeItems = [
    {
        name: 'TV',
        price: 800.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Phone',
        price: 700.00,
        inStock: false,
        details: '5G'
    },
    {
        name: 'Game Console',
        price: 300.00,
        inStock: true,
        details: 'The latest and greatest'
    },
    {
        name: 'Laptop',
        price: 1200.00,
        inStock: true,
        details: '16GB RAM 1TB SSD'
    },
    {
        name: 'Smart Watch',
        price: 200.00,
        inStock: false,
        details: 'Counts your steps'
    },
    {
        name: 'Headphones',
        price: 100.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Keyboard',
        price: 100.00,
        inStock: true,
        details: 'Types for you'
    },
    {
        name: 'HDMI Cord',
        price: 100.00,
        inStock: true,
        details: 'HDMI to USB type C'
    },
    {
        name: 'Monitor',
        price: 300.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Speaker',
        price: 200.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Video Game',
        price: 60.00,
        inStock: true,
        details: 'Enjoy for hours'
    },
];



storeItems.forEach(function(item){
    if (item.inStock === true){
        $("#appendToMe").append(`<p class="item"> <span class="info">$${item.price}</span> <span class="info">${item.name}</span> <span class="info">${item.details}</span></p>`)
    }
})




$('h1').css({
    "margin": "20px 0 5px 100px",
    "font-size": "40px",
})

$('hr').css({
    "width": "60px",
    "height": "1px",
    "margin-left": '100px',
    "background-color": "black",
})


$("#appendToMe").css({
    "margin": "0 100px 0 100px",
    "display": "flex",
    "flex-direction": "column",
})


$(".info").css({
    "min-width": "180px",
    "margin-left": '5px',
    "margin-right": '5px'
})

$('#toggleDarkMode').css({
    "font-size": "20px",
    "margin-left": '100px',
    "border": "1px solid black",
    "border-radius": "5px",
    "height": "50px",
    "width": '160px',
    "display": "flex",
    "justify-content": "center",
    "align-items": "center",
})
let button = document.getElementById("toggleDarkMode")

button.addEventListener('click', function () {
    console.log("click")
    $('body').toggleClass('bodyDark')
    $('p').toggleClass('itemDark')
})

