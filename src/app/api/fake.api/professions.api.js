export const professions = {
  doctor: { _id: "67rdca3eeb7f6fgeed471818", name: "Доктор" },
  waiter: { _id: "67rdca3eeb7f6fgeed471820", name: "Официант" },
  physics: { _id: "67rdca3eeb7f6fgeed471814", name: "Физик" },
  engineer: { _id: "67rdca3eeb7f6fgeed471822", name: "Инженер" },
  actor: { _id: "67rdca3eeb7f6fgeed471824", name: "Актер" },
  cook: { _id: "67rdca3eeb7f6fgeed471829", name: "Повар" },
};

const fetchAll = () =>
  new Promise((res) => {
    setTimeout(() => {
      res(professions);
    }, 2000);
  });

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchAll,
};
