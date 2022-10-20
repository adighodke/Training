﻿// See https://aka.ms/new-console-template for more information

using System.Security.Principal;

namespace BankManagementSystem
{
    public class Current : CreateAccount
    {
        double _balance;

        public void Deposit(double amount)
        {
            Console.WriteLine("Your current balance is {0}", _balance);
            if (amount > 800)
            {
                _balance += amount;
                Console.WriteLine("Thank you for deposite your total balance is {0}", _balance);
            }
            else
            {
                Console.WriteLine("Deposite must be greater than 800");
            }
        }
        public void Withdraw(double amount)
        {
            if (_balance < amount)
            {
                Console.WriteLine("you cannot withdraw the amount due to insufficient balance");
            }
            else
            {
                _balance -= amount;
                Console.WriteLine("your total balance is {0}", _balance);
            }
        }

        public double Balance { get { return _balance; } }
    }
}