import Button from "../Button/Button";
import styles from "./ContractForm.module.css";
import {MdMessage} from "react-icons/md"
import {BsTelephone} from "react-icons/Bs"
import {GrMailOption} from "react-icons/Gr"
const ContractForm = () => {
 const setonsubmit=() =>{

 }
  return (
    <section className={`${styles.container}`}>
      <div className={styles.contact_form}>
        <div className={`${styles.top_btn}`}>
        <Button
         
         text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>} />
        <Button text="VIA CALL" icon={<BsTelephone color="white" fontSize="24px" />} />
        </div>
        <Button isOutline={true} text="VIA Mail" icon={<GrMailOption fontSize="24px" />} />
        <form>
          <div className={styles.form_controler}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name"></input>
          </div>
          <div className={styles.form_controler}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email"></input>
          </div>
          <div className={styles.form_controler}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows={8}></textarea>
          </div>
          <div style={{
            display: "flex",
            justifyContent:"end"

          }}>
            <Button text="Submit Button"/>
          </div>
      
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/images/Service 24_7-pana 1.svg" alt="contact image" style={{height:"500px"}} />
      </div>
    </section>
  )
}                         

export default ContractForm