import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import Directory from '../components/directory' 
import { selectDirectorys } from '../redux/directory/directorySelectors'


  
function HomeContainer({history,match,sections}) {
    const handlerClick =(linkUrl)=>{
        history.push(`${match.url}${linkUrl}`)
    }
    return  (
        <Directory >
            {sections.map(({id,...restData})=> (<Directory.MenuItem key={id} clicked={handlerClick} {...restData} />)
            )}
        </Directory>
    )
}

const mapStateToProps = createStructuredSelector(
  {
      sections: selectDirectorys
      
  }
)
export default withRouter(connect(mapStateToProps)(HomeContainer))
