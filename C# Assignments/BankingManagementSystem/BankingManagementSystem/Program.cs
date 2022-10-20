// See https://aka.ms/new-console-template for more information

using System.Runtime.Intrinsics.Arm;
using System.Security.Principal;

namespace BankManagementSystem
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Welcome to MyBank");
            Console.WriteLine("Do you want to Create Account?? type 0");
            int option = Convert.ToInt32(Console.ReadLine());
            if (option == 0)
            {
                Console.WriteLine("Select Account type");
                Console.WriteLine("0.Saving Account");
                Console.WriteLine("1.Current Account");
                int acctype = Convert.ToInt32(Console.ReadLine());
                CreateAccount s = new CreateAccount();
                if (acctype == 0)
                {
                    Saving s2 = new Saving();  // here runtitm we have to use doubt concept
                    s.setType("saving");
                    s.createAccount();
                    if (s.age < 68)
                    {
                        Console.WriteLine("Enter amount you want to Deposite");
                        s2.Deposit(Convert.ToInt32(Console.ReadLine()));

                        Console.WriteLine("Enter amount you want to withdraw Your money");
                        s2.Withdraw(Convert.ToInt32(Console.ReadLine()));


                        Console.WriteLine("Enter account no to get details");
                        s.accountDetials((Console.ReadLine()));
                    }
                    else
                    {
                        Console.WriteLine("sorry you are not eligible to create account");
                    }
                }
                else if (acctype == 1)
                {
                    s.setType("current");
                    s.createAccount();

                    Current s2 = new Current();  
                    if (s.age < 68)
                    {
                        Console.WriteLine("Enter amount you want to Deposite");
                        s2.Deposit(Convert.ToInt32(Console.ReadLine()));

                        Console.WriteLine("Enter amount you want to withdraw Your money");
                        s2.Withdraw(Convert.ToInt32(Console.ReadLine()));

                        Console.WriteLine("Enter account no to get details");
                        s.accountDetials((Console.ReadLine()));
                    }
                    else
                    {
                        Console.WriteLine("sorry you are not eligible to create account");
                    }
                }
                else
                {
                    Console.WriteLine("You enter wrong number");
                }
            }
        }
    }
}





