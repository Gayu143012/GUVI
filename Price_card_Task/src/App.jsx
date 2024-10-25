import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PriceCard from './Componenet/PriceCard'
const plans = [
  {
    plan: 'FREE',
    price: '$0',
    features: [
      { name: 'Single User', isEnabled: true },
      { name: '50GB Storage', isEnabled: true },
      { name: 'Unlimited Public Projects', isEnabled: true },
      { name: 'Community Access', isEnabled: true },
      { name: 'Unlimited Private Projects', isEnabled: false },
      { name: 'Dedicated Phone Support', isEnabled: false },
      { name: 'Free Subdomain', isEnabled: false },
      { name: 'Monthly Status Reports', isEnabled: false },
    ],
  },
  {
    plan: 'PLUS',
    price: '$9',
    features: [
      { name: '5 Users', isEnabled: true },
      { name: '50GB Storage', isEnabled: true },
      { name: 'Unlimited Public Projects', isEnabled: true },
      { name: 'Community Access', isEnabled: true },
      { name: 'Unlimited Private Projects', isEnabled: true },
      { name: 'Dedicated Phone Support', isEnabled: true },
      { name: 'Free Subdomain', isEnabled: true },
      { name: 'Monthly Status Reports', isEnabled: false },
    ],
  },
  {
    plan: 'PRO',
    price: '$49',
    features: [
      { name: 'Unlimited Users', isEnabled: true },
      { name: '150GB Storage', isEnabled: true },
      { name: 'Unlimited Public Projects', isEnabled: true },
      { name: 'Community Access', isEnabled: true },
      { name: 'Unlimited Private Projects', isEnabled: true },
      { name: 'Dedicated Phone Support', isEnabled: true },
      { name: 'Free Subdomain', isEnabled: true },
      { name: 'Monthly Status Reports', isEnabled: true },
    ],
  },
];

function App() {
  

  return (
    <>
     <div className="container">
      <div className="row justify-content-center">
        {plans.map((plan, index) => (
          <PriceCard
            key={index}
            plan={plan.plan}
            price={plan.price}
            features={plan.features}
          />
        ))}
      </div>
    </div>
    </>
  )
}

export default App
