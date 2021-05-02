/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const form = document.getElementById('form');\nconst email = document.getElementById('email');\nconst country = document.getElementById('country');\nconst zipcode = document.getElementById('zipcode');\nconst password = document.getElementById('password');\nconst password2 = document.getElementById('password2');\nconst inputs = form.querySelectorAll('input');\nconst submit = form.querySelector('button');\n\n\ninputs.forEach(el => {\n    el.addEventListener('input', () => {\n        checkInputs(el);\n    })\n})\n\nfunction checkInputs(input){\n    const inputValue = input.value.trim();\n    \n\n    if (input.type == \"email\"){\n        if(inputValue === ''){\n            setErrorFor(input, \"This field cannot be blank.\");\n        }else if (!isEmail(inputValue)){\n            setErrorFor(input, \"This email is not valid\");\n        }else{\n            setSuccesFor(input);\n        }\n    }\n\n    if (input.type == \"text\" && input.id === \"country\"){\n        if(inputValue === ''){\n            setErrorFor(input, \"This field cannot be blank.\");\n        }else{\n            setSuccesFor(input);\n        }\n    }\n\n    if (input.type == \"text\" && input.id === \"zipcode\"){\n        if(inputValue === ''){\n            setErrorFor(input, \"This field cannot be blank.\");\n        }else{\n            setSuccesFor(input);\n        }\n    }\n\n    if (input.type == \"password\" && input.id === \"password\"){\n        if(inputValue === ''){\n            setErrorFor(input, \"This field cannot be blank.\");\n        }else{\n            setSuccesFor(input);\n        }\n    }\n\n    if (input.type == \"password\" && input.id === \"password2\"){\n        const matchValue = document.querySelector('#password').value;\n        console.log(matchValue);\n\n        if(inputValue === ''){\n            setErrorFor(input, \"This field cannot be blank.\");\n        }else if (input.value !== matchValue){\n            setErrorFor(input, \"Passwords does not match\");\n        }else{\n            setSuccesFor(input);\n        }\n    }\n\n}\n\nfunction setErrorFor(input, message){\n    const formControl = input.parentElement;\n    const errorMessage = formControl.querySelector('small');\n\n    formControl.className = 'form_control error';\n    errorMessage.innerText = message;\n    submit.disabled = true;\n}\n\nfunction setSuccesFor(input){\n    const formControl = input.parentElement;\n    formControl.className = 'form_control success';\n    submit.disabled = false;\n}\n\nfunction isEmail(emailValue) {\n\treturn /^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/.test(emailValue);\n}\n\n\n// function checkInputs(){\n//     const emailValue = email.value.trim();\n//     const countryValue = country.value.trim();\n//     const zipcodeValue = zipcode.value.trim();\n//     const passValue = password.value.trim();\n//     const pass2Value = password2.value.trim();\n\n\n//     if ( emailValue === ''){\n//         setErrorFor(email, \"This field cannot be blank.\");\n//     }else if(!isEmail(emailValue)){\n//         setErrorFor(email, \"Email is not valid\");\n//     }else {\n//         setSuccesFor(email);\n//     }\n//     if ( countryValue === ''){\n//         setErrorFor(country, \"This field cannot be blank.\");\n//     }else{\n//         setSuccesFor(country);\n//     }\n//     if ( zipcodeValue === ''){\n//         setErrorFor(zipcode, \"This field cannot be blank.\");\n//     }else{\n//         setSuccesFor(zipcode);\n//     }\n\n\n//     if ( passValue === ''){\n//         setErrorFor(password, \"This field cannot be blank.\");\n//     }else{\n//         setSuccesFor(password);\n//     }\n\n//     if ( pass2Value === ''){\n//         setErrorFor(password2, \"This field cannot be blank.\");\n//     }else if(passValue !== pass2Value){\n//         setErrorFor(password2, \"Passwords does not match.\")\n//     }\n//     else{\n//         setSuccesFor(password2);\n//     }\n// }\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://form_validation/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;