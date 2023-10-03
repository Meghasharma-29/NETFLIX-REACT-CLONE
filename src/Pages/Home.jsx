import React from 'react'
import Main from '../components/Main';
import Row from '../components/Row';
import Request from '../Request'


const Home = () => {
  return (
    <div>

      <Main/>
      <Row rowID = '1' title='UpComing' fetchURL={Request.requestUpcoming}/>
      <Row rowID = '2' title='Horror' fetchURL={Request.requestHorror}/>
      <Row rowID = '3' title='Popular' fetchURL={Request.requestPopular}/>
      <Row rowID = '4' title='Trending' fetchURL={Request.requestTrending}/>
      <Row rowID = '5' title='TopRated' fetchURL={Request.requestTopRated}/>
    </div>
  )
}

export default Home
