import React from 'react';
import { ArrowDownCircle, ArrowUpCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Transaction } from '../types/finance';
import { formatCurrency } from '../utils/financial';
import { fadeInUp, staggerContainer } from './animations';

interface TransactionListProps {
  transactions: Transaction[];
}

export default function TransactionList({ transactions }: TransactionListProps) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6">
        <h2 className="text-xl font-bold text-white">Recent Transactions</h2>
      </div>
      <div className="divide-y divide-gray-100">
        {transactions.length === 0 ? (
          <motion.div
            variants={fadeInUp}
            className="p-8 text-center text-gray-500"
          >
            No transactions yet. Add your first transaction to get started!
          </motion.div>
        ) : (
          transactions.map((transaction) => (
            <motion.div
              key={transaction.id}
              variants={fadeInUp}
              className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-full ${
                  transaction.type === 'income'
                    ? 'bg-green-100 text-green-600'
                    : 'bg-red-100 text-red-600'
                }`}>
                  {transaction.type === 'income' ? (
                    <ArrowUpCircle className="w-6 h-6" />
                  ) : (
                    <ArrowDownCircle className="w-6 h-6" />
                  )}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{transaction.description}</p>
                  <p className="text-sm text-gray-500">{transaction.category}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-lg font-bold ${
                  transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {transaction.type === 'income' ? '+' : '-'} {formatCurrency(transaction.amount)}
                </p>
                <p className="text-sm text-gray-500">
                  {new Date(transaction.date).toLocaleDateString()}
                </p>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </motion.div>
  );
}