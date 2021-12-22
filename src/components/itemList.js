import Item from "./item"
export default function ItemList(props) {
    const products=props.items
    return (
        <div className="productList">
     
            {products.map(el=>   <Item el={el}  /> )}
         
        </div>
    )
}
