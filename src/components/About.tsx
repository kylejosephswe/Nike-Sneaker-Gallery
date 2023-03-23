import Header from './Header'
function About() {
  return (
    <div>
      <Header />
      <div className="about-page-text">
        <p>This is a mock sneaker shop design made purely to develop ecommerce design skills. </p>
        <p>I am not affiliated with Nike, and you cannot buy any of the products listed. </p>
        <p style={{textAlign: 'center', marginTop: '1%'}}>- Kyle Joseph</p>
      </div>
    </div>
  )
}

export default About