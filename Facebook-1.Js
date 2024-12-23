
//---------------Sidebar-----------------------
const menuItems = document.querySelectorAll('.menu-item');

//---------------Message-----------------------
const messagesNotification = document.querySelector('#message-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//------------Theme---------------------------
const theme = document.querySelector('#theme');
const themeModel = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');



//=================------Sidebar------===================//
//-----------Renove Active Class Form All Menu Item-----------//
const changeActiveItem = () => {
   menuItems.forEach(item =>{
        item.classList.remove('active');
    })
}
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
           document.querySelector('.notifications-popup')
           .style.display = 'none';
      }else{
           document.querySelector('.notifications-popup')
           .style.display = 'block';
           document.querySelector('#notifications .notifications-count')
           .style.display = 'none';
          }
    })
});



//=================------Messagge------===================//
//------Serchs----Chats-----------
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
           user.style.display = 'flex';
        }else{
            user.style.display = 'none';
        }
    })
};

//----Search Chat--------------
messageSearch.addEventListener('keyup', searchMessage)

//---------Highlight Message Card When Messages menu item is Clicked-----------//
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notifications-count')
    .style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow ='none'
   }, 2000);
});



//-----------Theme/Display Customization-------------------------//
//-------------Opens--------Model--------------
const openThemeModel = () => {
   themeModel.style.display = 'grid';
}

//-------------Close---------model-------------
const closeThemeModel = (e) =>{
    if(e.target.classList.contains('customize-theme')){
        themeModel.style.display = 'none';
    }
}
//-------------Close---------Model---------------
themeModel.addEventListener('click', closeThemeModel);
theme.addEventListener('click', openThemeModel);




//--------------Font-------------Size-------------------//
//--------Remove Active Class Form Spans Or Font Size Elements-------//
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

fontSizes.forEach(size =>{
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');
        }else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-7rem');
        }else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('--sticky-top-left', '-2rem');
            root.style.setProperty('--sticky-top-right', '-17rem');
        }else if(size.classList.contains('font-size-4')){
            fontSize = '18px';
            root.style.setProperty('--sticky-top-left', '-5rem');
            root.style.setProperty('--sticky-top-right', '-25rem');
        }else if(size.classList.contains('font-size-5')){
            fontSize = '20px';
            root.style.setProperty('--sticky-top-left', '10rem');
            root.style.setProperty('--sticky-top-right', '-33rem');
        }

       //--------Changr Font Size Of The Root html Elementh------//
       document.querySelector('html').style.fontSize = fontSize;
    })
})



//--------Romove Acive Class Form Color------------------//
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

//------------Change---------Color--------Prymary----=------//
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        //--------Romove Acive Class Form Color------------------//
        changeActiveColorClass();

        if(color.classList.contains('color-1')){
            primaryHue = 252;
        } else if(color.classList.contains('color-2')){
            primaryHue = 52; 
        }else if(color.classList.contains('color-3')){
            primaryHue = 352; 
        }else if(color.classList.contains('color-4')){
            primaryHue = 152; 
        }else if(color.classList.contains('color-5')){
            primaryHue = 202; 
        }
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue',  primaryHue);
    })
})




//-------------Theme-----Background-----Value-----------------//
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

//-------Change Background Color---------------//
root.style.setProperty('--dark-color-lightness', lightColorLightness);
root.style.setProperty('--white-color-lightness', whiteColorLightness);
root.style.setProperty('--dark-color-lightness', darkColorLightness);


//-------Change Background Color---------------//
//-------------BG---Active--------1----------
Bg1.addEventListener('click', () => {
    //------Add Active Class-------
    Bg1.classList.add('active');
    //-------Remiove Active Class Form The Other------
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    //-------Remove Customised Changes Form Local Storage------
    window.location.reload();
});

//-------------BG---Active--------2----------
Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    //------Add Active Class-------
    Bg2.classList.add('active');
    //-------Remiove Active Class Form The Other------
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG()
});

//-------------BG---Active--------3----------
Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    //------Add Active Class-------
    Bg3.classList.add('active');
    //-------Remiove Active Class Form The Other------
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG()
});