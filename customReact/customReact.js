const mainContainer=document.querySelector('#root')
console.log(mainContainer)


const reactElem={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank',
        
    },
    children:"click me to visit google"
}
function creatElem(reactElem,container){
    const domElement=document.createElement(reactElem.type)
    domElement.innerHTML=reactElem.children

    // domElement.setAttribute('href',reactElem.props.href)
    // domElement.setAttribute('target',reactElem.props.target)
    // container.appendChild(domElement)

    for (const prop in reactElem.props) {
        if (prop=='children') {
            continue;
        }
        domElement.setAttribute(prop,reactElem.props[prop])
    }
    container.appendChild(domElement)
}
creatElem(reactElem,mainContainer)






