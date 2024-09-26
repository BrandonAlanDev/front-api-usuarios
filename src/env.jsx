export const backendurl = "http://localhost:8080/";

export const MENU_DATA=[
  {
    to:"/Inicio",
    text:"Inicio"
  },
  {
    to:"/Segundo",
    text:"Segundo"
  }
];

export const DIRECCIONES=[
  "Avenida pendorcho 123",
  "Rio chocolate y dulce de leche",
  "Mondongo 678"
];
export const TELEFONOS=[
  "+5492239999991",
  "+5492234816688",
  "+4125234233618",
  "+1234567891234"
];

export const GRAPHICS=[
  {
    id:0,
    name:"GTX 1050Ti",
    srcName:"1050ti.jpg",
    fabricante:"MSI",
    precio:230000
  },
  {
    id:1,
    name:"RTX 4060Ti",
    srcName:"4060ti.jpeg",
    fabricante:"MSI",
    precio:1750000
  },
  {
    id:2,
    name:"RX 6600",
    srcName:"rx6600.webp",
    fabricante:"GIGABYTE",
    precio:270000
  },
  {
    id:3,
    name:"RX 7900XT",
    srcName:"rx7900xt.webp",
    fabricante:"GIGABYTE",
    precio:2450000
  }
];

//RegExp's
export const VALIDATIONS = {
  email:{
    regEx:/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/,
    message: "Este campo requiere un email valido."
  },
  password:{
    regEx:/^.{4,}$/,
    message: "La contrasena ingresada es menor a 4 caracteres."
  },
  ldapUser:{
    regEx:/^[a-zA-Z0-9]{4,}$/,
    message: "El usuario debe tener al menos 4 caracteres."
  },
  prodNames:{
    regEx:/^[a-zA-Z0-9]{4,}$/,
    message: "El nombre debe tener al menos 4 caracteres solo alfanumericos."
  },
  systemArea:{
    regEx:/^[a-zA-Z0-9/\s/ ]{4,}$/,
    message: "El area debe tener al menos 4 caracteres."
  },
  formElements:{
    regEx:/^[\u0020-\u007E\u00A0-\u00FF]{4,50}$/,
    message: "Caracteres Min 4 Max 50. Solo ASCI-EX"
  },
  formSubElement:{
    regEx:/^[\u0020-\u007E\u00A0-\u00FF]{1,50}$/,
    message: "Caracteres Min 1 Max 50. Solo ASCI-EX"
  },
  genericText:{
    regEx:/^[\u0020-\u007E\u00A0-\u00FF]{1,255}$/,
    message: "Caracteres Min 1 Max 255. Solo ASCI-EX"
  },
  phoneNumber:{
    regEx:/^\(?(0[1-9]{1,4})?\)?[-. ]?[0-9]{6,14}$/,
    message: "El campo requiere un telefono valido. ej: 01145123687"
  },
  numeric:{
    regEx:/^-?\d{1,10}$/,
    message: "El campo solo admite numeros enteros, entre el 0 y el 9999999999"
  },
  decimal:{
    regEx: /^\d+(\.\d{1,2})?$/,
    message: "El campo requiere un numero decimal, max.pre. 2"
  },
  formCaption:{
    regEx:/^[\u0020-\u007E\u00A0-\u00FF\n\r]{4,100000}$/,
    message: "Caracteres Min 4 Max 100000. Solo ASCI-EX"
  },
  url:{
    regEx:/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/,
    message: "El valor introducido no es una url valida."
  },
  urlParms:{
    regEx: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*(\?.*)?$/,
    message: "El valor introducido no es una url valida."
  },
  textWithCount: (min, max, name) => ({
    regEx: new RegExp(`^[\u0020-\u007E\u00A0-\u00FF]{${min},${max}}$`),
    message: `${name || "El campo"} debe tener al menos ${min} caracter${min != 1 ? "es" : ""} y como máximo ${max}.`
  }),
};