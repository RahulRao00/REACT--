  // import { Children } from "react";

  function customRender(reactElement, mainContainer) {

    /*
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.Children;
    domElement.setAttribute("href", reactElement.props.href);
    domElement.setAttribute("target", reactElement.props.target);
    mainContainer.appendChild(domElement)
    */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children
    for( prop in reactElement.props) {
      console.log(prop)
      if (prop === 'children') continue;
      domElement.setAttribute(prop , reactElement.props[prop])
    }
    
    mainContainer.appendChild(domElement)
  }

  const reactElement = {
    type: "a",
    props: {
      href: "https://www.google.com",
      target: "_blank",
    },
    Children: "Click Here to go to Google",
  };

  let mainContainer = document.querySelector("#root");

  customRender(reactElement, mainContainer);

