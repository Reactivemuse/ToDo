import s from "./Header.module.css"
import Userinfo from "./Userinfo/Userinfo"
import Buttons from "./Buttons/Buttons"
const Header = () => {

  return (
    <header className = {s.header}>
      <div className={s.container}>
        <div className={s.header_inner}>
          <Userinfo />
          <Buttons/>
        </div>
        
      </div>
    </header>
    
    
  )
}

export default Header 