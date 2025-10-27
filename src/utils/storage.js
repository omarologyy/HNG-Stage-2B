// utils/storage.js
export const getTickets = () => {
  return JSON.parse(localStorage.getItem("tickets")) || [];
};

export const saveTickets = (tickets) => {
  localStorage.setItem("tickets", JSON.stringify(tickets));
};
