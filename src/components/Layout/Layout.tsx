import CustomHead from "../CustomHead/CustomHead";
import Header from "../Header/Header";

interface Layout {
    children: React.ReactNode
}

const Layout = ({ children }: Layout) => {
  return (
    <>
    <CustomHead />
    <Header />
    { children }
    </>
  )
}

export default Layout