import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Banner from '../components/banner/Banner'
import MapC from '../components/map/Map'
import Cards from '../components/card/index.jsx'
import BoxMap from '../components/BoxMap/BoxMap'

function Main() {
  return (
    <>
      <Header />
      <Banner />
      <MapC/>
      <BoxMap/>
      <Cards />
      <Footer />
    </>

  )
}

export default Main
