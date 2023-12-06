
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Banner from '../components/banner/Banner'
import MapC from '../components/map/Map'
import BoxMap from '../components/boxMap/BoxMap'
import LoggedBoxMap from '../components/boxMap/LoggedBoxMap'
import LoggedHeader from '../components/header/LoggedHeager'


function LoggedUser() {
  return (
    <>
      <LoggedHeader/>
      <Banner />
      <LoggedBoxMap/>
      <Footer />
    </>

  )
}

export default LoggedUser
