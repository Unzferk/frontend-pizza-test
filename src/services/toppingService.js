

const urlToppings = "http://localhost:4000/api/toppings"

export const getToppings = async () =>{

    const resp = await fetch( urlToppings );
    const { data } = await resp.json();

    const toppings = data.map( topping => {
        return {
            id: topping.id,
            title: topping.name,
        }
    })

    return toppings;
}

