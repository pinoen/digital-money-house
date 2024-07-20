// utils/getTransaction.js
export async function getTransaction(account, id) {
  const res = await fetch(`https://digitalmoney.digitalhouse.com/api/accounts/${account}/transactions/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': typeof window !== 'undefined' && localStorage.getItem('token')
    }
  });
  const data = await res.json();
  return data;
}
