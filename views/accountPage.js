export default function accountPage(transactionsList = []) {
  return /* html */ `
    <div>
      <details class="box mb-2">
        <summary>
          <strong>Transfer your funds</strong>
        </summary>
        <form class="mt-1" id="transactionForm">
          <input name="account-number" required class="input is-primary" type="text" placeholder="Account Number">
          <input name="amount" required class="input is-primary" type="text" placeholder="Amount of Money">
          <button type="submit" class="button is-primary">Transfer funds &rarr;</button>
        </form>
      </details>
      <details class="box">
        <summary><strong>Transaction history</strong></summary>
        <ul class="list mt-1">
          <!-- TODO II Tutaj renderuj htmla do elementów -->
        </ul>
      </details>
    </div>`;
}

//  ${transactionsList.map(transaction => /* html */ `<li class="list__el">
//   ${transaction.accountNumber}
// </li>`).join('')}
