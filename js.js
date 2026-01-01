let filters={
    brightness:{
        value:100,
        min:0,
        max:200,
        unit:"%"
    },
    contrast:{
        value:100,
        min:0,
        max:200,
        unit:"%"
    },
    saturate:{
        value:100,
        min:0,
        max:200,
        unit:"%"
    },
    "hue-rotate":{
        value:0,
        min:0,
        max:360,
        unit:"deg"
    },
    blur:{
        value:0,
        min:0,
        max:20,
        unit:"px"
    },
    grayscale:{
        value:0,
        min:0,
        max:100,
        unit:"%"
    },
    sepia:{
        value:0,
        min:0,
        max:100,
        unit:"%"
    },
    opacity:{
        value:100,
        min:0,
        max:100,
        unit:"%"
    },
    invert:{
        value:0,
        min:0,
        max:100,
        unit:"%"
    }
} 

const filterbox=document.querySelector(".filters");
function createFliterElement(name,unit,value,min,max){
    const div=document.createElement("div");
    div.classList.add("filter");
      
    const p=document.createElement("p");
    p.innerText=name;

    const input=document.createElement("input");
    input.type="range";
    input.min=min;
    input.max=max;
    input.value=value
    input.id=name

    div.appendChild(p)
    div.appendChild(input)
    
input.addEventListener("input",(event)=>{
    // const filterName = event.target.id; 
    filters[name].value = event.target.value;
    applyfilter();
    })
    return div
}
 
function createfilter(){
Object.keys(filters).forEach(key =>{
         const filterelement=createFliterElement(key,filters[key].unit,filters[key].value,filters[key].min,filters[key].max)
          filterbox.appendChild(filterelement)
})
}
createfilter()
const inputimage=document.querySelector("#input_image")
const inputlabel=document.querySelector("#input-label")
const canvasCtx= inputimage.getContext("2d")
const resetbtn=document.querySelector("#reset-btn")
const downloadbtn=document.querySelector("#Download-btn")
const presetbtn=document.querySelector(".preset")

let image=null;

inputlabel.addEventListener('change',(event)=>{
    const file=event.target.files[0]

    const imageplace=document.querySelector(".placeholder")
    inputimage.style.display="block"

    imageplace.style.display="none"
    const img=new Image()
    img.src=URL.createObjectURL(file)

    img.onload=()=>{
        image=img
        inputimage.width=img.width
        inputimage.height=img.height
        applyfilter();
    }
})
function applyfilter(){
    canvasCtx.clearRect(0, 0, inputimage.width, inputimage.height);
    canvasCtx.filter=`
    brightness(${filters.brightness.value}${filters.brightness.unit})
    contrast(${filters.contrast.value}${filters.contrast.unit})
    saturate(${filters.saturate.value}${filters.saturate.unit})
    hue-rotate(${filters["hue-rotate"].value}${filters["hue-rotate"].unit})
    blur(${filters.blur.value}${filters.blur.unit})
    grayscale(${filters.grayscale.value}${filters.grayscale.unit})
    sepia(${filters.sepia.value}${filters.sepia.unit})
    opacity(${filters.opacity.value}${filters.opacity.unit})
    invert(${filters.invert.value}${filters.invert.unit})`
    canvasCtx.drawImage(image,0,0)
}


resetbtn.addEventListener("click",()=>{
     filters={
    brightness:{
        value:100,
        min:0,
        max:200,
        unit:"%"
    },
    contrast:{
        value:100,
        min:0,
        max:200,
        unit:"%"
    },
    saturate:{
        value:100,
        min:0,
        max:200,
        unit:"%"
    },
    "hue-rotate":{
        value:0,
        min:0,
        max:360,
        unit:"deg"
    },
    blur:{
        value:0,
        min:0,
        max:20,
        unit:"px"
    },
    grayscale:{
        value:0,
        min:0,
        max:100,
        unit:"%"
    },
    sepia:{
        value:0,
        min:0,
        max:100,
        unit:"%"
    },
    opacity:{
        value:100,
        min:0,
        max:100,
        unit:"%"
    },
    invert:{
        value:0,
        min:0,
        max:100,
        unit:"%"
    }
} 
applyfilter()
filterbox.innerHTML=""
createfilter()
})

