import {Component} from "react"
import css from './Searchbar.module.css'

export class Searchbar extends Component {

    state = {
        tags: '',
    }

handleTagsChange = event => {
    this.setState({tags: event.currentTarget.value.toLowerCase()})
}

handleSubmit = event => {
    event.preventDefault()

if (this.state.tags.trim() === '') {
   return alert('Please enter search name');
}


    this.props.SubmitTagProps(this.state.tags)
    this.setState({tags: ''})
}

render() {
    return (
<header className={css.Searchbar}>
  <form className={css.SearchForm__input} onSubmit={this.handleSubmit}>
    <button type="submit" className="button">
      <span className="button-label">Search</span>
    </button>

    <input
      className="input"
      type="text"
      value={this.state.tags}
      onChange={this.handleTagsChange}
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
    )
}
}

