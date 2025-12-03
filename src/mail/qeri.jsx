import axios from "axios";

export function SMail({ event }) {
    console.log(event);
  const element = [];
  for (let i = 0; i < 4; i++) {
    element[i] = event[i].value;
  }
  axios
    .post("./mail.php", {
      name: element[0],
      tel: element[1],
      text: element[2],
      theme: element[3],
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
