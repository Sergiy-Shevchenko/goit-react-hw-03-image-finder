import {Component} from "react"
import { ReactComponent as Search } from '../icons/search.svg';
import css from './Searchbar.module.css'



export class Searchbar extends Component {
    state = {
        inputData: '',
    }
onChangeInput = event => {
    this.setState({inputData: event.currentTarget.value.toLowerCase()})
}

handleSubmit = event => {
    event.preventDefault()

    this.props.onSubmit(this.state.inputData)
    this.setState({inputData: ''})
}

render() {

const {inputData} = this.state.inputData;

    return (
<header className={css.Searchbar}>
  <form className={css.SearchFormt} onSubmit={this.handleSubmit}>
    <button type="submit" className={css.SearchForm__button}>
      <span className={css.SearchForm__button__label}><Search/></span>
    </button>

    <input
      className={css.SearchForm__input}
      type="text"
      name="inputData"
      value={inputData}
      onChange={this.onChangeInput}
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
    )
}
}

//-----------------------------------------------------

// import {Component} from "react"
// import { ReactComponent as Search } from '../icons/search.svg';
// import css from './Searchbar.module.css'

// export class Searchbar extends Component {

//     state = {
//         tags: '',
//     }

// handleTagsChange = event => {
//     this.setState({tags: event.currentTarget.value.toLowerCase()})
// }

// handleSubmit = event => {
//     event.preventDefault()

// if (this.state.tags.trim() === '') {
//    return alert('Please enter search name');
// }


//     this.props.SubmitTagProps(this.state.tags)
//     this.setState({tags: ''})
// }

// render() {
//     return (
// <header className={css.Searchbar}>
//   <form className={css.SearchFormt} onSubmit={this.handleSubmit}>
//     <button type="submit" className={css.SearchForm__button}>
//       <span className={css.SearchForm__button__label}><Search/></span>
//     </button>

//     <input
//       className={css.SearchForm__input}
//       type="text"
//       value={this.state.tags}
//       onChange={this.handleTagsChange}
//       autoComplete="off"
//       autoFocus
//       placeholder="Search images and photos"
//     />
//   </form>
// </header>
//     )