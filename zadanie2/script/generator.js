function generator(obj) {
    return `
        <form>
            <h2>${obj.title}</h2>
            ${
                obj.fields.map((element)=>{
                    return `
                    <label for=${element.attrs.name}> ${element.label} </label> 
                    <input type = ${element.attrs.type} name = ${element.attrs.name} id = ${element.attrs.name}/>
                    `
                }).join('')
            }

           ${ obj.buttons.map((el) => {
                return ` 
                    <button >
                        ${el}
                    </button>
                `
             }).join("")
            }
                   

        </form>
    `
    
}
export {
    generator
}
