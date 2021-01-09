import _ from "lodash";

export const filterByName = (arr:{name:string}[], key:string) => {
  const regKey = new RegExp(key,"i")
  // console.log(regKey);
  return _.filter([...arr], o => {
    // console.log(regKey.test(o.name));
    return regKey.test(o.name);
  })
}