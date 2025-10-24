'use client'

import Layout from '../../components/Layout'
import AnimatedBackground from '../../components/AnimatedBackground'

export default function Panels() {
  return (
    <>
      <AnimatedBackground />
      <Layout>
        <div className="page-content">
          <h1>📶 Data Panels</h1>
          <p>Choose the perfect data plan for your needs — from 2 GB to unlimited!</p>

          <div className="features-grid">
            <div className="feature-card">
              <h3>💰 Affordable Pricing</h3>
              <p>Plans start at just $0.50</p>
            </div>
            <div className="feature-card">
              <h3>📈 Scalable Options</h3>
              <p>From light usage to unlimited data</p>
            </div>
            <div className="feature-card">
              <h3>⚡ Instant Activation</h3>
              <p>Get connected in seconds</p>
            </div>
          </div>

          <h2>📊 Available Plans</h2>
          <div className="pricing-grid">
            {[
              { size: '2 GB', price: '$0.50' },
              { size: '5 GB', price: '$1.25' },
              { size: '10 GB', price: '$2.00' },
              { size: '20 GB', price: '$3.50' },
              { size: '50 GB', price: '$6.00' },
              { size: '100 GB', price: '$10.00' },
              { size: 'Unlimited', price: '$15.00' },
            ].map((plan, index) => (
              <div key={index} className="plan-card">
                <h3>{plan.size}</h3>
                <p>{plan.price}</p>
                <button className="buy-button">Buy Now</button>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  )
}
