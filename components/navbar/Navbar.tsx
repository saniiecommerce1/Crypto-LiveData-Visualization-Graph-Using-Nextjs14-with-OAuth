import Logo from "@/public/logo.svg"
import Settings from "@/public/settings.svg"
import Link from "next/link";
import styles from "./navbar.module.scss";
import GetSession from "../session/GetSession";
import Image from "next/image";
import AdminSearch from "../adminSearch/AdminSearch";


const Navbar = () => {


return (
<div className={styles.navbar}>

<div className={styles.logo}>
<Image className={styles.img} src={Logo} alt="logo" width={40} height={26} style={{width:'auto', height: 'auto'}}/>
<span>Crypto Live Data Visualization</span>
</div>

<div className={styles.icons}>

<AdminSearch/>

<div className={styles.notification}>

<GetSession/> 

</div>


</div>

</div>
);
};

export default Navbar;
