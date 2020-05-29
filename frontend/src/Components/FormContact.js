import React from 'react'

const CreatePost = "http://127.0.0.1:4000/api/v1/contacts/"

class FormContact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      phone: '',
      email: '',
      post: '',
      created: false,
      loaded: false,
    }
  }

  myChangeHandler = (event) => {
    let nam = event.target.name
    let val = event.target.value
    this.setState({[nam]: val})
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    this.createContact(this.state)
  }

  validContact(data) {
    var formValid = true
    
    if(data.name === '' || data.email === '' || data.phone === '' || data.post === '') {
      formValid = false
    }

    return formValid
  }

  createContact(data) {
    var that = this;

    fetch(CreatePost, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contact:{
          "name": data.name,
          "email":data.email,
          "phone": data.phone,
          "post": data.post
        }
      })
    }).then(function(response) {
      if(response.ok) {
        that.setState({created: true, loaded: true})
      } else {
        that.setState({created: false, loaded: true})
      }
    })
  }

  render() {
    if(this.state.loaded === true && this.state.created === true) {
      return (<div>created</div>)
    } else {
      return (
        <form onSubmit={this.mySubmitHandler}>
          <p>Name:</p>
          <input
            type='text'
            name='name'
            required
            onChange={this.myChangeHandler}
          />
          <p>Email:</p>
          <input
            type='text'
            name='email'
            required
            onChange={this.myChangeHandler}
          />
          <p>Phone:</p>
          <input
            type='text'
            name='phone'
            required
            onChange={this.myChangeHandler}
          />
          <p>Post:</p>
          <textarea
            type='text'
            name='post'
            rows='4'
            cols='23'
            required
            onChange={this.myChangeHandler}
          />
          <input type='submit' />
        </form>
      )
    }
  }
}

export default FormContact