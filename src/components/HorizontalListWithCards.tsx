import Card from "../components/Card";
const HorizontalListWithCards = () => {
  return (
    <div className="container" style={{paddingTop: 50}}>
        <strong>Recently added:</strong>
        <div className="navbar">
          <div className=""><Card></Card></div>
          <div className=""><Card></Card></div>
          <div className=""><Card></Card></div>
          <div className=""><Card></Card></div>
        </div>
      </div>
  )
}

export default HorizontalListWithCards