import css from './Loader.module.css';
import { ReactComponent as Loader } from '../icons/spinner.svg';

export default function SearchLoader() {
  return (
    <div>
      <Loader size="48" className={css.icon__spin} />
    </div>
  );
}
