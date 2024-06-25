export async function readTheData() {
    const jsonProducts = await fetch("https://fakestoreapi.com/products")
    const output = await jsonProducts.json()
    return output
}
