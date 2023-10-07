import Header from './header'
import Footer from './footer'
import Meta from './meta'

export default function Layout({ children }) {  
  return (
    <>
      <Meta />
      <Header />
      <div className="layout w-full inline-block">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
