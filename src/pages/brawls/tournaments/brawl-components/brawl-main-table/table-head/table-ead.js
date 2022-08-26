
const TableHead = () => {
    return (
        <thead>
            <tr>
                <th scope="col">Brawl</th>
                <th scope="col">LOCATION</th>
                <th scope="col" className="tooltip_custom">Brawl Rules
                    <span className='info_icon'><img src="/assets/img/info.png" alt="" /></span>
                    <span className="tooltiptext tooltip-bottom">This shows all tournament rules for each tournament. for eg the type of fight style and type of fighter race. Only eligible fighters will be permitted to enter a tournament on these tournament rules.</span>
                </th>
                <th scope="col">Entry fee</th>
                <th scope="col">Prize Pool</th>
                <th scope="col">Registered</th>
            </tr>
        </thead>
    )
}
export default TableHead