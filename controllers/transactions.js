import users from "../data/users.js";

const transactions = {
  create(email, amount, accountNumber) {
    const transactionUser = users.find((user) => user.email === email);

    const lastTransaction =
      transactionUser.transactions[transactionUser.transactions.length - 1];

    const currentTransaction = {
      amount,
      accountNumber,
      prevSaldo: lastTransaction.saldo,
      saldo: lastTransaction.saldo - amount,
    };

    if (currentTransaction.saldo < 0) {
      return null;
    }

    transactionUser.transactions.push(currentTransaction);
    return currentTransaction;
  },
};

export default transactions;
