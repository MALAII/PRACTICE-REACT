// Create an array of objects for fruits: {name, color, price} — display them in a table.

function FruitsTable(){
     const fruits=[
        {
            name:"apple",
            color:"red",
            price:30
        },
         {
            name:"orange",
            color:"orange",
            price:40
        },
         {
            name:"pineapple",
            color:"yellow",
            price:30
        }, {
            name:"banana",
            color:"yellow",
            price:67
        },
         {
            name:"pomogrante",
            color:"red",
            price:45
        },
     ]
    return(
        <div className="FruitsTable">
           <table>
            <thead>
                <tr>
                <th>Name</th>
                <th>color</th>
                <th>Price</th>
</tr>
            </thead>
            <tbody>
               
                    {fruits.map((fruit,index)=>(
                         <tr key={index}>
                        <td>{fruit.name} </td>
                         <td >{fruit.color }</td>
                          <td >{fruit.price} </td>
                           </tr>
                    ))

                    }
               
            </tbody>

           </table>

        </div>

    );
}
export default FruitsTable;