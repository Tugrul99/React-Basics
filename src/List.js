import propTypes from 'prop-types'


function List(props) {

    const itemList = props.items;
    const category = props.category;

    const listItem = itemList.map(item => <li key={item.id}>
        {item.name} : &nbsp;
        {item.calories}
    </li>
    )
    return (
        <div className="list-card">
            <h2 className="list-category">{category}</h2>
            <hr></hr>
            <ol className="list-item">{listItem}</ol>
        </div>

    )

}

List.defaultProps = {
    category: "Category",
    items: []
}

List.propTypes = {
    category: propTypes.string,
    items: propTypes.arrayOf(propTypes.shape({
        id: propTypes.number,
        name: propTypes.string,
        calories: propTypes.number
    }))
}

//  foods.sort((a,b)=> a.name.localeCompare(b.name)); ALPHABETICAL ORDER  
//  foods.sort((a,b)=> b.name.localeCompare(a.name)) REVERSE ALPHABETICAL ORDER
//  foods.sort((a,b)=>a.calories - b.calories) CALORIE 
//  foods.sort((a,b)=> b.calories- a.calories) REVERSE CALORIE
// const lowCalorieFoods = foods.filter(food => food.calories < 300)



export default List