const SMT32 ={
  name: "SMT32",
  links:[
    {
      name: "Что такое SMT32?",
      target: "https://arduinomaster.ru/stm32/stm32-mikrokontroller-dlya-nachinayushhih-posle-arduino/"
    }
  ],
  children: [],
  conclusion: ""
}
const Arduino ={
  name: "Arduino",
  links:[
    {
      name: "Что такое Arduino?",
      target: "https://all-arduino.ru/arduino-dlya-nachinayushhih/"
    }
  ],
  children: [],
  conclusion: ""
}
const  Platforms = {
    name: "Популярные embedded платформы",
    links: [],
    children: [SMT32, Arduino],
    conclusion: ""
}
export default Platforms
