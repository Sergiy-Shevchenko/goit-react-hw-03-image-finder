import css from './Button.module.css';

export const Button = ({ onClickBtn }) => {
  return (
    <button className={css.Button} type="botton" onClick={onClickBtn}>
      Load more
    </button>
  );
};

export default Button;
