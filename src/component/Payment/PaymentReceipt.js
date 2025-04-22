

'use client';
import { forwardRef } from 'react';

export const PaymentReceipt = forwardRef(({ selectedPlan }, ref) => (
  <div 
    ref={ref}
    className="border border-gray-700 p-6 rounded-lg bg-dark-700 mb-8 text-left"
  >
    <div className="flex justify-between items-center mb-6">
      <h4 className="text-xl font-bold text-white">Receipt</h4>
      <div className="text-gray-400 text-sm">
        {new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })}
      </div>
    </div>
    
    <div className="mb-8">
      <div className="flex justify-between items-center mb-3">
        <span className="text-gray-400">Transaction ID:</span>
        <span className="text-white font-mono">TX-{Math.random().toString(36).substring(2, 10).toUpperCase()}</span>
      </div>
      <div className="flex justify-between items-center mb-3">
        <span className="text-gray-400">Plan:</span>
        <span className="text-white">{selectedPlan.name}</span>
      </div>
      <div className="flex justify-between items-center mb-3">
        <span className="text-gray-400">Amount Paid:</span>
        <span className="text-white">{selectedPlan.price}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-400">Payment Method:</span>
        <span className="text-white">Credit Card</span>
      </div>
    </div>
    
    <div className="pt-4 border-t border-gray-700">
      <div className="flex justify-between items-center">
        <span className="text-gray-400">Total:</span>
        <span className="text-xl font-bold text-white">{selectedPlan.price}</span>
      </div>
    </div>
    
    <div className="mt-8 pt-4 border-t border-gray-700 text-center text-gray-500 text-xs">
      <p>Thank you for your business!</p>
      <p className="mt-2">This is an official receipt for your records</p>
    </div>
  </div>
));

PaymentReceipt.displayName = 'PaymentReceipt';