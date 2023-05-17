import css from './Button.module.css';

const Button = ({ onClick }) => {
  return (
    <button className={css.Button} type="botton" onClick={onClick}>
      Load more
    </button>
  );
};

export default Button;


//----------------------------------------------------
// import css from './Button.module.css';

// export const Button = ({ onClickBtn }) => {
//   return (
//     <button className={css.Button} type="botton" onClick={onClickBtn}>
//       Load more
//     </button>
//   );
// };

// export default Button;