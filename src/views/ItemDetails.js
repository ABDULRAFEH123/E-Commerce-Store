
// THIS CAN BE VISIBLE WHNE USER CLICK ON THE EYE ICON..



import React from 'react'
import { useSelector } from 'react-redux'
import { selectItem } from '../store/actions/Action';
// import selectItem from '../store/actions/Action'
const ItemDetails = () => {
    const selectedItem = useSelector((state) => state.item.selectedItem)

    if (!selectedItem) {
        return <div>Item not found</div>;
    }

    return (
        <div className='container'>
            <div className='item_details'>
                <div>
              
                    <h2>{selectItem.title}</h2>
                    <p>{selectItem.description}</p>
                    <p><span>$</span> {selectItem.price}</p>
                    <img src={selectItem.images} alt={`Card ${selectItem.id}`} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetails
