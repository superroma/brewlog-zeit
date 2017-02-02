// let batchListData = 
//   [
//     {id: 1, RecipeName: "London Pride", SessionDate: "01.01.2016"},
//     {id: 2, RecipeName: "R&R Stout", SessionDate: "12.12.2016"},
//     {id: 3, RecipeName: "R&R IPA", SessionDate: "01.01.2017"}
//   ]

const BatchListItem = ({RecipeName, SessionDate}) => (
  <a href="#" className="list-group-item justify-content-between">
    <span className="">{RecipeName}</span>
    <span className="badge badge-pill badge-default">
      {SessionDate}
    </span>
  </a>
)
///const listItems = batchListData.map(
//  ({id, RecipeName, SessionDate}) => 
//    <BatchListItem key={id} RecipeName={RecipeName} SessionDate={SessionDate} />
//)
const BatchList = ({batches}) => (
  <div className="card">
    <h4 className="card-header">Batches</h4>
    <div className="card-block">
      <button className="btn btn-primary">New Batch</button>
      <div className="list-group">
        {batches? batches.map(
          ({id, RecipeName, SessionDate}) => 
            <BatchListItem key={id} RecipeName={RecipeName} SessionDate={SessionDate} />
          ):
        "No data"}
      </div>
    </div>
    <div className="card-footer">footer</div>
  </div>
)

export const BatchesView = (props) => (
  <BatchList {...props}/>
)