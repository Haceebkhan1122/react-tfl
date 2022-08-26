const TableHead = () => {
  return (
    <thead>
      <tr>
        <th scope="col">Tournament</th>
        <th scope="col">LOCATION</th>
        <th scope="col">Tournament Rules
        <span className="info_icon tooltip_custom">
          <img src="/assets/img/info.png" alt="" />
        </span>
        </th>
        <th scope="col">Entry fee</th>
        <th scope="col">Prize Pool</th>
        <th scope="col">Registered</th>
      </tr>
    </thead>
  );
};
export default TableHead;
