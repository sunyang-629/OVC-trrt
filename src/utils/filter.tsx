import _ from "lodash";

export const filterByName = (arr:{name:string}[], key:string) => {
  const regKey = new RegExp(key,"i")
  return _.filter([...arr], o => {
    return regKey.test(o.name);
  })
}