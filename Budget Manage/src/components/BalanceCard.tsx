import React from 'react';
import { DollarSign, TrendingUp, TrendingDown } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Balance } from '../types/finance';
import { formatCurrency } from '../utils/financial';
import { fadeInUp, staggerContainer } from './animations';

interface BalanceCardProps {
  balance: Balance;
}

export default function BalanceCard({ balance }: BalanceCardProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
    >
      <motion.div
        variants={fadeInUp}
        className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl shadow-lg text-white"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-blue-100">Total Balance</p>
            <p className="text-3xl font-bold mt-1">{formatCurrency(balance.total)}</p>
          </div>
          <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
            <DollarSign className="w-8 h-8" />
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl shadow-lg text-white"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-green-100">Total Income</p>
            <p className="text-3xl font-bold mt-1">{formatCurrency(balance.income)}</p>
          </div>
          <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
            <TrendingUp className="w-8 h-8" />
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        className="bg-gradient-to-br from-red-500 to-red-600 p-6 rounded-xl shadow-lg text-white"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-red-100">Total Expenses</p>
            <p className="text-3xl font-bold mt-1">{formatCurrency(balance.expenses)}</p>
          </div>
          <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
            <TrendingDown className="w-8 h-8" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}