



'use client';

import { PaymentMethodButton } from "./PaymentMehodBtn";


export const PaymentForm = ({ 
  selectedPlan, 
  onPaymentSelect, 
  onCompletePayment 
}) => (
  <div className="bg-dark-800 border-2 border-gray-700 rounded-lg max-w-2xl w-full relative">
    <div className="p-8">
      <h3 className="text-3xl font-bold text-white mb-2">Complete Your Booking</h3>
      <p className="text-gray-400 mb-6">
        You're purchasing: <span className="text-white font-medium">{selectedPlan.name}</span>
      </p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-xl font-bold text-white mb-4">Payment Method</h4>
          <div className="space-y-4">
            {paymentMethods.map((method) => (
              <PaymentMethodButton 
                key={method.id}
                method={method}
                onClick={onPaymentSelect}
              />
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-xl font-bold text-white mb-4">Order Summary</h4>
          <OrderSummary selectedPlan={selectedPlan} />
          <button 
            onClick={onCompletePayment}
            className="w-full mt-6 bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-lg transition-colors"
          >
            Complete Payment
          </button>
          <p className="text-gray-500 text-sm mt-4">
            Your payment is secure and encrypted. By continuing, you agree to our Terms of Service.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const OrderSummary = ({ selectedPlan }) => (
  <div className="border border-gray-700 p-6 rounded-lg bg-dark-700">
    <div className="flex justify-between items-center mb-4">
      <span className="text-gray-400">Plan:</span>
      <span className="text-white font-medium">{selectedPlan.name}</span>
    </div>
    <div className="flex justify-between items-center mb-4">
      <span className="text-gray-400">Price:</span>
      <span className="text-white font-medium">{selectedPlan.price}</span>
    </div>
    <div className="flex justify-between items-center mb-6">
      <span className="text-gray-400">Tax:</span>
      <span className="text-white font-medium">Calculated at checkout</span>
    </div>
    <div className="pt-4 border-t border-gray-700">
      <div className="flex justify-between items-center">
        <span className="text-gray-400">Total:</span>
        <span className="text-2xl font-bold text-white">{selectedPlan.price}</span>
      </div>
    </div>
  </div>
);