import React, { useState } from 'react';
import { Wallet } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Transaction } from './types/finance';
import { calculateBalance } from './utils/financial';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import BalanceCard from './components/BalanceCard';
import { fadeInUp } from './components/animations';

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const handleAddTransaction = (newTransaction: Omit<Transaction, 'id'>) => {
    const transaction: Transaction = {
      ...newTransaction,
      id: crypto.randomUUID(),
    };
    setTransactions([transaction, ...transactions]);
  };

  const balance = calculateBalance(transactions);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <motion.header
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        className="bg-white shadow-sm backdrop-blur-sm bg-white/90 sticky top-0 z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg">
              <Wallet className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Money Manager
            </h1>
          </div>
        </div>
      </motion.header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BalanceCard balance={balance} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <TransactionList transactions={transactions} />
          </div>
          <div>
            <TransactionForm onAddTransaction={handleAddTransaction} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;