downloadbtn.addEventListener("click",()=>{
    const link=document.createElement("a")
    link.download="edited.png"
    link.href=inputimage.toDataURL()
    link.click()
})

const presets={
   drama: {
        brightness: 90,
        contrast: 150,
        saturate: 60,
        "hue-rotate": 0,
        blur: 0,
        grayscale: 10,
        sepia: 0,
        opacity: 100,
        invert: 0
    },
    vintage: {
        brightness: 105,
        contrast: 95,
        saturate: 110,
        "hue-rotate": 0,
        blur: 0,
        grayscale: 0,
        sepia: 40,
        opacity: 100,
        invert: 0
    },
    oldschool: {
        brightness: 100,
        contrast: 90,
        saturate: 80,
        "hue-rotate": 0,
        blur: 1,
        grayscale: 15,
        sepia: 25,
        opacity: 100,
        invert: 0
    },
     warmsunset: {
        brightness: 110,
        contrast: 110,
        saturate: 150,
        "hue-rotate": 0,
        blur: 0,
        grayscale: 0,
        sepia: 30,
        opacity: 100,
        invert: 0
    },
    softglow: {
        brightness: 120,
        contrast: 90,
        saturate: 110,
        "hue-rotate": 0,
        blur: 2,
        grayscale: 0,
        sepia: 5,
        opacity: 95,
        invert: 0
    },
    noir: {
        brightness: 80,
        contrast: 170,
        saturate: 0,
        "hue-rotate": 0,
        blur: 0,
        grayscale: 100,
        sepia: 0,
        opacity: 100,
        invert: 0
    },
    faded: {
        brightness: 110,
        contrast: 80,
        saturate: 85,
        "hue-rotate": 0,
        blur: 0,
        grayscale: 0,
        sepia: 10,
        opacity: 90,
        invert: 0
    },
    bleach_bypass: { // High contrast, low saturation (Saving Private Ryan style)
        brightness: 110,
        contrast: 150,
        saturate: 60,
        "hue-rotate": 0,
        blur: 0,
        grayscale: 20,
        sepia: 0,
        opacity: 100,
        invert: 0
    },
    technicolor: { // 1950s vibrant film style
        brightness: 105,
        contrast: 125,
        saturate: 180,
        "hue-rotate": 10,
        blur: 0,
        grayscale: 0,
        sepia: 5,
        opacity: 100,
        invert: 0
    },
    western: { // Dusty, warm, and gritty
        brightness: 95,
        contrast: 110,
        saturate: 90,
        "hue-rotate": 0,
        blur: 0,
        grayscale: 0,
        sepia: 45,
        opacity: 100,
        invert: 0
    },
     dream_sequence: { // Overexposed and soft
        brightness: 130,
        contrast: 80,
        saturate: 110,
        "hue-rotate": 0,
        blur: 3,
        grayscale: 0,
        sepia: 10,
        opacity: 90,
        invert: 0
    },
    noir_cinema: { // Deep shadows, sharp highlights
        brightness: 85,
        contrast: 180,
        saturate: 0,
        "hue-rotate": 0,
        blur: 0,
        grayscale: 100,
        sepia: 5,
        opacity: 100,
        invert: 0
    },
    vintage_indie: { // Muted, warm, and nostalgic
        brightness: 105,
        contrast: 90,
        saturate: 85,
        "hue-rotate": 0,
        blur: 0,
        grayscale: 0,
        sepia: 30,
        opacity: 95,
        invert: 0
    },
    golden_age: { // Rich, warm, royal feel
        brightness: 100,
        contrast: 110,
        saturate: 140,
        "hue-rotate": 0,
        blur: 0,
        grayscale: 0,
        sepia: 25,
        opacity: 100,
        invert: 0
    },
    
}
Object.keys(presets).forEach(presetname =>{
    const presetbutton=document.createElement("button")
    presetbutton.classList.add("btn")
    presetbutton.innerHTML=presetname
    presetbtn.appendChild(presetbutton)

    presetbutton.addEventListener("click",()=>{
        const pre=presets[presetname]

        Object.keys(pre).forEach(filtername =>{
            filters[filtername].value=pre[filtername]
        })
        applyfilter()
        filterbox.innerHTML=""
        createfilter()
    })
})