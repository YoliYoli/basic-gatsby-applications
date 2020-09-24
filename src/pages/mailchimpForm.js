import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import addToMailchimp from 'gatsby-plugin-mailchimp'


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

    console.log('submit', this.state)

    // addToMailchimp(this.state.email, {
    //   FNAME: this.state.firstname,
    //   LNAME: this.state.lastname,
    // }).then ...

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
      <br />
      <b>Favorite color:</b>
   
      <input type="submit" />
  </form>
  </Layout>
    )
  }
}


