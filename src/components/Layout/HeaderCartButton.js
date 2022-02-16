import { ReactComponent as CartIcon } from "../../assets/cartIcon.svg";
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
          <CartIcon />
      </span>
      <span>{props.children}</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};
export default HeaderCartButton;
