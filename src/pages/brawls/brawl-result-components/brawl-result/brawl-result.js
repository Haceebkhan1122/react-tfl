const BrawlResult = ({ tournaments, SelectTournament }) => {
  console.log("TOurnaments ", tournaments);
  return (
    <>
      {tournaments &&
        tournaments.data &&
        tournaments.data.map((tournament) => (
          <tr
            className="onclicking"
            onClick={() => SelectTournament(tournament)}
          >
            <td>{tournament.name}</td>
            <td>{tournament.location}</td>
            <td>No Holds Barred</td>
            <td>
              <span className="text_color">
                <img src="/assets/img/ethurem.png" alt="" />
                {tournament.entryFee}
              </span>
            </td>
            <td>
              <span className="text_color">
                <img src="/assets/img/ethurem.png" alt="" />
                {tournament.winPrice}
              </span>
            </td>
            <td>
              {tournament.players.length}/{tournament.roundsCount}
            </td>
            {/* <Link to={`/brawl/${tournament._id}`} title="Edit"><i className="os-icon os-icon-ui-49"></i></Link> */}
          </tr>
        ))}
    </>
  );
};
export default BrawlResult;
