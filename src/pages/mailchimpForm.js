import React from "react"
import Layout from "../components/layout"
import addToMailchimp from 'gatsby-plugin-mailchimp'


// page renders a form that collects information to send to mailchimp. 

export default class MyGatsbyMailList extends React.Component {
 state = {
   name: null,
   email: null,
 }

 _handleChange =e=>{
   console.log({
     [`${e.target.name}`]: e.target.value,
   })
   this.setState({
     [`${e.target.name}`]: e.target.value,
   })
 }

  _handleSubmit = e => {
    e.preventDefault();
    addToMailchimp(this.state.email, this.state.name) 
    .then(({msg, result})=>{
      console.log('msg', `${result}: ${msg}`)
      if (result !== 'sucess'){
        throw msg
      }
      alert(msg)
    })
    .catch(err =>{
      console.log('err', err)
      alert(err)
    })
  }

  render () {
    return (
      <Layout>
      <form onSubmit={this._handleSubmit}>
      <input
          type="text"
          onChange={this._handleChange}
          placeholder="name"
          name="fname"
      />
      <input
          type="email"
          onChange={this._handleChange}
          placeholder="email"
          name="email"
      />
      <br />
      <input type="submit" />
  </form>
  <h3>Signup form connected to mailchimp</h3>
  <p>Gatsby-plugin-mailchimp </p>
  <p>This plugin exports one method — addToMailchimp — that accepts one required argument (email) and two optional fields (fields and endpointOverride).</p>
  <p>email is a valid email string fields is an object of attributes youʼd like to save with the email address.</p>
  <i>I chose to create a page instead of a component for the form, however ideally it would be a reusable component.</i>
  </Layout>
    )
  }
}


