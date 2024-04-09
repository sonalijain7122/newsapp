import React from 'react'

const NewsItem = (props)=> {
  
 
    let {title,description,imageUrl,newsUrl,author , date, source }=props;
    return (
      <div className="my-3">
        <div className="card" >
          <div style = {{ display:'flex',
          justifyContent:'flex-end',
          position:'absolute',
          right:'0'
          }}>
          <span className=" badge rounded-pill bg-danger" >
    {source}
  </span>

          </div>
       
  <img src={imageUrl?imageUrl:"https://www.techexplorist.com/wp-content/uploads/2023/05/miniature-train.jpg"} className="card-img-top" alt="..."/>
  <div className="card-body" style={{backgroundColor:props.mode==='dark'?'grey':'pink'}}>
    <h5 className="card-title" style={{backgroundColor:props.mode==='light'?'dark':'red'}} >{title}</h5>
    <p className="card-text" style={{backgroundColor:props.mode==='light'?'dark':'skyblue'}}>{description}</p>
    <p className="card-text"><small className="text-body-secondary">By {author? author : "unknown"} on {new Date(date).toGMTString()}</small></p>
  
    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }


export default NewsItem
